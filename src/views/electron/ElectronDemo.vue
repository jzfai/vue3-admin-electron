<template>
  <div class="scroll-y">
    <div>ElectronDemo.vue</div>
    <div class="pointer" @contextmenu="rtClickOpenMenu">右键点击测试菜单</div>
    <div class="mt-2">弹框</div>
    <div @click="dialogError">dialogError</div>
    <div @click="showMessageBox">showMessageBox</div>
    <div @click="showOpenDialog">showOpenDialog</div>
    <div @click="showSaveDialog">showSaveDialog</div>
  </div>
</template>

<script setup>
import { getCurrentInstance } from 'vue'
const remote = require('@electron/remote')
const { Menu, dialog } = remote

const contextMenuTemplate = [{ label: '复制', role: 'copy' }, { label: '黏贴', role: 'paste' }, { type: 'separator' }]

const menu = Menu.buildFromTemplate(contextMenuTemplate)

const rtClickOpenMenu = () => {
  menu.popup({ window: remote.getCurrentWindow() })
}

const dialogError = () => {
  dialog.showErrorBox('showErrorBox', 'i am a error msg')
}
const showMessageBox = () => {
  dialog
    .showMessageBox({ type: 'info', title: '提示信息', message: '内容', buttons: ['ok', 'no'] })
    .then((res) => {
      if (res.response === 0) {
        console.log('You click ok.')
      } else {
        console.log('You click cancel')
      }
      console.log('then')
    })
    .catch((err) => {
      console.log('catch', err)
    })
}

const showOpenDialog = () => {
  dialog
    .showOpenDialog({ properties: ['openDirectory', 'openFile'] })
    .then((res) => {
      if (res.canceled) {
        console.log(res.canceled)
      } else {
        console.log(res.filePaths)
      }
    })
    .catch((err) => {
      console.log('catch', err)
    })
}
const showSaveDialog = () => {
  dialog
    .showSaveDialog({
      title: 'save file',
      defaultPath: 'aaa.jpg',
      filters: [
        { name: 'Images', extensions: ['jpg', 'png', 'gif'] },
        { name: 'Movies', extensions: ['mkv', 'avi', 'mp4'] },
        { name: 'Custom File Type', extensions: ['as'] },
        { name: 'All Files', extensions: ['*'] }
      ]
    })
    .then((res) => {
      if (res.canceled) {
        console.log('res.canceled')
      } else {
        console.log(res.filePath)
      }
    })
    .catch((err) => {
      console.log('catch', err)
    })
}
</script>

<style scoped lang="scss"></style>
