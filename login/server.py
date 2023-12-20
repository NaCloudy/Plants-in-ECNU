from flask import Flask, request, render_template, redirect, url_for
from flask_login import LoginManager, UserMixin, login_user, logout_user, login_required
from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField
from wtforms.validators import DataRequired, EqualTo
import pymysql

app = Flask(__name__)

# 设置密钥
app.secret_key = "secret"

# 连接数据库
db = pymysql.connect(host="localhost", user="root", password="20040512Whj", database="test")
cursor = db.cursor()

# 创建登录管理对象
login_manager = LoginManager()
login_manager.init_app(app)
login_manager.login_view = "login"


# 创建登录表单类，继承FlaskForm
class LoginForm(FlaskForm):
    username = StringField('用户名', validators=[DataRequired()])
    password = PasswordField('密码', validators=[DataRequired()])


# 创建用户注册表单类，继承FlaskForm
class RegisterForm(FlaskForm):
    username = StringField('用户名', validators=[DataRequired()])
    password = PasswordField('密码', [
        DataRequired(),
        EqualTo('confirm', message='两次输入的密码不一致')
    ])
    confirm = PasswordField('确认密码')


# 创建用户类，继承UserMixin
class User(UserMixin):
    def __init__(self, id, username, password):
        self.id = id
        self.username = username
        self.password = password

    # 密码验证
    def verify_password(self):
        sql = "select * from users where username=%s and password=%s"
        cursor.execute(sql, [self.username, self.password])
        result = cursor.fetchone()
        if result:
            return True
        else:
            return None


def create_user(username, password):
    sql = "insert into users (username, password) values (%s, %s)"
    cursor.execute(sql, (username, password))
    db.commit()


# 根据用户名获得用户记录
def get_user(username):
    sql = "select * from users where username=%s"
    cursor.execute(sql, username)
    result = cursor.fetchone()
    if result:
        # 创建用户对象并返回
        user = User(result[0], result[1], result[2])
        return user
    else:
        # 用户不存在则返回None
        return None


# 定义用户加载回调函数
@login_manager.user_loader
def load_user(user_id):
    # 根据用户id查询用户信息
    sql = "select * from users where id=%s"
    cursor.execute(sql, user_id)
    result = cursor.fetchone()
    if result:
        # 创建用户对象并返回
        user = User(result[0], result[1], result[2])
        return user
    else:
        # 用户不存在则返回None
        return None


@app.route("/")
@login_required  # 需要登录才能访问
def index():
    # 返回首页
    return render_template("index.html")


@app.route("/login/", methods=["GET", "POST"])
def login():
    form = LoginForm()
    emsg = None
    if form.validate_on_submit():
        username = form.username.data
        password = form.password.data
        user_info = get_user(username)
        if user_info is None:
            emsg = "用户名或密码密码有误"
        else:
            user = user_info
            if user.verify_password():
                login_user(user)
                return redirect(request.args.get('next') or url_for('index'))
            else:
                emsg = "用户名或密码密码有误"
    return render_template('login.html', form=form, emsg=emsg)


@app.route("/signup/", methods=["GET", "POST"])
def register():
    form = RegisterForm()
    emsg = None
    if form.validate_on_submit():
        username = form.username.data
        password = form.password.data

        user_info = get_user(username)
        if user_info is None:
            create_user(username, password)
            return redirect(url_for("login"))
        else:
            emsg = "用户名已存在"
    return render_template('signup.html', form=form, emsg=emsg)


@app.route("/logout")
@login_required
def logout():
    # 登出用户
    logout_user()
    # 返回首页
    return redirect(url_for("login"))


# 运行Flask应用
if __name__ == "__main__":
    app.run(debug=True)
