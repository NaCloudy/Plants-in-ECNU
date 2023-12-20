<template>
    <el-radio-group style="margin-bottom: 25px;">
        <el-avatar :size="60">
                <img src="./icons/icon by tyy.jpg" />
            </el-avatar>
            <el-text style="font-family: 'Times New Roman', Times, serif; color: darkgreen;margin-left: 10px;">
                Plants in ECNU</el-text>
    </el-radio-group>

    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">

        <el-radio-button :label="false">显示</el-radio-button>
        <el-radio-button :label="true">隐藏</el-radio-button>
    </el-radio-group>
    <el-menu :default-active="route.path" class="el-menu-vertical-demo" :collapse="isCollapse" @open="handleOpen"
        @close="handleClose" :router="true">
        <el-menu-item index="/index">
            <el-icon>
                <House />
            </el-icon>
            <template #title>主页</template>
        </el-menu-item>
        <el-menu-item index="/map">
            <el-icon>
                <MapLocation />
            </el-icon>
            <template #title>植物地图</template>
        </el-menu-item>
        <el-menu-item index="/classify">
            <el-icon>
                <Menu />
            </el-icon>
            <template #title>植物分类</template>
        </el-menu-item>
        <el-menu-item index="/plantmessage">
            <el-icon>
                <Notebook />
            </el-icon>
            <template #title>植物寄语</template>
        </el-menu-item>
    </el-menu>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();

const isCollapse = ref(false)
const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
const state = reactive({
    circleUrl:
        'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
    sizeList: ['small', '', 'large'] as const,
})
const { circleUrl, sizeList } = toRefs(state)

</script>

<style lang="scss" scoped></style>