<style scoped lang='less'>


</style>
<!-- 地图 -->
<template>
    <dv-full-screen-container style="height:100vh; background-color: #282c34;">
        <dv-border-box1  style="z-index: 999;" :color="['#299848', '#fcc422']" backgroundColor="#282c34">
            <guang></guang>
        </dv-border-box1>
    </dv-full-screen-container>
</template>
<script setup>
import { onMounted } from 'vue';
import guang from './components/guang.vue';

onMounted(() => {
    
})

</script>
