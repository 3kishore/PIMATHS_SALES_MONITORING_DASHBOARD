import axios from "axios";
import { EnvironmentHelperService } from "../../helper-service/environment-helper.service";

const _environmentHelperService = new EnvironmentHelperService();
const axiosHttp = axios.create({
  // baseURL: `https://jsonplaceholder.typicode.com`,
  // baseURL: 'http://localhost:8080',
  // baseURL: 'https://test-api-deployment.vercel.app',
  baseURL: 'https://sales-mathtutee-api.vercel.app'
});

axiosHttp.interceptors.request.use(
  (config) => {
    const token =  _environmentHelperService.getToken();
    return {
      ...config,
      headers: {
        Authorization: `${token}`,
        ...config.headers,
      },
    };
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosHttp.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      localStorage.removeItem('sessionObj');
      window.location.reload();
    }
    return Promise.reject(error);
  }
);

export default axiosHttp;
