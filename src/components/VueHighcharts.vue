<template>
  <div class="highcharts">
  </div>
</template>

<script>
  import Highcharts from 'highcharts'
  import * as data from '../../data/data'

  export default {
    props: ['options', 'Highcharts'],
    name: 'VueHighcharts',
    data () {
      return {
        chart: null
      }
    },
    mounted(){
      if (!this.getChart() && this.options) {
        this.init();
      }
    },

    methods: {
      getChart(){
        return this.chart
      },
      addSeries(options){
        this.delegateMethod('addSeries', options);
      },
      removeSeries(){
        while(this.getChart().series.length !== 0) {
          this.getChart().series[0].remove();
        }
      },
      mergeOption(options){
        this.delegateMethod('update', options)
      },
      showLoading(txt){
        this.getChart().showLoading(txt);
      },
      hideLoading(){
        this.getChart().hideLoading();
      },
      delegateMethod(name, ...args){
        if (!this.getChart()) {
          warn(`Cannot call [$name] before the chart is initialized. Set prop [options] first.`, this)
          return
        }
        return this.getChart()[name](...args)
      },

      init(){
        if (!this.getChart() && this.options) {
         let _Highcharts = this.Highcharts || Highcharts;
         if (_Highcharts.product == 'Highstock') {
           this.chart = new _Highcharts.stockChart(this.$el, this.options);
         } else {
           this.chart = new _Highcharts.Chart(this.$el, this.options);
           ajax_chart();
         }
        }
      }
    },

    watch: {
      options: function (options) {
        if (!this.getChart() && options) {
          this.init()
        } else {
          this.getChart().update(this.options);
        }
      }
    },

    beforeDestroy(){
      if (this.getChart()) {
        this.getChart().destroy();
      }
    }
  }
</script>
