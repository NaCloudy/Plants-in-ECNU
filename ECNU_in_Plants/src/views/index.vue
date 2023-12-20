<template>
    <div>
        <div id="mapContainer"></div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import TryJson from '../assets/all_trees.json';

let map = ref(null);
let tryJsonData = ref(TryJson);// 使用 ref 使其具有响应性

onMounted(initMap);

function initMap() {


    var center = new (window as any).TMap.LatLng(31.03148, 121.453725);
    //初始化地图
    map = new (window as any).TMap.Map("mapContainer", {
        rotation: 360, //设置地图旋转角度
        pitch: 0, //设置俯仰角度（0~45）
        zoom: 18, //设置地图缩放级别
        center: center, //设置地图中心点坐标
    });

    // 创建点聚合
    var markerCluster = new (window as any).TMap.MarkerCluster({
        map: map,
        enableDefaultStyle: false, // 关闭默认样式
        minimumClusterSize: 3,
        geometries: tryJsonData.value.map(item => ({
            position: new (window as any).TMap.LatLng(item.latitude, item.longitude)
        })),
        zoomOnClick: true,
        gridSize: 60,
        averageCenter: false
    });

    var clusterBubbleList = [];
    var markerGeometries = [];
    var marker = null;

    // 监听聚合簇变化
    markerCluster.on('cluster_changed', function (e: any) {
        // 销毁旧聚合簇生成的覆盖物
        if (clusterBubbleList.length) {
            clusterBubbleList.forEach(function (item) {
                item.destroy();
            })
            clusterBubbleList = [];
        }
        markerGeometries = [];

        // 根据新的聚合簇数组生成新的覆盖物和点标记图层
        var clusters = markerCluster.getClusters();
        clusters.forEach(function (item: any) {
            if (item.geometries.length > 1) {
                let clusterBubble = new ClusterBubble({
                    map,
                    position: item.center,
                    content: item.geometries.length,
                });
                clusterBubble.on('click', () => {
                    map.fitBounds(item.bounds);
                });
                clusterBubbleList.push(clusterBubble);
            } else {
                markerGeometries.push({
                    position: item.center
                });
            }
        });
        if (marker) {
            // 已创建过点标记图层，直接更新数据
            marker.setGeometries(markerGeometries);
            console.log(markerGeometries);
        } else {
            // 创建点标记图层
            marker = new (window as any).TMap.MultiMarker({
                map,
                styles: {
                    default: new (window as any).TMap.MarkerStyle({
                        'width': 34,
                        'height': 42,
                        'anchor': {
                            x: 17,
                            y: 21,
                        },
                        'src': 'https://mapapi.qq.com/web/lbs/javascriptGL/demo/img/marker_blue.png',
                    }),
                },
                geometries: markerGeometries
            });
            console.log(markerGeometries);
    }
    });
}



function ClusterBubble(options: { map: any; position: any; content: any; }) {
    (window as any).TMap.DOMOverlay.call(this, options);
}

ClusterBubble.prototype = new (window as any).TMap.DOMOverlay();

ClusterBubble.prototype.onInit = function (options: { content: any; position: any; }) {
    this.content = options.content;
    this.position = options.position;
};

// 销毁时需要删除监听器
ClusterBubble.prototype.onDestroy = function () {
    this.dom.removeEventListener('click', this.onClick);
    this.removeAllListeners();
};

ClusterBubble.prototype.onClick = function () {
    this.emit('click');
};

// 创建气泡DOM元素
ClusterBubble.prototype.createDOM = function () {
    var dom = document.createElement('div');
    dom.classList.add('clusterBubble');
    dom.innerText = this.content;
    dom.style.cssText = [
        'width: ' + (40 + parseInt(this.content) * 2) + 'px;',
        'height: ' + (40 + parseInt(this.content) * 2) + 'px;',
        'line-height: ' + (40 + parseInt(this.content) * 2) + 'px;',
    ].join(' ');

    // 监听点击事件，实现zoomOnClick
    this.onClick = this.onClick.bind(this);
    dom.addEventListener('click', this.onClick);
    return dom;
};

ClusterBubble.prototype.updateDOM = function () {
    if (!this.map) {
        return;
    }
    // 经纬度坐标转容器像素坐标
    let pixel = this.map.projectToContainer(this.position);

    // 使文本框中心点对齐经纬度坐标点
    let left = pixel.getX() - this.dom.clientWidth / 2 + 'px';
    let top = pixel.getY() - this.dom.clientHeight / 2 + 'px';
    this.dom.style.transform = `translate(${left}, ${top})`;

    this.emit('dom_updated');
};
(window as any).ClusterBubble = ClusterBubble;
</script>

<style lang="scss">
/* 如果需要，可以在这里添加样式 */
#mapContainer {
    position: relative;
    height: 100%;
    width: 100%;
}

.clusterBubble {
    border-radius: 50%;
    color: #fff;
    font-weight: 500;
    text-align: center;
    opacity: 0.88;
    background-image: linear-gradient(139deg, #4294FF 0%, #295BFF 100%);
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.20);
    position: absolute;
    top: 0px;
    left: 0px;
}
</style>
