import React, { useEffect } from "react";
import  LoginForm from "../../../services/models/login-page/login-form";
import loginStore from "../../../services/models/login-page/login-store";
import { Provider } from "react-redux";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  // let [showLogin, setShowLogin] = React.useState(true);
  // let [showResetPassword, setShowResetPassword] = React.useState(false);
  // const location = useLocation();
  // const queryParams = new URLSearchParams(location.search);
  // let param = '';
  // const loginPageToggler = () => {
  //   setShowLogin(!showLogin);
  //   setShowResetPassword(false);
  // }

  const navigate = useNavigate();
  
  const loggedIn = localStorage.getItem('sessionObj') ? true : false;
  
  useEffect(() => {
    if (loggedIn) {
      navigate(`/home/my-sales-report`);
    }
    // else {
    //   queryParams.forEach((_, key) => {
    //     // eslint-disable-next-line
    //     param = key;
    //     setShowLogin(false);
    //     setShowResetPassword(true);
    //     console.log(param);
    //   })
    // }
  }, [loggedIn, navigate]);

  return (
    <Provider store={loginStore}>
      <div className="flex flex-wrap gap-4">
          <div className="flex-grow">
            <LoginForm />
          </div>
        {/* {
          showLogin ?
          <div className="flex-grow">
            <LoginForm />
            <div className="text-sm text-primary cursor-pointer pl-6" onClick={loginPageToggler}>{LOGIN_PAGE.FORGOT_PASSWORD}</div>
          </div>
          :
          showResetPassword ? <div>
            <ResestPassoword />
            <div className="text-sm text-primary cursor-pointer pl-6" onClick={loginPageToggler}>{LOGIN_PAGE.GO_TO_LOGIN}</div>
          </div> :
          <div>
            <ForgotPasswordForm />
            <div className="text-sm text-primary cursor-pointer pl-6" onClick={loginPageToggler}>{LOGIN_PAGE.GO_TO_LOGIN}</div>
          </div>
        } */}
      </div>
    </Provider>
  )
}

export default LoginPage;
