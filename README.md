# Plants-in-ECNU

### data文件夹

- 数据

  - `all_trees.json`，所有植物的信息（不含template中的长文本）
  - `all_templates.json`，所有植物类型templates的详细信息（包含长文本）
  - `data_for_funnel.json`，用于sankey图数据可视化，里面是手动修改过学院的所有owner数据。

- 代码

	- `get_trees_data.py`，爬取植物信息的代码，其结果为`all_trees.json`
	- `get_templates_data.py`，在`get_trees_data.py`的基础上爬取植物信息的代码，其结果为`all_templates.json`

- 文档

	- `notes_charles.md`，关于charles的使用备忘&获取到的有用url

	- `notes_data_structure.md`，描述了`all_trees.json`和`all_templates.json`的数据结构及各个字段含义

### code文件夹

- statmodel

	- => 用来预测下一棵最有可能被领养的树

	- `pred_tree.ipynb`，模型代码，不建议运行。使用aic筛选变量，逻辑回归拟合。

	- `pred_tree.xlsx`，对训练数据反预测的结果，包括每棵树是否被认养、模型预测的被认养概率，可以根据不同需要进行“预测”。

		> （1）筛选所有未被认养的（`owner`取值为0）
		>
		> （2）【可选】根据用户条件再筛选，如校区`place`、植物品种`template`、植物习性`habit`
		>
		> （3）被认养概率`pre_1`取值最大的

- datavis
	- => 数据可视化
	- sankey
		- 桑基图
		- `sankey.ipynb`，用于生成桑基图的python代码
		- `sankey.html`，生成的桑基图html