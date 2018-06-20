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
        this.bs.$on('e:alert', function (data) {
        self.show = true;
        self.text = data;
        setTimeout(function () {
          self.show = false;
        },1200);
        });
    }
  }
</script>
<style>
  .alert{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width:fit-content;
    width:-webkit-fit-content;
    width:-moz-fit-content;
    padding: 0 .3rem 0 0.3rem;
    height: 0.8rem;
    line-height: 0.8rem;
    border: 0.01rem solid #CCC;
    text-align: center;
    font-size: 0.22rem;
    background-color: #000;
    opacity: 0.7;
    color: #fff;
    border-radius: 0.1rem;
    overflow: hidden;
    z-index: 99999;
  }
</style>
