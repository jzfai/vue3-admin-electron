<template>
  <div class="scroll-y">
    <div class="mt-2">
      <el-button type="primary" @click="myNotification">消息通知</el-button>
    </div>

    <div class="mt-2">
      <el-button type="primary">尝试断开网络测试网络监听</el-button>
    </div>
  </div>
</template>

<script setup>
import { getCurrentInstance } from 'vue'

let { proxy } = getCurrentInstance()
const myNotification = () => {
  let option = {
    title: 'electron 通知',
    body: 'electron跨平台软件开发教程更新了'
  }
  let myNotification = new window.Notification(option.title, option)
  myNotification.onclick = function () {
    proxy.elMessageMixin('消息被点击了')
  }
}

//监听网络变化实现通知
window.addEventListener('online', function () {
  const option = {
    title: 'vue3-admin-electron',
    body: '网络恢复了'
  }
  new window.Notification(option.title, option)
  proxy.elMessageMixin('有网络了')
})

window.addEventListener('offline', function () {
  //其他参数查询Notification文档
  const option = {
    title: 'vue3-admin-electron',
    body: '网络异常,请检查您的网络'
  }

  const myNotification = new window.Notification(option.title, option)
  myNotification.onclick = function () {
    proxy.elMessageMixin('消息被点击了')
  }
})
</script>

<style scoped lang="scss"></style>
