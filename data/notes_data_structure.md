# 数据结构

## 数据结构（适用于all_trees）

- 植物信息
	- 编号id
	
	- 植物位置文字描述number
	
	- 植物树高height（米）、胸径radius（厘米）、冠幅subHeight（米）
	
		> bottomHeight没有在小程序中显示
	
	- 植物所在经纬度longitude、latitude
	
		> 闵行校区范围（大致）
		>
		> longitude∈ [121.44, 121.46], latitide∈ [31.00, 31.05]
		>
		> 中北校区范围（大致）
		>
		> longitude∈ [121.40, 121.41], latitide∈ [31.20, 31.24]
	
	- 植物所在校区place
	
	- 植物图片images
	
- 植物种类template
	- 编号id
	- 名称name
	- 科branch
	- 习性habit
	- 图标icon
	
- 领养植物情况owner

	- 领养人姓名name

	- 领养人单位title

	- 领养人寄语slogan

	- 领养人故事content

	- 领养时间createdAt

	- 领养图片images
	
- 植物图片images

```json
{
    "id": 3023, 
    "number": "大学生活动中心桥头", 
    "height": "", 
    "radius": "", 
    "subHeight": "", 
    "bottomHeight": "", 
    "remark": "", 
    "longitude": 121.453962, 
    "latitude": 31.032579, 
    "place": "华东师范大学(闵行校区)", 
    "qrcode": null, 
    "available": false, 
    "createdAt": "2023-03-27T16:31:18.498Z", 
    "updatedAt": "2023-05-15T15:27:40.000Z", 
    "likeCount": 3, 
    "images": [
        {
            "id": 8573, 
            "url": "https://my-tree.oss-cn-shanghai.aliyuncs.com/tree-images/2023/03/27/1oaQVth-uGEkQ2UqyhvyM.jpg",
            "createdAt": "2023-03-27T16:29:58.289Z"
        }, 
        {
            "id": 8574, 
            "url": "https://my-tree.oss-cn-shanghai.aliyuncs.com/tree-images/2023/03/27/P7SgNXJ7aTmemPyt2MUZH.jpg",
            "createdAt": "2023-03-27T16:30:34.868Z"
        }, 
        {
            "id": 8575, 
            "url": "https://my-tree.oss-cn-shanghai.aliyuncs.com/tree-images/2023/03/27/X8pfsO7bzDjHFyJzN-F1M.jpg",
            "createdAt": "2023-03-27T16:30:59.591Z"
        }
    ],
    "template": {
        "id": 68, 
        "name": "东京樱花", 
        "scientificName": "Cerasus × yedoensis ", 
        "scientificNameEn": "(Mats.) Yü et Li", 
        "name2": null, 
        "branch": "蔷薇科", 
        "habit": "乔木", 
        "icon": "https://my-tree.oss-cn-shanghai.aliyuncs.com/template-icons/2019/12/05/znz3CtPtwSUkx5DXnbGGv.png", 
        "createdAt": "2019-12-05T19:03:29.295Z", 
        "updatedAt": "2020-09-09T10:03:13.000Z"
    }, 
    "user": {
        "name": "赵智燕", 
        "portrait": null
    }, 
    "owner": {
        "id": 161, 
        "name": "潘维玲", 
        "title": "生命科学学院", 
        "slogan": "难在坚持，贵在坚持，成在坚持。", 
        "content": "2023年，于我而言，是疫情“消散”的一年，是事业稳定、爱情幸福的一年，是三十而立、勇敢担当的一年，也是我再回母校、再访恩师的一年，有幸重回樱桃河旁，有幸栽种一棵樱花树，感恩母校，让我有了现在美好、幸福的生活。祝福母校越来越好，祝福生科院越来越好！", 
        "createdAt": "2023-03-27T16:34:19.415Z", 
        "updatedAt": "2023-03-27T16:34:23.000Z", 
        "images": [
            {
                "id": 212, 
                "url": "https://my-tree.oss-cn-shanghai.aliyuncs.com/owner-images/3023/2023/03/27/6KshgiF5yfW1fDO8u0lYz.jpg", 
                "createdAt": "2023-03-27T16:34:19.544Z"
            }, 
            {
                "id": 213, 
                "url": "https://my-tree.oss-cn-shanghai.aliyuncs.com/owner-images/3023/2023/03/27/zOFYNasgLLAKDRzCYz2G5.jpg", 
                "createdAt": "2023-03-27T16:34:20.331Z"
            }
        ]
    }
}
```

## 数据结构（适用于all_templates）

植物种类template

- 编号id
- 名称name
- 科branch
- 习性habit
- 图标icon
- 文字描述blocks

```json
{
        "id": 68,
        "name": "东京樱花",
        "scientificName": "Cerasus × yedoensis ",
        "scientificNameEn": "(Mats.) Yü et Li",
        "name2": null,
        "branch": "蔷薇科",
        "habit": "乔木",
        "period": null,
        "icon": "https://my-tree.oss-cn-shanghai.aliyuncs.com/template-icons/2019/12/05/znz3CtPtwSUkx5DXnbGGv.png",
        "createdAt": "2019-12-05T19:03:29.295Z",
        "updatedAt": "2020-09-09T10:03:13.000Z",
        "blocks": [
            {
                "id": 137,
                "title": "形态特征",
                "content": "高4-16米，树皮灰色。叶片椭圆卵形或倒卵形，上面深绿色，无毛，下面淡绿色，沿脉被稀疏柔毛。花序伞形总状，总梗极短，有花3-4朵，先叶开放，花直径3-3.5厘米；花瓣白色或粉红色，椭圆卵形，先端下凹，全缘二裂；雄蕊约32枚，短于花瓣；花柱基部有疏柔毛。核果近球形。\n",
                "createdAt": "2020-06-03T09:54:00.043Z",
                "updatedAt": "2020-09-09T10:03:13.000Z"
            },
            {
                "id": 138,
                "title": "植物历史",
                "content": "原产日本，世界多地及中国北京、西安、青岛、南京、南昌等城市庭园栽培。\n",
                "createdAt": "2020-06-03T09:54:00.055Z",
                "updatedAt": "2020-09-09T10:03:13.000Z"
            },
            {
                "id": 139,
                "title": "植物文化",
                "content": "东京樱花为著名的早春观赏树种，在开花时满树灿烂，但是花期很短，仅保持1周左右就凋谢。\n",
                "createdAt": "2020-06-03T09:54:00.067Z",
                "updatedAt": "2020-09-09T10:03:13.000Z"
            },
            {
                "id": 140,
                "title": "生长习性",
                "content": "喜阳光，喜温暖湿润气候环境。对土壤要求不严，以疏松肥沃、排水良好的沙质土壤为好，不耐盐碱土。根系较浅，忌积水低洼地。有一定的耐寒和耐旱力。\n",
                "createdAt": "2020-06-03T09:54:00.079Z",
                "updatedAt": "2020-09-09T10:03:13.000Z"
            },
            {
                "id": 141,
                "title": "养护要点",
                "content": "养护与樱花同，春季3月初萌芽前浇一次返青水，这次水必须浇足浇透，此举可以降低地温，延缓发芽，有效防止倒春寒的危害，还可以及时提供给植株萌芽所需要的水分。每年施肥两次，以酸性肥料为好。\n",
                "createdAt": "2020-06-03T09:54:00.090Z",
                "updatedAt": "2020-09-09T10:03:13.000Z"
            }
        ]
    },
```

