<template>
  <div id="app">
    <modal></modal>
    <alert></alert>
    <router-view></router-view>
  </div>
</template>

<script>
  import modal from './components/modal/modal.vue'
  import alert from './components/alert/alert.vue'
export default {

  name: 'App',
  data(){
    return{

    }
  },
  components:{
    modal,
    alert
  }
}
</script>

<style scoped>
</style>
