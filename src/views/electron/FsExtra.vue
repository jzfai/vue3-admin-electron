<template>
  <div class="scroll-y">
    <div>FsExtra.vue</div>
    <div class="mt-2">
      <el-button type="primary" @click="fsCopy">fsCopy</el-button>
      <el-button type="primary" @click="emptyDir">emptyDir</el-button>
      <el-button type="primary" @click="ensureFile">ensureFile</el-button>
      <el-button type="primary" @click="ensureDir">ensureDir</el-button>
      <el-button type="primary" @click="pathExists">pathExists</el-button>
      <el-button type="primary" @click="ensureLink">ensureLink</el-button>
      <el-button type="primary" @click="ensureSymlink">ensureSymlink</el-button>
    </div>
    <div class="mt-2">
      <el-button type="primary" @click="move">move</el-button>
      <el-button type="primary" @click="outputFile">outputFile</el-button>
      <el-button type="primary" @click="remove">remove</el-button>
      <el-button type="primary" @click="readJson">readJson</el-button>
      <el-button type="primary" @click="outputJson">outputJson</el-button>
      <el-button type="primary" @click="writeJson">writeJson</el-button>
    </div>
  </div>
</template>

<script setup>
//fs-extra api recommend to reed
//https://blog.csdn.net/weixin_33968104/article/details/88005109
//https://github.com/jprichardson/node-fs-extra
const fs = require('fs-extra')
const { resolve } = require('path')
// console.log('__dirname : ' + __dirname)
// console.log('resolve   : ' + resolve('./src/views/electron'))

let dirName = resolve('./src/views/electron')
let source = `${dirName}/ElectronDemo.vue`
let sourceDir = `${dirName}`
let to = `${dirName}/${new Date().getMilliseconds()}.file`
const fsCopy = () => {
  fs.copy(source, to)
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
}

//清空目录，目录不存在则创建
const emptyDir = () => {
  fs.emptyDir(source)
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
}

//ensure 相关的不存在则创建
const ensureFile = () => {
  fs.ensureFile(source)
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
}

const ensureDir = () => {
  fs.ensureDir(sourceDir)
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
}
//和ensureDir先比不创建
const pathExists = () => {
  fs.pathExists(source)
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
}

const ensureLink = () => {
  fs.ensureLink(source, to)
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
}

const ensureSymlink = () => {
  fs.ensureSymlink(source, to)
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
}

//移动文件或目录，甚至跨设备。 类似 mv
const move = () => {
  fs.move(source, source)
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
}

//几乎与writeFile（即它覆盖）相同，除了如果父目录不存在，则创建它。file必须是文件路径（不允许使用缓冲区或文件描述符）
const outputFile = () => {
  fs.outputFile(source, '6666')
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
}

/*删除相关*/
const remove = () => {
  fs.remove(`${source}/test`)
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
}

/*json相关*/
const readJson = () => {
  fs.readJson(source)
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
}

const outputJson = () => {
  let dataJson = { fai: 6666 }
  fs.outputJson(source, dataJson)
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
}

//和outputJson比较目录和不存在不会创建
const writeJson = () => {
  let dataJson = { fai: 6666 }
  fs.writeJson(source, dataJson)
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
}
</script>

<style scoped lang="scss"></style>
