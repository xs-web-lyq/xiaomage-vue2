
import axios from 'axios';

// export function request(config) {
//     return new Promise((resolve, reject) => {
//         // 创建axios的实例
//         const instance = axios.create({
//             baseURL: '',
//             timeout: 5000
//         })
//         // 发送网络请求
//         instance(config)
//             .then(res => {
//                 resolve(res)
//             })
//             .catch(err => {
//                 reject(err)
//             })
//     })

// }



export function request(config) {
        // 创建axios的实例
        const instance = axios.create({
            baseURL: '',
            timeout: 5000
        })

        // 请求拦截器
        instance.interceptors.request.use(config => {
            // 需求分析
            // 1.当配置的信息不满足规范是，可以在此对请求进行重新配置

            // 2.如果每次发送网络请求时，都希望在界面中显示一个请求的图标

            // 3.某些网络请求（比如登录（token））,必须携带一些特殊的信息

            // 拦截请求进行相关配置之后必须返回配置，否则将会无法响应
            return config
        },err => {
            console.log(err);
        })



        // 响应拦截器
        instance.interceptors.response.use(res => {
            return res.data
        },err => {
            console.log(err);
        })

        // 发送网络请求--直接返回，因为axios请求返回的就是Promise对象
        return instance(config)
}