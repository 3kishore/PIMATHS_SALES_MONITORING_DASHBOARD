import axiosHttp from "../utilities/app-interceptor/app-interceptor.service";

export class ApiServiceHelper {
  getMySalesSummary(payload) {
    return axiosHttp.post('/users', payload);
    // return axiosHttp.post('/get-my-sales-summary', payload);
  }

  getMyDayWiseSalesReport(payload) {
    return axiosHttp.post('/users', payload);
    // return axiosHttp.post('/get-daywise-data', payload);
  }
}
