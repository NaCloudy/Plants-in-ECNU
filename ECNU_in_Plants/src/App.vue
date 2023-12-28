<template>
  <div class="common-layout" id="building">
      <el-container style="margin-top: 20px; margin-left: 20px;">
        <el-aside width="200px"><sidebar /></el-aside>
      <el-container>
        <el-main><router-view></router-view></el-main>
        <el-footer style="position: absolute; bottom: 0; width: 100%;" class="footer-text">made by software-statistics united army</el-footer>
      </el-container>
    </el-container>
  </div>
</template>


<script setup lang="ts">
// 引入你的组件

import sidebar from './views/sidebar.vue';

</script>

<style>
.footer-text {
  text-align: center;
  font-style: italic; /* Add any other styles you want */
  /* You can customize the font-size, color, etc. */
}

#building{
background:url("../src/assets/background.jpg");
width:100%;
height:100%;
position:fixed;
background-size:100% 100%;
}
</style>
