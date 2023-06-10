import request from '@/utils/request'


export const api_login = (data) => {
    return request({
        url:"/www/login",
        method:"post",
        data
    })
}


export const api_register = (data) => {
    return request({
        url:"/www/register",
        method:"post",
        data
    })
}



