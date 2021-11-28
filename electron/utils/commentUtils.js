const { dialog } = require('electron')

module.exports = {
  dialogError(content, title) {
    dialog.showErrorBox(title || 'error', content)
  },
  dialogMessage(content, type, title) {
    return new Promise((resolve, reject) => {
      return dialog
        .showMessageBox({ type: type || 'info', title: title || '提示', message: content, buttons: ['ok', 'no'] })
        .then((res) => {
          if (res.response === 0) {
            resolve()
          } else {
            reject()
          }
        })
        .catch((err) => {
          console.log('catch', err)
        })
    })
  }
}
