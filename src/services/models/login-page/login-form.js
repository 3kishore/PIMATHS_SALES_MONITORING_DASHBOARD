import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import InputComponent from '../../../components/atom/input-component';
import { AuthServiceHelper } from '../../api/auth.service';
import validators from '../../utilities/validators';
import { LOGIN_PAGE } from './login-page.constant';

const formValidators = {
  name: [validators.required(LOGIN_PAGE.FORM_ERROR_MESSAGE.USER_NAME_REQUIRED), validators.minLength(3, LOGIN_PAGE.FORM_ERROR_MESSAGE.USER_NAME_SHOULD_CONTAIN_THREE_CHAR)],
  password: validators.required(LOGIN_PAGE.FORM_ERROR_MESSAGE.PASSWORD_REQUIRED)
}

const _authHelperService = new AuthServiceHelper();

const LoginForm = props => {
  const navigate = useNavigate();
  const { handleSubmit, pristine, submitting, invalid } = props;
  const onSubmitWithNavigate = values => onSubmit(values, null, { navigate });

  const [invalidCred, setInvalidCred] = useState(false);
  const onSubmit = (values, dispatch, props) => {
    _authHelperService.loginService(values).then(resp => {
      // resp = {
      //   data: {
      //     status: true,
      //     message: 'Success',
      //     content: {
      //       name: 'kishore',
      //       empCode: 'emp-code-101',
      //       role: USER_JOB_TITLE.REGIONAL_HEAD, // new key
      //       department: DEPARTMENT_LIST[2].value,
      //       area: 'ERODE',
      //       region: 'COIMBATORE',
      //       token: '90u89v-hgcv-kjb'
      //     }
      //   }
      // }
      if(resp?.data?.status) {
        localStorage.setItem('sessionObj', btoa(JSON.stringify(resp.data.content)));
        window.location.reload();
        setInvalidCred(false)
      } else {
        setInvalidCred(true)
      }
    }).catch(err => {
      setInvalidCred(true)
    })
  }
  
  return (
    <div className="flex flex-col flex-grow gap-3 p-6 max-w-[450px]">
      <h2 className="text-2xl font-medium">{LOGIN_PAGE.ENTER_CREDENTIALS_HERE}</h2>
      <div className="flex flex-col gap-2 mt-3">
        <label className="text-black text-base font-medium">{LOGIN_PAGE.LABEL.USER_NAME}</label>
        <Field
          name="empCode"
          component={InputComponent}
          placeholder={LOGIN_PAGE.PLACEHOLDER.ENTER_YOUR_EMP_CODE}
          validate={formValidators.name}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-black text-base font-medium">{LOGIN_PAGE.LABEL.PASSWORD}</label>
        <Field
          name="password"
          component={InputComponent}
          placeholder={LOGIN_PAGE.PLACEHOLDER.ENTER_YOUR_PASSWORD}
          validate={formValidators.password}
          type="password"
          isBtnTypePass={true}
        />
      </div>
      <div className="flex flex-wrap gap-2 mt-3 items-center">
        <button className="secondary w-fit" onClick={handleSubmit(onSubmitWithNavigate)} disabled={pristine || submitting || invalid}>{LOGIN_PAGE.LOGIN}</button>
        {
          invalidCred &&
            <div className="text-base font-medium text-red-dark mt-4 rounded-[4px] bg-red-light p-2">User name or password is incorrect.</div>
        }
      </div>
    </div> 
  );
};

export default reduxForm({
  form: 'login',
})(LoginForm);
