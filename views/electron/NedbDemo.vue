<template>
  <div class="scroll-y">
    <br />
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
    <div>{{ state }}</div>
  </div>
</template>

<script setup>
import { reactive, toRef, toRefs } from 'vue'
//nedb类似于mongo的写法
//官方文档： https://github.com/louischatriot/nedb
const Datastore = require('nedb')
const db = new Datastore({
  autoload: true,
  filename: './nedbStore.db'
})

let state = reactive({
  msg: '首页组件',
  name: '',
  age: '',
  list: []
})
const { msg, age, name, list } = toRefs(state)

const findData = () => {
  //查找数据
  // db.find({"age":30},  (err, docs)=>{
  //         if(err){
  //             console.log(err);
  //             return;
  //         }
  //         console.log(docs);
  //         state.list=docs;
  // })
  db.find({}, (err, docs) => {
    if (err) {
      console.log(err)
      return
    }
    console.log(docs)
    state.list = docs
  })
}
const addData = () => {
  //获取表单数据
  console.log(state.name, state.age)
  db.insert({ name: state.name, age: state.age }, function (err, doc) {
    if (err) {
      console.log(err)
      return
    }
    console.log(doc)
  })
}
const updateData = () => {
  db.update({ _id: 'cHODtJOIft1YcOMN' }, { $set: { name: '赵六' } }, function (err, data) {
    if (err) {
      console.log(err)
      return
    }
    console.log(data)
  })
}
const deleteData = () => {
  db.remove({ _id: '6nAYPLImXRs7mB0P' }, {}, function (err, data) {
    if (err) {
      console.log(err)
      return
    }
    console.log(data)
  })
}
</script>

<style scoped lang="scss"></style>
