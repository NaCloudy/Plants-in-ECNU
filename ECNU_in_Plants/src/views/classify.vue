<template>
    <div>
        <!-- 左侧选择框 -->
        <div>
            <el-radio-group v-model="radio1" size="large">
                <el-radio-button label="植物类型" />
                <el-radio-button label="领养情况" />
                <el-radio-button label="植物三维" />
            </el-radio-group>
        </div>

        <!-- 右侧卡片内容 -->
        <div>
            <!-- 植物类型卡片 -->
            <el-card v-if="radio1 === '植物类型'" class="box-card">
                <div>
                    <h3>植物类型统计</h3>
                    <p>
                        本图以类似饼图的形式，呈现了校园内登记在册的不同种类的植物数量。图中颜色映射代表了数量多少，数量越多越接近紫色和黄色，越少越接近绿色。本图植物分类分为三层：习性、科属、具体植物名称。在点击某一大类（例如“乔木”“杉科”）后，可以显示该大类下具体的小类分布。
                    </p>
                </div>
                <charts_B />
            </el-card>

            <!-- 领养情况卡片 -->
            <el-card v-if="radio1 === '领养情况'" class="box-card">
                <div>
                    <h3>植物领养情况统计</h3>
                    <p>
                        本图展示了植物认领人来自的学院以及偏好的品种。图像的左半部分是植物认领人学院分布的直观展示，而右半部分则是对被认领植物的种类分布的呈现。值得一提的是华师大代表性的植物水杉以碾压之势占据认领植物的绝大部分。
                    </p>
                </div>
                <charts_A />
            </el-card>

            <!-- 植物三维图卡片 -->
            <el-card v-if="radio1 === '植物三维'" class="box-card">
                <div>
                    <h3>植物三维图</h3>
                    <p>
                        本图为植物的“三维图”。图中每条线代表一株植物，颜色映射代表着植物的树高，越高越趋向于绿色，反之趋向于蓝紫色。此外，本图还反映了植物的胸径与冠幅，与树高组成植物的“三维”。由于其他植物的数据有缺失，本图以乔木植物的相关数据为主。
                    </p>
                </div>
                <charts_C />
            </el-card>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { ref } from "vue";
import charts_A from "../charts/charts_A.vue";
import charts_B from "../charts/charts_B.vue";
import charts_C from "../charts/charts_C.vue";
const radio1 = ref('植物类型');
</script>
  
<style lang="scss" scoped>
/* Your existing styles */

/* Additional styles for card content */
.box-card {
    width: 85%;
    height: 85%;
    margin-top: 20px;
    display: flex;
    justify-content: center;
}

.box-card h3 {
    font-size: 1.5rem;
    margin-bottom: 10px;
}

.box-card p {
    font-size: 1rem;
    color: #555555;
    line-height: 1.5;
}
</style>