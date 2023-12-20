<template>
    <div class="table-container">
    <el-table ref="singleTableRef" :data="tableData" highlight-current-row style="width: 100%"
        @current-change="handleCurrentChange">
        <el-table-column type="index" width="50" />
        <el-table-column property="date" label="Date" width="120" />
        <el-table-column property="name" label="Name" width="120" />
        <el-table-column property="address" label="Address" />
    </el-table>
    <div style="margin-top: 20px">
        <el-button @click="setCurrent(tableData[1])">Select second row</el-button>
        <el-button @click="setCurrent()">Clear selection</el-button>
    </div>
</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ElTable } from 'element-plus'
import EmotionJson from '../assets/emotion_analysis.json';
console.log(EmotionJson);

interface User {
    date: string
    name: string
    address: string
}

const currentRow = ref()
const singleTableRef = ref<InstanceType<typeof ElTable>>()

const setCurrent = (row?: User) => {
    singleTableRef.value!.setCurrentRow(row)
}
const handleCurrentChange = (val: User | undefined) => {
    currentRow.value = val
}
const tableData: User[] = EmotionJson.map((data: any) => ({
  date: data.id,
  name: data.owner,
  address: data.slogan
}));
</script>
<style lang="scss">
  .table-container {
    border: 1px solid #e0e0e0;
    border-radius: 5px;
    overflow: hidden;
    height: 750px;
    overflow-y: auto;
  }
</style>