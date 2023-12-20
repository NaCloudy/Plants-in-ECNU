<template>
    <el-container>
        <el-row>
            <!-- 地图容器 -->
            <el-container style="margin-bottom: 20px;">
                <topbar />
            </el-container>
            <div class="outline">
                <div id="container"></div>
            </div>

            <!-- 植物信息卡片 -->

            <el-col :span="6">
                <el-card class="box-card">
                    <div slot="header" class="clearfix" style="text-align: center; font-size: 24px; font-weight: bold;">
                        <span>植物信息</span>
                    </div>
                    <div class="plant-info">
                        <!-- Add some styles to the plant information -->
                        <div class="info-item">
                            <span class="info-label">植物名称:</span>
                            <el-text>{{ selectedPlant.name }}</el-text>
                        </div>
                        <div class="info-item">
                            <span class="info-label">ID:</span>
                            <el-text>{{ selectedPlant.id }}</el-text>
                        </div>
                        <div class="info-item">
                            <span class="info-label">学名:</span>
                            <el-text>{{ selectedPlant.scientificName }}</el-text>
                        </div>
                        <div class="info-item">
                            <span class="info-label">英文学名:</span>
                            <el-text>{{ selectedPlant.scientificNameEn }}</el-text>
                        </div>
                        <div class="info-item">
                            <span class="info-label">习性:</span>
                            <el-text>{{ selectedPlant.habit }}</el-text>
                        </div>
                        <div class="info-item">
                            <span class="info-label">分支:</span>
                            <el-text>{{ selectedPlant.branch }}</el-text>
                        </div>
                        <div class="info-item">
                            <span class="info-label">位置:</span>
                            <el-text>{{ selectedPlant.place }}</el-text>
                        </div>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </el-container>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import emitter from "../bus";
import topbar from "./topbar.vue";
import TestJson from '../assets/all_templates.json';
import TreeJson from '../assets/all_trees.json';
import TryJson from '../assets/try.json';

let tryJsonData = ref(TryJson);// 使用 ref 使其具有响应性
var selecteddata = tryJsonData.value;
var icondata = tryJsonData.value;
var filteredData = [];

var marker = null;
var map = null;
var markersArray = [];

const selectedPlant = ref
    ({
        name: '',
        id: '',
        scientificName: '',
        scientificNameEn: '',
        habit: '',
        branch: '',
        place: ''
    });

    const center = ref({ lat: 31.227073, lng: 121.406079 });
    // 创建并初始化地图
    
const initMap = () => {
    
    map = new (window as any).TMap.Map(document.getElementById('container'), {
        center: center.value,
        zoom: 18,
    });
    // 定义地图中心点坐标
    emitter.on('campusChange', (school: string) => {
        if (school === '闵行') {
            center.value = { lat: 31.03148, lng: 121.453725 };
            map.setCenter(center.value);
        } else {
            center.value = { lat: 31.227073, lng: 121.406079 };
            map.setCenter(center.value);
        }
    });

    emitter.on('selectedChange', (select: string) => {
        if (select === '已认领'){
            selecteddata = TryJson.filter(item => item.owner !== null);
        } else if (select === '未认领'){
            selecteddata = TryJson.filter(item => item.owner === null);
        } else if (select === '全部'){
            selecteddata = TryJson;
        }
        console.log(selecteddata);
    });

    // 获取缩放控件
    const control = map.getControl((window as any).TMap.constants.DEFAULT_CONTROL_ID.ZOOM);
    control.setNumVisible(true);

    for (let i = 0; i < selecteddata.length; i++) {
        // 创建并初始化MultiMarker
    marker = new (window as any).TMap.MultiMarker({
            map: map,
            styles: {
                "myStyle": new (window as any).TMap.MarkerStyle({
                    "width": 50,
                    "height": 50,
                    "src": "https://www.xiaowu.fun/static/byt/" + selecteddata[i].template.icon.slice(-25),
                    "anchor": { x: 10, y: 30 }
                }),
            },

            geometries: [
                {
                    "id": "1",
                    "styleId": 'myStyle',
                    "position": new (window as any).TMap.LatLng(selecteddata[i].latitude, selecteddata[i].longitude),
                    "properties": {
                        "name": selecteddata[i].template.name,
                        "scientificName": selecteddata[i].template.scientificName,
                        "scientificNameEn": selecteddata[i].template.scientificNameEn,
                        "id": selecteddata[i].number,
                        "habit": selecteddata[i].template.habit,
                        "branch": selecteddata[i].template.branch,
                        "place": selecteddata[i].place,
                    }
                }
            ],
            
        });
        markersArray.push(marker);
        console.log("https://www.xiaowu.fun/static/byt/" + selecteddata[i].template.icon.slice(-25));

        // 初始化infoWindow
        const infoWindow = new (window as any).TMap.InfoWindow({
            map: map,
            position: new (window as any).TMap.LatLng(39.984104, 116.307503),
            offset: { x: 0, y: -32 }
        });

        infoWindow.close();


        // 监听标注点击事件
        marker.on("click", (evt: {
            geometry: {
                position: any; properties:
                { name: any; id: any; scientificName: any; scientificNameEn: any; habit: any; branch: any; place: any; }
            };
        }) => {
            infoWindow.open();
            infoWindow.setPosition(evt.geometry.position);
            infoWindow.setContent(evt.geometry.properties.name + evt.geometry.properties.id);
            //点击后右边出现介绍植物的卡片
            // 设置selectedPlant数据
            selectedPlant.value = {
                name: evt.geometry.properties.name,
                scientificName: evt.geometry.properties.scientificName,
                scientificNameEn: evt.geometry.properties.scientificNameEn,
                id: evt.geometry.properties.id,
                habit: evt.geometry.properties.habit,
                branch: evt.geometry.properties.branch,
                place: evt.geometry.properties.place,
            };
            console.log(evt.geometry.properties);
        });
    };
};


onMounted(() => {
    initMap();
});

emitter.on('iconChange', (iconkind: string) => {
        if (iconkind === '全部'){
            icondata = TryJson;
        } else {
        icondata = TryJson.filter(item => item.template.habit === iconkind);
    }
        console.log(icondata);
        updateFilteredData();
    });

emitter.on('selectedChange', (select: string) => {
        if (select === '已认领'){
            selecteddata = TryJson.filter(item => item.owner !== null);
        } else if (select === '未认领'){
            selecteddata = TryJson.filter(item => item.owner === null);
        } else if (select === '全部'){
            selecteddata = TryJson;
        }
        console.log(selecteddata);
        updateFilteredData();
    });

    // 根据两个筛选更新filteredData的函数
const updateFilteredData = () => {
    // 应用两个筛选条件（'icondata'和'selecteddata'）
    filteredData = icondata.filter(item => selecteddata.includes(item));
    
    // 根据filteredData更新地图上的标记
    updateMarkers();
};

    const updateMarkers = () => {
    markersArray.forEach((m) => m.setMap(null));
    markersArray = []; // 清除标记数组
        marker = null;
        for (let i = 0; i < filteredData.length; i++) {
        // 创建并初始化MultiMarker
    marker = new (window as any).TMap.MultiMarker({
            map: map,
            styles: {
                "myStyle": new (window as any).TMap.MarkerStyle({
                    "width": 50,
                    "height": 50,
                    "src": "https://www.xiaowu.fun/static/byt/" + filteredData[i].template.icon.slice(-25),
                    "anchor": { x: 10, y: 30 }
                }),
            },

            geometries: [
                {
                    "id": "1",
                    "styleId": 'myStyle',
                    "position": new (window as any).TMap.LatLng(filteredData[i].latitude, filteredData[i].longitude),
                    "properties": {
                        "name": filteredData[i].template.name,
                        "scientificName": filteredData[i].template.scientificName,
                        "scientificNameEn": filteredData[i].template.scientificNameEn,
                        "id": filteredData[i].number,
                        "habit": filteredData[i].template.habit,
                        "branch": filteredData[i].template.branch,
                        "place": filteredData[i].place,
                    }
                }
            ],
        });
                // 将创建的标记添加到标记数组中
            markersArray.push(marker);
                        // 初始化infoWindow
                        const infoWindow = new (window as any).TMap.InfoWindow({
            map: map,
            position: new (window as any).TMap.LatLng(39.984104, 116.307503),
            offset: { x: 0, y: -32 }
        });

        infoWindow.close();


        // 监听标注点击事件
        marker.on("click", (evt: {
            geometry: {
                position: any; properties:
                { name: any; id: any; scientificName: any; scientificNameEn: any; habit: any; branch: any; place: any; }
            };
        }) => {
            infoWindow.open();
            infoWindow.setPosition(evt.geometry.position);
            infoWindow.setContent(evt.geometry.properties.name + evt.geometry.properties.id);
            //点击后右边出现介绍植物的卡片
            // 设置selectedPlant数据
            selectedPlant.value = {
                name: evt.geometry.properties.name,
                scientificName: evt.geometry.properties.scientificName,
                scientificNameEn: evt.geometry.properties.scientificNameEn,
                id: evt.geometry.properties.id,
                habit: evt.geometry.properties.habit,
                branch: evt.geometry.properties.branch,
                place: evt.geometry.properties.place,
            };
            console.log(evt.geometry.properties);
        });
    }

    };
</script>
<style lang="scss">
.outline {
    width: 70%;
    margin-right: 20px;
}

/* 调整卡片容器的样式 */
.el-card {
    height: 550px;
    overflow: auto;
    padding: 10px;
}

.plant-info {
    padding: 20px;
}

.info-item {
    margin-bottom: 8px;
}

.info-label {
    font-weight: bold;
    margin-right: 8px;
}
</style>