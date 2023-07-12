<style scoped lang="less">
    .chart_box{
        display: flex;
        justify-content: space-between;
    }
</style>
<template>
    <div class="chart_box">
        <div id="main" style="width: 600px; height: 600px"></div>
        <div id="main1" style="width: 600px; height: 600px"></div>
    </div>
</template>
<script setup>
import * as echarts from 'echarts';
import { onMounted } from 'vue';

/**
 * 分析指标的图表
 */
const get_analysis = () => {
    let myChart = echarts.init(document.getElementById('main'));

    myChart.setOption({
        backgroundColor: '#000',
        series: [
            {
                type: 'graph',
                layout: 'none',
                symbolSize: 50,
                roam: false,
                lineStyle: {
                    color: 'yellow',
                },
                label: {
                    normal: {
                        show: true,
                        position: 'top',
                    },
                },
                focusNodeAdjacency: true,
                edgeSymbol: ['', 'arrow'],
                edgeSymbol: ['circle', 'arrow'],
                edgeSymbolSize: [2, 15],
                data: [
                    {
                        name: '关系指标图',
                        x: 0,
                        y: 0,
                    },
                    {
                        name: '1',
                        x: -20,
                        y: 20,
                    },
                    {
                        name: '2',
                        x: 20,
                        y: 20,
                    },
                    {
                        name: '3',
                        x: -40,
                        y: 40,
                    },
                    {
                        name: '4',
                        x: -20,
                        y: 40,
                    },
                    {
                        name: '5',
                        x: 0,
                        y: 40,
                    },
                    {
                        name: '6',
                        x: 20,
                        y: 40,
                    },
                    {
                        name: '7',
                        x: 40,
                        y: 40,
                    },
                    {
                        name: '8',
                        x: -40,
                        y: 60,
                    },
                    {
                        name: '9',
                        x: 0,
                        y: 60,
                    },
                    {
                        name: '10',
                        x: 40,
                        y: 60,
                    },
                ],
                links: [
                    {
                        source: '1',
                        target: '分析指标',
                    },
                    {
                        source: '2',
                        target: '分析指标',
                    },
                    {
                        source: '2',
                        target: '5',
                    },
                    {
                        source: '3',
                        target: '1',
                    },
                    {
                        source: '4',
                        target: '1',
                    },
                    {
                        source: '5',
                        target: '2',
                    },
                    {
                        source: '6',
                        target: '2',
                    },
                    {
                        source: '7',
                        target: '2',
                    },
                    {
                        source: '5',
                        target: '6',
                    },
                    {
                        source: '6',
                        target: '7',
                    },
                    {
                        source: '8',
                        target: '3',
                    },
                    {
                        source: '9',
                        target: '3',
                    },
                    {
                        source: '10',
                        target: '3',
                    },
                ],
            },
        ],
    });
}


const get_columnar = () => {
    let myChart1 = echarts.init(document.getElementById('main1'))

    myChart1.setOption({
        backgroundColor:'#022038',
        tooltip: {},
        legend: {
            show: true,
            textStyle: {
                color: "#",
                fontSize: 11,
            },
        },
        grid: {
            left: "3%",
            right: "3%",
            bottom: "5%",
            top: "11%",
            containLabel: true,
        },
        xAxis: {
            type: "category",
            data: [
                "1日",
                "2日",
                "3日",
                "4日",
                "5日",
                "6日",
                "7日",
                "8日",
                "9日",
                "10日",
                "11日",
                "12日",
            ],
            axisLabel: {
                formatter: "{value}",
                color: "white", // 文本颜色
            },
        },
        yAxis: [
            {
                //   去网格线
                splitLine: {
                    show: false,
                },
                type: "value",
                name: "kW.h",
                // 标题名称颜色
                nameTextStyle: {
                    color: "white",
                    fontSize: 12,
                    fontWeight: 800,
                },
                axisLine: {
                    // show: false ,// 去除轴线
                    lineStyle: {
                    lineStyle: {
                        color: "white",
                    },
                    },
                },
                axisLabel: {
                    formatter: "{value}",
                    color: "white", // 文本颜色
                },
            },
            {
                type: "value",
                name: "线损率（%）",
                splitLine: { show: false },
                axisLine: {
                    //   show: false // 去除轴线
                    lineStyle: {
                    color: "white",
                    },
                },
                axisLabel: {
                    formatter: "{value}",
                    color: "white", // 文本颜色
                }, // 标题名称颜色
                nameTextStyle: {
                    color: "white",
                    fontSize: 12,
                    fontWeight: 800,
                },
            },
        ],
        series: [
            {
                name: "用电量",
                type: "bar",
                stack: "account",
                barMaxWidth: 18,
                itemStyle: {
                    color: {
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    type: "linear",
                    global: false,
                    colorStops: [
                        {
                            offset: 0,
                            color: "#017ebb",
                        },
                        {
                            offset: 1,
                            color: "#06fbfe",
                        },
                    ],
                    },
                },
                data:  [320, 302, 120, 100, 540, 123, 345, 667, 333, 122, 211, 99],
            },
            {
                name: "损耗电量",
                type: "bar",
                stack: "account",
                barMaxWidth: 18,
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: "#ffae88" },
                    { offset: 1, color: "#ff7388" },
                    ]),
                },
                data: [120, 102, 90, 150, 120, 123, 145, 167, 133, 172, 111, 199],
            },
            {
                z: 3,
                type: "pictorialBar",
                symbolPosition: "end",
                data:  [320, 302, 120, 100, 540, 123, 345, 667, 333, 122, 211, 99],
                symbol: "diamond",
                symbolOffset: [0, "-50%"],
                symbolSize: [10, 2],
                symbolRotate: 0,
                itemStyle: {
                    normal: {
                    borderWidth: 0,
                    color: "#10e6ff",
                    },
                },
            },
            {
                z: 3,
                type: "pictorialBar",
                symbolPosition: "end",
                data: [440, 404, 210, 250, 660, 246, 490, 834, 466, 294, 322, 298],
                label: {
                    normal: {
                    show: true,
                    position: "top",
                    fontSize: 10,
                    fontWeight: "bold",
                    color: "#5BFCF4",
                    },
                },
                symbol: "diamond",
                symbolOffset: [0, "-50%"],
                symbolSize: [10, 2],
                itemStyle: {
                    normal: {
                    borderWidth: 0,
                    color: "#ffcf90",
                    },
                },
            },
            {
                name: "损耗率",
                type: "line",
                symbol: "circle",
                smooth: true,
                yAxisIndex: 1,
                data: [0.5, 0.8, 0.8, 0.5, 0.5, 0.7, 0.8, 1, 0.65, 0.85, 0.56, 0.8],
                itemStyle: {
                    normal: {
                    color: "tomato",
                    },
                },
            },
        ],
    })
}


onMounted(() => {

    get_analysis()
    get_columnar()
})
</script>
