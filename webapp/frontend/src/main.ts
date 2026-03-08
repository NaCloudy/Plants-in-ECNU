import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import "element-plus/dist/index.css";
import router from "./router";
import Tmap from '@map-component/vue-tmap';
import ElementPlus from "element-plus";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import * as echarts from 'echarts'

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.use(router);
app.use(Tmap);
app.use(ElementPlus);
app.config.globalProperties.$echarts = echarts  // 全局注册echarts
app.mount("#app");
