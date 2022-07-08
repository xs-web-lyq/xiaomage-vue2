import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

Vue.config.productionTip = false

new Vue({
  
  render: h => h(App),
}).$mount('#app')


axios({
  url:'/home/data',
  // params:{
  //   type:'sell',

  // }
}).then(res=>{
  console.log(res);
})