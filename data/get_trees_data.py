from __future__ import unicode_literals
import requests
import json

###step 1. 爬取所有植物信息
url = "https://tree.sjtusv.com/trees"

headers= {
    "Host": "tree.sjtusv.com",
    "Connection" : "keep-alive",
    "Authorization": "bearer xxx", #已脱敏，需要将xxx替换为自己的token
    "referer" : "https://servicewechat.com/wx7c02d70d124a7861/67/page-frame.html", 
    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.43(0x18002b28) NetType/WIFI Language/zh_CN", 
    "content_type" : "application/json" ,
    "Accept-Encoding" : "gzip,compress,br,deflater", 
    } 
    
requests.packages.urllib3.disable_warnings()
resp = requests.get(url, verify=False, headers = headers)

###step 2. 存入本地json文件
json_data = json.loads(resp.text)

#路径需要根据自己文件位置修改一下
path = r'D:\ECNU\23_4_fall\CS-object_oriented_python\prj\Plants in ECNU\data\all_trees.json'
with open(path, 'w', encoding='utf-8') as file:
    json.dump(json_data, file, ensure_ascii=False, indent=4)
print("JSON 数据已成功存储到 all_trees.json 文件中。")
