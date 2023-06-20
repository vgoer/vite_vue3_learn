<style scoped lang="less"></style>
<template>
    <Header></Header>

    <Aside></Aside>

    <RouterView></RouterView>
    <Footer></Footer>
</template>
<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Aside from './components/Aside.vue';
</script>
