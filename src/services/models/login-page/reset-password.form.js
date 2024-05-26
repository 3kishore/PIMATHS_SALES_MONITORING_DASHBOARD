import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import InputComponent from '../../../components/atom/input-component';
import { AuthServiceHelper } from '../../api/auth.service';
import validators from '../../utilities/validators';
import { LOGIN_PAGE } from './login-page.constant';

const formValidators = {
  // eslint-disable-next-line
  name: [validators.required(LOGIN_PAGE.FORM_ERROR_MESSAGE.EMAIL_ID_REQUIRED), validators.regex('/^[^\s@]+@[^\s@]+\.[^\s@]+$/', LOGIN_PAGE.FORM_ERROR_MESSAGE.INVALID_EMAIL_ID)],
  // eslint-disable-next-line
  password: [validators.required(LOGIN_PAGE.FORM_ERROR_MESSAGE.PASSWORD_REQUIRED), validators.minLength(8, LOGIN_PAGE.FORM_ERROR_MESSAGE.PASSWORD_SHOULD_HAVE_8)]
}

const _authHelperService = new AuthServiceHelper();

const ResestPassoword = props => {
  const navigate = useNavigate();
  const { handleSubmit, pristine, submitting, invalid } = props;
  const onSubmitWithNavigate = values => onSubmit(values, null, { navigate });

  const [invalidCred, setInvalidCred] = useState(false);
  const [resetIsSuccesfull, setResetIsSuccesfull] = useState(false);
  const onSubmit = (values, dispatch, props) => {
    _authHelperService.changePassword(values).then(resp => {
      if(resp?.data?.status) {
        setInvalidCred(false);
        setResetIsSuccesfull(true);
      } else {
        setInvalidCred(true);
      }
    }).catch(err => {
      setInvalidCred(true);
    })
  }
  
  return (
    <div>
      {
        resetIsSuccesfull ?
          <div className="mx-3 text-base font-medium text-green-dark-1 mt-4 rounded-[4px] bg-green-light p-2 flex flex-col justify-center items-center">
            <div>Password reset is successfull.</div>
            <div>Please go to login page.</div>
          </div> :
          <div className="flex flex-col flex-grow gap-3 p-6 max-w-[450px]">
            <h2 className="text-2xl font-medium">{LOGIN_PAGE.ENTER_YOUR_CHANGE_PASSWORD_DETAILS}</h2>
            <div className="flex flex-col gap-2 mt-3">
              <label className="text-black text-base font-medium">{LOGIN_PAGE.LABEL.EMAIL_ID}</label>
              <Field
                name="emailId"
                component={InputComponent}
                placeholder={LOGIN_PAGE.PLACEHOLDER.ENTER_YOUR_EMAIL_ID}
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
              />
            </div>
            <div className="flex flex-wrap gap-2 mt-3 items-center">
              <button className="secondary w-fit" onClick={handleSubmit(onSubmitWithNavigate)} disabled={pristine || submitting || invalid}>{LOGIN_PAGE.CHANGE_PASSWORD}</button>
              {
                invalidCred ? <div className='text-sm font-medium text-red-dark'>Failed to reset</div> : <div></div>
              }
            </div>
          </div> 
      }
    </div>
  );
};

export default reduxForm({
  form: 'resetPassword',
})(ResestPassoword);