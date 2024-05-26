export class EnvironmentHelperService {
  isSessionLoggedIn() {
    return this.getSessionObject();
  }

  getSessionObject() {
    const sessionObj = localStorage.getItem('sessionObj');
    if(sessionObj) {
      return JSON.parse(atob(sessionObj)) || null;
    }
    return null
  }

  getToken() {
    return this.getSessionObject()?.token || null;
  }

  getEmpCode() {
    return this.getSessionObject()?.empCode || null;
  }

  getName() {
    return this.getSessionObject()?.name || null;
  }

  getRole() {
    return this.getSessionObject()?.role || null;
  }

  isAdmin() {
    const role = this.getRole();
    return role && role === 'admin' ? true : false;
  }
}
