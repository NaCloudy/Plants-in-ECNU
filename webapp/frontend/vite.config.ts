import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import IconsResolver from "unplugin-icons/resolver";
import Icons from "unplugin-icons/vite";
import { vitePluginSwaggerTypescriptApi } from "vite-plugin-swagger-typescript-api";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode, ssrBuild }) => {
  // 根据当前工作目录中的 `mode` 加载 .env 文件
  // 设置第三个参数为 '' 来加载所有环境变量，而不管是否有 `VITE_` 前缀。
  const env = loadEnv(mode, process.cwd(), "");
  return {
    //vite配置
    define: {
      __APP_ENV__: env.APP_ENV,
    },
    plugins: [
      vue(),
      //element-plus自动导入样式
      AutoImport({
        // Auto import functions from Vue, e.g. ref, reactive, toRef...
        // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
        imports: ["vue"],

        // Auto import functions from Element Plus, e.g. ElMessage, ElMessageBox... (with style)
        // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
        resolvers: [
          ElementPlusResolver(),

          // Auto import icon components
          // 自动导入图标组件
          IconsResolver({
            prefix: "Icon",
          }),
        ],

        dts: path.resolve(path.resolve(__dirname, "src"), "auto-imports.d.ts"),
      }),
      Components({
        resolvers: [
          // Auto register icon components
          // 自动注册图标组件
          IconsResolver({
            enabledCollections: ["ep"],
          }),
          // Auto register Element Plus components
          // 自动导入 Element Plus 组件
          ElementPlusResolver(),
        ],

        dts: path.resolve(path.resolve(__dirname, "src"), "components.d.ts"),
      }),

      Icons({
        autoInstall: true,
      }),

      vitePluginSwaggerTypescriptApi({
        // swagger-typescript-api 的配置，具体可参考 https://github.com/acacode/swagger-typescript-api
        name: "Windows.ts", //要生成的文件名称
        output: path.resolve("./src/apis"), // 生成的文件所在的文件夹，注意要使用 path.resolve 解析出绝对路径，否则路径可能会有错误
        url: "http://124.71.207.55:8081/v2/api-docs?group=Windows", // 如果从远程接口载入
        httpClientType: "axios", // or "fetch" 生成的接口类型
      }),
    ],
    base: "./", //开发或生产环境服务的公共基础路径
    resolve: {
      //设置别名:src路劲转化@....
      alias: {
        "@": path.resolve(__dirname, "src"),
        components: path.resolve(__dirname, "./src/components"),
        assets: path.resolve(__dirname, "./src/assets"),
        "#": path.resolve(__dirname, "types"),
        build: path.resolve(__dirname, "build"),
      },
      // 省略文件扩展名
      extensions: [".js", ".ts", ".jsx", ".tsx", ".json", ".vue"],
    },
    build: {
      outDir: "build", //打包文件输出目录
      assetsDir: "assets", // 默认静态文件为assets，可指定静态文件的存放目录
    },
    server: {
      open: false, //启动项目自动弹出浏览器
      hmr: true, //开启热加载
      host: true, //监听所有地址
      port: 80, //启动端口
      //proxy: createProxy(env.VITE_APP_API_HOST),
      proxy: {
        "/api": {
          target: env.VITE_APP_API_HOST, //'http://localhost:8080' 后端服务实际地址
          changeOrigin: true, //开启代理
          rewrite: (path) => path.replace(/^\/api/, ""), // 将请求中/api用空值替换重写
        },
      },
    },
  };
  /*PostCSS是用来处理css的，可以通过添加各种插件来处理css。像浏览器样式兼容问题、浏览器适配问题等等，都可以通过使用PostCSS来解决。
    Vite 对PostCSS 有良好的支持，我们只需要安装相应的插件即可。如移动端适配可使用 postcss-px-to-viewport对不同设备进行布局适配
    npm install postcss-px-to-viewport -D
    css: {
        postcss: {
            plugins: {
                // viewport 布局适配
                postcssPxToViewport({
                    viewportWidth: 375
                })
            }
        }
    }
    */
});
