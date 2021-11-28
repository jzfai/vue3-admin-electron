//node fs 模块 对文件的增删改查
const fs = require('fs')
/**
 * 异步使用流的形式写文件，该方案比上述方法更为安全
 * filePath：文件存放地址
 * jsonstring 所以文件内容对象
 * */
export const writeFileWithStream = (filePath, jsonstring, cb) => {
  let streamWrite = fs.createWriteStream(filePath)
  streamWrite.write(jsonstring)
  streamWrite.end()
  streamWrite.on('error', (err) => {
    cb(`写入${filePath}异常：${err}`)
  })
  streamWrite.on('finish', () => {
    cb()
  })
}
