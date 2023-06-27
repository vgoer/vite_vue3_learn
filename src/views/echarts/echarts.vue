<style scoped lang="less">
.echarts {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
</style>
<template>
    <!-- 为 ECharts 准备一个定义了宽高的 DOM -->
    <div class="echarts">
        <div id="main" style="width: 600px; height: 400px"></div>
        <div id="main2" style="width: 600px; height: 400px"></div>
        <div id="main3" style="width: 600px; height: 400px"></div>
    </div>
</template>
<script setup>
import { onMounted } from 'vue';

import * as echarts from 'echarts';

onMounted(() => {
    // 基于准备好的dom，初始化echarts实例
    let myChart = echarts.init(document.getElementById('main'));
    // 绘制图表
    let chartData = [
        {
            name: 'xxx事项',
            value: 245,
        },
        {
            name: 'xxx事项',
            value: 211,
        },
        {
            name: 'xxx事项',
            value: 165,
        },
        {
            name: 'xxx事项',
            value: 145,
        },
        {
            name: 'xxx事项',
            value: 128,
        },
    ];

    myChart.setOption({
        backgroundColor: '#1c2879',
        xAxis: {
            splitLine: {
                show: false,
            },
            axisLabel: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            splitArea: { show: false },
            axisLine: {
                show: false,
            },
        },
        grid: {
            top: 0,
            bottom: 0,
            left: '5%',
        },
        yAxis: {
            inverse: true,
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                textStyle: {
                    color: '#fff',
                    padding: [-15, 0, 35, 18],
                },
                formatter(value, index) {
                    let str = '',
                        num = 'TOP' + (index + 1);
                    if (index === 0) {
                        str = '{a| ' + num + '}{title| ' + value + '}';
                    } else if (index === 1) {
                        str = '{b| ' + num + '}{title| ' + value + '}';
                    } else if (index === 2) {
                        str = '{c| ' + num + '}{title| ' + value + '}';
                    } else {
                        str = '{d| ' + num + '}{title| ' + value + '}';
                    }
                    return str;
                },
                rich: {
                    a: {
                        borderColor: '#EE6F7C',
                        borderWidth: 1,
                        borderRadius: [0, 10, 10, 0],
                        padding: [3.5, 10, 1, -13],
                        backgroundColor: 'rgba(238, 111, 124, 0.8)',
                    },
                    b: {
                        borderColor: '#FFCF5F',
                        borderWidth: 1,
                        borderRadius: [0, 10, 10, 0],
                        padding: [3.5, 10, 1, -13],
                        backgroundColor: 'rgba(255, 207, 95, 0.7)',
                    },
                    c: {
                        borderColor: '#00E8FF',
                        borderWidth: 1,
                        borderRadius: [0, 10, 10, 0],
                        padding: [3.5, 10, 1, -13],
                        backgroundColor: 'rgba(0, 232, 255, 0.7)',
                    },
                    d: {
                        borderColor: '#1A90FF',
                        borderWidth: 1,
                        borderRadius: [0, 10, 10, 0],
                        padding: [3.5, 10, 1, -13],
                        backgroundColor: 'rgba(26, 144, 255, 0.7)',
                    },
                    title: {
                        padding: [0, 0, 0, 3],
                    },
                },
                align: 'left',
            },
            data: chartData.map((item) => item.name),
        },
        series: [
            {
                type: 'pictorialBar',
                symbol: 'rect',
                symbolRotate: 30,
                symbolRepeat: 'fixed',
                symbolClip: true,
                symbolOffset: [0, -1.5],
                symbolSize: [2, 12],
                symbolMargin: '3',
                itemStyle: {
                    normal: {
                        color: '#000726',
                    },
                },
                label: {
                    show: true,
                    color: '#fff',
                    fontFamily: 'Bebas',
                    fontSize: 12,
                    offset: [-9, -1.5],
                    position: 'right',
                    formatter(params) {
                        let result = '';
                        switch (params.dataIndex) {
                            case 0:
                                result =
                                    '{img|}{index0|' +
                                    params.value +
                                    '}{unit|件}';
                                break;
                            case 1:
                                result =
                                    '{img|}{index1|' +
                                    params.value +
                                    '}{unit|件}';
                                break;
                            case 2:
                                result =
                                    '{img|}{index2|' +
                                    params.value +
                                    '}{unit|件}';
                                break;
                            default:
                                result =
                                    '{img|}{index3|' +
                                    params.value +
                                    '}{unit|件}';
                                break;
                        }
                        return result;
                    },
                    rich: {
                        img: {
                            height: 18,
                            width: 20,
                            // backgroundColor: { image: arrow },这个图片自己切，这里上传不了（加了一个尾巴的形状）
                        },
                        unit: {
                            color: '#fff',
                            fontSize: 11,
                        },
                        index0: {
                            color: '#ee6f7c',
                            fontFamily: 'Bebas',
                            padding: [-2, 2, 0, 0],
                        },
                        index1: {
                            color: '#ffcf5f',
                            fontFamily: 'Bebas',
                            padding: [-2, 2, 0, 0],
                        },
                        index2: {
                            color: '#00e8ff',
                            fontFamily: 'Bebas',
                            padding: [-2, 2, 0, 0],
                        },
                        index3: {
                            color: '#fff',
                            fontFamily: 'Bebas',
                            padding: [-2, 2, 0, 0],
                        },
                    },
                },
                symbolBoundingData:
                    Math.max(...chartData.map((item) => item.value)) * 1.3,
                data: chartData.map((item) => item.value),
                z: 2,
            },
            {
                type: 'bar',
                barWidth: 10,
                data: chartData.map((item) => item.value),
                itemStyle: {
                    normal: {
                        color: '#00F7F0',
                    },
                },
                z: 1,
            },
            {
                type: 'bar',
                barGap: '-125%', // 设置外框粗细
                data: chartData.map(
                    (items) =>
                        Math.max(...chartData.map((item) => item.value)) * 1.3,
                ),
                barWidth: 15,
                itemStyle: {
                    color: 'none',
                    borderColor: 'rgba(64, 245, 245, 0.5)',
                },
                z: 0,
            },
        ],
    });
});

// 表二
onMounted(() => {
    let chartTwo = echarts.init(document.getElementById('main2'));

    let legendData = ['中华', '利群', '云烟']; //图例

    let indicator = [
        {
            text: '品牌基本分析',
            max: 30,
        },
        {
            text: '品牌趋势分析',
            max: 30,
        },
        {
            text: '品牌转移分析',
            max: 30,
        },
    ];
    let dataArr = [
        {
            value: [25, 29, 29, 27],
            name: legendData[0],
            itemStyle: {
                normal: {
                    lineStyle: {
                        color: '#00D7FF',
                        // shadowColor: '#4BFFFC',
                        // shadowBlur: 10,
                    },
                    shadowColor: '#00D7FF',
                    shadowBlur: 10,
                },
            },
            areaStyle: {
                normal: {
                    // 单项区域填充样式
                    color: {
                        type: 'linear',
                        x: 0, //右
                        y: 0, //下
                        x2: 1, //左
                        y2: 1, //上
                        colorStops: [
                            {
                                offset: 0,
                                color: '#00D7FF',
                            },
                            {
                                offset: 0.5,
                                color: 'rgba(0,0,0,0)',
                            },
                            {
                                offset: 1,
                                color: '#00D7FF',
                            },
                        ],
                        globalCoord: false,
                    },
                    opacity: 1, // 区域透明度
                },
            },
        },
        {
            value: [10, 11, 5, 5],
            name: legendData[1],
            itemStyle: {
                normal: {
                    lineStyle: {
                        color: '#C000FF',
                        // shadowColor: '#4A99FF',
                        // shadowBlur: 10,
                    },
                    shadowColor: '#C000FF',
                    shadowBlur: 10,
                },
            },
            areaStyle: {
                normal: {
                    // 单项区域填充样式
                    color: {
                        type: 'linear',
                        x: 0, //右
                        y: 0, //下
                        x2: 1, //左
                        y2: 1, //上
                        colorStops: [
                            {
                                offset: 0,
                                color: '#C000FF',
                            },
                            {
                                offset: 0.5,
                                color: 'rgba(0,0,0,0)',
                            },
                            {
                                offset: 1,
                                color: '#C000FF',
                            },
                        ],
                        globalCoord: false,
                    },
                    opacity: 1, // 区域透明度
                },
            },
        },
        {
            value: [23, 23, 29, 29],
            name: legendData[2],
            itemStyle: {
                normal: {
                    lineStyle: {
                        color: '#00FFB4',
                        // shadowColor: '#4BFFFC',
                        // shadowBlur: 10,
                    },
                    shadowColor: '#00FFB4',
                    shadowBlur: 10,
                },
            },
            areaStyle: {
                normal: {
                    // 单项区域填充样式
                    color: {
                        type: 'linear',
                        x: 0, //右
                        y: 0, //下
                        x2: 1, //左
                        y2: 1, //上
                        colorStops: [
                            {
                                offset: 0,
                                color: '#00FFB4',
                            },
                            {
                                offset: 0.5,
                                color: 'rgba(0,0,0,0)',
                            },
                            {
                                offset: 1,
                                color: '#00FFB4',
                            },
                        ],
                        globalCoord: false,
                    },
                    opacity: 1, // 区域透明度
                },
            },
        },
    ];
    let colorArr = ['#00D7FF', '#C000FF', '#00FFB4']; //颜色

    chartTwo.setOption({
        backgroundColor: '#101736',
        title: {
            text: '转移情况跟踪分析',
            x: '4%',
            width: 173,
            height: 163,
            fontSize: 22,
            textStyle: {
                color: '#fff',
                fontSize: '22',
            },
            subtextStyle: {
                color: '#90979c',
                fontSize: '16',
            },
        },
        color: colorArr,
        tooltip: {
            show: true,
            trigger: 'item',
            backgroundColor: '#282a33', // 背景
            padding: [8, 10], //内边距
            // 字体白色
            textStyle: {
                color: '#00e4ff',
            },
            // 边框发光 根据不同的series设置不同的color
            extraCssText: 'filter:drop-shadow(0 0 .1rem #71d8d9);',
            // extraCssText: 'filter:drop-shadow(0 0 .1rem #fff);'
        },
        legend: {
            orient: 'vertical',
            icon: 'squareRatio', //图例形状
            data: legendData,
            bottom: '35%',
            right: '5%',
            itemWidth: 14, // 图例标记的图形宽度。[ default: 25 ]
            itemHeight: 14, // 图例标记的图形高度。[ default: 14 ]
            itemGap: 21, // 图例每项之间的间隔。[ default: 10 ]横向布局时为水平间隔，纵向布局时为纵向间隔。
            textStyle: {
                fontSize: 14,
                color: '#fff',
            },
        },
        radar: {
            // shape: 'circle',
            name: {
                textStyle: {
                    color: '#fff',
                    fontSize: 16,
                },
            },
            center: ['35%', '50%'],
            indicator: indicator,
            splitArea: {
                // 坐标轴在 grid 区域中的分隔区域，默认不显示。
                show: true,
                areaStyle: {
                    // 分隔区域的样式设置。
                    color: ['rgba(255,255,255,0)', 'rgba(255,255,255,0)'], // 分隔区域颜色。分隔区域会按数组中颜色的顺序依次循环设置颜色。默认是一个深浅的间隔色。
                },
            },
            axisLine: {
                //指向外圈文本的分隔线样式
                lineStyle: {
                    color: '#153269',
                },
            },
            splitLine: {
                lineStyle: {
                    color: '#113865', // 分隔线颜色
                    width: 1, // 分隔线线宽
                },
            },
        },
        series: [
            {
                type: 'radar',
                symbolSize: 11,
                // symbol: 'angle',
                data: dataArr,
            },
        ],
    });
});

// 表三
onMounted(() => {
    let chartThree = echarts.init(document.getElementById('main3'));
    const data = [50, 100, 200];
    const lineData = [65, 82, 55, 54, 52, 80, 75, 40, 85, 65];
    const shadeData = [];
    const dataX = [
        '开发部',
        '市场部',
        '行政部',
        '人资部',
        '设计部',
        '法律部',
        '公关部',
        '运维部',
        '总经办',
        '董秘局',
    ];
    const max = data
        .concat(lineData)
        .reduce((pre, cur) => (pre > cur ? pre : cur), 0);
    lineData.forEach((item) => {
        shadeData.push(max);
    });
    const color = [
        '#1694fc',
        '#dc76f7',
        '#f54e45',
        '#28a745',
        '#146fd7',
        '#4ee5f0',
        '#1994fb',
        '#fea03e',
        '#e074fd',
        '#fa4d3f',
    ];

    chartThree.setOption({
        color,
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'none',
            },
            formatter: function (params) {
                return (
                    dataX[params[0].dataIndex] +
                    ':' +
                    lineData[params[0].dataIndex] +
                    '本'
                );
            },
        },
        xAxis: [
            {
                type: 'category',
                data: dataX,
            },
        ],
        yAxis: {
            type: 'value',
            max: max,
            axisLabel: {
                formatter: '{value}本',
            },
        },
        series: [
            {
                data: lineData,
                barWidth: 20,
                type: 'bar',
                itemStyle: {
                    normal: {
                        color: (params) => {
                            return color[params.dataIndex];
                        },
                    },
                },
            },
            {
                data: shadeData,
                barWidth: 20,
                type: 'bar',
                barGap: '-100%', //左移一个位置
                itemStyle: {
                    normal: {
                        color: function (d) {
                            let a = 6 * 10;
                            return `rgba(0,0,0,0.05)`;
                        },
                    },
                },
            },
        ],
    });
});
</script>
