<style scoped lang='less'>


</style>
<template>
    <div class="home">
        hello
        <button @click="add">aaa</button>
    </div>
</template>
<script setup>
import { useRouter } from 'vue-router'
import { api_login } from '@/api/login.js'

const router = useRouter()
const add = async () => {
    let res = await api_login()
    console.log(res)
}

</script>
