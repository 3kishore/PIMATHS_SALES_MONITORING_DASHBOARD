import React, { useState } from "react";
import { useForm } from "react-hook-form";
import NewSelectComponent from "../../../components/atom/new-select-component";
import NewTestInputComponent from "../../../components/atom/new-test-input";
import { ApiServiceHelper } from "../../api/api.service";
import { EnvironmentHelperService } from "../../helper-service/environment-helper.service";
import { REGEX, USER_JOB_TITLE } from "../../utilities/APP.constant";
import { LOCATION_LIST, PAYROLL_LIST, ZONAL_HEAD, ZONE_LIST } from "./add-member.constant";

const RegionalHeadForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [failedToRequest, setFailedToRequest] = useState(false);
  const [successfullyRequested, setSuccessfullyRequested] = useState(false);
  const _apiHelper = new ApiServiceHelper();
  const _environmentHelperService = new EnvironmentHelperService();

  const onSubmit = async (values) => {
    values.referalId = _environmentHelperService.getSessionObject()?.empCode;
    values.referedBy = `${_environmentHelperService.getSessionObject()?.firstName} ${_environmentHelperService.getSessionObject()?.lastName}`;
    values.zone = ZONE_LIST[0].value;
    values.role = USER_JOB_TITLE.REGIONAL_HEAD;
    values.payRoll = PAYROLL_LIST[0].value;
    values.department = _environmentHelperService.getSessionObject().department;

    console.log(values)
    _apiHelper.addUser(values).then(resp => {
      // resp = {data: {status: true }}
      if(resp.data.status) {
        setSuccessfullyRequested(true);
        setFailedToRequest(false);
        reset();
      } else {
        setSuccessfullyRequested(false);
        setFailedToRequest(true);
      }
    }).catch(err => {
      setSuccessfullyRequested(false);
      setFailedToRequest(true);
    });
  };

  return (
    <div className="flex flex-col flex-grow gap-3 p-6 max-w-[450px] form-height">
      <h2 className="text-2xl font-medium">Add your regional head</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <label className="text-black text-base font-medium">{ZONAL_HEAD.FORM_LABEL.FIRST_NAME}</label>
          <NewTestInputComponent
            placeholder={ZONAL_HEAD.FORM_PLACEHOLDER.FIRST_NAME}
            {...register(ZONAL_HEAD.FORM_FIELDS.FIRST_NAME, {
              required: ZONAL_HEAD.FORM_ERROR_MSG.FIRST_NAME_REQUIRED,
              minLength: {
                value: 3,
                message: ZONAL_HEAD.FORM_ERROR_MSG.FIRST_NAME_3_CHART_MUST
              }
            })}
          />
          {errors[ZONAL_HEAD.FORM_FIELDS.FIRST_NAME] && <span className="mt-2 text-xs text-red-dark">{errors[ZONAL_HEAD.FORM_FIELDS.FIRST_NAME].message}</span>}
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-black text-base font-medium">{ZONAL_HEAD.FORM_LABEL.LAST_NAME}</label>
          <NewTestInputComponent
            placeholder={ZONAL_HEAD.FORM_PLACEHOLDER.LAST_NAME}
            {...register(ZONAL_HEAD.FORM_FIELDS.LAST_NAME, {
              required: ZONAL_HEAD.FORM_ERROR_MSG.LAST_NAME_REQUIRED,
            })}
          />
          {errors[ZONAL_HEAD.FORM_FIELDS.LAST_NAME] && <span className="mt-2 text-xs text-red-dark">{errors[ZONAL_HEAD.FORM_FIELDS.LAST_NAME].message}</span>}
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-black text-base font-medium">{ZONAL_HEAD.FORM_LABEL.EMAIL_ID}</label>
          <NewTestInputComponent
            placeholder={ZONAL_HEAD.FORM_PLACEHOLDER.EMAIL_ID}
            {...register(ZONAL_HEAD.FORM_FIELDS.EMAIL_ID, {
              required: ZONAL_HEAD.FORM_ERROR_MSG.EMAIL_ID,
              pattern: {
                value: REGEX.EMAIL_ID,
                message: ZONAL_HEAD.FORM_ERROR_MSG.INAVLID_EMAIL_ID
              }
            })}
          />
          {errors[ZONAL_HEAD.FORM_FIELDS.EMAIL_ID] && <span className="mt-2 text-xs text-red-dark">{errors[ZONAL_HEAD.FORM_FIELDS.EMAIL_ID].message}</span>}
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-black text-base font-medium">{ZONAL_HEAD.FORM_LABEL.MOBILE_NO}</label>
          <NewTestInputComponent
            placeholder={ZONAL_HEAD.FORM_PLACEHOLDER.MOBILE_NO}
            {...register(ZONAL_HEAD.FORM_FIELDS.MOBILE_NO, {
              required: ZONAL_HEAD.FORM_ERROR_MSG.MOBILE_NO,
              pattern: {
                value: REGEX.MOBILE_NO,
                message: ZONAL_HEAD.FORM_ERROR_MSG.INAVLID_MOBILE_NO
              }
            })}
          />
          {errors[ZONAL_HEAD.FORM_FIELDS.MOBILE_NO] && <span className="mt-2 text-xs text-red-dark">{errors[ZONAL_HEAD.FORM_FIELDS.MOBILE_NO].message}</span>}
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-black text-base font-medium">{ZONAL_HEAD.FORM_LABEL.REGION}</label>
          <NewSelectComponent
            placeholder={ZONAL_HEAD.FORM_PLACEHOLDER.REGION}
            options={LOCATION_LIST}
            disabled={true}
            {...register(ZONAL_HEAD.FORM_FIELDS.REGION)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-black text-base font-medium">{ZONAL_HEAD.FORM_LABEL.MAPPING_ID}</label>
          <NewTestInputComponent
            placeholder={ZONAL_HEAD.FORM_PLACEHOLDER.MAPPING_ID}
            {...register(ZONAL_HEAD.FORM_FIELDS.MAPPING_ID, {
              required: ZONAL_HEAD.FORM_ERROR_MSG.MAPPING_ID_REQUIRED,
            })}
          />
          {errors[ZONAL_HEAD.FORM_FIELDS.MAPPING_ID] && <span className="mt-2 text-xs text-red-dark">{errors[ZONAL_HEAD.FORM_FIELDS.MAPPING_ID].message}</span>}
        </div>

        <button className="secondary w-fit" type="submit">Add</button>

        {failedToRequest && (
          <div className="text-base font-medium text-red-dark mt-4 rounded-[4px] bg-red-light p-2">
            Failed to upload.
          </div>
        )}
        {successfullyRequested && (
          <div className="text-base font-medium text-green-dark mt-4 rounded-[4px] bg-green-light p-2">
            Successfully Requested.
          </div>
        )}
      </form>
    </div>
  );
}

export default RegionalHeadForm;