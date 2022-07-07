<template>
  <div>
    Vuexs 
    <h2>{{$store.state.massage}}</h2>
    <h2>{{$store.getters.infoStudents}}</h2>
    <button @click="add(5)">+</button>
    {{$store.state.number}}
    <button @click="minus(2)">-</button>
  </div>
 
</template>

<script>
export default {
    name:'HelloVuex',

    methods:{
        add(n){
            // mutations配置项接收两个参数，第一个为state,第二个为commit提交的参数，下面为一般形式，参数直接付给第二个参数
            this.$store.commit('increment',n)
        },
        minus(m){
            // mutations配置项接收两个参数，第一个为state,第二个为commit提交的负载，下面为特殊形式，对象直接付给第二个参数打点调用餐宿
            this.$store.commit({
                type:'decrement',//{type: 'minus1', m: 2}
                m,
            })
        }
    }
}
</script>

<style>

</style>