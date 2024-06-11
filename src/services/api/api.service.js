import axiosHttp from "../utilities/app-interceptor/app-interceptor.service";

export class ApiServiceHelper {
  getMySalesSummary(payload) {
    // return axiosHttp.post('/users', payload);
    return axiosHttp.post('/employee/get-my-sales-summary', payload);
  }

  getMyDayWiseSalesReport(payload) {
    // return axiosHttp.post('/users', payload);
    return axiosHttp.post('/employee/get-order-by-date', payload);
  }

  getMyDirectTeam(payload) {
    // return axiosHttp.post('/users', payload);
    return axiosHttp.post('/employee/get-my-direct-team', payload);
  }

  getMyManagersReport(payload) {
    // return axiosHttp.post('/users', payload);
    return axiosHttp.get('/admin/get-admin-direct-employees', payload);
  }

  getMyTrainingSession() {
    // return axiosHttp.get('/users');
    return axiosHttp.get('/video/get-training-videos');
  }

  uploadTrainingSessions(payload) {
    // return axiosHttp.post('/users', payload);
    return axiosHttp.post('/video/upload-training-video', payload);
  }

  addUser(payload) {
    // return axiosHttp.post('/users', payload);
    return axiosHttp.post('/admin/request-to-add-member', payload);
  }

  addMasterAdmin(payload) {
    return axiosHttp.post('/admin/add-member-by-admin', payload);
  }

  approveUser(payload) {
    // return axiosHttp.post('/users', payload);
    return axiosHttp.post('/employee/approve-and-add-member', payload);
  }

  getRequestList() {
    // return axiosHttp.post('/users');
    return axiosHttp.get('/admin/get-request-list');
  }

  getMyPayoutReport(payload) {
    // return axiosHttp.post('/users');
    return axiosHttp.post('/tds/get-my-payout-report', payload);
  }


  helpAndSupport(payload) {
    // return axiosHttp.post('/users', payload);
    return axiosHttp.post('/help-and-support/raise-support-ticket', payload);
  }
}
