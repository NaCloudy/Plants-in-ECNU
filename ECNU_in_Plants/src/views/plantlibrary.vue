<template>
    <div class="table-container">
    <el-table :data="filterTableData" style="width: 100%">
        <el-table-column label="Date" prop="date" />
        <el-table-column label="Name" prop="name" />
        <el-table-column align="right">
            <template #header>
                <el-input v-model="search" size="large" placeholder="Type to search" />
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
console.log(TryJson);
//使用map处理TryJson

interface User {
    date: string
    name: string
    address: string
}

const users = TryJson.map((data: any) => ({
    date: data.id,
    name: data.template.name,
    address: data.place
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
