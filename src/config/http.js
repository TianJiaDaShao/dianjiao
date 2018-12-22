import axios from 'axios';
import qs from 'qs'

axios.defaults.timeout = 5000;
axios.defaults.baseURL = '';

/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */
export function fetch(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
        params: params
      })
      .then(response => {
        resolve(response.data);
      })
      .catch(err => {
        reject(err)
      })
  })
}


/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */
export function post(url, data = {}, head = '') {
  return new Promise((resolve, reject) => {
    axios.post(url, qs.stringify({
      "data": "{'head':{'version':'1.1.0','clientOSType':3," + head + "},'body':{" + data + "}}"
    })).then(response => {
      resolve(response.data);
    }, err => {
      reject(err)
    })
  })
}

export function postIBP(url, data = {}, head = '') {
  return new Promise((resolve, reject) => {
    axios.post(url, qs.stringify({
      "data": "{'header':{'channel':'starAppPayment','version':'1.1.0','clientOSType':3," + head + "},'body':{" + data + "}}"
    })).then(response => {
      resolve(response.data);
    }, err => {
      reject(err)
    })
  })
}

export function postArr(url, data = {}, head = '') {
  return new Promise((resolve, reject) => {
    axios.post(url, qs.stringify({
      "data": "{'head':{'version':'1.1.0','clientOSType':3," + head + "},'body':" + data + "}"
    })).then(response => {
      resolve(response.data);
    }, err => {
      reject(err)
    })
  })
}

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */
export function postEr(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, qs.stringify({
      "data": data
    })).then(response => {
      resolve(response.data);
    }, err => {
      reject(err)
    })
  })
}

/**
 * 封装patch请求
 * @param url
 * @param data
 * @returns {Promise}
 */
export function patch(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.patch(url, data)
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err)
      })
  })
}

/**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */
export function put(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.put(url, data)
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err)
      })
  })
}
