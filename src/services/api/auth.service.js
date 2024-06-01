import axiosHttp from "../utilities/app-interceptor/app-interceptor.service";

export class AuthServiceHelper {
  loginService(payload) {
    // return axiosHttp.post('/users', payload);
    return axiosHttp.post('/auth/authorize', payload);
  }

  requestForgotPassword(payload) {
    // return axiosHttp.post('/users', payload);
    return axiosHttp.post('/auth/forget-password', payload);
  }

  changePassword(payload) {
    // return axiosHttp.post('/users', payload);
    return axiosHttp.post('/auth/reset-password', payload);
  }
}  