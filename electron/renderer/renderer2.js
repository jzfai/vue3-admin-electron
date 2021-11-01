const { ipcRenderer } = require('electron')
ipcRenderer.on('toRenderer2', (e, data) => {
  console.log(data)
})

window.onload = () => {
  let btnDom = document.querySelector('#btn')
  btnDom.onclick = () => {
    ipcRenderer.send('renderer1', 'renderer1')
  }
}
