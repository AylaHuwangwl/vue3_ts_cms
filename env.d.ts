// 创建声明文件
/// <reference types="vite/client" />
// 声明告知导入的.vue文件是一个组件，否则导入.vue文件应该会报错
declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent
  export default component
}
