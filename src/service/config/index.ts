// 1.区分开发环境和生产环境,用到哪个拿哪个，过分依赖人为因素
// export const BASE_URL = 'http://coderwhy.dev:8000'
// export const BASE_URL = 'http://codercba.prod:8000'

// 2.代码逻辑判断, 判断当前环境，打包版本会变成production
// vite默认提供的环境变量
console.log(import.meta.env.MODE)
console.log(import.meta.env.DEV) // 是否开发环境 Boolean
console.log(import.meta.env.PROD) // 是否生产环境
console.log(import.meta.env.SSR) // 是否是服务器端渲染(server side render)

let BASE_URL = ''
if (import.meta.env.PROD) {
  BASE_URL = 'http://codercba.prod:8000'
} else {
  BASE_URL = 'http://coderwhy.dev:8000'
}

console.log(BASE_URL)

// 3.通过创建.env文件直接创建变量,加上.local不会放到git仓库  env.development.local
console.log(import.meta.env.VITE_URL)

export const TIME_OUT = 10000
export { BASE_URL }
