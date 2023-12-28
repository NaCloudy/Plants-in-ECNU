import json
import pandas as pd

# 打开json文件并读取内容
with open('data\\all_templates.json','r',encoding='utf-8') as f:
    data = json.load(f)
    
# 创建一个空的列表，用于存储提取出的内容
result = []

# 遍历json文件中的每一个json对象
for item in data:
    id = item["id"]
    name = item["name"]
    culture = None
    for block in item["blocks"]:
        if block["title"] == "植物文化":
            culture = block["content"]
            break
    # 将提取出的内容以字典的形式添加到列表中
    result.append({"id":id,"name":name,"culture":culture})
    
# 将列表转换为pandas的DataFrame对象
df = pd.DataFrame(result)
#删除空行
df.dropna(subset=['culture'],inplace=True)
#保存至本地的excel
df.to_excel("result.xlsx",index=False)
