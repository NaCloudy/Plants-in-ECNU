<template>
    <!-- Form -->
    <el-button size="large" type="success" text @click="visibleone = true">
        认领你的专属植物
    </el-button>

    <el-dialog v-model="visibleone" title="植物预测" center class>
        <el-form :model="form">
            <el-form-item label="姓名" :label-width="formLabelWidth">
                <el-input v-model="form.name" autocomplete="off" placeholder="看看你的名字和哪颗植物有缘"/>
            </el-form-item>
            <el-form-item label="校区" :label-width="formLabelWidth">
                <el-select v-model="form.region" placeholder="请选择校区">
                    <el-option label="普陀" value="普陀" />
                    <el-option label="闵行" value="闵行" />
                    <el-option label="随机" value="随机" />
                </el-select>
            </el-form-item>
            <el-form-item label="植物类型" :label-width="formLabelWidth">
                <el-select v-model="value" multiple collapse-tags collapse-tags-tooltip placeholder="请选择你喜欢的植物类型">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
            </el-form-item>
            <el-form-item label="模型选择" :label-width="formLabelWidth">
                <el-select v-model="form.date1" placeholder="请选择预测模型">
                    <el-option label="缘分" value="缘分" />
                    <el-option label="精确" value="精确" />
                </el-select>
            </el-form-item>
        </el-form>
        <template #footer>
            <span class="dialog-footer">
                <el-button type="danger" @click="visibleone = false">
                    残忍离开
                </el-button>
                <el-button type="success" @click="handlePredictClick">
                    一键预测
                </el-button>
            </span>
        </template>
    </el-dialog>
    <el-dialog v-model="visibletwo" title="预测结果" center width="40%">
        <el-col :span="6">
            <el-card class="box-card">
                <div slot="header" class="clearfix" style="text-align: center; font-size: 24px; font-weight: bold;">
                    <span>植物信息</span>
                </div>
                <div class="plant-info">
                    <!-- Add some styles to the plant information -->
                    <div class="info-item">
                        <span class="info-label">植物名称:</span>
                        <el-text>{{ randomPlant.name }}</el-text>
                    </div>
                    <div class="info-item">
                        <span class="info-label">学名:</span>
                        <el-text>{{ randomPlant.scientificName }}</el-text>
                    </div>
                    <div class="info-item">
                        <span class="info-label">英文学名:</span>
                        <el-text>{{ randomPlant.scientificNameEn }}</el-text>
                    </div>
                    <div class="info-item">
                        <span class="info-label">习性:</span>
                        <el-text>{{ randomPlant.habit }}</el-text>
                    </div>
                    <div class="info-item">
                        <span class="info-label">分支:</span>
                        <el-text>{{ randomPlant.branch }}</el-text>
                    </div>
                    <div class="info-item">
                        <span class="info-label">校区:</span>
                        <el-text>{{ randomPlant.place }}</el-text>
                    </div>
                    <div class="info-item">
                        <span class="info-label">位置:</span>
                        <el-text>{{ randomPlant.number }}</el-text>
                    </div>
                    <div class="info-item">
                        <span class="info-label">领养情况:</span>
                        <el-text>{{ randomPlant.hasOwner }}</el-text>
                    </div>
                    <div class="info-item">
                        <span class="info-label">关键词:</span>
                        <el-text>{{ randomPlant.key_phrase }}</el-text>
                    </div>
                    <img :src="imageURL" class="plant-image" />
                </div>
                
            </el-card>
        </el-col>
    </el-dialog>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import TryJson from '../assets/try.json';
console.log(TryJson);

const visibleone = ref(false)
const visibletwo = ref(false)
const formLabelWidth = '140px'

const form = reactive({
    name: '',
    region: '',
    date1: '',
    date2: '',
    delivery: false,
    type: [],
    resource: '',
    desc: '',
})

var imageURL = ''
const value = ref([])
const options = [
    {
        value: '灌木',
        label: '灌木',
    },
    {
        value: '藤本',
        label: '藤本',
    },
    {
        value: '草本',
        label: '草本',
    },
    {
        value: '乔木',
        label: '乔木',
    },
]

const randomPlant = ref({
    name: '',
    scientificName: '',
    scientificNameEn: '',
    habit: '',
    branch: '',
    place: '',
    number: '',
    hasOwner: '',
    key_phrase: '',
    id: 0,
    icon: ''
})

const getRandomPlant = () => {
    const randomIndex = Math.floor(Math.random() * TryJson.length);
    return TryJson[randomIndex];
}

const handlePredictClick = () => {
    // 获取一个随机植物
    const mydata = getRandomPlant();
    randomPlant.value = {
        name: mydata.template.name,
        scientificName: mydata.template.scientificName,
        scientificNameEn: mydata.template.scientificNameEn,
        habit: mydata.template.habit,
        branch: mydata.template.branch,
        place: mydata.place,
        number: mydata.number,
        hasOwner: mydata.hasOwner,
        key_phrase: mydata.key_phrase,
        id: mydata.id,
        icon: mydata.template.icon
    };

    // 打印随机植物的信息
    console.log('随机植物:', randomPlant);
    console.log('随机植物的名称:', randomPlant.value.name);

    // 处理渲染随机植物图标的其他逻辑，根据需要进行调整

    // 显示第二个对话框
    visibletwo.value = true;

    var baseURL = "https://www.xiaowu.fun/static/byt/";

    var imageName = randomPlant.value.icon.slice(-25);

    imageURL = baseURL + imageName;

}

</script>
<style scoped>
.el-button--text {
    margin-right: 15px;
}

.el-select {
    width: 300px;
}

.el-input {
    width: 300px;
}

.dialog-footer button:first-child {
    margin-right: 10px;
}

.el-card {
    height: 400px;
    width: 500px;
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

.box-card {
    position: relative;
    margin: 0 auto;
}

.plant-image {
    position: absolute;
    bottom: 0;
    right: 0;
    max-width: 100px; /* 根据需要调整大小 */
    max-height: 100px; /* 根据需要调整大小 */
}

</style>
