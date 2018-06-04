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
    top: 50%;
    left: 25%;
    width: 4rem;
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
