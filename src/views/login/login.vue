<style scoped lang="less">

</style>
<template>
    <div class="login">login</div>
    <h2>{{ store.sayMsg }}</h2>
    <h2>{{ store.count }}</h2>

    <hr>
    <h1>{{ store.setPhone }}</h1>
    <h1>{{ store.user }}</h1>
    <el-button @click="">chage</el-button>
</template>
<script setup>
import { store_main } from '@/store/index.js'
import { storeToRefs } from 'pinia'
import { store_login } from '@/store/login.js'

const store = store_main()
const { sayMsg, count } = storeToRefs(store)
console.log(sayMsg.value,count.value)

// const login = store_login()
// console.log(login)


</script>
