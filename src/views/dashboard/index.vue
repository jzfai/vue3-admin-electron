<template>
  <div class="dashboard-container">
    <div class="dashboard-text">name: {{ username }}</div>
  </div>
</template>

<script setup>
// const { BrowserWindow } = require('electron').remote
// const newWin = () => {
//   new BrowserWindow({
//     width: 800,
//     height: 600,
//     webPreferences: {
//       nodeIntegration: true, //渲染进程中使用nodejs
//       contextIsolation: false,
//       enableRemoteModule: true //渲染线程中使用remote模块
//     }
//   })
// }
// let path = require('path')
// const string = path.join('1', '2')
// console.log(string)
import { computed } from 'vue'
import { useStore } from 'vuex'

let store = useStore()
const username = computed(() => {
  return store.state.user.username
})
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    //margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
