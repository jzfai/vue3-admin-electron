const { Menu, Tray, app, BrowserWindow } = require('electron')
const path = require('path')

const appIcon = new Tray(path.join(__dirname, '../static/lover.png'))
const menu = Menu.buildFromTemplate([
  { label: '设置', click: function () {} },
  { label: '帮助', click: function () {} },
  { label: '关于', click: function () {} },
  {
    label: '退出',
    click: function () {
      app.quit()
    }
  }
])
let timeout = setTimeout(() => {
  appIcon.setImage(path.join(__dirname, '../static/lover.png'))
  clearTimeout(timeout)
}, 1000)
appIcon.setToolTip('vue3-admin-electron')
appIcon.setContextMenu(menu)

//监听任务栏图标的单击、双击事件
let win = BrowserWindow.getFocusedWindow()
appIcon.on('double-click', () => {
  console.log(win)
  win.show()
})

//Electron 点击右上角关闭按钮隐藏任务栏图标
win.on('close', (e) => {
  console.log(win.isFocused())
  if (!win.isFocused()) {
    win = null
  } else {
    e.preventDefault()
    win.hide()
  }
})

//Electron 实现任务栏闪烁图标
let count = 0
const timer = setInterval(function () {
  count++
  if (count % 2 === 0) {
    appIcon.setImage(path.join(__dirname, '../static/empty.ico'))
  } else {
    appIcon.setImage(path.join(__dirname, '../static/lover.png'))
  }
}, 500)
