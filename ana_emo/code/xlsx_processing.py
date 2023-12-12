import pandas as pd

# 获取id, slogan 和 comment列
def get_columns(file_name, new_file_name):
    df = pd.read_excel(file_name)
    
    # 需要的列
    columns = ['Column1.id', 'Column1.owner.slogan', 'Column1.owner.content']
    
    # 新建一个DataFrame对象，只包含所需列的数据
    new_df = df[columns]
    
    # 将新的DataFrame对象保存为新的xlsx文件
    new_df.to_excel(new_file_name, index=False)
    
    # 打印信息
    print('The new file is saved as: ' + new_file_name)

# 清洗数据
def data_clear(file_name, new_file_name):
    df = pd.read_excel(file_name)
    
    #检查的列
    columns = ['Column1.owner.slogan', 'Column1.owner.content']
    
    new_df = df.dropna(thresh=2,subset=columns)
    
    new_df.to_excel(new_file_name, index=False)
    
    #打印信息
    print('The new file is saved as: ' + new_file_name)

get_columns('emo_test\data.xlsx','emo_test\\new_data.xlsx')
data_clear('emo_test\\new_data.xlsx', 'emo_test\\test.xlsx')
