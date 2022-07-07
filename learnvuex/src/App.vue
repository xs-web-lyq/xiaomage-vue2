<template>
  <div id="app">
    {{$store.state.massage}}
   <hello-vuex></hello-vuex>
  </div>
</template>

<script>

import HelloVuex from './components/HelloVuex.vue'

export default {
  name: 'app',
  components: {
    HelloVuex
  },
  created(){
  }
}
</script>

<style>

</style>
