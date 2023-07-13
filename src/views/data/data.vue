<style scoped lang='less'>
.boxflex{
    display: flex;
    justify-content: space-around;
}

.content{
    font-size: 28px;
    text-shadow: 0 0 3px #7acaec;
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
        <div style="display: flex; justify-content: space-between; flex-wrap: wrap;">
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
            <div small-bg>
                <dv-decoration5 :dur="2" style="width:300px;height:40px;" />
            </div>
            <div small-bg>
                <dv-decoration6 style="width:300px;height:30px;" />
            </div>
            <div small-bg>
                <dv-decoration7 style="width:150px;height:30px;">
                    <div color-white font-300>
                        Decoration
                    </div>
                </dv-decoration7>
            </div>
            <div small-bg>
                <dv-decoration8 style="width:300px;height:50px;" />
            </div>
            <div small-bg>
                <dv-decoration8 :reverse="true" style="width:300px;height:50px;" />
            </div>
            <div small-bg>
                <dv-decoration-9 style="width:150px;height:150px;">
                <div color-green font-600 class="content" bg="~ dark/0">
                    66%
                </div>
                </dv-decoration-9>
            </div>
            <div small-bg>
                <dv-decoration-12 style="width:150px;height:150px;" />
            </div>
            <div small-bg>
                <dv-decoration-11 style="width:200px;height:60px;">
                <div color-green font-600 bg="~ dark/0">
                    dv-decoration-11
                </div>
                </dv-decoration-11>
            </div>
        </div>
        <div>
            <div small-bg>
                <dv-decoration-10 style="width:90%;height:5px;" />
            </div>
        </div>
        <div style="display: flex;">
            <div small-bg>
                <dv-percent-pond :config="config" style="width:200px;height:100px;" />
            </div>
            <div small-bg>
                <dv-percent-pond :config="config1" style="width:200px;height:100px;" />
            </div>
            <div w800px h250px py10 flex justify-center items-center bg-dark>
                <dv-water-level-pond :config="config2" style="width:200px;height:200px" />
            </div>
        </div>
    </dv-full-screen-container>
</template>
<script setup>
import { reactive } from 'vue'
import * as echarts from 'echarts'

const config = reactive({
    value: 66,
    borderWidth: 5,
    borderRadius: 10,
    borderGap: 5,
})


const config1 = reactive({
    value: 66,
    lineDash: [10, 2],
    localGradient: true,
})

const config2 = reactive({
    data: [55],
    shape: 'round',
})


</script>
