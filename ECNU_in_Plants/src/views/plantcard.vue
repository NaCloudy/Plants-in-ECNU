<template>
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
                    <span class="info-label">校区:</span>
                    <el-text>{{ selectedPlant.place }}</el-text>
                </div>
                <div class="info-item">
                    <span class="info-label">位置:</span>
                    <el-text>{{ selectedPlant.number }}</el-text>
                </div>
                <div class="info-item">
                    <span class="info-label">领养情况:</span>
                    <el-text>{{ selectedPlant.hasOwner }}</el-text>
                </div>
                <div class="info-item">
                    <span class="info-label">关键词:</span>
                    <el-text>{{ selectedPlant.key_phrase }}</el-text>
                </div>
                <div class="info-item">
                    <span class="info-label">领养时间:</span>
                    <el-text>{{ selectedPlant.updatetime }}</el-text>
                </div>
            </div>
        </el-card>
    </el-col>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import emitter from "../bus";
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

emitter.on('plantvalueChange', (plantvalue: any) => {
console.log(plantvalue);
selectedPlant.value = plantvalue;
});

</script>

<style lang="scss" scoped>
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
