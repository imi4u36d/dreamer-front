//引入封装好的 axios
import Axios from './axios'

//实例化
const instance = Axios()

//创建需要的请求方法:get post put delete
//url:请求的接口地址
//params:请求参数
//headers:请求头
export default {
    get(url: string, params: any, headers: any) {
        return instance.get(url, {params, headers})
    },
    post(url: string, params: any, headers: any) {
        return instance.post(url, params, {headers})
    },
    put(url: string, params: any, headers: any) {
        return instance.put(url, params, {headers})
    },
    delete(url: string, params: any, headers: any) {
        return instance.delete(url, {params, headers})
    }
}
