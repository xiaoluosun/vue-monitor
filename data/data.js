
export let asyncData = {
    name: 'Tokyo',
    marker: {
        symbol: 'square'
    },
    data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, {
        y: 26.5,
        marker: {
            symbol: 'url(http://www.highcharts.com/demo/gfx/sun.png)'
        }
    }, 23.3, 18.3, 13.9, 9.6]
}

// area chart data
export const AreaData = {
    chart: {
        type: 'area'
    },
    credits: {
        enabled:false
    },
    title: {
        text: '订阅文章错误趋势图'
    },
    // subtitle: {
    //     text: '数据来源: <a href="http://thebulletin.metapress.com/content/c4120650912x74k7/fulltext.pdf">' +
    //     'thebulletin.metapress.com</a>'
    // },
    xAxis: {
        type: "datetime",
        categories: []
    },
    yAxis: {
        title: {
            text: 'k = 1000次'
        },
        labels: {
            formatter: function () {
                return this.value / 1000 + 'k';
            }
        }
    },
    tooltip: {
        pointFormat: '<b>{series.name}</b>共发生<b>{point.y:,.0f}次</b>'
    },
    plotOptions: {
        // area: {
        //     pointStart: 1940,
        //     marker: {
        //         enabled: false,
        //         symbol: 'circle',
        //         radius: 2,
        //         states: {
        //             hover: {
        //                 enabled: true
        //             }
        //         }
        //     }
        // }
    },
    // series: []
    series: [{
        name: '网络及接口错误',
        // color: '#FF8C69',
        data: []
    }, {
        name: '脚本错误',
        // color: '#FFA54F',
        data: []
    }
    ]
}

// pie chart data
export const PieData = {
    chart: {
        type: 'pie',
        options3d: {
            enabled: true,
            alpha: 45
        }
    },
    credits: {
        enabled:false
    },
    title: {
        text: '文章打开完成度'
    },
    // subtitle: {
    //     text: '3D donut in Highcharts'
    // },
    tooltip: {
        headerFormat: '{series.name}<br>',
        pointFormat: '<b>{point.name}: {point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            }
        }
    },
    series: [{
        name: '文章打开完成度',
        data: []
    }]
}

// pie chart data
export const PieDataUser = {
    chart: {
        type: 'pie',
        options3d: {
            enabled: true,
            alpha: 45
        }
    },
    credits: {
        enabled:false
    },
    title: {
        text: '影响用户数'
    },
    // subtitle: {
    //     text: '3D donut in Highcharts'
    // },
    tooltip: {
        headerFormat: '{series.name}<br>',
        pointFormat: '<b>{point.name}: {point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            }
        }
    },
    series: [{
        name: '影响用户数',
        data: []
    }]
}

export const DrilldownData = {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Basic drilldown'
    },
    xAxis: {
        type: 'category'
    },
    legend: {
        enabled: false
    },
    plotOptions: {
        series: {
            borderWidth: 0,
            dataLabels: {
                enabled: true
            }
        }
    },
    series: [{
        name: 'Things',
        colorByPoint: true,
        data: [{
            name: 'Animals',
            y: 5,
            drilldown: 'animals'
        }, {
            name: 'Fruits',
            y: 2,
            drilldown: 'fruits'
        }, {
            name: 'Cars',
            y: 4,
            drilldown: 'cars'
        }]
    }],
    drilldown: {
        series: [{
            id: 'animals',
            data: [
                ['Cats', 4],
                ['Dogs', 2],
                ['Cows', 1],
                ['Sheep', 2],
                ['Pigs', 1]
            ]
        }, {
            id: 'fruits',
            data: [{
                name: 'Apples',
                y: 4
            }, {
                name: 'Oranges',
                y: 2,
                drilldown: 'third-leves'
            }]
        }, {
            id: 'cars',
            data: [
                ['Toyota', 4],
                ['Opel', 2],
                ['Volkswagen', 2]
            ]
        }, {
            id: 'third-leves',
            data: [
                ['Toyota', 4],
                ['Opel', 2],
                ['Volkswagen', 2]
            ]
        }]
    }
};
