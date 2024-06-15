import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import NewTestInputComponent from "../../../components/atom/new-test-input";
import { AuthServiceHelper } from '../../api/auth.service';
import { REGEX } from '../../utilities/APP.constant';
import { ZONAL_ADMIN } from '../add-member-page/add-member.constant';
import { LOGIN_PAGE } from './login-page.constant';

const ResetPasswordForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const _authHelperService = new AuthServiceHelper();
  const [invalidCred, setInvalidCred] = useState(false);
  const onSubmit = (values, dispatch, props) => {
    _authHelperService.changePassword (values).then(resp => {
      if(resp?.data?.status) {
        // localStorage.setItem('sessionObj', btoa(JSON.stringify(resp.data.content)));
        // window.location.reload();
        setInvalidCred(false)
      } else {
        setInvalidCred(true)
      }
    }).catch(err => {
      setInvalidCred(true)
    })
  }

  return (
    <div className="flex flex-col flex-grow gap-3 p-6 max-w-[450px] form-height">
      <h2 className="text-2xl font-medium">Enter your email id and new password here.</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <label className="text-black text-base font-medium">{LOGIN_PAGE.LABEL.EMAIL_ID}</label>
          <NewTestInputComponent
            placeholder={LOGIN_PAGE.PLACEHOLDER.ENTER_YOUR_EMAIL_ID}
            {...register('empCode', {
              required: LOGIN_PAGE.FORM_ERROR_MESSAGE.EMAIL_ID_REQUIRED,
              pattern: { value: REGEX.EMAIL_ID, message: ZONAL_ADMIN.FORM_ERROR_MSG.INAVLID_EMAIL_ID }
            })}
          />
          {errors['empCode'] && <span className="mt-2 text-xs text-red-dark">{errors['empCode'].message}</span>}
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-black text-base font-medium">{LOGIN_PAGE.LABEL.PASSWORD}</label>
          <NewTestInputComponent
            placeholder={LOGIN_PAGE.PLACEHOLDER.ENTER_YOUR_PASSWORD}
            type="password"
            isBtnTypePass={true}
            {...register('password', {
              required: LOGIN_PAGE.FORM_ERROR_MESSAGE.PASSWORD_REQUIRED
            })}
          />
          {errors['password'] && <span className="mt-2 text-xs text-red-dark">{errors['password'].message}</span>}
        </div>
        <button className="secondary w-fit" type="submit">Login</button>

        {
          invalidCred &&
            <div className="text-base font-medium text-red-dark mt-4 rounded-[4px] bg-red-light p-2">User name or password is incorrect.</div>
        }
      </form>
    </div>
  );
};

export default ResetPasswordForm;

