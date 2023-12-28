<template>
    <div style="margin-top: 20px;">
            <el-radio-group v-model="school" size="large" @change="handleCampusChange">
                <el-radio-button label="中北" />
                <el-radio-button label="闵行" />
            </el-radio-group>
            <el-radio-group v-model="iconkind" size="large" style="margin-left: 80px;" @change="IconChange">
                <el-radio-button label="全部" />
                <el-radio-button label="灌木" />
                <el-radio-button label="藤本" />
                <el-radio-button label="草本" />
                <el-radio-button label="乔木" />
            </el-radio-group>
            <el-radio-group v-model="select" size="large" style="margin-left: 80px;" @change="SelectedChange">
                <el-radio-button label="全部" />
                <el-radio-button label="已认领" />
                <el-radio-button label="未认领" />
            </el-radio-group>
            <el-radio-group v-model="model" size="large" style="margin-left: 80px;" @change="ModelChange">
                <el-radio-button label="地图" />
                <el-radio-button label="植物库" />
            </el-radio-group>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import emitter from "../bus"
const route = useRoute();
const router = useRouter();
const school = ref('中北')
const select = ref('全部')
const iconkind = ref('全部')
const model = ref('地图')
// 提供泛型参数让 emitter 能自动推断参数类型

const handleCampusChange = () => {
    emitter.emit('campusChange', school.value);
    console.log(school.value);
}

const SelectedChange = () => {
    emitter.emit('selectedChange', select.value);
    console.log(select.value);
}

const IconChange = () => {
    emitter.emit('iconChange', iconkind.value);
    console.log(iconkind.value);
}

const ModelChange = () => {
    emitter.emit('modelChange', model.value);
    console.log(model.value);
}

/*  <div class="demo-type">
    <el-avatar :size="60" style="margin-left: 80px;">
                    <img src="./icons/1.png" />
                </el-avatar>
                <el-avatar :size="60" style="margin-left: 20px;">
                    <img src="./icons/2.png" />
                </el-avatar>
                <el-avatar :size="60" style="margin-left: 20px;">
                    <img src="./icons/3.png" />
                </el-avatar>
                <el-avatar :size="60" style="margin-left: 20px;">
                    <img src="./icons/4.png" />
                </el-avatar>
    </div>
*/
</script>

<style lang="scss"></style>
