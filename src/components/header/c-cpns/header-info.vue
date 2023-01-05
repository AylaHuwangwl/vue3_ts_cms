<template>
  <div class="header-info">
    <div class="operation">
      <span>
        <el-icon size="18px">
          <Bell />
        </el-icon>
      </span>
      <span>
        <el-icon size="18px">
          <ChatDotRound />
        </el-icon>
      </span>
      <span>
        <span class="spot"></span>
        <el-icon size="18px">
          <Postcard />
        </el-icon>
      </span>
    </div>
    <div class="info">
      <el-dropdown :hide-on-click="false">
        <span class="userinfo">
          <el-avatar :size="30" class="avatar" src="https://upload.jianshu.io/users/upload_avatars/1102036/c3628b478f06.jpeg" />
          <span class="name">coderwhy</span>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="logout">
              <el-icon>
                <Stamp />
              </el-icon>退出系统
            </el-dropdown-item>
            <el-dropdown-item>
              <el-icon>
                <Avatar />
              </el-icon>个人信息
            </el-dropdown-item>
            <el-dropdown-item>
              <el-icon>
                <EditPen />
              </el-icon>修改密码
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
import { LOGIN_TOKEN } from '@/global/constances'
import { localCache } from '@/utils/cache'
import { useRoute } from 'vue-router'
import router from '@/router/index'
function logout() {
  localCache.removeCache(LOGIN_TOKEN)
  router.push('/login')
}
</script>

<style lang="less" scoped>
.header-info {
  display: flex;
  .operation {
    display: inline-flex;
    margin-right: 20px;
    span {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 35px;
      width: 40px;
      &:hover {
        background: #f2f2f2;
      }
    }
    .spot {
      position: absolute;
      display: flex;
      width: 8px;
      height: 8px;
      background-color: red;
      border-radius: 50%;
      top: 4px;
      right: 4px;
    }
  }
  .info {
    .userinfo {
      display: flex;
      justify-content: center;
      align-items: center;
      .name {
        margin-left: 10px;
      }
    }
  }
}
</style>
