<template>
    <div>
        <el-radio-group v-model="radio1" size="large">
            <el-radio-button label="植物类型" />
            <el-radio-button label="领养学院分布" />
            <el-radio-button label="植物信息总览" />
        </el-radio-group>
    </div>
    <div>
        <el-card v-if="radio1 === '植物类型'" class="box-card">
            <charts_A />
        </el-card>
        <el-card v-if="radio1 === '领养学院分布'" class="box-card">
            <charts_B />
        </el-card>
        <el-card v-if="radio1 === '植物信息总览'" class="box-card">
            <charts_C />
        </el-card>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import charts_A from "../charts/charts_A.vue"
import charts_B from "../charts/charts_B.vue"
import charts_C from "../charts/charts_C.vue"
const radio1 = ref('植物类型')
</script>

<style lang="scss" scoped>
.box-card {
    width: 85%;
    height: 85%;
    margin-top: 20px;
    display: flex;
    justify-content: center;
}
</style>
