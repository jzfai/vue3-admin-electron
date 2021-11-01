<template>
  <div>父线程和子线程通信</div>
  <div class="mt-2">first way</div>
  <el-button @click="sendMsgToMain">sendMsgToMain</el-button>
  <div class="mt-2">second way</div>
  <el-button @click="send2ToMain">send2ToMain</el-button>
  <div class="mt-2">three way</div>
  <el-button @click="send3ToMain">send3ToMain</el-button>
  <div class="mt-2">test Remote module</div>
  <el-button @click="newWin">newWin</el-button>
</template>

<script setup>
//electron13 以后引入remote的方式
//https://blog.csdn.net/qq_51634332/article/details/120575284
const { BrowserWindow } = require('@electron/remote')
const { ipcRenderer } = require('electron')
//第一种父子通信方式
const sendMsgToMain = () => {
  ipcRenderer.send('send1', { msg: 'send1' })
}
ipcRenderer.on('reply1', (e, args) => {
  console.log(args)
})
//第二钟父子通信方式（同步）
const send2ToMain = () => {
  const msg = ipcRenderer.sendSync('send2', { msg: 'send2' })
  console.log(msg)
}
//第三种(线程和线程之间的通信,通过父线程为桥梁进行通信)
const send3ToMain = () => {
  ipcRenderer.send('renderer2', 'renderer2')
}

ipcRenderer.on('toRenderer1', (event, data) => {
  console.log(data)
})

const newWin = () => {
  const mainWindow = new BrowserWindow({
    width: 1240,
    height: 800,
    webPreferences: {
      nodeIntegration: true, //渲染进程中使用nodejs
      contextIsolation: false,
      enableRemoteModule: true //渲染线程中使用remote模块
    }
  })
  mainWindow.loadURL('https://juejin.cn/post/7025549160002617375/')
}
//import { onMounted, getCurrentInstance, watch, ref, toRefs, reactive, computed } from 'vue'
//获取store和router
// import {useRouter} from 'vue-router'
// import {useStore} from 'vuex'
// let { proxy } = getCurrentInstance()
// const props = defineProps({
//   name: {
//     require: true,
//     default: "fai",
//     type:String,
//   },
// });
// const state = reactive({
//   levelList: null
// });

//const routes = computed(() => {
//    return proxy.$store.state.permission.routes;
//  });
// watch(() => props.name, (oldValue,newValue) => {
//
//   },
//   { immediate: true }
// );

// const store = useStore()
// const router = useRouter()
// onMounted(()=>{
//   console.log("页面挂载了")
// })
// let helloFunc = () => {
//   console.log("helloFunc");
// };
//导出给refs使用
// defineExpose({ helloFunc });
//导出属性到页面中使用
// let {levelList} = toRefs(state);
</script>

<style scoped lang="scss"></style>
