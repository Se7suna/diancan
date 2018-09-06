// ajax请求函数模块

import axios from 'axios'
// url为请求路径 data为GET param查询或者POST请求参数
export default function ajax (url, data = {}, type = 'GET') {
    // 返回一个 promise对象 (异步返回的数据是 response.data)
    return new Promise(function (resolve, reject) {
        // 在 new Promise 内部执行异步请求
        // 用promise变量保存axios返回的Promise对象
        let promise
        // 发送ajax请求
        if (type === 'GET') {
            // 将data里面的数据拼接成查询字符串
            let dataStr = ''
            Object.keys(data).forEach(key => {
                dataStr += key + '=' + data[key] + '&'
            })
            if (dataStr !== '') {
                dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
                url = url + '?' + dataStr
            }
            promise = axios.get(url)
        } else {
            promise = axios.post(url, data)
        }
        // 如果 axios的异步成功 则调用 resolve 将response.data传递出去
        promise.then(response => {
            resolve(response.data)
        // 失败则 调用 rejcet 将 error 传递出去
        }).catch(error => {
            reject(error)
        })
    })
}
