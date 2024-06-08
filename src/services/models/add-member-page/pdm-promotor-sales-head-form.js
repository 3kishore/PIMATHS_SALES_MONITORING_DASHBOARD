import { useState } from "react";
import { Field, reduxForm } from "redux-form";
import InputComponent from "../../../components/atom/input-component";
import SelectComponent from "../../../components/atom/select-component";
import { ApiServiceHelper } from "../../api/api.service";
import { EnvironmentHelperService } from "../../helper-service/environment-helper.service";
import { REGEX, USER_JOB_TITLE } from "../../utilities/APP.constant";
import validators from "../../utilities/validators";
import { DEPARTMENT_LIST, LOCATION_LIST, PAYROLL_LIST, ZONAL_HEAD, ZONE_LIST } from "./add-member.constant";

const PdmPromoterSalesHead = props => {
  const _environmentHelperService = new EnvironmentHelperService();
  const { handleSubmit, pristine } = props;
  const [failedToRequest, setFailedToRequest] = useState(false);
  const [successfullyRequested, setSuccessfullyRequested] = useState(false);
  const _apiHelper = new ApiServiceHelper();
  const role = _environmentHelperService.getRole();
  const regionList = LOCATION_LIST.find(x => x.value === _environmentHelperService.getSessionObject().region)?.subRegion || [];
  const formValidators = {
    firstName: [validators.required(ZONAL_HEAD.FORM_ERROR_MSG.FIRST_NAME_REQUIRED), validators.minLength(3, ZONAL_HEAD.FORM_ERROR_MSG.FIRST_NAME_3_CHART_MUST)],
    lastName: validators.required(ZONAL_HEAD.FORM_ERROR_MSG.LAST_NAME_REQUIRED),
    emailId: [validators.required(ZONAL_HEAD.FORM_ERROR_MSG.EMAIL_ID), validators.regex(REGEX.EMAIL_ID, ZONAL_HEAD.FORM_ERROR_MSG.INAVLID_EMAIL_ID)],
    mobileNo: [validators.required(ZONAL_HEAD.FORM_ERROR_MSG.MOBILE_NO), validators.regex(REGEX.MOBILE_NO, ZONAL_HEAD.FORM_ERROR_MSG.INAVLID_MOBILE_NO)]
  }
  function submit(values) {
    const department = _environmentHelperService.getSessionObject().department;
    if(role === USER_JOB_TITLE.REGIONAL_HEAD && department === DEPARTMENT_LIST[0].value) {
      values.role = USER_JOB_TITLE.SALES_HEAD;
    } else if(role === USER_JOB_TITLE.REGIONAL_HEAD && department === DEPARTMENT_LIST[1].value) {
      values.role = USER_JOB_TITLE.PDM;
    } else {
      values.role = USER_JOB_TITLE.PROMOTER;
      values.area = _environmentHelperService.getSessionObject().area
    }
    values.zone = ZONE_LIST[0].value;
    values.region = _environmentHelperService.getSessionObject().region;
    values.payRoll = PAYROLL_LIST[0].value;
    values.department = _environmentHelperService.getSessionObject().department;;
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

  const handleChange = (event) => {
    console.log('Change event:', event.target.value);
  };
  
  return (
    <div className="flex flex-col flex-grow gap-3 p-6 max-w-[450px] form-height">
      <h2 className="text-2xl font-medium">Add my team member.</h2>
      <div className="flex flex-col gap-2">
        <label className="text-black text-base font-medium">{ZONAL_HEAD.FORM_LABEL.FIRST_NAME}</label>
        <Field
          name={ZONAL_HEAD.FORM_FIELDS.FIRST_NAME}
          component={InputComponent}
          placeholder={ZONAL_HEAD.FORM_PLACEHOLDER.FIRST_NAME}
          validate={formValidators.firstName} />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-black text-base font-medium">{ZONAL_HEAD.FORM_LABEL.LAST_NAME}</label>
        <Field
          name={ZONAL_HEAD.FORM_FIELDS.LAST_NAME}
          component={InputComponent}
          placeholder={ZONAL_HEAD.FORM_PLACEHOLDER.LAST_NAME}
          validate={formValidators.lastName} />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-black text-base font-medium">{ZONAL_HEAD.FORM_LABEL.EMAIL_ID}</label>
        <Field
          name={ZONAL_HEAD.FORM_FIELDS.EMAIL_ID}
          component={InputComponent}
          placeholder={ZONAL_HEAD.FORM_PLACEHOLDER.EMAIL_ID}
          validate={formValidators.emailId} />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-black text-base font-medium">{ZONAL_HEAD.FORM_LABEL.MOBILE_NO}</label>
        <Field
          name={ZONAL_HEAD.FORM_FIELDS.MOBILE_NO}
          component={InputComponent}
          placeholder={ZONAL_HEAD.FORM_PLACEHOLDER.MOBILE_NO}
          validate={formValidators.mobileNo} />
      </div>
      {role === USER_JOB_TITLE.REGIONAL_HEAD && <div className="flex flex-col gap-2">
        <label className="text-black text-base font-medium">{ZONAL_HEAD.FORM_LABEL.AREA}</label>
        <Field 
          name={ZONAL_HEAD.FORM_FIELDS.AREA}
          component={SelectComponent}
          onChange={handleChange}
          placeholder={ZONAL_HEAD.FORM_PLACEHOLDER.AREA}
          options={regionList}
          disabled={true}
        />
      </div>}

      <div className="flex flex-col gap-2">
        <label className="text-black text-base font-medium">{ZONAL_HEAD.FORM_LABEL.MAPPING_ID}</label>
        <Field
          name={ZONAL_HEAD.FORM_FIELDS.MAPPING_ID}
          component={InputComponent}
          placeholder={ZONAL_HEAD.FORM_PLACEHOLDER.MAPPING_ID}
          validate={formValidators.firstName} />
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
  form: 'zonal-head-form'
})(PdmPromoterSalesHead);
