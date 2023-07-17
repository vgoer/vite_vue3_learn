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
                        <div w200 h160 flex justify-center items-center bg-dark>
                            <div w740px h600px>
                            <dv-flyline-chart-enhanced :config="datav_state.config3" :dev="true" style="width:100%;height:100%;" />
                            </div>
                        </div>
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
                <dv-percent-pond :config="datav_state.config" style="width:200px;height:100px;" />
            </div>
            <div small-bg>
                <dv-percent-pond :config="datav_state.config1" style="width:200px;height:100px;" />
            </div>
            <div w800px h250px py10 flex justify-center items-center bg-dark>
                <dv-water-level-pond :config="datav_state.config2" style="width:200px;height:200px" />
            </div>
        </div>
            
    </dv-full-screen-container>
</template>
<script setup>
import { reactive } from 'vue'
import * as echarts from 'echarts'


let mapImg = "https://datav-vue3.netlify.app/assets/map.ab23082c.jpg"
let mapCenterPoint = "http://datav.jiaminghi.com/img/flylineChart/mapCenterPoint.png"
let mapPoint = "http://datav.jiaminghi.com/img/flylineChart/mapPoint.png"

const datav_state = reactive({
    config:{
        value: 66,
        borderWidth: 5,
        borderRadius: 10,
        borderGap: 5,
    },
    config1: {
        value: 66,
        lineDash: [10, 2],
        localGradient: true,
    },
    config2:{
        data: [55],
        shape: 'round',
    },
    config3:{
        points: [
        {
        name: '郑州',
        coordinate: [0.48, 0.35],
        halo: {
            show: true,
        },
        icon: {
            src: mapCenterPoint,
            width: 30,
            height: 30,
        },
        text: {
            show: false,
        },
        },
        {
        name: '新乡',
        coordinate: [0.52, 0.23],
        },
        {
        name: '焦作',
        coordinate: [0.43, 0.29],
        },
        {
        name: '开封',
        coordinate: [0.59, 0.35],
        },
        {
        name: '许昌',
        coordinate: [0.53, 0.47],
        },
        {
        name: '平顶山',
        coordinate: [0.45, 0.54],
        },
        {
        name: '洛阳',
        coordinate: [0.36, 0.38],
        },
        {
        name: '周口',
        coordinate: [0.62, 0.55],
        halo: {
            show: true,
            color: '#8378ea',
        },
        },
        {
        name: '漯河',
        coordinate: [0.56, 0.56],
        },
        {
        name: '南阳',
        coordinate: [0.37, 0.66],
        halo: {
            show: true,
            color: '#37a2da',
        },
        },
        {
        name: '信阳',
        coordinate: [0.55, 0.81],
        },
        {
        name: '驻马店',
        coordinate: [0.55, 0.67],
        },
        {
        name: '济源',
        coordinate: [0.37, 0.29],
        },
        {
        name: '三门峡',
        coordinate: [0.20, 0.36],
        },
        {
        name: '商丘',
        coordinate: [0.76, 0.41],
        },
        {
        name: '鹤壁',
        coordinate: [0.59, 0.18],
        },
        {
        name: '濮阳',
        coordinate: [0.68, 0.17],
        },
        {
        name: '安阳',
        coordinate: [0.59, 0.10],
        },
    ],
    lines: [
        {
        source: '新乡',
        target: '郑州',
        },
        {
        source: '焦作',
        target: '郑州',
        },
        {
        source: '开封',
        target: '郑州',
        },
        {
        source: '周口',
        target: '郑州',
        color: '#fb7293',
        width: 2,
        },
        {
        source: '南阳',
        target: '郑州',
        color: '#fb7293',
        width: 2,
        },
        {
        source: '济源',
        target: '郑州',
        },
        {
        source: '三门峡',
        target: '郑州',
        },
        {
        source: '商丘',
        target: '郑州',
        },
        {
        source: '鹤壁',
        target: '郑州',
        },
        {
        source: '濮阳',
        target: '郑州',
        },
        {
        source: '安阳',
        target: '郑州',
        },
        {
        source: '许昌',
        target: '南阳',
        color: '#37a2da',
        },
        {
        source: '平顶山',
        target: '南阳',
        color: '#37a2da',
        },
        {
        source: '洛阳',
        target: '南阳',
        color: '#37a2da',
        },
        {
        source: '驻马店',
        target: '周口',
        color: '#8378ea',
        },
        {
        source: '信阳',
        target: '周口',
        color: '#8378ea',
        },
        {
        source: '漯河',
        target: '周口',
        color: '#8378ea',
        },
    ],
    icon: {
        show: true,
        src: mapPoint,
    },
    text: {
        show: true,
    },
    k: 0.5,
    bgImgSrc: mapImg,
    }
})





</script>
