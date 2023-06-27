<style scoped lang="less">
.notfound{
    min-height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
}

.not_box{

    .not_img{
        width: 100px;
        opacity: v-bind("state_style.opacitve");
        border: 1px solid #008c8c;
        border-radius: v-bind("`${state_style.radius}px`");
        box-shadow: v-bind("`${state_style.radius}px`") v-bind("`${state_style.radius}px`") v-bind("`${state_style.radius}px`") #008c8c;
    }
    
}
</style>
<template>
    <div class="notfound">
        <h3>404</h3>
    </div>
    <div class="not_box">
        <img class="not_img" src="@/assets/vue.svg" alt="">

        <el-button @click="chage_big">加大</el-button>
    </div>
</template>
<script setup>
import { reactive } from 'vue'

const state_style = reactive({
    opacitve: 0,
    radius: 10,
    shadow: 2
})

const chage_big = () => {
    if(state_style.opacitve == 1){
        state_style.opacitve = 0
    }
    state_style.opacitve += 0.2

    if(state_style.radius == 50){
        state_style.radius = 10
    }
    state_style.radius += 10

    if(state_style.shadow == 10){
        state_style.shadow = 0
    }
    state_style.shadow += 2

}  

</script>
