import { Message } from '@arco-design/web-react';

const mergeOptions = (defaultOptions = {}, options = {}) => {
  const headers = Object.assign({}, defaultOptions.headers, options.headers);
  return Object.assign({}, defaultOptions, options, { headers })
}

class requestFetch {
  /**
    *@description get请求
    * @param {*} url
    * @param {*} options
    */
  static async get (url, options) {
    const response = await fetch(url, options)
    const res = response.json()
    if (res.code > 400 && res.code < 500) {
      Message.error(code.message)
    }
    return res
  }
    /**
    *@description post请求
    * @param {*} url
    * @param {*} [data={}]
    * @param {*} options
    * @return {*} 
    */
  static async post (url, data, options) {
    const defaultOptions = {
      headers: {
       "Content-Type": "application/json;charset=UTF-8"
      },
      method: "post",
      body: JSON.stringify(data),
      mode: "cors",
      credentials: 'omit'
    };
    const response = await fetch(url, mergeOptions(defaultOptions, options))
    const res = response.json()
    if (res.code > 400 && res.code < 500) {
      Message.error(code.message)
    }
    return res
  }
}

export default requestFetch