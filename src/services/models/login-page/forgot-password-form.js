import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import NewTestInputComponent from "../../../components/atom/new-test-input";
import { AuthServiceHelper } from '../../api/auth.service';
import { REGEX } from '../../utilities/APP.constant';
import { ZONAL_ADMIN } from '../add-member-page/add-member.constant';
import { LOGIN_PAGE } from './login-page.constant';

const ForgotPasswordForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const _authHelperService = new AuthServiceHelper();
  const [invalidCred, setInvalidCred] = useState(false);
  const [successfull, setSuccessfull] = useState(false);
  const onSubmit = (values, dispatch, props) => {
    _authHelperService.requestForgotPassword(values).then(resp => {
      if(resp?.data?.status) {
        localStorage.setItem('sessionObj', btoa(JSON.stringify(resp.data.content)));
        window.location.reload();
        setInvalidCred(false)
        setSuccessfull(true);
      } else {
        setInvalidCred(true);
        setSuccessfull(false);
      }
    }).catch(err => {
      setInvalidCred(true);
      setSuccessfull(false);
    })
  }

  return (
    <div className="flex flex-col flex-grow gap-3 p-6 max-w-[450px] form-height">
      <h2 className="text-2xl font-medium">{LOGIN_PAGE.ENTER_CREDENTIALS_HERE}</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <label className="text-black text-base font-medium">{LOGIN_PAGE.LABEL.USER_NAME}</label>
          <NewTestInputComponent
            placeholder={LOGIN_PAGE.PLACEHOLDER.ENTER_YOUR_EMP_CODE}
            {...register('emailId', {
              required: LOGIN_PAGE.FORM_ERROR_MESSAGE.EMAIL_ID_REQUIRED,
              pattern: { value: REGEX.EMAIL_ID, message: ZONAL_ADMIN.FORM_ERROR_MSG.INAVLID_EMAIL_ID }
            })}
          />
          {errors['empCode'] && <span className="mt-2 text-xs text-red-dark">{errors['empCode'].message}</span>}
        </div>
        <button className="secondary w-fit" type="submit">Request to reeset password</button>

        {
          invalidCred &&
            <div className="text-base font-medium text-red-dark mt-4 rounded-[4px] bg-red-light p-2">Email you have entered is invalid.</div>
        }

        {
          successfull &&
            <div className="text-base font-medium text-green-dark mt-4 rounded-[4px] bg-green-light p-2">Please check your mail.</div>
        }
        </form>
    </div>
  );
};

export default ForgotPasswordForm;

