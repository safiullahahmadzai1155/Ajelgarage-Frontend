import Axios from 'axios';
import config from "../config";
const axios = Axios.create({
    baseURL: config.api.baseUrl,
});

axios.interceptors.request.use(
    (config) => {
        config.headers['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axios.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
      if((error?.response?.data?.message==="Not Authorized , Token Failed") && (error?.response?.status===401)){
        window.location.href='/'
       
      }
        return Promise.reject(error);
    }
);

export default axios;