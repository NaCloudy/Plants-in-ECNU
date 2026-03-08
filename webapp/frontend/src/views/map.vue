<template>
    <el-container>
        <el-row>
            <!-- 地图容器 -->
            <el-container style="margin-bottom: 20px;">
                <topbar />
            </el-container>
            <div class="outline">
                <div v-show ="currentComponent === 'plantmap'">
                <div id="container"></div>
            </div>
                <div v-show ="currentComponent === 'plantlibrary'">
                    <plantlibrary />
                </div>
            </div>

            <!-- 植物信息卡片 -->

            <plantcard />
        </el-row>
    </el-container>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import emitter from "../bus";
import topbar from "./topbar.vue";
import TryJson from '../assets/try.json';
import plantcard from './plantcard.vue';
import plantlibrary from './plantlibrary.vue';

var selecteddata = TryJson;
var icondata = TryJson;
var filteredData = [];

var marker = null;
var map = null;
var markersArray = [];
const currentComponent = ref('plantmap');

const selectedPlant = ref
    ({
        name: '',
        id: '',
        scientificName: '',
        scientificNameEn: '',
        habit: '',
        branch: '',
        place: '',
        number: '',
        hasOwner: '',
        key_phrase: '',
        updatetime: ''
    });

    const center = ref({ lat: 31.227073, lng: 121.406079 });
    // 创建并初始化地图
    
const initMap = () => {
    // 如果使用 v-if的话地图重复加载id，故选择 v-show
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

    emitter.on('modelChange', (model: string) => {
        if (model === '地图') {
            currentComponent.value = 'plantmap';
            initMap();
        } else {
            currentComponent.value = 'plantlibrary';
        } 
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
                        "id": selecteddata[i].id,
                        "habit": selecteddata[i].template.habit,
                        "branch": selecteddata[i].template.branch,
                        "place": selecteddata[i].place,
                        "number": selecteddata[i].number,
                        "hasOwner": selecteddata[i].hasOwner,
                        "key_phrase": selecteddata[i].key_phrase,
                        "updatetime": selecteddata[i].updatedAt,
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
                { name: any; id: any; scientificName: any; scientificNameEn: any; habit: any; branch: any; place: any; number: any; hasOwner: any; key_phrase: any; updatetime: any;}
            };
        }) => {
            infoWindow.open();
            infoWindow.setPosition(evt.geometry.position);
            infoWindow.setContent(evt.geometry.properties.name);
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
                number: evt.geometry.properties.number,
                hasOwner: evt.geometry.properties.hasOwner,
                key_phrase: evt.geometry.properties.key_phrase,
                updatetime: evt.geometry.properties.updatetime,
            };
            console.log(evt.geometry.properties);
            emitter.emit('plantvalueChange',selectedPlant.value)
        });
    };
};


onMounted(() => {
    nextTick(() => {
        initMap();
    });
});

onUpdated(() => {
    nextTick(() => {
        // 在组件更新时重新初始化地图，确保地图容器可见
        initMap();
    });
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
    filteredData = selecteddata.filter(item => icondata.includes(item));
    console.log(filteredData)
    console.log(icondata)
    console.log(selecteddata)
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
                        "id": filteredData[i].id,
                        "habit": filteredData[i].template.habit,
                        "branch": filteredData[i].template.branch,
                        "place": filteredData[i].place,
                        "number": filteredData[i].number,
                        "hasOwner": filteredData[i].hasOwner,
                        "key_phrase": filteredData[i].key_phrase,
                        "updatetime": filteredData[i].updatedAt,
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
                { name: any; id: any; scientificName: any; scientificNameEn: any; habit: any; branch: any; place: any; number: any; hasOwner: any; key_phrase: any; updatetime: any;}
            };
        }) => {
            infoWindow.open();
            infoWindow.setPosition(evt.geometry.position);
            infoWindow.setContent(evt.geometry.properties.name);
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
                number: evt.geometry.properties.number,
                hasOwner: evt.geometry.properties.hasOwner,
                key_phrase: evt.geometry.properties.key_phrase,
                updatetime: evt.geometry.properties.updatetime,
            };
            console.log(evt.geometry.properties);
            emitter.emit('plantvalueChange',selectedPlant.value)
        });
    }

    };
</script>
<style lang="scss" scoped>
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