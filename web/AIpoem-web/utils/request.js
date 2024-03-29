import axios from "axios";
import store from "@/store";
const instance = axios.create({
    baseURL: 'http://124.221.53.69:8080',
    timeout: 5000,
    headers: {
      'content-Type': 'application/json;charset=UTF-8',
    },
  });
  instance.interceptors.request.use(
    (config) => {
      // 在发送请求之前做些什么
      // 添加请求头等操作
      if(store.state.token){
        config.headers['token']=store.state.token
      }
      console.log(config.headers['token'])
      return config;
    },
    (error) => {
      // 对请求错误做些什么
      console.log("请求失败");
      return Promise.reject(error);
    }
  );
  instance.interceptors.response.use(
    //请求成功
    res => {
      console.log("请求成功")
      return res
    },
    //请求失败
    error => {
        //可根据不同的状态去区分不同的错误，达到不同效果
        console.log(error);
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
        