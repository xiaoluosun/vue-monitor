<style scoped>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
    }
    .layout-logo{
        width: 100px;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        float: left;
        position: relative;
        top: 15px;
        left: 20px;
    }
    .layout-nav{
        width: 420px;
        margin: 0 auto;
    }
    .layout-assistant{
        width: 300px;
        margin: 0 auto;
        height: inherit;
    }
    .layout-breadcrumb{
        padding: 10px 15px 0;
    }
    .layout-content{
        min-height: 1000px;
        margin: 15px;
        overflow: hidden;
        background: #fff;
        border-radius: 4px;
    }
    .layout-content-main{
        padding: 10px;
    }
    .layout-copy{
        text-align: center;
        padding: 10px 0 20px;
        color: #9ea7b4;
    }
    #test {
        width: 400px;
        height: 400px;
        margin: 40px auto;
    }
</style>
<template>
    <div class="layout">
        <div class="layout-content">
            <div class="layout-content-main">
                <div>
                    <section class="chart-list">
                        <section class="charts">
                            <vue-highcharts :options="areaOptions" ref="areaCharts"></vue-highcharts>
                        </section>
                    </section>
                </div>
                <br />
                <br />
                <div align="center">
                    <Row style="margin:0 auto">
                        <Col span="12" style="width: 100%;">
                            <DatePicker type="daterange" :options="options2" @on-change="searchData" placement="bottom-end" placeholder="选择日期查询" style="width: 200px"></DatePicker>
                            <!--&nbsp;&nbsp;&nbsp;&nbsp;-->
                            <!--<Button type="ghost">查询</Button>-->
                        </Col>
                    </Row>
                </div>
                <br/>
                <div>
                    <section class="chart-list">
                        <section class="charts" style="width: 100%">
                            <table style="width: 100%">
                                <tr>
                                    <td style="width: 50%">
                                        <vue-highcharts :options="pieOptions" ref="pieChart"></vue-highcharts>
                                    <td>
                                    <td style="width: 50%">
                                        <vue-highcharts :options="pieUserOptions" ref="pieUserChart"></vue-highcharts>
                                    </td>
                                </tr>
                            </table>
                        </section>
                    </section>
                </div>
                <br/>
                <br/>
                <div>
                    <h2>网络及接口错误IP排行（TOP50）</h2>
                    <Table stripe height="400" :loading="api_ip_loading" :columns="ip_list" :data="ip_js_fail_list"></Table>
                    <!--<br/>-->
                    <!--<h2>脚本错误IP排行（TOP50）</h2>-->
                    <!--<Table stripe height="400" :loading="api_ip_loading" :columns="ip_list" :data="ip_js_fail_list"></Table>-->
                </div>
                <br/>
                <div>
                    <table style="width: 100%">
                        <tr>
                            <td style="width: 50%">
                                <Card style="width:100%">
                                    <p slot="title">
                                        网络及接口错误设备排行（TOP10）
                                    </p>
                                    <table style="width:95%" align="center">
                                        <tr>
                                            <td style="width:50%" align="center">
                                                <h3 style="color: #9ea7b4">Android设备({{android_api_fali_total}}次)</h3>
                                                <Table stripe :loading="api_device_loading" :columns="device_list" :data="android_api_fail_list"></Table>
                                            </td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <td style="width:50%" align="center">
                                                <h3 style="color: #9ea7b4">iOS设备({{iOS_api_fali_total}}次)</h3>
                                                <Table stripe :loading="api_device_loading" :columns="device_list" :data="iOS_api_fail_list"></Table>
                                            </td>
                                        </tr>
                                    </table>
                                </Card>
                            </td>
                            <td style="width: 50%">
                                <Card style="width:100%">
                                    <p slot="title">
                                        脚本错误设备排行（TOP10）
                                    </p>
                                    <table style="width:95%" align="center">
                                        <tr>
                                            <td style="width:50%" align="center">
                                                <h3 style="color: #9ea7b4">Android设备({{android_total}}次)</h3>
                                                <Table stripe :loading="js_device_loading" :columns="device_list" :data="android_js_fail_list"></Table>
                                            </td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <td style="width:50%" align="center">
                                                <h3 style="color: #9ea7b4">iOS设备({{iOS_total}}次)</h3>
                                                <Table stripe :loading="js_device_loading" :columns="device_list" :data="iOS_js_fail_list"></Table>
                                            </td>
                                        </tr>
                                    </table>
                                </Card>
                            </td>
                        </tr>
                        <tr style="width: 100%">
                            <td style="width: 50%">
                                <Card style="width:100%">
                                    <p slot="title">
                                        网络及接口错误类别排行（TOP10）
                                    </p>
                                    <table style="width:95%" align="center">
                                        <tr>
                                            <td style="width:50%" align="center">
                                                <h3 style="color: #9ea7b4">Android设备({{ android_total_api_error }}次)</h3>
                                                <Table stripe :loading="api_error_loading" :columns="error_list" :data="android_api_error"></Table>
                                            </td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <td style="width:50%" align="center">
                                                <h3 style="color: #9ea7b4">iOS设备({{ iOS_total_api_error }}次)</h3>
                                                <Table stripe :loading="api_error_loading" :columns="error_list" :data="iOS_api_error"></Table>
                                            </td>
                                        </tr>
                                    </table>
                                </Card>
                            </td>
                            <td style="width: 50%">
                                <Card style="width:100%">
                                    <p slot="title">
                                        脚本错误类别排行（TOP10）
                                    </p>
                                    <table style="width:95%" align="center">
                                        <tr>
                                            <td style="width:50%" align="center">
                                                <h3 style="color: #9ea7b4">Android设备({{ android_total_api_error }}次)</h3>
                                                <Table stripe :columns="error_list" :data="android_js_error"></Table>
                                            </td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <td style="width:50%" align="center">
                                                <h3 style="color: #9ea7b4">iOS设备({{ iOS_total_api_error }}次)</h3>
                                                <Table stripe :columns="error_list" :data="iOS_js_error"></Table>
                                            </td>
                                        </tr>
                                    </table>
                                </Card>
                            </td>
                        </tr>
                        <tr style="width: 100%">
                            <td style="width: 50%">
                                <Card style="width:100%">
                                    <p slot="title">
                                        订阅文章错误排行（TOP10）
                                    </p>
                                    <table style="width:95%" align="center">
                                        <tr>
                                            <td style="width:50%" align="center">
                                                <h3 style="color: #9ea7b4">网络及接口错误</h3>
                                                <Table stripe :loading="api_article_loading" :columns="article_list" :data="article_api_fail_list"></Table>
                                            </td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <td style="width:50%" align="center">
                                                <h3 style="color: #9ea7b4">脚本错误</h3>
                                                <Table stripe :loading="api_article_loading" :columns="article_list" :data="article_js_fail_list"></Table>
                                            </td>
                                        </tr>
                                    </table>
                                </Card>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import axios from '../../node_modules/axios'
    import Vue from '../../node_modules/vue';
    import VueHighcharts from 'vue2-highcharts'
    import Drilldown from '../../node_modules/highcharts/modules/drilldown.js'
    import * as dataChart from '../../data/data'
    import Highcharts from 'highcharts'
    Drilldown(Highcharts);
    export default {
        components: {
            VueHighcharts
        },
        data () {
            return {
                api_device_loading: true,
                js_device_loading: true,
                api_error_loading: true,
                js_error_loading: true,
                api_article_loading: true,
                api_ip_loading: true,
                Highcharts: Highcharts,
                areaOptions: dataChart.AreaData,
                pieOptions: dataChart.PieData,
                pieUserOptions: dataChart.PieDataUser,
                device_list: [
                    {
                        title: '设备名称',
                        key: 'device'
                    },
                    {
                        title: '出现次数',
                        key: 'nums'
                    }
                ],
                error_list: [
                    {
                        title: '错误类别',
                        key: 'error'
                    },
                    {
                        title: '出现次数',
                        key: 'nums'
                    }
                ],
                article_list: [
                    {
                        title: '文章ID',
                        key: 'article_id'
                    },
                    {
                        title: '出现次数',
                        key: 'nums'
                    }
                ],
                ip_list: [
                    {
                        title: 'IP',
                        key: 'ip'
                    },
                    {
                        title: '所在地（根据IP定位）',
                        key: 'location'
                    },
                    {
                        title: '用户ID',
                        key: 'user_id'
                    },
                    {
                        title: '设备',
                        key: 'device'
                    },
                    {
                        title: '网络类型',
                        key: 'net'
                    },
                    {
                        title: '错误次数',
                        key: 'nums'
                    }
                ],
                iOS_js_fail_list: [],
                android_js_fail_list: [],
                iOS_total: 0,
                android_total: 0,
                iOS_api_fail_list: [],
                android_api_fail_list: [],
                iOS_api_fali_total: 0,
                android_api_fali_total: 0,
                iOS_api_error: [],
                android_api_error: [],
                iOS_total_api_error: 0,
                android_total_api_error: 0,
                iOS_js_error: [],
                android_js_error: [],
                iOS_total_js_error: 0,
                android_total_js_error: 0,
                article_api_fail_list: [],
                article_js_fail_list: [],
                ip_js_fail_list: [],
                options2: {
                    shortcuts: [
                        {
                            text: '一周内',
                            value () {
                                const end = new Date();
                                const start = new Date();
                                start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                                return [start, end];
                            }
                        },
                        {
                            text: '一个月内',
                            value () {
                                const end = new Date();
                                const start = new Date();
                                start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                                return [start, end];
                            }
                        },
                        {
                            text: '三个月内',
                            value () {
                                const end = new Date();
                                const start = new Date();
                                start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                                return [start, end];
                            }
                        }
                    ]
                },
                flask_host: 'http://127.0.0.1:5000'
            }
        },
        mounted() {
            this.$Loading.start();
            this.but_ajax();
            this.setChart();
            this.$Loading.finish();
        },
        methods: {
            searchData(searchDate) {
                this.but_ajax(searchDate);
                this.setChart(searchDate);
            },
            setChart(searchDate) {
                var self = this;

                var areaCharts = this.$refs.areaCharts.chart;
                axios.post(this.flask_host + "/getSubscription").then(function (response) {
                    areaCharts.xAxis[0].setCategories(response.data.index_date);
                    areaCharts.series[0].setData(response.data.api_fail);
                    areaCharts.series[1].setData(response.data.js_fail);
                }).catch(function (error) {
                    console.log(error);
                });

                var params = new URLSearchParams();
                if(searchDate != null && searchDate != undefined) {

                    params.append('start', searchDate[0]);
                    params.append('end', searchDate[1]);
                } else {
                    params.append('start', '1970-01-01');
                    params.append('end', '2100-01-01');
                }
                var pieChart = this.$refs.pieChart.chart;
                axios.post(this.flask_host + "/getSubscriptionSum", params).then(function (response) {
                    pieChart.series[0].setData(response.data);
                }).catch(function (error) {
                    console.log(error);
                });

                var pieUserChart = this.$refs.pieUserChart.chart;
                axios.post(this.flask_host + "/getSubscriptionUser", params).then(function (response) {
                    pieUserChart.series[0].setData(response.data);
                }).catch(function (error) {
                    console.log(error);
                });
            },
            but_ajax(searchDate) {
                var self = this;
                var params = new URLSearchParams();

                // 计算昨天的日期
                var dd = new Date();
                dd.setDate(dd.getDate() - 1);
                var y = dd.getFullYear();
                var m = dd.getMonth()+1;
                var d = dd.getDate();

                if(searchDate != null && searchDate != undefined) {
                    params.append('start', searchDate[0]);
                    params.append('end', searchDate[1]);
                } else {
                    m = m < 10 ? "0" + m:m
                    d = d < 10 ? "0" + d:d
                    params.append('start', y + "-" + m + "-" + d);
                    params.append('end', y + "-" + m + "-" + d);
                }

                self.api_ip_loading = true;
                axios.post(this.flask_host + "/getAPIFailIP", params).then(function (response) {
                    self.ip_js_fail_list = response.data['ipList'];
                    self.api_ip_loading = false;
                }).catch(function (error) {
                    console.log(error);
                });

                self.api_device_loading = true;
                axios.post(this.flask_host + "/getAPIFailDevices", params).then(function (response) {
                    self.iOS_api_fail_list = response.data['iOS'];
                    self.android_api_fail_list = response.data['android'];
                    self.iOS_api_fali_total = response.data['iOS_total'];
                    self.android_api_fali_total = response.data['android_total'];
                    self.api_device_loading = false;
                }).catch(function (error) {
                    console.log(error);
                });

                self.js_device_loading = true;
                axios.post(this.flask_host + "/getJSFailDevices", params).then(function (response) {
                    self.iOS_js_fail_list = response.data['iOS'];
                    self.android_js_fail_list = response.data['android'];
                    self.iOS_total = response.data['iOS_total'];
                    self.android_total = response.data['android_total'];
                    self.js_device_loading = false;
                }).catch(function (error) {
                    console.log(error);
                });

                self.api_error_loading = true;
                axios.post(this.flask_host + "/getApiError", params).then(function (response) {
                    self.iOS_api_error = response.data['iOS'];
                    self.android_api_error = response.data['android'];
                    self.iOS_total_api_error = response.data['iOS_total'];
                    self.android_total_api_error = response.data['android_total'];
                    self.api_error_loading = false;
                }).catch(function (error) {
                    console.log(error);
                });

                self.api_article_loading = true;
                axios.post(this.flask_host + "/getAPIFailArticle", params).then(function (response) {
                    self.article_api_fail_list = response.data['article'];
                    self.api_article_loading = false;
                }).catch(function (error) {
                    console.log(error);
                });

                self.js_article_loading = true;
                axios.post(this.flask_host + "/getJSFailArticle", params).then(function (response) {
                    self.article_js_fail_list = response.data['article'];
                    self.js_article_loading = false;
                }).catch(function (error) {
                    console.log(error);
                });
            }
        }
    }
</script>