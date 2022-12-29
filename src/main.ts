import { createApp } from 'vue'
import 'normalize.css'
import './assets/css/index.less'
import App from './App.vue'
import router from './router'
import pinia from './store'
// 引入element-plus(全局注册element-plus),全局注册会一起打包
/*
  import ElementPlue from 'element-plus'
  import 'element-plus/dist/index.css'
  app.use(ElementPlue) //全局注册
*/

// 按需引入
// import {ElButton} from 'element-plus'
// app.component(ElButton.name,ElButton)

const app = createApp(App)

app.use(router)
app.use(pinia)
app.mount('#app')
