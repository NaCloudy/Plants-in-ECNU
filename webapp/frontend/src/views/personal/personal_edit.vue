<template>
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://unpkg.com/element-ui@2.15.13/lib/theme-chalk/index.css">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous" />
        <!-- Include stylesheet -->
        <link href="https://cdn.quilljs.com/1.3.4/quill.core.css" rel="stylesheet">
        <link href="https://cdn.quilljs.com/1.3.4/quill.snow.css" rel="stylesheet">
        <link href="https://cdn.quilljs.com/1.3.4/quill.bubble.css" rel="stylesheet">
        <title>修改个人信息</title>
    </head>

    <body>
        <div class="page-head">
            <div>吃货小花狮</div>
        </div>
        <div id="app" class="container">
            <!--main-->
            <div class="main-body">
                <img src="../photos/default.jpg" class="mx-auto d-block personal-icon rounded-circle">
                <div class="personal-info">昵称：<el-input v-model="name" placeholder="请输入内容" class="input-box"></el-input>
                </div>
                <div class="personal-info">邮箱：<el-input v-model="email" placeholder="请输入内容" class="input-box"></el-input>
                </div>
                <div class="block-1">喜好</div>
                <div class="block-2">
                    <el-checkbox-group v-model="checkList">
                        <el-checkbox label="河东食堂"></el-checkbox>
                        <el-checkbox label="河西食堂"></el-checkbox>
                        <el-checkbox label="丽娃食堂"></el-checkbox>
                    </el-checkbox-group>
                    <div class="block-3">窗口</div>
                    <div class="block-3">菜品</div>
                </div>
                <div class="d-grid gap-2 col-4 mx-auto block-4">
                    <button type="button" class="btn btn-success btn-1" @click="changePersonalInfo">提交</button>
                </div>
            </div>



            <!--navbar-->
            <nav class="navbar fixed-bottom bg-body-tertiary">
                <div class="footer">
                    <div class="row row-cols-5">
                        <div class="col" onclick="location.href='canteen.html'">
                            <img src="icons/nav-black/caipin-.png" class="icons" />
                            <p class="icon-word">菜品</p>
                        </div>
                        <div class="col" onclick="location.href='community.html'">
                            <img src="icons/nav-black/shequ.png" class="icons" />
                            <p class="icon-word">社区</p>
                        </div>
                        <div class="col" onclick="location.href='index.html'">
                            <img src="icons/nav-black/shouye.png" class="icons" />
                            <p class="icon-word">首页</p>
                        </div>
                        <div class="col" onclick="location.href='record.html'">
                            <img src="icons/nav-black/daka-copy.png" class="icons" />
                            <p class="icon-word">打卡</p>
                        </div>
                        <div class="col" onclick="location.href='personal.html'">
                            <img src="icons/nav-green/geren.png" class="icons" />
                            <p class="icon-word">个人</p>
                        </div>
                    </div>
                </div>
            </nav>


        </div>
    </body>
</template>

<script setup lang="ts">
import { } from "vue"
</script>

<style lang="scss" scoped></style>
