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

const router = useRouter()
const add = () => {
    console.log(router)
    router.push({path:"/panel"})
}

</script>
