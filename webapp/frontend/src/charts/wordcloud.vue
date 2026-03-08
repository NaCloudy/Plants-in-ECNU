<script setup lang="ts">
import * as echarts from 'echarts';

type EChartsOption = echarts.EChartsOption;
import 'echarts-wordcloud';

const option = {
    "animation": true,
    "animationThreshold": 2000,
    "animationDuration": 1000,
    "animationEasing": "cubicOut",
    "animationDelay": 0,
    "animationDurationUpdate": 300,
    "animationEasingUpdate": "cubicOut",
    "animationDelayUpdate": 0,
    "aria": {
        "enabled": false
    },
    "color": [
        "#5470c6",
        "#91cc75",
        "#fac858",
        "#ee6666",
        "#73c0de",
        "#3ba272",
        "#fc8452",
        "#9a60b4",
        "#ea7ccc"
    ],
    "series": [
        {
            "type": "wordCloud",
            "name": "\u5927\u5bb6\u7684\u7559\u8a00",
            "shape": "circle",
            "rotationRange": [
                -90,
                90
            ],
            "rotationStep": 45,
            "girdSize": 20,
            "sizeRange": [
                6,
                66
            ],
            "data": [
                {
                    "name": "\u8d35\u5728\u575a\u6301",
                    "value": 3023,
                    "textStyle": {
                        "color": "rgb(110,146,3)"
                    }
                },
                {
                    "name": "\u8ffd\u5fc6\u9752\u6625",
                    "value": 2946,
                    "textStyle": {
                        "color": "rgb(53,112,159)"
                    }
                },
                {
                    "name": "\u671f\u671b\u672a\u6765",
                    "value": 2896,
                    "textStyle": {
                        "color": "rgb(108,146,112)"
                    }
                },
                {
                    "name": "\u521d\u5fc3\u5982\u78d0",
                    "value": 2892,
                    "textStyle": {
                        "color": "rgb(143,55,20)"
                    }
                },
                {
                    "name": "\u5f52\u6765\u4ecd\u662f\u5c11\u5e74",
                    "value": 2882,
                    "textStyle": {
                        "color": "rgb(5,39,35)"
                    }
                },
                {
                    "name": "\u9020\u6797\u76ca\u540e",
                    "value": 818,
                    "textStyle": {
                        "color": "rgb(53,96,85)"
                    }
                },
                {
                    "name": "\u59cb\u7ec8\u5982\u4e00",
                    "value": 817,
                    "textStyle": {
                        "color": "rgb(144,99,104)"
                    }
                },
                {
                    "name": "\u8f89\u714c",
                    "value": 816,
                    "textStyle": {
                        "color": "rgb(2,86,45)"
                    }
                },
                {
                    "name": "\u8f89\u714c",
                    "value": 815,
                    "textStyle": {
                        "color": "rgb(41,85,20)"
                    }
                },
                {
                    "name": "\u56e2\u7ed3",
                    "value": 814,
                    "textStyle": {
                        "color": "rgb(126,31,154)"
                    }
                },
                {
                    "name": "\u53cb\u7231",
                    "value": 813,
                    "textStyle": {
                        "color": "rgb(142,146,36)"
                    }
                },
                {
                    "name": "\u6e29\u6696",
                    "value": 812,
                    "textStyle": {
                        "color": "rgb(106,32,78)"
                    }
                },
                {
                    "name": "\u52c7\u6562",
                    "value": 811,
                    "textStyle": {
                        "color": "rgb(37,106,95)"
                    }
                },
                {
                    "name": "\u4f18\u79c0",
                    "value": 810,
                    "textStyle": {
                        "color": "rgb(85,66,46)"
                    }
                },
                {
                    "name": "\u7f8e\u6ee1",
                    "value": 809,
                    "textStyle": {
                        "color": "rgb(121,71,96)"
                    }
                },
                {
                    "name": "\u5171\u6210\u957f",
                    "value": 808,
                    "textStyle": {
                        "color": "rgb(47,15,139)"
                    }
                },
                {
                    "name": "\u4f20\u627f",
                    "value": 807,
                    "textStyle": {
                        "color": "rgb(44,14,61)"
                    }
                },
                {
                    "name": "\u5e74\u8f7b",
                    "value": 806,
                    "textStyle": {
                        "color": "rgb(60,96,15)"
                    }
                },
                {
                    "name": "\u7eed\u5199\u8f89\u714c",
                    "value": 514,
                    "textStyle": {
                        "color": "rgb(54,30,21)"
                    }
                },
                {
                    "name": "\u9752\u6625\u7684\u6a21\u6837",
                    "value": 513,
                    "textStyle": {
                        "color": "rgb(155,142,157)"
                    }
                },
                {
                    "name": "\u4f9d\u7136\u662f\u5c11\u5e74",
                    "value": 486,
                    "textStyle": {
                        "color": "rgb(92,50,81)"
                    }
                },
                {
                    "name": "\u52c7\u5f80\u76f4\u524d",
                    "value": 467,
                    "textStyle": {
                        "color": "rgb(71,2,33)"
                    }
                },
                {
                    "name": "\u7f8e\u597d",
                    "value": 460,
                    "textStyle": {
                        "color": "rgb(63,0,70)"
                    }
                },
                {
                    "name": "\u6e29\u6696",
                    "value": 456,
                    "textStyle": {
                        "color": "rgb(118,129,127)"
                    }
                },
                {
                    "name": "\u4e50\u89c2",
                    "value": 450,
                    "textStyle": {
                        "color": "rgb(77,24,90)"
                    }
                },
                {
                    "name": "\u73cd\u60dc",
                    "value": 438,
                    "textStyle": {
                        "color": "rgb(120,125,11)"
                    }
                },
                {
                    "name": "\u4e50\u89c2",
                    "value": 437,
                    "textStyle": {
                        "color": "rgb(108,24,129)"
                    }
                },
                {
                    "name": "\u575a\u5b9a",
                    "value": 436,
                    "textStyle": {
                        "color": "rgb(57,30,96)"
                    }
                },
                {
                    "name": "\u5e72\u52b2",
                    "value": 434,
                    "textStyle": {
                        "color": "rgb(72,4,13)"
                    }
                },
                {
                    "name": "\u8010\u5fc3",
                    "value": 425,
                    "textStyle": {
                        "color": "rgb(85,39,28)"
                    }
                },
                {
                    "name": "\u9ad8\u8d35",
                    "value": 424,
                    "textStyle": {
                        "color": "rgb(140,82,55)"
                    }
                },
                {
                    "name": "\u5c0a\u91cd",
                    "value": 422,
                    "textStyle": {
                        "color": "rgb(12,58,12)"
                    }
                },
                {
                    "name": "\u865a\u6000\u82e5\u8c37",
                    "value": 421,
                    "textStyle": {
                        "color": "rgb(19,142,17)"
                    }
                },
                {
                    "name": "\u96bd\u6c38",
                    "value": 420,
                    "textStyle": {
                        "color": "rgb(135,123,44)"
                    }
                },
                {
                    "name": "\u811a\u8e0f\u5b9e\u5730",
                    "value": 418,
                    "textStyle": {
                        "color": "rgb(77,113,56)"
                    }
                },
                {
                    "name": "\u6df1\u539a",
                    "value": 404,
                    "textStyle": {
                        "color": "rgb(55,118,100)"
                    }
                },
                {
                    "name": "\u56e2\u7ed3",
                    "value": 370,
                    "textStyle": {
                        "color": "rgb(43,93,38)"
                    }
                },
                {
                    "name": "\u8f89\u714c",
                    "value": 361,
                    "textStyle": {
                        "color": "rgb(49,114,35)"
                    }
                },
                {
                    "name": "\u521a\u5f3a",
                    "value": 359,
                    "textStyle": {
                        "color": "rgb(43,78,47)"
                    }
                },
                {
                    "name": "\u5e73\u51e1",
                    "value": 353,
                    "textStyle": {
                        "color": "rgb(0,12,66)"
                    }
                },
                {
                    "name": "\u7f8e\u597d",
                    "value": 345,
                    "textStyle": {
                        "color": "rgb(23,77,68)"
                    }
                },
                {
                    "name": "\u4f18\u79c0",
                    "value": 343,
                    "textStyle": {
                        "color": "rgb(32,6,81)"
                    }
                },
                {
                    "name": "\u8f89\u714c",
                    "value": 342,
                    "textStyle": {
                        "color": "rgb(91,130,32)"
                    }
                },
                {
                    "name": "\u75af\u72c2",
                    "value": 338,
                    "textStyle": {
                        "color": "rgb(141,78,138)"
                    }
                },
                {
                    "name": "\u73cd\u60dc\u65f6\u95f4",
                    "value": 337,
                    "textStyle": {
                        "color": "rgb(53,40,75)"
                    }
                },
                {
                    "name": "\u575a\u5b9a",
                    "value": 335,
                    "textStyle": {
                        "color": "rgb(149,123,145)"
                    }
                },
                {
                    "name": "\u73cd\u60dc",
                    "value": 332,
                    "textStyle": {
                        "color": "rgb(73,15,109)"
                    }
                },
                {
                    "name": "\u7f8e\u597d",
                    "value": 331,
                    "textStyle": {
                        "color": "rgb(71,160,6)"
                    }
                },
                {
                    "name": "\u8c26\u865a",
                    "value": 330,
                    "textStyle": {
                        "color": "rgb(53,63,10)"
                    }
                },
                {
                    "name": "\u7f8e\u597d",
                    "value": 328,
                    "textStyle": {
                        "color": "rgb(33,44,68)"
                    }
                },
                {
                    "name": "\u73cd\u60dc",
                    "value": 327,
                    "textStyle": {
                        "color": "rgb(22,76,48)"
                    }
                },
                {
                    "name": "\u79d1\u6280\u521b\u65b0",
                    "value": 325,
                    "textStyle": {
                        "color": "rgb(81,9,1)"
                    }
                },
                {
                    "name": "\u7f8e\u597d",
                    "value": 322,
                    "textStyle": {
                        "color": "rgb(15,157,98)"
                    }
                },
                {
                    "name": "\u8944\u672a\u6765",
                    "value": 318,
                    "textStyle": {
                        "color": "rgb(73,63,54)"
                    }
                },
                {
                    "name": "\u52e4\u594b",
                    "value": 273,
                    "textStyle": {
                        "color": "rgb(34,16,35)"
                    }
                },
                {
                    "name": "\u73cd\u60dc",
                    "value": 226,
                    "textStyle": {
                        "color": "rgb(122,143,115)"
                    }
                },
                {
                    "name": "\u6b22\u5feb",
                    "value": 223,
                    "textStyle": {
                        "color": "rgb(59,74,34)"
                    }
                },
                {
                    "name": "\u5c0a\u91cd",
                    "value": 181,
                    "textStyle": {
                        "color": "rgb(58,9,124)"
                    }
                },
                {
                    "name": "\u5b8c\u7f8e",
                    "value": 177,
                    "textStyle": {
                        "color": "rgb(86,20,144)"
                    }
                },
                {
                    "name": "\u56f0\u96be",
                    "value": 101,
                    "textStyle": {
                        "color": "rgb(16,135,16)"
                    }
                },
                {
                    "name": "\u543e\u5fc3\u5c11\u6b32\u5929\u5730\u5bbd",
                    "value": 99,
                    "textStyle": {
                        "color": "rgb(21,73,80)"
                    }
                },
                {
                    "name": "\u771f\u8bda",
                    "value": 98,
                    "textStyle": {
                        "color": "rgb(147,150,17)"
                    }
                },
                {
                    "name": "\u5c0a\u91cd",
                    "value": 97,
                    "textStyle": {
                        "color": "rgb(73,130,85)"
                    }
                },
                {
                    "name": "\u73cd\u60dc",
                    "value": 96,
                    "textStyle": {
                        "color": "rgb(158,107,71)"
                    }
                },
                {
                    "name": "\u5c0a\u91cd",
                    "value": 95,
                    "textStyle": {
                        "color": "rgb(33,144,149)"
                    }
                },
                {
                    "name": "\u7f8e\u597d",
                    "value": 94,
                    "textStyle": {
                        "color": "rgb(130,85,34)"
                    }
                },
                {
                    "name": "\u73cd\u60dc",
                    "value": 93,
                    "textStyle": {
                        "color": "rgb(7,134,54)"
                    }
                },
                {
                    "name": "\u73cd\u60dc",
                    "value": 92,
                    "textStyle": {
                        "color": "rgb(51,70,100)"
                    }
                },
                {
                    "name": "\u70ed\u7231",
                    "value": 91,
                    "textStyle": {
                        "color": "rgb(10,103,79)"
                    }
                },
                {
                    "name": "\u5ec9\u803b",
                    "value": 90,
                    "textStyle": {
                        "color": "rgb(24,145,108)"
                    }
                },
                {
                    "name": "\u73cd\u60dc",
                    "value": 89,
                    "textStyle": {
                        "color": "rgb(158,41,51)"
                    }
                },
                {
                    "name": "\u73cd\u60dc",
                    "value": 75,
                    "textStyle": {
                        "color": "rgb(36,64,144)"
                    }
                },
                {
                    "name": "\u5e74\u8f7b",
                    "value": 74,
                    "textStyle": {
                        "color": "rgb(148,85,82)"
                    }
                },
                {
                    "name": "\u8270\u96be\u9669\u963b",
                    "value": 73,
                    "textStyle": {
                        "color": "rgb(12,135,41)"
                    }
                },
                {
                    "name": "\u5145\u5b9e",
                    "value": 72,
                    "textStyle": {
                        "color": "rgb(32,130,47)"
                    }
                },
                {
                    "name": "\u559c\u60a6",
                    "value": 71,
                    "textStyle": {
                        "color": "rgb(71,123,44)"
                    }
                },
                {
                    "name": "\u7f8e\u597d",
                    "value": 70,
                    "textStyle": {
                        "color": "rgb(37,104,72)"
                    }
                },
                {
                    "name": "\u7f8e\u597d",
                    "value": 69,
                    "textStyle": {
                        "color": "rgb(87,103,74)"
                    }
                },
                {
                    "name": "\u8270\u8f9b",
                    "value": 68,
                    "textStyle": {
                        "color": "rgb(52,38,6)"
                    }
                },
                {
                    "name": "\u65e0\u5f80\u4e0d\u5229",
                    "value": 67,
                    "textStyle": {
                        "color": "rgb(64,147,12)"
                    }
                },
                {
                    "name": "\u5c0a\u91cd",
                    "value": 65,
                    "textStyle": {
                        "color": "rgb(153,89,40)"
                    }
                },
                {
                    "name": "\u8bda\u5b9e",
                    "value": 64,
                    "textStyle": {
                        "color": "rgb(146,158,66)"
                    }
                },
                {
                    "name": "\u5c0a\u91cd",
                    "value": 63,
                    "textStyle": {
                        "color": "rgb(40,85,66)"
                    }
                },
                {
                    "name": "\u6210\u529f",
                    "value": 62,
                    "textStyle": {
                        "color": "rgb(141,12,56)"
                    }
                },
                {
                    "name": "\u6293\u4f4f\u673a\u9047",
                    "value": 61,
                    "textStyle": {
                        "color": "rgb(45,150,140)"
                    }
                },
                {
                    "name": "\u5e74\u8f7b",
                    "value": 60,
                    "textStyle": {
                        "color": "rgb(121,35,23)"
                    }
                },
                {
                    "name": "\u5b8c\u7f8e",
                    "value": 59,
                    "textStyle": {
                        "color": "rgb(91,82,52)"
                    }
                },
                {
                    "name": "\u73cd\u60dc",
                    "value": 58,
                    "textStyle": {
                        "color": "rgb(51,103,99)"
                    }
                },
                {
                    "name": "\u7f8e\u597d",
                    "value": 57,
                    "textStyle": {
                        "color": "rgb(108,70,128)"
                    }
                },
                {
                    "name": "\u56f0\u96be",
                    "value": 56,
                    "textStyle": {
                        "color": "rgb(80,105,117)"
                    }
                },
                {
                    "name": "\u6b8b\u9177",
                    "value": 55,
                    "textStyle": {
                        "color": "rgb(11,101,107)"
                    }
                },
                {
                    "name": "\u6301\u4e45",
                    "value": 53,
                    "textStyle": {
                        "color": "rgb(105,129,110)"
                    }
                },
                {
                    "name": "\u6b8b\u9177",
                    "value": 52,
                    "textStyle": {
                        "color": "rgb(124,116,27)"
                    }
                },
                {
                    "name": "\u548c\u8c10",
                    "value": 48,
                    "textStyle": {
                        "color": "rgb(17,51,95)"
                    }
                },
                {
                    "name": "\u5c0a\u91cd",
                    "value": 47,
                    "textStyle": {
                        "color": "rgb(105,76,28)"
                    }
                },
                {
                    "name": "\u72ec\u7279",
                    "value": 46,
                    "textStyle": {
                        "color": "rgb(111,109,4)"
                    }
                },
                {
                    "name": "\u52aa\u529b",
                    "value": 45,
                    "textStyle": {
                        "color": "rgb(63,35,126)"
                    }
                },
                {
                    "name": "\u4f18\u79c0",
                    "value": 44,
                    "textStyle": {
                        "color": "rgb(46,128,104)"
                    }
                },
                {
                    "name": "\u7f8e\u597d",
                    "value": 43,
                    "textStyle": {
                        "color": "rgb(65,51,70)"
                    }
                },
                {
                    "name": "\u5584\u826f",
                    "value": 42,
                    "textStyle": {
                        "color": "rgb(6,43,158)"
                    }
                },
                {
                    "name": "\u56f0\u96be",
                    "value": 41,
                    "textStyle": {
                        "color": "rgb(36,89,148)"
                    }
                },
                {
                    "name": "\u52e4\u5b66\u82e6\u7ec3",
                    "value": 39,
                    "textStyle": {
                        "color": "rgb(109,2,59)"
                    }
                },
                {
                    "name": "\u5174\u8da3\u7231\u597d",
                    "value": 37,
                    "textStyle": {
                        "color": "rgb(33,157,16)"
                    }
                },
                {
                    "name": "\u5e78\u798f",
                    "value": 36,
                    "textStyle": {
                        "color": "rgb(92,66,115)"
                    }
                },
                {
                    "name": "\u5e74\u8f7b",
                    "value": 35,
                    "textStyle": {
                        "color": "rgb(158,160,58)"
                    }
                },
                {
                    "name": "\u5e74\u8f7b",
                    "value": 33,
                    "textStyle": {
                        "color": "rgb(76,148,2)"
                    }
                },
                {
                    "name": "\u7f8e\u597d",
                    "value": 32,
                    "textStyle": {
                        "color": "rgb(22,49,120)"
                    }
                },
                {
                    "name": "\u7f8e\u597d",
                    "value": 31,
                    "textStyle": {
                        "color": "rgb(97,95,75)"
                    }
                },
                {
                    "name": "\u52aa\u529b",
                    "value": 30,
                    "textStyle": {
                        "color": "rgb(99,114,101)"
                    }
                },
                {
                    "name": "\u575a\u5b9a",
                    "value": 26,
                    "textStyle": {
                        "color": "rgb(96,105,0)"
                    }
                },
                {
                    "name": "\u5e78\u798f",
                    "value": 24,
                    "textStyle": {
                        "color": "rgb(16,29,152)"
                    }
                },
                {
                    "name": "\u5584\u826f",
                    "value": 23,
                    "textStyle": {
                        "color": "rgb(62,157,152)"
                    }
                },
                {
                    "name": "\u73cd\u8d35",
                    "value": 22,
                    "textStyle": {
                        "color": "rgb(92,130,21)"
                    }
                },
                {
                    "name": "\u73cd\u60dc",
                    "value": 20,
                    "textStyle": {
                        "color": "rgb(61,87,159)"
                    }
                },
                {
                    "name": "\u4eb2\u5bc6",
                    "value": 19,
                    "textStyle": {
                        "color": "rgb(89,91,18)"
                    }
                },
                {
                    "name": "\u7e41\u8363",
                    "value": 18,
                    "textStyle": {
                        "color": "rgb(48,95,11)"
                    }
                },
                {
                    "name": "\u5e74\u8f7b",
                    "value": 17,
                    "textStyle": {
                        "color": "rgb(153,95,78)"
                    }
                },
                {
                    "name": "\u56f0\u96be",
                    "value": 16,
                    "textStyle": {
                        "color": "rgb(27,85,38)"
                    }
                },
                {
                    "name": "\u7f8e\u597d",
                    "value": 15,
                    "textStyle": {
                        "color": "rgb(137,5,27)"
                    }
                },
                {
                    "name": "\u597d\u5947",
                    "value": 14,
                    "textStyle": {
                        "color": "rgb(160,122,148)"
                    }
                },
                {
                    "name": "\u4f18\u52bf\u4e92\u8865",
                    "value": 13,
                    "textStyle": {
                        "color": "rgb(43,63,126)"
                    }
                },
                {
                    "name": "\u5c0a\u91cd",
                    "value": 12,
                    "textStyle": {
                        "color": "rgb(4,106,82)"
                    }
                },
                {
                    "name": "\u8f89\u714c",
                    "value": 11,
                    "textStyle": {
                        "color": "rgb(64,60,100)"
                    }
                },
                {
                    "name": "\u73cd\u60dc",
                    "value": 10,
                    "textStyle": {
                        "color": "rgb(158,139,78)"
                    }
                },
                {
                    "name": "\u7f8e\u597d",
                    "value": 9,
                    "textStyle": {
                        "color": "rgb(95,144,35)"
                    }
                },
                {
                    "name": "\u539a\u79ef\u8584\u53d1",
                    "value": 8,
                    "textStyle": {
                        "color": "rgb(104,123,145)"
                    }
                },
                {
                    "name": "\u6307\u624b\u753b\u811a",
                    "value": 7,
                    "textStyle": {
                        "color": "rgb(61,46,44)"
                    }
                },
                {
                    "name": "\u73cd\u60dc",
                    "value": 6,
                    "textStyle": {
                        "color": "rgb(146,4,147)"
                    }
                },
                {
                    "name": "\u7f8e\u597d",
                    "value": 5,
                    "textStyle": {
                        "color": "rgb(139,90,35)"
                    }
                },
                {
                    "name": "\u56de\u987e\u5386\u53f2",
                    "value": 4,
                    "textStyle": {
                        "color": "rgb(50,87,115)"
                    }
                },
                {
                    "name": "\u52e4\u594b",
                    "value": 3,
                    "textStyle": {
                        "color": "rgb(39,160,33)"
                    }
                },
                {
                    "name": "\u4e50\u89c2",
                    "value": 1,
                    "textStyle": {
                        "color": "rgb(124,53,58)"
                    }
                }
            ],
            "drawOutOfBound": false,
            "textStyle": {
                "emphasis": {}
            }
        }
    ],
    "legend": [
        {
            "data": [],
            "selected": {},
            "show": true,
            "padding": 5,
            "itemGap": 10,
            "itemWidth": 25,
            "itemHeight": 14,
            "backgroundColor": "transparent",
            "borderColor": "#ccc",
            "borderWidth": 1,
            "borderRadius": 0,
            "pageButtonItemGap": 5,
            "pageButtonPosition": "end",
            "pageFormatter": "{current}/{total}",
            "pageIconColor": "#2f4554",
            "pageIconInactiveColor": "#aaa",
            "pageIconSize": 15,
            "animationDurationUpdate": 800,
            "selector": false,
            "selectorPosition": "auto",
            "selectorItemGap": 7,
            "selectorButtonGap": 10
        }
    ],
    "tooltip": {
        "show": true,
        "trigger": "item",
        "triggerOn": "mousemove|click",
        "axisPointer": {
            "type": "line"
        },
        "showContent": true,
        "alwaysShowContent": false,
        "showDelay": 0,
        "hideDelay": 100,
        "enterable": false,
        "confine": false,
        "appendToBody": false,
        "transitionDuration": 0.4,
        "textStyle": {
            "fontSize": 14
        },
        "borderWidth": 0,
        "padding": 5,
        "order": "seriesAsc"
    },
    "title": [
        {
            "show": true,
            "text": "\u5927\u5bb6\u7684\u7559\u8a00",
            "target": "blank",
            "subtarget": "blank",
            "padding": 5,
            "itemGap": 10,
            "textAlign": "auto",
            "textVerticalAlign": "auto",
            "triggerEvent": false,
            "textStyle": {
                "fontSize": 23
            }
        }
    ]
};
</script>

<template>
    <div :style="{ width: '900px', height: '600px' }">
        <Echarts :option="option as EChartsOption" />
    </div>
</template>
