import { createRouter, createWebHashHistory} from "vue-router";
const routes = [
  {
    path: "/",
    name: "login",
    meta: {
      title: "用户登录",
      fullScreen: true
    },
    component: () => import("../login/login.vue"),
  },
  {
    path: "/changePassword",
    name: "changePassword",
    meta: {
      title: "密码修改",
    },
    component: () => import("../login/changePassword.vue"),
  },
  {
    path: "/index",
    name: "index",
    meta: {
      title: "首页",
    },
    component: () => import("../views/index.vue"),
  },
  {
    path: "/coalescence",
    name: "coalescence",
    meta: {
      title: "点聚合",
    },
    component: () => import("../views/coalescence.vue"),
  },
  {
    path: "/classify",
    name: "classify",
    meta: {
      title: "植物图表",
    },
    component: () => import("../views/classify.vue"),
  },
  {
    path: "/map",
    name: "map",
    meta: {
      title: "地图",
    },
    component: () => import("../views/map.vue"),
  },
  {
    path: "/personal",
    name: "personal",
    meta: {
      title: "个人",
    },
    component: () => import("../views/personal/personal.vue"),
  },
  {
    path: "/personal_edit",
    name: "personal_edit",
    meta: {
      title: "个人编辑",
    },
    component: () => import("../views/personal/personal_edit.vue"),
  },
  {
    path: "/plantmessage",
    name: "plantmessage",
    meta: {
      title: "植物寄语",
    },
    component: () => import("../views/plantmessage.vue"),
  },
];
const router = createRouter({ history: createWebHashHistory(), routes });
export default router;
