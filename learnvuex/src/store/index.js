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
        info:{
            id:119,
            name:'ai',
            age:21,

        },
        number:0
    },
    getters:{
        infoStudents(state){
            return state.students.filter((item) =>item.age > 13);
        }
    },
    actions:{
        // 处理异步操作
        aChangeInfo(content,payload){
            setTimeout(()=>{
                console.log(payload.massage);
                payload.fun()
                content.commit('changeInfo')
            },1000)
        }

    },
    mutations:{
        increment(state,count){
            state.number += count
        },
        decrement(state,payload){
            console.log(payload);//{type: 'minus1', m: 2}
            state.number-=payload.m
        },
        changeInfo(state){
            // 直接添加vuex不会响应到页面上，因为没有在响应系统中
            // state.info['arr'] = '郑州'0

            // 使用Vue原生的set方法可以将数据进行响应式

            // Vue.set(state.info,'arr','郑州')

            // 使用关键字删除可以在vuex中删除但是不会响应到页面上
            // delete state.info.age

            // 使用Vue原始delete方法进行删除
            Vue.delete(state.info,'age')
        }
    },
    modules:{}
})

export default store