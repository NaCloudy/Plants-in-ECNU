<template>
    <div>
        <!-- 图片轮播 -->
        <el-carousel :interval="4000" height="400px" type="card">
            <el-carousel-item v-for="item in images" :key="item.url">
                <!-- 使用v-bind绑定不同的图片地址 -->
                <img :src="item.url" style="width: 100%; height: 100%;" />
            </el-carousel-item>
        </el-carousel>

        <!-- 介绍卡片 -->
        <el-card class="intro-card">
            <h3>Plants in ECNU</h3>
            <p>
                身处华东师范大学的校园，不论哪个校区都能看见品种繁多的植物，有满目琳琅之感。其中，中北校区更是被称为上海的“花园学府”。
                而许多华师学子不了解的是，校园中的众多植物中，有一大部分是开放给所有校友领养的。在日夜生活的学校中拥有一株署上自己姓名和寄语的植物无疑是一件非常浪漫且有意义的事。
                于是我们结合了前后端、数据库的网页开发以及爬虫、可视化等的数据分析，以这一网站的形式进行呈现，旨在让大家对学校的植物与领养系统有更多认识。开启你的探索吧……
            </p>
        </el-card>
        <el-container>
            <el-main>
                <predict />
            </el-main>
        </el-container>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import image1 from "../assets/carousel1.jpg";
import image2 from "../assets/carousel2.jpg";
import image3 from "../assets/carousel3.jpg";
import image4 from "../assets/carousel4.jpg";
import image5 from "../assets/carousel5.jpg";
import predict from "./predict.vue";

const images = ref([
    { url: image1 },
    { url: image2 },
    { url: image3 },
    { url: image4 },
    { url: image5 },
]);


</script>

<style lang="scss">
/* 你现有的样式 */

/* 介绍卡片的额外样式 */
.intro-card {
    margin-top: 20px;
    /* 根据需要调整上边距 */
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.intro-card h3 {
    color: #333333;
    font-size: 1.5rem;
    margin-bottom: 10px;
    text-align: center;
}

.intro-card p {
    color: #555555;
    font-size: 1rem;
    line-height: 1.5;
}

/* 调整图片轮播的样式 */
.el-carousel {
    max-width: 100%;
    margin: 0 auto;
}
</style>
