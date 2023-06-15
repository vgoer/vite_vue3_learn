<style scoped lang='less'>


</style>
<template>
    <div id="main" style="width: 600px; height: 600px;"></div>
    <div class="main1" style="width: 600px; height: 600px;"></div>
</template>
<script setup>
import * as echarts from 'echarts'
import { onMounted } from 'vue';


onMounted(() => {
    let myChart = echarts.init(document.getElementById('main'))

    myChart.setOption({
        backgroundColor:'#000',
        series: [{
            type: 'graph',
            layout: 'none',
            symbolSize: 50,
            roam: false,
            lineStyle: {
                color: 'yellow'
            },
            label: {
                normal: {
                    show: true,
                    position: 'top',
                }
            },
            focusNodeAdjacency:true,
            edgeSymbol: ['', 'arrow'],
            edgeSymbol: ['circle', 'arrow'],
            edgeSymbolSize: [2, 15],
            data: [{
                    name: '分析指标',
                    x:0,
                    y: 0
                }, {
                    name: '1',
                    x: -20,
                    y: 20
                }, {
                    name: '2',
                    x: 20,
                    y: 20
                },
                {
                    name: '3',
                    x:-40,
                    y: 40
                },{
                    name: '4',
                    x:-20,
                    y: 40
                },{
                    name: '5',
                    x:0,
                    y: 40
                },{
                    name: '6',
                    x:20,
                    y: 40
                },{
                    name: '7',
                    x:40,
                    y: 40
                },{
                    name: '8',
                    x:-40,
                    y: 60
                },{
                    name: '9',
                    x:0,
                    y: 60
                },{
                    name: '10',
                    x:40,
                    y: 60
                }
            ],
            links: [{
                source: '1',
                target: '分析指标'
            }, {
                source: '2',
                target: '分析指标'
            },  {
                source: '2',
                target: '5'
            }, {
                source: '3',
                target: '1'
            }, {
                source: '4',
                target: '1'
            }, {
                source: '5',
                target: '2'
            }, {
                source: '6',
                target: '2'
            }, {
                source: '7',
                target: '2'
            }, {
                source: '5',
                target: '6'
            }, {
                source: '6',
                target: '7'
            }, {
                source: '8',
                target: '3'
            }, {
                source: '9',
                target: '3'
            }, {
                source: '10',
                target: '3'
            }]
        }]

    })
})

</script>
