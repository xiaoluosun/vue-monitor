<style scoped>
    @import 'styles/common.css';
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
    }
    .layout-logo{
        width: 60px;
        height: 50px;
        background: #5b6270;
        background:url(images/logo.png) no-repeat 5px 5px;
        border-radius: 3px;
        float: left;
        position: relative;
        top: 5px;
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
</style>
<template>
    <div class="layout">
        <Menu mode="horizontal" theme="dark" active-name="1">
            <div class="layout-logo"></div>
            <div class="layout-nav">
                <MenuItem name="post">
                    <router-link to="/post">
                        <Icon type="ios-navigate"></Icon>
                        网络请求
                    </router-link>
                </MenuItem>
                <MenuItem name="player" style="color: #1c2438">
                    <router-link to="/player">
                        <Icon type="ios-keypad"></Icon>
                        播放器
                    </router-link>
                </MenuItem>
                <MenuItem name="ebook">
                    <router-link to="/ebook">
                        <Icon type="ios-analytics"></Icon>
                        电子书
                    </router-link>
                </MenuItem>
                <MenuItem name="article">
                    <router-link to="/article">
                        <Icon type="ios-paper"></Icon>
                        订阅文章
                    </router-link>
                </MenuItem>
            </div>
        </Menu>
        <div class="layout-content">
            <div class="layout-content-main">
                <router-view></router-view>
            </div>
        </div>
        <div class="layout-copy">
            2017-2018 &copy; 罗辑思维测试部
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {}
        },
        mounted () {

        },
        beforeDestroy () {

        },
        methods: {
            goPage(path) {
                this.$router.push(path)
            }
        }
    }
</script>
