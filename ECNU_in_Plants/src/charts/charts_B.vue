<script setup lang="ts">
import * as echarts from 'echarts';

type EChartsOption = echarts.EChartsOption;

const option = {
    visualMap: {
        type: "continuous",
        min: 5,
        max: 170,
        inRange: {
            color: [
                "#b3de69",
                "#8dd3c7",
                "#80b1d3",
                "#bebada",
                "#DC8FD9",
                "#fccde5",
                "#FFE65F",
            ],
            itemHeight: 200,
            colorAlpha: 0.85,
        },
    },
    tooltip: {
        show: true,
        trigger: "item",
        formatter: "{b}:{c}株",
    },
    series: {
        type: "sunburst",
        data: [
            {
                "name": "\u4e54\u6728",
                "value": 1553,
                "children": [
                    {
                        "name": "\u8537\u8587\u79d1",
                        "value": 145,
                        "children": [
                            { "name": "\u4e1c\u4eac\u6a31\u82b1", "value": 14 },
                            { "name": "\u6a31\u6843", "value": 1 },
                            { "name": "\u5782\u4e1d\u6d77\u68e0", "value": 22 },
                            { "name": "\u6a31\u5c5e", "value": 35 },
                            { "name": "\u77f3\u6960", "value": 26 },
                            { "name": "\u7d2b\u53f6\u674e", "value": 32 },
                            { "name": "\u5927\u53f6\u65e9\u6a31", "value": 3 },
                            { "name": "\u5c71\u6a31\u82b1", "value": 9 },
                            { "name": "\u674e", "value": 2 },
                            { "name": "\u6bdb\u6a31\u6843", "value": 1 }
                        ]
                    },
                    {
                        "name": "\u6749\u79d1",
                        "value": 572,
                        "children": [
                            { "name": "\u6c60\u6749", "value": 4 },
                            { "name": "\u6c34\u6749", "value": 568 }
                        ]
                    },
                    {
                        "name": "\u675c\u4ef2\u79d1",
                        "value": 2,
                        "children": [{ "name": "\u675c\u4ef2", "value": 2 }]
                    },
                    {
                        "name": "\u6728\u5170\u79d1",
                        "value": 237,
                        "children": [
                            { "name": "\u7d2b\u7389\u5170", "value": 39 },
                            { "name": "\u7389\u5170", "value": 72 },
                            { "name": "\u4e8c\u4e54\u7389\u5170", "value": 59 },
                            { "name": "\u542b\u7b11\u82b1", "value": 6 },
                            { "name": "\u9e45\u638c\u6978", "value": 17 },
                            { "name": "\u8377\u82b1\u7389\u5170", "value": 28 },
                            { "name": "\u6851", "value": 5 },
                            { "name": "\u98de\u9ec4\u7389\u5170", "value": 11 }
                        ]
                    },
                    {
                        "name": "\u536b\u77db\u79d1",
                        "value": 2,
                        "children": [{ "name": "\u767d\u675c", "value": 2 }]
                    },
                    {
                        "name": "\u8537\u8587",
                        "value": 12,
                        "children": [
                            { "name": "\u6885", "value": 9 },
                            { "name": "\u5c3e\u53f6\u6a31\u6843", "value": 3 }
                        ]
                    },
                    {
                        "name": "\u65e0\u60a3\u5b50\u79d1",
                        "value": 14,
                        "children": [
                            { "name": "\u65e0\u60a3\u5b50", "value": 5 },
                            { "name": "\u590d\u7fbd\u53f6\u683e\u6811", "value": 9 }
                        ]
                    },
                    {
                        "name": "\u60ac\u94c3\u6728\u79d1",
                        "value": 58,
                        "children": [{ "name": "\u4e8c\u7403\u60ac\u94c3\u6728", "value": 58 }]
                    },
                    {
                        "name": "\u6a1f\u79d1",
                        "value": 122,
                        "children": [
                            { "name": "\u6a1f", "value": 118 },
                            { "name": "\u6708\u6842", "value": 4 }
                        ]
                    },
                    {
                        "name": "\u6986\u79d1",
                        "value": 39,
                        "children": [
                            { "name": "\u6989\u6811", "value": 12 },
                            { "name": "\u6734\u6811", "value": 20 },
                            { "name": "\u6986\u6811", "value": 5 },
                            { "name": "\u6986\u5c5e", "value": 1 },
                            { "name": "\u6994\u6986", "value": 1 }
                        ]
                    },
                    {
                        "name": "\u94f6\u674f\u79d1",
                        "value": 26,
                        "children": [{ "name": "\u94f6\u674f", "value": 26 }]
                    },
                    {
                        "name": "\u69ed\u6811\u79d1",
                        "value": 46,
                        "children": [
                            { "name": "\u9e21\u722a\u69ed", "value": 32 },
                            { "name": "\u4e09\u89d2\u69ed", "value": 10 },
                            { "name": "\u5143\u5b9d\u69ed", "value": 4 }
                        ]
                    },
                    {
                        "name": "\u6768\u67f3\u79d1",
                        "value": 26,
                        "children": [
                            { "name": "\u5782\u67f3", "value": 22 },
                            { "name": "\u52a0\u62ff\u5927\u6768", "value": 1 },
                            { "name": "\u65f1\u67f3", "value": 3 }
                        ]
                    },
                    {
                        "name": "\u7f57\u6c49\u677e\u79d1",
                        "value": 28,
                        "children": [
                            { "name": "\u7f57\u6c49\u677e", "value": 17 },
                            { "name": "\u77ed\u53f6\u7f57\u6c49\u677e", "value": 11 }
                        ]
                    },
                    {
                        "name": "\u82cf\u94c1",
                        "value": 13,
                        "children": [{ "name": "\u82cf\u94c1", "value": 13 }]
                    },
                    {
                        "name": "\u677e",
                        "value": 4,
                        "children": [{ "name": "\u65e5\u672c\u4e94\u9488\u677e", "value": 4 }]
                    },
                    {
                        "name": "\u68d5\u6988\u79d1",
                        "value": 43,
                        "children": [
                            { "name": "\u52a0\u62ff\u5229\u6d77\u67a3", "value": 2 },
                            { "name": "\u68d5\u6988", "value": 41 }
                        ]
                    },
                    {
                        "name": "\u677e\u79d1",
                        "value": 25,
                        "children": [
                            { "name": "\u96ea\u677e", "value": 24 },
                            { "name": "\u9a6c\u5c3e\u677e", "value": 1 }
                        ]
                    },
                    {
                        "name": "\u8776\u5f62\u82b1\u79d1",
                        "value": 4,
                        "children": [{ "name": "\u69d0", "value": 4 }]
                    },
                    {
                        "name": "\u5927\u621f\u79d1",
                        "value": 11,
                        "children": [{ "name": "\u4e4c\u6855", "value": 11 }]
                    },
                    {
                        "name": "\u6728\u7280\u79d1",
                        "value": 29,
                        "children": [{ "name": "\u5973\u8d1e", "value": 29 }]
                    },
                    {
                        "name": "\u6768\u6885\u79d1",
                        "value": 9,
                        "children": [{ "name": "\u6768\u6885", "value": 9 }]
                    },
                    {
                        "name": "\u6f06\u6811\u79d1",
                        "value": 5,
                        "children": [
                            { "name": "\u5357\u9178\u67a3", "value": 4 },
                            { "name": "\u9ec4\u8fde\u6728", "value": 1 }
                        ]
                    },
                    {
                        "name": "\u67cf\u79d1",
                        "value": 17,
                        "children": [
                            { "name": "\u5706\u67cf", "value": 11 },
                            { "name": "\u4fa7\u67cf", "value": 5 },
                            { "name": "\u523a\u67cf", "value": 1 }
                        ]
                    },
                    {
                        "name": "\u91d1\u7f15\u6885\u79d1",
                        "value": 15,
                        "children": [{ "name": "\u67ab\u9999\u6811", "value": 15 }]
                    },
                    {
                        "name": "\u80e1\u6843\u79d1",
                        "value": 3,
                        "children": [{ "name": "\u67ab\u6768", "value": 3 }]
                    },
                    {
                        "name": "\u9a6c\u97ad\u8349\u79d1",
                        "value": 2,
                        "children": [{ "name": "\u6d77\u5dde\u5e38\u5c71", "value": 2 }]
                    },
                    {
                        "name": "\u7d2b\u8473\u79d1",
                        "value": 11,
                        "children": [
                            { "name": "\u6893", "value": 7 },
                            { "name": "\u9ec4\u91d1\u6811", "value": 4 }
                        ]
                    },
                    {
                        "name": "\u82e6\u6728\u79d1",
                        "value": 2,
                        "children": [{ "name": "\u81ed\u693f", "value": 2 }]
                    },
                    {
                        "name": "\u68a7\u6850\u79d1",
                        "value": 3,
                        "children": [{ "name": "\u68a7\u6850", "value": 3 }]
                    },
                    {
                        "name": "\u6851\u79d1",
                        "value": 2,
                        "children": [{ "name": "\u6784\u6811", "value": 2 }]
                    },
                    {
                        "name": "\u6843\u91d1\u5a18\u79d1",
                        "value": 1,
                        "children": [{ "name": "\u7ea2\u5343\u5c42", "value": 1 }]
                    },
                    {
                        "name": "\u7384\u53c2\u79d1",
                        "value": 2,
                        "children": [{ "name": "\u767d\u82b1\u6ce1\u6850", "value": 2 }]
                    },
                    {
                        "name": "\u8c46\u79d1",
                        "value": 2,
                        "children": [{ "name": "\u523a\u69d0", "value": 2 }]
                    },
                    {
                        "name": "\u84dd\u679c\u6811\u79d1",
                        "value": 7,
                        "children": [{ "name": "\u559c\u6811", "value": 7 }]
                    },
                    {
                        "name": "\u695d\u79d1",
                        "value": 3,
                        "children": [
                            { "name": "\u9999\u693f", "value": 2 },
                            { "name": "\u695d", "value": 1 }
                        ]
                    },
                    {
                        "name": "\u5c71\u8331\u8438\u79d1",
                        "value": 1,
                        "children": [{ "name": "\u6bdb\u68be", "value": 1 }]
                    },
                    {
                        "name": "\u6728\u5170",
                        "value": 2,
                        "children": [
                            { "name": "\u7ef6\u8349", "value": 1 },
                            { "name": "\u4e50\u660c\u542b\u7b11", "value": 1 }
                        ]
                    },
                    {
                        "name": "\u542b\u7f9e\u8349\u79d1",
                        "value": 1,
                        "children": [{ "name": "\u5408\u6b22", "value": 1 }]
                    },
                    {
                        "name": "\u675c\u82f1\u79d1",
                        "value": 6,
                        "children": [{ "name": "\u675c\u82f1", "value": 6 }]
                    },
                    {
                        "name": "\u82b8\u9999\u79d1",
                        "value": 1,
                        "children": [{ "name": "\u67da", "value": 1 }]
                    }
                ]
            },
            {
                "name": "\u8349\u672c",
                "value": 18,
                "children": [
                    {
                        "name": "\u7af9\u828b\u79d1",
                        "value": 1,
                        "children": [{ "name": "\u518d\u529b\u82b1", "value": 1 }]
                    },
                    {
                        "name": "\u7f8e\u4eba\u8549\u79d1",
                        "value": 1,
                        "children": [{ "name": "\u7f8e\u4eba\u8549", "value": 1 }]
                    },
                    {
                        "name": "\u79be\u672c\u79d1",
                        "value": 3,
                        "children": [{ "name": "\u7d2b\u7af9", "value": 3 }]
                    },
                    {
                        "name": "\u83b2\u79d1",
                        "value": 2,
                        "children": [{ "name": "\u83b2", "value": 2 }]
                    },
                    {
                        "name": "\u77f3\u849c\u79d1",
                        "value": 5,
                        "children": [{ "name": "\u8471\u83b2", "value": 5 }]
                    },
                    {
                        "name": "\u8776\u5f62\u82b1\u79d1",
                        "value": 1,
                        "children": [{ "name": "\u767d\u8f66\u8f74\u8349", "value": 1 }]
                    },
                    {
                        "name": "\u77f3\u849c",
                        "value": 1,
                        "children": [{ "name": "\u77f3\u849c", "value": 1 }]
                    },
                    {
                        "name": "\u5341\u5b57\u82b1",
                        "value": 2,
                        "children": [
                            {
                                "name": "\u8bf8\u845b\u83dc\uff08\u4e8c\u6708\u5170\uff09",
                                "value": 2
                            }
                        ]
                    },
                    {
                        "name": "\u83ca\u79d1",
                        "value": 1,
                        "children": [{ "name": "\u9ec4\u91d1\u83ca", "value": 1 }]
                    },
                    {
                        "name": "\u9162\u6d46\u8349\u79d1",
                        "value": 1,
                        "children": [{ "name": "\u7ea2\u82b1\u9162\u6d46\u8349", "value": 1 }]
                    }
                ]
            },
            {
                "name": "\u704c\u6728",
                "value": 1382,
                "children": [
                    {
                        "name": "\u51ac\u9752\u79d1",
                        "value": 16,
                        "children": [
                            { "name": "\u9f9f\u7532\u51ac\u9752", "value": 6 },
                            { "name": "\u65e0\u523a\u67b8\u9aa8", "value": 9 },
                            { "name": "\u51ac\u9752", "value": 1 }
                        ]
                    },
                    {
                        "name": "\u6728\u7280\u79d1",
                        "value": 186,
                        "children": [
                            { "name": "\u4e91\u5357\u9ec4\u99a8", "value": 17 },
                            { "name": "\u91d1\u949f\u82b1", "value": 17 },
                            { "name": "\u6728\u7280", "value": 101 },
                            { "name": "\u5c0f\u8721", "value": 14 },
                            { "name": "\u8fce\u6625\u82b1", "value": 9 },
                            { "name": "\u65e5\u672c\u5973\u8d1e", "value": 15 },
                            { "name": "\u5c0f\u53f6\u5973\u8d1e", "value": 10 },
                            { "name": "\u67ca\u6811", "value": 1 },
                            { "name": "\u4e01\u9999", "value": 2 }
                        ]
                    },
                    {
                        "name": "\u675c\u9e43\u82b1\u79d1",
                        "value": 65,
                        "children": [{ "name": "\u675c\u9e43", "value": 65 }]
                    },
                    {
                        "name": "\u536b\u77db",
                        "value": 30,
                        "children": [
                            { "name": "\u91d1\u8fb9\u51ac\u9752\u536b\u77db", "value": 30 }
                        ]
                    },
                    {
                        "name": "\u9ec4\u6768\u79d1",
                        "value": 163,
                        "children": [{ "name": "\u9ec4\u6768", "value": 163 }]
                    },
                    {
                        "name": "\u91d1\u7f15\u6885\u79d1",
                        "value": 90,
                        "children": [
                            { "name": "\u7ea2\u82b1\u6ab5\u6728", "value": 84 },
                            { "name": "\u868a\u6bcd\u6811", "value": 6 }
                        ]
                    },
                    {
                        "name": "\u8537\u8587\u79d1",
                        "value": 165,
                        "children": [
                            { "name": "\u7ea2\u53f6\u77f3\u6960", "value": 39 },
                            { "name": "\u6843", "value": 15 },
                            { "name": "\u7c89\u82b1\u7ee3\u7ebf\u83ca", "value": 9 },
                            { "name": "\u76b1\u76ae\u6728\u74dc", "value": 20 },
                            { "name": "\u706b\u68d8", "value": 12 },
                            { "name": "\u6787\u6777", "value": 10 },
                            { "name": "\u6d77\u68e0\u5c5e", "value": 11 },
                            { "name": "\u897f\u5e9c\u6d77\u68e0", "value": 12 },
                            { "name": "\u6708\u5b63\u82b1", "value": 6 },
                            { "name": "\u68e3\u68e0\u82b1", "value": 6 },
                            { "name": "\u6986\u53f6\u6885", "value": 1 },
                            { "name": "\u6728\u74dc", "value": 3 },
                            { "name": "\u4e1c\u9633\u9526", "value": 6 },
                            { "name": "\u9ea6\u674e", "value": 3 },
                            { "name": "\u6a31\u5c5e", "value": 11 },
                            { "name": "\u79cb\u5b50\u68a8", "value": 1 }
                        ]
                    },
                    {
                        "name": "\u5c0f\u6a97\u79d1",
                        "value": 33,
                        "children": [
                            { "name": "\u5357\u5929\u7af9", "value": 20 },
                            { "name": "\u72ed\u53f6\u5341\u5927\u529f\u52b3", "value": 6 },
                            { "name": "\u9614\u53f6\u5341\u5927\u529f\u52b3", "value": 2 },
                            { "name": "\u5341\u5927\u529f\u52b3", "value": 3 },
                            { "name": "\u8c6a\u732a\u523a", "value": 2 }
                        ]
                    },
                    {
                        "name": "\u4e94\u798f\u82b1\u79d1",
                        "value": 60,
                        "children": [
                            { "name": "\u65e5\u672c\u73ca\u745a\u6811", "value": 57 },
                            { "name": "\u7ee3\u7403\u835a\u84be", "value": 3 }
                        ]
                    },
                    {
                        "name": "\u4e94\u52a0\u79d1",
                        "value": 31,
                        "children": [{ "name": "\u516b\u89d2\u91d1\u76d8", "value": 31 }]
                    },
                    {
                        "name": "\u8537\u8587",
                        "value": 24,
                        "children": [
                            { "name": "\u78a7\u6843", "value": 4 },
                            { "name": "\u65e5\u672c\u665a\u6a31", "value": 13 },
                            { "name": "\u674f", "value": 3 },
                            { "name": "\u91ce\u8537\u8587", "value": 1 },
                            { "name": "\u6b27\u6d32\u9178\u6a31\u6843", "value": 1 },
                            { "name": "\u6bdb\u5c71\u8346\u5b50", "value": 1 },
                            { "name": "\u73ab\u7470\u67f1\u6d77\u68e0", "value": 1 }
                        ]
                    },
                    {
                        "name": "\u51ac\u9752",
                        "value": 21,
                        "children": [{ "name": "\u67b8\u9aa8", "value": 21 }]
                    },
                    {
                        "name": "\u5343\u5c48\u83dc\u79d1",
                        "value": 17,
                        "children": [{ "name": "\u7d2b\u8587", "value": 17 }]
                    },
                    {
                        "name": "\u5c71\u8336",
                        "value": 42,
                        "children": [
                            { "name": "\u8336\u6885", "value": 14 },
                            { "name": "\u5c71\u8336", "value": 28 }
                        ]
                    },
                    {
                        "name": "\u6728\u7280",
                        "value": 17,
                        "children": [
                            { "name": "\u767d\u4e01\u9999", "value": 3 },
                            { "name": "\u91d1\u53f6\u5973\u8d1e", "value": 11 },
                            { "name": "\u7d2b\u4e01\u9999", "value": 3 }
                        ]
                    },
                    {
                        "name": "\u8776\u5f62\u82b1\u79d1",
                        "value": 5,
                        "children": [{ "name": "\u9f99\u722a\u69d0", "value": 5 }]
                    },
                    {
                        "name": "\u79be\u672c\u79d1",
                        "value": 33,
                        "children": [
                            { "name": "\u5b5d\u987a\u7af9", "value": 24 },
                            { "name": "\u7af9.sp", "value": 8 },
                            { "name": "\u9614\u53f6\u7bac\u7af9", "value": 1 }
                        ]
                    },
                    {
                        "name": "\u6d77\u6850\u82b1\u79d1",
                        "value": 47,
                        "children": [{ "name": "\u6d77\u6850", "value": 47 }]
                    },
                    {
                        "name": "\u5c71\u8331\u8438\u79d1",
                        "value": 48,
                        "children": [
                            { "name": "\u6d12\u91d1\u6843\u53f6\u73ca\u745a", "value": 25 },
                            { "name": "\u6843\u53f6\u73ca\u745a", "value": 3 },
                            { "name": "\u9752\u6728", "value": 20 }
                        ]
                    },
                    {
                        "name": "\u7684",
                        "value": 1,
                        "children": [{ "name": "\u732b\u513f\u523a", "value": 1 }]
                    },
                    {
                        "name": "\u85e4\u9ec4\u79d1",
                        "value": 31,
                        "children": [{ "name": "\u91d1\u4e1d\u6843", "value": 31 }]
                    },
                    {
                        "name": "\u77f3\u69b4\u79d1",
                        "value": 30,
                        "children": [{ "name": "\u77f3\u69b4", "value": 30 }]
                    },
                    {
                        "name": "\u7ee3\u7403\u82b1\u79d1",
                        "value": 10,
                        "children": [{ "name": "\u7ee3\u7403", "value": 10 }]
                    },
                    {
                        "name": "\u6851\u79d1",
                        "value": 4,
                        "children": [{ "name": "\u65e0\u82b1\u679c", "value": 4 }]
                    },
                    {
                        "name": "\u831c\u8349",
                        "value": 4,
                        "children": [{ "name": "\u91d1\u8fb9\u516d\u6708\u96ea", "value": 4 }]
                    },
                    {
                        "name": "\u5fcd\u51ac\u79d1",
                        "value": 4,
                        "children": [
                            { "name": "\u65e5\u672c\u9526\u5e26\u82b1", "value": 2 },
                            { "name": "\u9526\u5e26\u82b1", "value": 2 }
                        ]
                    },
                    {
                        "name": "\u67cf\u79d1",
                        "value": 33,
                        "children": [{ "name": "\u9f99\u67cf", "value": 33 }]
                    },
                    {
                        "name": "\u767e\u5408\u79d1",
                        "value": 1,
                        "children": [{ "name": "\u51e4\u5c3e\u4e1d\u5170", "value": 1 }]
                    },
                    {
                        "name": "\u4e91\u5b9e\u79d1",
                        "value": 32,
                        "children": [{ "name": "\u7d2b\u8346", "value": 32 }]
                    },
                    {
                        "name": "\u5927\u621f\u79d1",
                        "value": 3,
                        "children": [{ "name": "\u5c71\u9ebb\u6746", "value": 3 }]
                    },
                    {
                        "name": "\u80e1\u9893\u5b50\u79d1",
                        "value": 7,
                        "children": [{ "name": "\u80e1\u9893\u5b50", "value": 7 }]
                    },
                    {
                        "name": "\u828d\u836f\u79d1",
                        "value": 2,
                        "children": [{ "name": "\u7261\u4e39", "value": 2 }]
                    },
                    {
                        "name": "\u536b\u77db\u79d1",
                        "value": 15,
                        "children": [{ "name": "\u51ac\u9752\u536b\u77db", "value": 15 }]
                    },
                    {
                        "name": "\u5939\u7af9\u6843\u79d1",
                        "value": 23,
                        "children": [{ "name": "\u5939\u7af9\u6843", "value": 23 }]
                    },
                    {
                        "name": "\u8721\u6885\u79d1",
                        "value": 31,
                        "children": [{ "name": "\u8721\u6885", "value": 31 }]
                    },
                    {
                        "name": "\u831c\u8349\u79d1",
                        "value": 29,
                        "children": [
                            { "name": "\u6800\u5b50", "value": 24 },
                            { "name": "\u72ed\u53f6\u6800\u5b50", "value": 2 },
                            { "name": "\u516d\u6708\u96ea", "value": 3 }
                        ]
                    },
                    {
                        "name": "\u82ad\u8549\u79d1",
                        "value": 1,
                        "children": [{ "name": "\u82ad\u8549", "value": 1 }]
                    },
                    {
                        "name": "\u9526\u8475\u79d1",
                        "value": 10,
                        "children": [
                            { "name": "\u6728\u69ff", "value": 9 },
                            { "name": "\u6728\u8299\u84c9", "value": 1 }
                        ]
                    },
                    {
                        "name": "\u82b8\u9999\u79d1",
                        "value": 2,
                        "children": [
                            { "name": "\u67d1\u6a58", "value": 1 },
                            { "name": "\u7af9\u53f6\u82b1\u6912", "value": 1 }
                        ]
                    },
                    {
                        "name": "\u6f06\u6811\u79d1",
                        "value": 1,
                        "children": [{ "name": "\u76d0\u80a4\u6728", "value": 1 }]
                    },
                    {
                        "name": "\u9f20\u674e\u79d1",
                        "value": 1,
                        "children": [{ "name": "\u6806", "value": 1 }]
                    },
                    {
                        "name": "\u9a6c\u97ad\u8349\u79d1",
                        "value": 1,
                        "children": [{ "name": "\u81ed\u7261\u4e39", "value": 1 }]
                    },
                    {
                        "name": "\u7ee3\u7403\u79d1",
                        "value": 4,
                        "children": [{ "name": "\u6eb2\u758f", "value": 4 }]
                    },
                    {
                        "name": "\u745e\u9999\u79d1",
                        "value": 4,
                        "children": [{ "name": "\u7ed3\u9999", "value": 4 }]
                    },
                    {
                        "name": "\u8c46\u79d1",
                        "value": 1,
                        "children": [{ "name": "\u91d1\u96c0\u513f", "value": 1 }]
                    },
                    {
                        "name": "\u6843\u91d1\u5a18\u79d1",
                        "value": 1,
                        "children": [{ "name": "\u9ec4\u91d1\u4e32\u94b1\u67f3", "value": 1 }]
                    },
                    {
                        "name": "\u6728\u6a28\u79d1",
                        "value": 1,
                        "children": [{ "name": "\u6728\u6a28\u6984", "value": 1 }]
                    },
                    {
                        "name": "\u9189\u9c7c\u8349\u79d1",
                        "value": 1,
                        "children": [{ "name": "\u5bc6\u8499\u82b1", "value": 1 }]
                    },
                    {
                        "name": "\u5fcd\u51ac",
                        "value": 1,
                        "children": [{ "name": "\u743c\u82b1", "value": 1 }]
                    }
                ]
            },
            {
                "name": "\u85e4\u672c",
                "value": 23,
                "children": [
                    {
                        "name": "\u536b\u77db\u79d1",
                        "value": 5,
                        "children": [{ "name": "\u6276\u82b3\u85e4", "value": 5 }]
                    },
                    {
                        "name": "\u8776\u5f62\u82b1\u79d1",
                        "value": 8,
                        "children": [{ "name": "\u7d2b\u85e4", "value": 8 }]
                    },
                    {
                        "name": "\u5939\u7af9\u6843\u79d1",
                        "value": 5,
                        "children": [
                            { "name": "\u7edc\u77f3", "value": 2 },
                            { "name": "\u82b1\u53f6\u8513\u957f\u6625\u82b1", "value": 3 }
                        ]
                    },
                    {
                        "name": "\u8537\u8587",
                        "value": 1,
                        "children": [{ "name": "\u4e03\u59ca\u59b9", "value": 1 }]
                    },
                    {
                        "name": "\u4e94\u52a0\u79d1",
                        "value": 1,
                        "children": [{ "name": "\u6d0b\u5e38\u6625\u85e4", "value": 1 }]
                    },
                    {
                        "name": "\u8537\u8587\u79d1",
                        "value": 1,
                        "children": [{ "name": "\u6728\u9999\u82b1", "value": 1 }]
                    },
                    {
                        "name": "\u7d2b\u8473\u79d1",
                        "value": 2,
                        "children": [{ "name": "\u51cc\u9704", "value": 2 }]
                    }
                ]
            }
        ]
        ,
        sort: "aesc",
        radius: [0, "90%"],
        label: {
            rotate: "radial",
            minAngle: 1,
        },
        labelLine: {
            show: true,
        },
        labelLayout: {
            hideOverlap: true,
        },
        emphasis: {
            focus: "ancestor",
        },
        nodeClick: "rootToNode",
        itemStyle: {
            borderWidth: 1,
            borderColor: "white",
        },
        levels: [
            {},
            {
                r0: "5%",
                r: "35%",
                labelLayout: {
                    moveOverlap: "shiftY",
                },
            },
            {
                r0: "35%",
                r: "65%",
            },
            {
                r0: "65%",
                r: "98%",
            },
        ],
    },
};
</script>

<template>
    <div :style="{ width: '600px', height: '600px' }">
        <Echarts :option="option as EChartsOption" />
    </div>
</template>
