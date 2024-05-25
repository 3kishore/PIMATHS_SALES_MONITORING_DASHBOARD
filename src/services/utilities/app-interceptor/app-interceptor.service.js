import axios from "axios";

const axiosHttp = axios.create({
  baseURL: `https://jsonplaceholder.typicode.com`,
});

axiosHttp.interceptors.request.use(
  (config) => {
    const token =  "Your Token here"
    return {
      ...config,
      headers: {
        ...(token !== null && { Authorization: `${token}` }),
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
    console.log('interceptor', response);
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
    }
    return Promise.reject(error);
  }
);

export default axiosHttp;
