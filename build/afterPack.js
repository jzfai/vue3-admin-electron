const fs = require('fs')
const path = require('path')
async function afterPack(context) {
  // 删除 README 文件，使其不加入 Setup 包中。
  let readmePath = path.join(context.appOutDir, 'resources/app.asar.unpacked/README.md')
  if (fs.existsSync(readmePath)) {
    fs.unlinkSync(readmePath)
  }
}
module.exports = afterPack
