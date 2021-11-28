const { Menu } = require('electron')
let menuTemplate = [
  {
    label: '文件',
    submenu: [
      {
        label: '新建文件',
        accelerator: 'ctrl+n',
        click: function () {
          console.log('ctrl+n')
        }
      },
      {
        label: '新建窗口',
        click: function () {
          console.log('new window')
        }
      }
    ]
  },
  {
    label: '编辑',
    submenu: [
      { label: '复制', role: 'copy' },
      { label: '截切', role: 'cut' }
    ]
  }
]

const menuBuilder = Menu.buildFromTemplate(menuTemplate)
Menu.setApplicationMenu(menuBuilder)
