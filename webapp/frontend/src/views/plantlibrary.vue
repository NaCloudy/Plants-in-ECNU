<template>
    <div class="table-container">
    <el-table :data="filterTableData" style="width: 100%">
        <el-table-column label="id" prop="id" />
        <el-table-column label="Name" prop="name" />
        <el-table-column align="right">
            <template #header>
                <el-input v-model="search" size="large" placeholder="请输入植物名称" />
            </template>
            <template #default="scope">
                <el-button size="large" @click="handleEdit(scope.$index, scope.row)">查看</el-button>
            </template>
        </el-table-column>
    </el-table>
</div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import TryJson from '../assets/try.json';
import emitter from "../bus";
import { number } from 'echarts';
console.log(TryJson);
//使用 map处理 TryJson

interface User {
    id: string
    name: string
    scientificName: string
    scientificNameEn: string
    habit: string
    branch: string
    place: string
    number: string
    hasOwner: string
    key_phrase: string
}

const users = TryJson.map((data: any) => ({
    id: data.id,
    name: data.template.name,
    scientificName: data.template.scientificName,
    scientificNameEn: data.template.scientificNameEn,
    habit: data.template.habit,
    branch: data.template.branch,
    place: data.place,
    number: data.number,
    hasOwner: data.hasOwner,
    key_phrase: data.key_phrase
}));
const tableData = users;

const search = ref('')
const filterTableData = computed(() =>
    tableData.filter(
        (data) =>
            !search.value ||
            data.name.toLowerCase().includes(search.value.toLowerCase())
    )
)
const handleEdit = (index: number, row: User) => {
    console.log(index, row)
    emitter.emit('plantvalueChange', row);
}

</script>

<style lang="scss">
  .table-container {
    border: 1px solid #e0e0e0;
    border-radius: 5px;
    overflow: hidden;
    height: 600px;
    overflow-y: auto;
  }
</style>
