<template>
  <div class="user">
    <!-- <h2>user</h2> -->
    <user-search @resetQuery="resetQuery" @search="search" />
    <user-table
      ref="user_table"
      @adduserclick="adduserclick"
      @edituserclick="edituserclick"
    />
    <user-modal ref="usermodal"></user-modal>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import userSearch from './c-cpns/user-search.vue'
import userModal from './c-cpns/user-modal.vue'
import userTable from './c-cpns/user-table.vue'

const user_table = ref<InstanceType<typeof userTable>>()
const usermodal = ref<InstanceType<typeof userModal>>()

function resetQuery() {
  user_table.value?.handleResetClick()
}
function search(value) {
  user_table.value?.fetchData(value)
}
function adduserclick() {
  usermodal.value?.setDiologshow(true)

  // console.log(usermodal.value?.dialogVisible)
}
function edituserclick(itemdata: any) {
  // console.log(itemdata)
  usermodal.value?.setDiologshow(false, itemdata)
}
</script>

<style lang="less" scoped>
.user {
}
</style>
