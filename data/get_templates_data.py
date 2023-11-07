from __future__ import unicode_literals
import requests
import json

###step 3. 找出符合要求的id（template不同）并存入ids数组
with open(r'D:\ECNU\23_4_fall\CS-object_oriented_python\prj\Plants in ECNU\data\all_trees.json', 'r', encoding='utf-8') as file:
    json_data = json.load(file)

ids = []
template_ids = []

for item in json_data:
    template_id = item['template']['id']  
    if template_id not in template_ids:
        template_ids.append(template_id)  
        ids.append(item['id'])


###step 4. 遍历ids数组，爬取对应的记录，并取出template属性存入merged_template
merged_template = []

for id_val in ids:
  url = "https://tree.sjtusv.com/trees/" + str(id_val) 

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

  json_data = json.loads(resp.text)
  merged_template.append(json_data['template'])


###step 5. 将merged_template存为json文件
#路径需要根据自己文件位置修改一下
path = r'D:\ECNU\23_4_fall\CS-object_oriented_python\prj\Plants in ECNU\data\all_templates.json'

with open(path, 'w', encoding='utf-8') as file:
  json.dump(merged_template, file, ensure_ascii=False, indent=4)

print("JSON 数据已成功存储到 all_templates.json 文件中。")
