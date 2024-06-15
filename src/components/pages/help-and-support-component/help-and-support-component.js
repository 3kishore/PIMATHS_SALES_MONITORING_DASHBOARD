import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ApiServiceHelper } from "../../../services/api/api.service";
import { EnvironmentHelperService } from "../../../services/helper-service/environment-helper.service";
import { HELP_AND_SUPPORT, ISSUE_CATEGORY_LIST } from "../../../services/utilities/APP.constant";
import NewSelectComponent from "../../atom/new-select-component";
import NewTestInputComponent from "../../atom/new-test-input";

const HelpAndSupportComponent = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [failedToRequest, setFailedToRequest] = useState(false);
  const [successfullyRequested, setSuccessfullyRequested] = useState(false);
  const _apiHelper = new ApiServiceHelper();
  const _envService = new EnvironmentHelperService();

  const onSubmit = async (values) => {
    values.empCode = _envService.getSessionObject().empCode;
    values.emailId = _envService.getSessionObject().emailId;
    _apiHelper.helpAndSupport(values).then(resp => {
    //   resp = {data: {status: true }}
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
      <h2 className="text-2xl font-medium">Help & Support</h2>
      <div className="text-xs text-gray-0"><span className="text-black font-medium">Note: </span>
        This Help & Support for your sales report and Payout Report Related Enquiries only. Otherwise, If You Face Any trouble 
        in sales like user Account creation, Course Purchase Related issues and other user related issue. kindly Contact Support Team to resolve your user related issues.
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <label className="text-black text-base font-medium">{HELP_AND_SUPPORT.FORM_LABEL.ISSUE_TYPE}</label>
          <NewSelectComponent
            placeholder={HELP_AND_SUPPORT.FORM_PLACEHOLDER.ISSUE_TYPE}
            options={ISSUE_CATEGORY_LIST}
            {...register(HELP_AND_SUPPORT.FORM_FIELDS.ISSUE_TYPE, {
              required: HELP_AND_SUPPORT.FORM_ERR_MSG.ISSUE_TYPE
            })}
          />
          {errors[HELP_AND_SUPPORT.FORM_FIELDS.ISSUE_TYPE] && <span className="mt-2 text-xs text-red-dark">{errors[HELP_AND_SUPPORT.FORM_FIELDS.ISSUE_TYPE].message}</span>}
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-black text-base font-medium">{HELP_AND_SUPPORT.FORM_LABEL.CONTENT}</label>
          <NewTestInputComponent
            placeholder={HELP_AND_SUPPORT.FORM_PLACEHOLDER.CONTENT}
            {...register(HELP_AND_SUPPORT.FORM_FIELDS.CONTENT, {
              required: HELP_AND_SUPPORT.FORM_ERR_MSG.CONTENT
            })}
          />
          {errors[HELP_AND_SUPPORT.FORM_FIELDS.CONTENT] && <span className="mt-2 text-xs text-red-dark">{errors[HELP_AND_SUPPORT.FORM_FIELDS.CONTENT].message}</span>}
        </div>

        <button className="secondary w-fit" type="submit" disabled={false}>Add</button>

        {failedToRequest && (
          <div className="text-base font-medium text-red-dark mt-4 rounded-[4px] bg-red-light p-2">
            Failed to raise issue
          </div>
        )}
        {successfullyRequested && (
          <div className="text-base font-medium text-green-dark mt-4 rounded-[4px] bg-green-light p-2">
            Issue Raised succesfully
          </div>
        )}
      </form>
    </div>
  );
};

export default HelpAndSupportComponent;
