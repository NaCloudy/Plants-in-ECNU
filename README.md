# Plants-in-ECNU

### data文件夹

- 数据

	- `all_trees.json`，所有植物的信息（不含template中的长文本）
	- `all_templates.json`，所有植物类型templates的详细信息（包含长文本）

- 代码

	- `get_trees_data.py`，爬取植物信息的代码，其结果为`all_trees.json`
	- `get_templates_data.py`，在`get_trees_data.py`的基础上爬取植物信息的代码，其结果为`all_templates.json`

- 文档

	- `notes_charles.md`，关于charles的使用备忘&获取到的有用url

	- `notes_data_structure.md`，描述了`all_trees.json`和`all_templates.json`的数据结构及各个字段含义