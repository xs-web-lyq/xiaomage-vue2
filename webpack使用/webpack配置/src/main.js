import {name,age} from './js/info'


require('./css/index.css')

require('./css/app.less')

import Vue from 'vue'
import App from './vue/App.vue'
new Vue({
    el:'#app',
    components: {
        App,
    },
    template: '<App/>'
})