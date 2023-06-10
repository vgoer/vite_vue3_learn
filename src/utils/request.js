import axios from 'axios'


/**
 * 请求配置
 */
const request = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    timeout:4000,
    headers:{
        "Content-Type":"application/json;chartset=utf-8",
    },
})


/**
 * 请求拦截器
 */
request.interceptors.request.use(
    (config) => {
        return config
    },

    (error) => {
        return Promise.reject(error)
    }
)


/**
 * 响应拦截器
 */
request.interceptors.response.use(
    (response) => {
        return response
    },

    (error) => {
        return Promise.reject(error)
    }
)


export default request