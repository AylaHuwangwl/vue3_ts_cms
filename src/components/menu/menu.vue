<template>
  <div class="menu">
    <div class="title">
      <img src="@/assets/img/logo.svg" alt="">
      <span v-if="!isFold">Ayla小黄人</span>
    </div>
    <div class="menu_cms">
      <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" background-color="#001529" text-color="white" :collapse="isFold">
        <template v-for="item in u_menu">
          <el-sub-menu :index="item.id +''">
            <template #title>
              <el-icon>
                <component :is="item.icon.split('-icon-')[1]" />
              </el-icon>
              <span>{{item.name}}</span>
            </template>
            <template v-for="ele in item.children">
              <el-menu-item :index="ele.id+''" @click="handleItemClick(ele)">{{ele.name}}</el-menu-item>
            </template>
          </el-sub-menu>
        </template>
      </el-menu>
    </div>
  </div>
</template>

<script setup lang="ts">
// import userLoginStore from '@/store/login/login'
import { localCache } from '@/utils/cache'
import { useRouter } from 'vue-router'
function handleOpen() {}
function handleClose() {}
// const loginStore = userLoginStore()
// const userMenus = loginStore.usermenu
// console.log(userMenus)

// 接收父组件传过来的isFold

defineProps({
  isFold: { type: Boolean, default: false }
})
const u_menu = localCache.getCache('usermenu')
const router = useRouter()
function handleItemClick(ele: any) {
  // console.log(ele)
  router.push(ele.url)
}
</script>

<style lang="less" scoped>
.menu {
  .title {
    display: flex;
    margin: 10px 0;
    height: 28px;
    flex-direction: row;
    margin-left: 20px;
    // justify-content: center;
    align-items: center;
    img {
      width: 28px;
      height: 28px;
      margin-right: 5px;
    }
    span {
      color: white;
      font-weight: bold;
    }
  }
  .el-menu {
    border-right: none;
    user-select: none;
  }

  .el-sub-menu {
    .el-menu-item {
      padding-left: 50px !important;
      background-color: #0c2135;
    }

    .el-menu-item:hover {
      color: #fff;
    }

    .el-menu-item.is-active {
      background-color: #0a60bd !important;
      color: #fff;
    }
  }
}
</style>
