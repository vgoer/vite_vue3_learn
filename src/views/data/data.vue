<style scoped lang='less'>
.boxflex{
    display: flex;
    justify-content: space-around;
}
</style>
<!-- 数据面板页面 -->
<template>
    <dv-full-screen-container style="background-color: white">
        <div class="module-box">
            <div style="flex: 0 1 30%">
                <div class="boxflex">
                    <dv-border-box-11 style="height: 20vh;">dv-border-box-8</dv-border-box-11>
                    <dv-border-box-11 style="height: 20vh;">dv-border-box-8</dv-border-box-11>
                    <dv-border-box-11 style="height: 20vh;">dv-border-box-8</dv-border-box-11>
                </div>
            </div>
            <div style="flex: 0 1 40%">
                <dv-border-box-11 style="height: 60vh;width: 100%" title="dv-border-box-11">
                </dv-border-box-11>
            </div>
            <div style="flex: 0 1 30%">
                <div class="boxflex">

                </div>
                <dv-border-box-11 style="height: 30vh;" title="dv-border-box-11"></dv-border-box-11>
                <dv-border-box-11 style="height: 30vh;" title="dv-border-box-11"></dv-border-box-11>
            </div>
        </div>
        <div class="module-box">
            <div style="flex: 0 1 50%">
                <dv-border-box-11 style="height: 38vh;" title="dv-border-box-11">
                </dv-border-box-11>
            </div>
            <div style="flex: 0 1 50%">
                <dv-border-box-11 style="height: 38vh;" title="dv-border-box-11">
                </dv-border-box-11>
            </div>
        </div>
    </dv-full-screen-container>
</template>
<script setup>
import { reactive } from 'vue'
import * as echarts from 'echarts'




</script>
