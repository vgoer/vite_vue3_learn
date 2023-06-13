<style scoped lang="less"></style>
<template>
    <div class="home">
        hello
        <el-button @click="add">aaa</el-button>
        <el-button @click="toLogin(1)">hello</el-button>
    </div>
</template>
<script setup>
import { useRouter } from 'vue-router';
import { api_login } from '@/api/login.js';

// 路由跳转 和 传参
const router = useRouter();
const toLogin = (id) => {
    router.push({name:"Login",query: {id:id,name:"admin"}})
}



const add = async () => {
    let res = await api_login();
    console.log(res);
};
</script>
