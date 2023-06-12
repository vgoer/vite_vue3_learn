<style scoped lang="less"></style>
<template>
    <Header></Header>

    <NavBar></NavBar>
    <RouterView></RouterView>

    <Footer></Footer>
</template>
<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import NavBar from './components/NavBar.vue';
</script>
