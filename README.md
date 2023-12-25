# Plants-in-ECNU

### data文件夹

- `all_trees.json`，所有植物的信息（不含template中的长文本）
- `all_templates.json`，所有植物类型templates的详细信息（包含长文本）
- `all_trees_for_lib.json`，添加植物文化关键词"key_phrase"和领养人信息"hasOwner"了的所有植物信息 
- `notes_charles.md`，关于charles的使用备忘&获取到的有用url
- `notes_data_structure.md`，描述了`all_trees.json`和`all_templates.json`的数据结构及各个字段含义
- icon
	- => 存放植物图标图片的文件夹
	- 里面每个文件的名称都是`xxx.jpg`，命名同icon字段中url内图片的名称


- get_data_code
  - => 获取植物信息的爬虫代码
  - `get_trees_data.py`，爬取植物信息的代码，其结果为`all_trees.json`
  - `get_templates_data.py`，在`get_trees_data.py`的基础上爬取植物信息的代码，其结果为`all_templates.json`


- get_icon_code
	- => 获取植物图标的代码
	- `get_icon.ipynb`，从`all_templates.json`中获取icon字段url并保存为`icon.json`的代码
	- `icon.json`，存放了植物图标的url
	- `icon.txt`，对`icon.json`进行修改以用于下载的代码

### statmodel

- => 用来预测下一棵最有可能被领养的树

	- reg

		- => 使用logistics回归模型
		- `pred_tree_reg.ipynb`，模型代码，使用aic筛选变量，逻辑回归拟合。
		- `pred_tree_reg.csv`，便于用excel查看的结果。
		- `pred_result_reg.json`，便于用于网页的结果。**pred_1**表示被领养的概率。

	- svm

		- => 使用SVM分类模型

		- `pred_tree_svm.ipynb`，模型代码，使用支持向量机进行分类，训练比例为0.7，样本权重为{1:10}。对模型的评估包括准确率（训练0.75，测试0.73）、召回率（1）、混淆矩阵、ROC曲线、AUC值（0.99）、最佳阈值Youden Index（0.996836）。

			- 训练集上的混淆矩阵为
				$$
				预测值 \ \
				0 \quad\quad 1 \\
				
				真实值 \ 
				\begin{array}{cccc} 
					0\\ 
					1\\
				\end{array}
				
				\left [\begin{array}{cccc} 
					106 & 2 \\ 
					515 & 1460\\
				\end{array} \right]
				$$

			- 测试集上的混淆矩阵为

			$$
			预测值 \ \
			0 \quad\quad 1 \\
			
			真实值 \
			\begin{array}{cccc} 
				0\\ 
				1\\
			\end{array}
			
			\left [\begin{array}{cccc} 
				49 & 0 \\ 
				245 & 599\\
			\end{array} \right]
			$$

			

		- `pred_tree_svm.csv`，便于用excel查看的结果。

		- `pred_result_svm.json`，便于用于网页的结果。**pred**表示被预测为领养还是不领养，**pred_1**表示被领养的概率。

> （1）筛选所有未被认养的（`owner`取值为0）
>
> （2）【可选】根据用户条件再筛选，如校区`place`、植物品种`template`、植物习性`habit`
>
> （3）被认养概率`pre_1`取值最大的，或者在`pred`取值为 1 的那些里random

### datavis

- => 数据可视化
- sankey
	- => 桑基图，展示认养植物所属学院&植物类型
	- `sankey.ipynb`，用于生成桑基图的python代码
	- `sankey.html`，生成的桑基图html
	- `data_for_sankey.json`，用于sankey图数据可视化，里面是手动修改过学院的所有owner数据
- sunburst
  - => 旭日图，展示校内登记的植物分布
  - `sunburst.ipynb`，用于生成旭日图所需数据
  - `sunburst.html`，定义旭日图
  - `data_for_sunburst.json`，用于sunburst图数据可视化
- parallel
  - => 平行坐标轴，展示校内植物的高度、胸径等维度数据
  - `parallel.ipynb`，用于生成平行坐标轴的python代码
  - `parallel.html`，生成的平行坐标轴html

### ana_emo文件夹

- raw_data
  
  	- => 用于情感分析的源数据
  	- `data.xlsx`， 每棵植物上的题词与留言

- code

   	- => 调用讯飞星火大模型的Python接口，针对raw_data文件夹下的数据进行情感分析
   	- `xlsx_processing.py`，对`data.xlsx`进行数据清洗
   	- `SparkApi.py`，大模型api
   	- `main.py`，调用api对清洗后的数据进行情感分析
		
   	- `__pycache__` 文件夹，大模型内核

- res
  	- => 数据处理后的结果
  	- `test.xlsx`, `xlsx.processing.py` 处理后的数据
  	- `new_test.xlsx`, 添加了情感分析后的数据
  
   
