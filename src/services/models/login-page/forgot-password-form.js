import React from 'react';
import { Field, reduxForm } from 'redux-form';
import InputComponent from '../../../components/atom/input-component';
import validators from '../../utilities/validators';
import { LOGIN_PAGE } from './login-page.constant';

const onSubmit = (values) => {
  console.log(values);
}

const formValidators = {
  email: [validators.required(LOGIN_PAGE.FORM_ERROR_MESSAGE.USER_NAME_REQUIRED), validators.minLength(3, LOGIN_PAGE.FORM_ERROR_MESSAGE.USER_NAME_SHOULD_CONTAIN_THREE_CHAR)]
}

const ForgotPasswordForm = props => {
//  const { handleSubmit, pristine, submitting } = props;
const { handleSubmit, pristine, submitting } = props;
 return (
  <div className="flex flex-col flex-grow gap-3 p-6 max-w-[450px]">
    <h2 className="text-2xl font-medium">{LOGIN_PAGE.ENTER_YOUR_EMAIL_ADDRESS_OR_PH}</h2>
    <div className="flex flex-col gap-2 mt-3">
      <Field
        name="email"
        component={InputComponent}
        placeholder={LOGIN_PAGE.PLACEHOLDER.ENTER_YOUR_USER_NAME}
        validate={formValidators.email}
      />

    </div>
    <div className="flex flex-wrap gap-2 mt-3 items-center">
    <button className="secondary w-fit" onClick={handleSubmit(onSubmit)} disabled={pristine || submitting}>{LOGIN_PAGE.REQUEST_RESET}</button>
    </div>
  </div> 
 );
};

export default reduxForm({
 form: 'forgotPassword',
})(ForgotPasswordForm);
