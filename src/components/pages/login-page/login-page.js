import React, { useEffect } from "react";
import { LOGIN_PAGE } from "../../../services/models/login-page/login-page.constant";
import  LoginForm from "../../../services/models/login-page/login-form";
import loginStore from "../../../services/models/login-page/login-store";
import { Provider } from "react-redux";
import ForgotPasswordForm from "../../../services/models/login-page/forgot-password-form";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  let [showLogin, setShowLogin] = React.useState(true);

  const loginPageToggler = () => {
    setShowLogin(!showLogin);
  }

  const navigate = useNavigate();
  
  const loggedIn = localStorage.getItem('sessionObj') ? true : false;
  
  useEffect(() => {
    if (loggedIn) {
      navigate(`/home/my-sales-report`);
    }
  }, [loggedIn, navigate]);

  return (
    <Provider store={loginStore}>
      <div className="flex flex-wrap gap-4">
        {
          showLogin ?
          <div className="flex-grow">
            <LoginForm />
            <div className="text-sm text-primary cursor-pointer pl-6" onClick={loginPageToggler}>{LOGIN_PAGE.FORGOT_PASSWORD}</div>
          </div>
          :
          <div>
            <ForgotPasswordForm />
            <div className="text-sm text-primary cursor-pointer pl-6" onClick={loginPageToggler}>{LOGIN_PAGE.GO_TO_LOGIN}</div>
          </div>
        }
      </div>
    </Provider>
  )
}

export default LoginPage;
