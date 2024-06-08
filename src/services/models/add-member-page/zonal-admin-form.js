import { useState } from "react";
import { Field, reduxForm } from "redux-form";
import InputComponent from "../../../components/atom/input-component";
import { ApiServiceHelper } from "../../api/api.service";
import { REGEX, USER_JOB_TITLE } from "../../utilities/APP.constant";
import validators from "../../utilities/validators";
import { ZONAL_ADMIN, ZONE_LIST } from "./add-member.constant";

const ZonalAdminForm = props => {
  const { handleSubmit, pristine } = props;
  const [failedToRequest, setFailedToRequest] = useState(false);
  const [successfullyRequested, setSuccessfullyRequested] = useState(false);
  const _apiHelper = new ApiServiceHelper();
  const formValidators = {
    firstName: [validators.required(ZONAL_ADMIN.FORM_ERROR_MSG.FIRST_NAME_REQUIRED), validators.minLength(3, ZONAL_ADMIN.FORM_ERROR_MSG.FIRST_NAME_3_CHART_MUST)],
    lastName: validators.required(ZONAL_ADMIN.FORM_ERROR_MSG.LAST_NAME_REQUIRED),
    emailId: [validators.required(ZONAL_ADMIN.FORM_ERROR_MSG.EMAIL_ID), validators.regex(REGEX.EMAIL_ID, ZONAL_ADMIN.FORM_ERROR_MSG.INAVLID_EMAIL_ID)],
    mobileNo: [validators.required(ZONAL_ADMIN.FORM_ERROR_MSG.MOBILE_NO), validators.regex(REGEX.MOBILE_NO, ZONAL_ADMIN.FORM_ERROR_MSG.INAVLID_MOBILE_NO)]
  }
  function submit(values) {
    values.zone = ZONE_LIST[0].value;
    values.role = USER_JOB_TITLE.MASTER_ADMIN;
    console.log('value', values)
    _apiHelper.addUser(values).then(resp => {
      resp = {data: {status: true }}
      if(resp.data.status) {
        setSuccessfullyRequested(true);
      } else {
        setFailedToRequest(true);
      }
    }).catch(err => {setFailedToRequest(true)});
  }
  
  return (
    <div className="flex flex-col flex-grow gap-3 p-6 max-w-[450px] form-height">
      <h2 className="text-2xl font-medium">{ZONAL_ADMIN.FORM_TITLE.ADD_ZONAL_ADMIN}</h2>
      <div className="flex flex-col gap-2">
        <label className="text-black text-base font-medium">{ZONAL_ADMIN.FORM_LABEL.FIRST_NAME}</label>
        <Field
          name={ZONAL_ADMIN.FORM_FIELDS.FIRST_NAME}
          component={InputComponent}
          placeholder={ZONAL_ADMIN.FORM_PLACEHOLDER.FIRST_NAME}
          validate={formValidators.firstName} />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-black text-base font-medium">{ZONAL_ADMIN.FORM_LABEL.LAST_NAME}</label>
        <Field
          name={ZONAL_ADMIN.FORM_FIELDS.LAST_NAME}
          component={InputComponent}
          placeholder={ZONAL_ADMIN.FORM_PLACEHOLDER.LAST_NAME}
          validate={formValidators.lastName} />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-black text-base font-medium">{ZONAL_ADMIN.FORM_LABEL.EMAIL_ID}</label>
        <Field
          name={ZONAL_ADMIN.FORM_FIELDS.EMAIL_ID}
          component={InputComponent}
          placeholder={ZONAL_ADMIN.FORM_PLACEHOLDER.EMAIL_ID}
          validate={formValidators.emailId} />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-black text-base font-medium">{ZONAL_ADMIN.FORM_LABEL.MOBILE_NO}</label>
        <Field
          name={ZONAL_ADMIN.FORM_FIELDS.MOBILE_NO}
          component={InputComponent}
          placeholder={ZONAL_ADMIN.FORM_PLACEHOLDER.MOBILE_NO}
          validate={formValidators.mobileNo} />
      </div>

      <button className="secondary w-fit" onClick={handleSubmit(submit)} disabled={pristine}>Add</button>

      {
        failedToRequest &&
          <div className="text-base font-medium text-red-dark mt-4 rounded-[4px] bg-red-light p-2">Failed to upload.</div>
      }
      {
        successfullyRequested && 
          <div className="text-base font-medium text-green-dark mt-4 rounded-[4px] bg-green-light p-2">Successfully Requested.</div>
      }
    </div>


    
  )
}

export default reduxForm({
  form: 'zonal-admin-form'
})(ZonalAdminForm);
