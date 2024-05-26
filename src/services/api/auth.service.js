import axiosHttp from "../utilities/app-interceptor/app-interceptor.service";

export class AuthServiceHelper {
  loginService(payload) {
    return axiosHttp.post('/users', payload);
    // return axiosHttp.post('/authorize', payload);
  }

  requestForgotPassword(payload) {
    return axiosHttp.post('/users', payload);
    // return axiosHttp.post('/forgot-password', payload);
  }

  changePassword(payload) {
    return axiosHttp.post('/users', payload);
    // return axiosHttp.post('/reset-password', payload);
  }
}  