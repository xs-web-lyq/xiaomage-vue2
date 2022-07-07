import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex);


const store = new Vuex.Store({
    state:{
        massage:'不要想，要行动',
        students:[
            {id:1,name:'liu',age:18},
            {id:2,name:'yong',age:10},
            {id:3,name:'qi',age:30},
            {id:4,name:'yao',age:25},
            {id:5,name:'nu',age:13},
            {id:6,name:'li',age:11}
        ],
        number:0
    },
    getters:{
        infoStudents(state){
            return state.students.filter((item) =>item.age > 13);
        }
    },
    actions:{},
    mutations:{
        increment(state,count){
            state.number += count
        },
        decrement(state,payload){
            console.log(payload);//{type: 'minus1', m: 2}
            state.number-=payload.m
        }
    },
    modules:{}
})

export default store