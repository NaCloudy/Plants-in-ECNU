<template>
    <div class="table-container">
    <el-table ref="singleTableRef" :data="tableData" highlight-current-row style="width: 100%"
        @current-change="handleCurrentChange">
        <el-table-column type="index" width="150" />
        <el-table-column property="owner" label="留言者" width="150" />
        <el-table-column property="slogan" label="标语" />
    </el-table>
</div>

  <el-dialog v-model="dialogTableVisible" title="留言板" center draggable>
    <el-card class="box-card" v-for="item in gridData" :key="item.id">
    <template #header>
      <div class="card-header">
        <span>{{item.slogan}}</span>
      </div>
    </template>
    <div class="text item">{{item.content}}</div>
    <div class="text item owner">—— {{item.owner}}</div>
    <div class="item emotion">情感分析：{{item.emotion}}</div>
  </el-card>
  </el-dialog>

</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ElTable } from 'element-plus'
import EmotionJson from '../assets/emotion_analysis.json';
import emitter from "../bus";
console.log(EmotionJson);

const dialogTableVisible = ref(false)

const tableData: User[] = EmotionJson.map((data: any) => ({
  id: data.id,
  owner: data.owner,
  slogan: data.slogan,
  content: data.content,
  emotion: data.emotion,
  title: data.title
}));

var gridData = []

emitter.on('wordvalueChange', (wordvalue: string) => {
    console.log(wordvalue);
    gridData = tableData.filter((item => item.id === wordvalue)
    )
    console.log(gridData);
    dialogTableVisible.value = true;
    });

interface User {
    id: string
    owner: string
    slogan: string
    content: string
    emotion: string
    title: string
}

const currentRow = ref()
const singleTableRef = ref<InstanceType<typeof ElTable>>()

const handleCurrentChange = (val: User | undefined) => {
    currentRow.value = val
    console.log(currentRow.value.id)
    gridData = tableData.filter((item => item.id === currentRow.value.id))
    dialogTableVisible.value = true;
}

</script>

<style lang="scss" scoped>
  .table-container {
    border: 1px solid #e0e0e0;
    border-radius: 5px;
    overflow: hidden;
    height: 750px;
    overflow-y: auto;
  }

//卡片样式
  .card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  color: #333;
}

.text {
  font-size: 16px;
  color: #555;
}

.item {
  margin-bottom: 18px;
}

.owner {
  text-align: right;
}
.box-card {
  width: 480px;
  //居中
  margin: 0 auto;
}

.emotion {
  font-size: 14px;
  color: #888;
}
</style>