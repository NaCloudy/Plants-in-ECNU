<template>
    <el-carousel :interval="4000" height="400px">
        <el-carousel-item v-for="item in images" :key="item.url">
<!-- 使用v-bind绑定不同的图片地址 -->
<img :src= "item.url" style="width: 100%; height: 100%;" />
        </el-carousel-item>
    </el-carousel>
</template>

<script setup lang="ts">
import { ref } from "vue";

import image1 from "../assets/carousel1.jpg";
import image2 from "../assets/carousel2.jpg";
import image3 from "../assets/carousel3.jpg";
import image4 from "../assets/carousel4.jpg";
import image5 from "../assets/carousel5.jpg";
const images = ref([
  { url: image1 },
  { url: image2 },
  { url: image3 },
  { url: image4 },
  { url: image5 },
]);
</script>

<style lang="scss">
.el-carousel__item h3 {
    color: #475669;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
    text-align: center;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
}

/* 为轮播图容器设置最大宽度 */
.el-carousel {
    max-width: 800px; /* 根据你的设计调整这个值 */
    margin: 0 auto;   /* 将轮播图水平居中 */
}
</style>
