const { BrowserWindow, ipcMain } = require('electron')
const path = require('path')

//first way
ipcMain.on('send1', (event, args) => {
  console.log(args)
  event.sender.send('reply1', 'reply1')
})

//send way(sync)
ipcMain.on('send2', (event) => {
  event.returnValue = 'send2'
})

//three way
let renderer1Id = null
ipcMain.on('renderer2', () => {
  //在打开renderer2窗口前保存renderer1的id
  renderer1Id = BrowserWindow.getFocusedWindow().id
  const newsWindow = new BrowserWindow({
    width: 800,
    height: 500,
    webPreferences: {
      nodeIntegration: true, //开启渲染进程中使用nodejs
      contextIsolation: false, //开启渲染进程中使用nodejs    In Electron 12, the default will bechanged to `true
      enableRemoteModule: true //启用Remote模块
    }
  })
  newsWindow.loadFile(path.join(__dirname, '../html/renderer2.html'))
  //open devTools
  newsWindow.webContents.openDevTools({ mode: 'bottom' })
  newsWindow.webContents.on('did-finish-load', () => {
    BrowserWindow.getFocusedWindow().webContents.send('toRenderer2', 'toRenderer2')
  })
})
ipcMain.on('renderer1', () => {
  let renderer1Win = BrowserWindow.fromId(renderer1Id)
  renderer1Win.webContents.send('toRenderer1', 'toRenderer1')
})
