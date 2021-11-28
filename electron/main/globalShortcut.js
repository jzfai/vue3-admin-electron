const { globalShortcut, app } = require('electron')
const commentUtils = require('../utils/commentUtils')
app.whenReady().then(() => {
  //注册全局快捷键
  globalShortcut.register('ctrl+e', () => {
    commentUtils.dialogMessage('快捷键 "ctrl+e被点击了').then(() => {})
    //检测快捷键是否注册功能
    console.log(globalShortcut.isRegistered('ctrl+e'))
  })
})

//注销全局快捷键的监听
app.on('will-quit', () => {
  globalShortcut.unregister('ctrl+e')
})
