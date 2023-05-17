import { createApp } from 'vue'
import 'normalize.css'
import './assets/css/index.less'
import App from './App.vue'
import router from './router'
import pinia from './store'
import registerIcons from './global/register-icons'
// 针对ElMessage或ElLoading等组件引入样式,也可以通过下载vite-plugin-style-import插件配置进行自动引入
import 'element-plus/theme-chalk/el-message.css'
// import userLoginStore from './store/login/login'

// 引入element-plus(全局注册element-plus),全局注册会一起打 包
/*
  import ElementPlue from 'element-plus'
  import 'element-plus/dist/index.css'
  app.use(ElementPlue) //全局注册
*/

// 按需引入
// import {ElButton} from 'element-plus'
// app.component(ElButton.name,ElButton)

// ele-icon的全局注册，老师将注册方法单独抽取
const app = createApp(App)
app.use(pinia)
app.use(router)
app.use(registerIcons)
app.mount('#app')
