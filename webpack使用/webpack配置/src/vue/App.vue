<template>
  <div>
    <h3>1111111111111</h3>
    <h2>{{name}}</h2>
    <Cpn/>
  </div>
</template>

<script>
import Cpn from './Cpn.vue'
export default {
    name: 'App',
    components: {
        Cpn
    },
    data(){
        return {
            name:'刘永奇'
        }
    }

}
</script>

<style>
    body {
        color:green;
    }
</style>