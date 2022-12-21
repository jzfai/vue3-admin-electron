<template>
  <div class="scroll-y">
    <div class="mb-2">IndexDbDemo.vue</div>
    <button @click="addData()">增加数据</button>

    <br />

    <br />
    <button @click="updateData()">编辑数据</button>

    <br />

    <br />
    <button @click="deleteData()">删除数据</button>

    <br />
    <br />
    <br />
    <button @click="findData()">查找数据</button>

    <div class="mt-2">显示的数据</div>
    <div>{{ personData }}</div>
  </div>
</template>

<script setup>
//参考文档：https://www.cnblogs.com/chenjun1/p/11644866.html

import { reactive, toRefs } from 'vue'
// 创建数据库
// 第一个参数为数据库名称，第二个数据库为版本号，返回一个IDBOpenDBRequest对象用于操作数据库。
// 对于open()的第一个参数数据库名，open()会先去查找本地是否已有这个数据库，如果有则直接将这个数据库返回，如果没有，则先创建这个数据库，再返回。对于第二个参数版本号，则是一个可选参数，如果不传，默认为1，但是如果传入必须是一个整数
const request = indexedDB.open('myDatabase', 1)
let db
request.onsuccess = function (event) {
  db = request.result
  console.log('数据库打开成功')
}
request.onerror = function (event) {
  console.log('数据库打开报错')
}
//数据库升级事件
request.onupgradeneeded = function (event) {
  db = event.target.result
  let objectStore
  //新增一张叫做person的表格，主键是id,是否存在，如果不存在再新建
  if (!db.objectStoreNames.contains('person')) {
    objectStore = db.createObjectStore('person', { keyPath: 'id' })
    objectStore.createIndex('name', 'name', { unique: false })
    objectStore.createIndex('email', 'email', { unique: true })
  }
}
const addData = () => {
  const request = db
    .transaction(['person'], 'readwrite')
    .objectStore('person')
    .add({ id: 1, name: '张三', age: 24, email: 'zhangsan@example.com' })

  request.onsuccess = function (event) {
    console.log('数据写入成功')
  }

  request.onerror = function (event) {
    console.log('数据写入失败')
  }
}

const state = reactive({
  personData: {}
})

const { personData } = toRefs(state)

const findData = () => {
  const transaction = db.transaction(['person'])
  const objectStore = transaction.objectStore('person')
  const request = objectStore.get(1)

  request.onerror = function (event) {
    console.log('事务失败')
  }

  request.onsuccess = function (event) {
    if (request.result) {
      state.personData = request.result
      console.log(`Name: ${  request.result.name}`)
      console.log(`Age: ${  request.result.age}`)
      console.log(`Email: ${  request.result.email}`)
    } else {
      console.log('未获得数据记录')
    }
  }
}

const updateData = () => {
  const request = db
    .transaction(['person'], 'readwrite')
    .objectStore('person')
    .put({ id: 1, name: '李四', age: 35, email: 'lisi@example.com' })

  request.onsuccess = function (event) {
    console.log('数据更新成功')
  }

  request.onerror = function (event) {
    console.log('数据更新失败')
  }
}
const deleteData = () => {
  const request = db.transaction(['person'], 'readwrite').objectStore('person').delete(1)

  request.onsuccess = function (event) {
    console.log('数据删除成功')
  }
}
</script>

<style scoped lang="scss"></style>
