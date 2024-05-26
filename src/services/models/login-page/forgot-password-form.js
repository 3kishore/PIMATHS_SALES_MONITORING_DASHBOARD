import React, { useState } from 'react';
import { Field, reduxForm } from 'redux-form';
import InputComponent from '../../../components/atom/input-component';
import { AuthServiceHelper } from '../../api/auth.service';
import validators from '../../utilities/validators';
import { LOGIN_PAGE } from './login-page.constant';

const ForgotPasswordForm = props => {
  const _authHelperService = new AuthServiceHelper();
  const [invalidCred, setInvalidCred] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const onSubmit = (values) => {
    console.log(values);
    _authHelperService.requestForgotPassword(values).then(resp => {
      if(resp.data.status) {
        setInvalidCred(false);
        setIsSubmitted(true);
      } else {
        setInvalidCred(true);
      }
    }).catch(err => {
      console.log(err);
      setInvalidCred(true);
    })
  }
  const formValidators = {
    email: [validators.required(LOGIN_PAGE.FORM_ERROR_MESSAGE.USER_NAME_REQUIRED), validators.minLength(3, LOGIN_PAGE.FORM_ERROR_MESSAGE.USER_NAME_SHOULD_CONTAIN_THREE_CHAR)]
  }
//  const { handleSubmit, pristine, submitting } = props;
  const { handleSubmit, pristine, submitting } = props;
  return (
    <div>
      { 
        isSubmitted ?
          <div className="mx-3 text-base font-medium text-green-dark-1 mt-4 rounded-[4px] bg-green-light p-2 flex flex-col justify-center items-center">
            <div>Reset password mail hasbeen sent to you mail id</div>
            <div>Please check your email.</div>
          </div> :
          <div className="flex flex-col flex-grow gap-3 p-6 max-w-[450px]">
            <h2 className="text-2xl font-medium">{LOGIN_PAGE.ENTER_YOUR_EMAIL_ADDRESS_OR_PH}</h2>
            <div className="flex flex-col gap-2 mt-3">
              <Field
                name="emailId"
                component={InputComponent}
                placeholder={LOGIN_PAGE.PLACEHOLDER.ENTER_YOUR_USER_NAME}
                validate={formValidators.email}
              />

            </div>
            <div className="flex flex-wrap gap-2 mt-3 items-center">
              <button className="secondary w-fit" onClick={handleSubmit(onSubmit)} disabled={pristine || submitting}>{LOGIN_PAGE.REQUEST_RESET}</button>
            </div>
            {invalidCred && <div>
              <div className="text-base font-medium text-red-dark mt-4 rounded-[4px] bg-red-light p-2">
                Mail Id you have entered is invalid.
              </div>
            </div>}
          </div> 
      }
    </div>
  );
};

export default reduxForm({
 form: 'forgotPassword',
})(ForgotPasswordForm);
