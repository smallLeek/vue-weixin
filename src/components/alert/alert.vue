<template>
    <div class="alert" @click="mover" v-if="show">
      {{text}}
    </div>
</template>
<script>
  export default {
    name: "alert",
    data(){
       return {
           show: false,
           text:''
       }
    },
    methods: {
      mover: function () {
        this.show = false;
      },
    },
    created(){
        let self = this;
        //监听当前实例上的自定义事件。事件可以由vm.$emit触发。回调函数会接收所有传入事件触发函数的额外参数。
        //vm.$on( event, callback )  事件名称   回调函数
        this.bs.$on('e:alert', function (data) {
        self.show = true;
        self.text = data;
        setTimeout(function () {
          self.show = false;
        },2500);
        });
    }
  }
</script>
<style>
  .alert{
    position: fixed;
    top:3rem;
    left: 0;
    right: 0;
    bottom: 0;
    margin:auto;
    display: table;
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
    padding: 0 .3rem 0 0.3rem;
    line-height: 0.8rem;
    height: 0.8rem;
    border: 0.01rem solid #ccc;
    text-align: center;
    font-size: 0.22rem;
    background-color: #000;
    opacity: 0.7;
    color: #fff;
    border-radius: 0.1rem;
    z-index:9999999999999999;
  }
</style>
