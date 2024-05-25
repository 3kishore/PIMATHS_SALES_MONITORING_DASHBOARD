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
}
