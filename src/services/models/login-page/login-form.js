import React from 'react';
import { Field, reduxForm } from 'redux-form';
import InputComponent from '../../../components/atom/input-component';
import validators from '../../utilities/validators';
import { LOGIN_PAGE } from './login-page.constant';

const onSubmit = (values) => {
  console.log(values);
}

const formValidators = {
  name: [validators.required(LOGIN_PAGE.FORM_ERROR_MESSAGE.USER_NAME_REQUIRED), validators.minLength(3, LOGIN_PAGE.FORM_ERROR_MESSAGE.USER_NAME_SHOULD_CONTAIN_THREE_CHAR)],
  password: validators.required(LOGIN_PAGE.FORM_ERROR_MESSAGE.PASSWORD_REQUIRED)
}

const LoginForm = props => {
//  const { handleSubmit, pristine, submitting } = props;
const { handleSubmit, pristine, submitting } = props;
 return (
  <div className="flex flex-col flex-grow gap-3 p-6 max-w-[450px]">
    <h2 className="text-2xl font-medium">{LOGIN_PAGE.ENTER_CREDENTIALS_HERE}</h2>
    <div className="flex flex-col gap-2 mt-3">
      <label className="text-black text-base font-medium">{LOGIN_PAGE.LABEL.USER_NAME}</label>
      <Field
        name="name"
        component={InputComponent}
        placeholder={LOGIN_PAGE.PLACEHOLDER.ENTER_YOUR_USER_NAME}
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
      <button className="secondary w-fit" onClick={handleSubmit(onSubmit)} disabled={pristine || submitting}>{LOGIN_PAGE.LOGIN}</button>
    </div>
  </div> 
 );
};

export default reduxForm({
 form: 'login',
})(LoginForm);
