import axios from "axios";
const instance = axios.create({
    baseURL: 'https://124.221.53.69',
    timeout: 5000,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  instance.interceptors.request.use(
    (config) => {
      // 在发送请求之前做些什么
      // 添加请求头等操作
      return config;
    },
    (error) => {
      // 对请求错误做些什么
      return Promise.reject(error);
    }
  );
  
  instance.interceptors.response.use(
    (response) => {
      // 对响应数据做些什么
      // 统一处理响应数据等操作
      return response.data;
    },
    (error) => {
      // 对响应错误做些什么
      // 统一处理错误等操作
      return Promise.reject(error);
    }
  );

  export function get(url, params) {
    return instance.get(url, { params });
  }
  
  export function post(url, data) {
    return instance.post(url, data);
  }
  
  export function put(url, data) {
    return instance.put(url, data);
  }
  export default {
    get,
    post,
    put,
  };
        