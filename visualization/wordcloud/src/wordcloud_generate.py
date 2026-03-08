# 读取数据生成对应的pd对象
import pandas as pd
from collections import deque

# 从excel文件中读取数据
df = pd.read_excel('./data/wordcloud_data.xlsx')

# print(df)

# 去除空行
df = df.dropna()
# 提取其中的Column1.id列 与 key_phrase列导入字典作为词云的数据源
list = []

# 遍历DataFrame的每一行
for index, row in df.iterrows():
    # 创建一个元组，其中包含'a'列和'b'列的值
    tuple = (row['key_phrase'],row['Column1.id'])
    # 将元组添加到队列中
    list.append(tuple)

# print(queue)

from pyecharts import options as opts
from pyecharts.charts import WordCloud

words = list


(
    WordCloud()
    .add(series_name="大家的留言", data_pair=words, word_size_range=[6, 66])
    .set_global_opts(
        title_opts=opts.TitleOpts(
            title="大家的留言", title_textstyle_opts=opts.TextStyleOpts(font_size=23)
        ),
        tooltip_opts=opts.TooltipOpts(is_show=True),
    )
    .render("exp.html")
)
