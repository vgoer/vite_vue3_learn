<style scoped lang='less'>
.boxflex{
    display: flex;
    justify-content: space-around;
}
</style>
<!-- 数据面板页面 -->
<template>
    <dv-full-screen-container style="background-color: #241f23">
        <div class="module-box">
            <div style="flex: 0 1 30%">
                <div class="boxflex">
                    <dv-border-box1 style="height: 20vh;">

                    </dv-border-box1>
                    <dv-border-box2 style="height: 20vh;"  :color="['#e74033', '#307def']">

                    </dv-border-box2>
                    <dv-border-box-3  style="height: 20vh;" :color="['#2b1216','#36282b']">

                    </dv-border-box-3>
                </div>
            </div>
            <div style="flex: 0 1 30%">
                <div class="boxflex">
                    <dv-border-box4 style="height: 20vh;">

                    </dv-border-box4>
                    <dv-border-box4  :reverse="true" style="height: 20vh;"  :color="['#e74033', '#307def']">

                    </dv-border-box4>
                    <dv-border-box-5  style="height: 20vh;">

                    </dv-border-box-5>
                </div>
            </div>
            <div style="flex: 0 1 40%">
                <dv-border-box-11 style="height: 60vh;width: 100%" title="数据大屏"  :title-width="400">

                </dv-border-box-11>
            </div>
            <div style="flex: 0 1 30%" class="boxflex">
                <dv-border-box-7 style="height: 30vh;">
                    
                </dv-border-box-7>
                <dv-border-box-8 style="height: 30vh;"></dv-border-box-8>
                <dv-border-box-8  :reverse="true" style="height: 30vh;"></dv-border-box-8>
            </div>
        </div>
        <div class="module-box">
            <div style="flex: 0 1 50%" class="boxflex">
                <dv-border-box-9 style="height: 38vh;">

                </dv-border-box-9>
                <dv-border-box-10 style="height: 38vh;">

                </dv-border-box-10>
                <dv-border-box-12 style="height: 38vh;">
                </dv-border-box-12>
                <dv-border-box-13 style="height: 38vh;">
                </dv-border-box-13>
            </div>
        </div>
        <div style="display: flex; justify-content: space-between;">
            <div w50rem h18rem flex justify-center items-center bg-dark>
                <dv-decoration1 style="width:200px;height:50px;" />
            </div>
            <div w50rem h18rem flex justify-center items-center bg-dark>
                <dv-decoration2 :dur="2" style="width:200px;height:5px;" />
            </div>
            <div small-bg>
                <dv-decoration2 :reverse="true" style="width:5px;height:150px;" />
            </div>
            <div small-bg>
                <dv-decoration3 style="width:250px;height:30px;"/>
            </div>
            <div small-bg>
                <dv-decoration4 :dur="2" style="width:5px;height:150px;"/>
            </div>
            <div small-bg>
                <dv-decoration4 :reverse="true" style="width:250px;height:5px;"/>
            </div>
        </div>
    </dv-full-screen-container>
</template>
<script setup>
import { reactive } from 'vue'
import * as echarts from 'echarts'




</script>
