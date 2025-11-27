import axios from "axios";
import { message } from "ant-design-vue";

const myAxios = axios.create({
  baseURL: "http://localhost:8123",
  timeout: 60000,
  withCredentials: true,
});

myAxios.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么  
    return config;},
    (error) => {
    // 对请求错误做些什么
    return Promise.reject(error);
  })

myAxios.interceptors.response.use(
    (response) => {
        // 对响应数据做点什么
        return response;
    },
    (error) => {
        // 对响应错误做点什么
        message.error("请求出错：" + error.message);
        return Promise.reject(error);
    });

myAxios.interceptors.request.use(
  (response) => {
    const data = response.data;
    if (data.code ==== 401000) {
        if (!response.request.responseURL.includes("user/get/login")) {
    }
  })

export default myAxios