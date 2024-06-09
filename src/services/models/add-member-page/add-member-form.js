import React, { useState } from 'react';
import { ApiServiceHelper } from '../../api/api.service';
import { EnvironmentHelperService } from '../../helper-service/environment-helper.service';
import { REGEX, USER_JOB_TITLE } from '../../utilities/APP.constant';
import { useForm } from "react-hook-form";
import NewSelectComponent from "../../../components/atom/new-select-component";
import NewTestInputComponent from "../../../components/atom/new-test-input";
import { ADD_MEMBER, ADD_MEMBER_FORM_CONTROL_NAME, ADD_MEMBER_FORM_ERROR_MESSAGE, LOCATION_LIST, ZONAL_HEAD } from './add-member.constant';

const AddMemberForm = () => {
  const { register, handleSubmit, invalid, formState: { errors }, reset } = useForm();
  const [failedToRequest, setFailedToRequest] = useState(false);
  const [successfullyRequested, setSuccessfullyRequested] = useState(false);
  const _apiHelper = new ApiServiceHelper();
  const _environmentHelperService = new EnvironmentHelperService();
  const role = _environmentHelperService.getRole();

  const [isBothAddressSame, setBothAddressSame] = useState(false);
  const [photoCopy, setPhotoCopy] = useState('');
  const [aadharCopy, setAadharCopy] = useState('');
  const [panCopy, setPanCopy] = useState('');
  const [bankProofCopy, setBankProofCopy] = useState('');
  const [documentUpload, setDocumentUpload] = useState('');

  const [otherValidator, setOtherValidators] = useState({
    photoError: true,
    aadharCopyError: true,
    panCopyError: true,
    bankProofError: true,
    applicationDocumentCopy: true,
  })

  function onBothAddressSame(event) {
    setBothAddressSame(event.target.checked);
  }

  const areaList = LOCATION_LIST.find(x => x.value === _environmentHelperService.getSessionObject().region)?.subRegion || [];

  const onSubmit = async (values) => {
    if(photoCopy) {
      const newObj = Object.assign(otherValidator, {photoError: false})
      setOtherValidators(newObj);
    }
    if(aadharCopy) {
      const newObj = Object.assign(otherValidator, {aadharCopyError: false})
      setOtherValidators(newObj);
    }
    if(panCopy) {
      const newObj = Object.assign(otherValidator, {panCopyError: false})
      setOtherValidators(newObj);
    }
    if(bankProofCopy) {
      const newObj = Object.assign(otherValidator, {bankProofError: false})
      setOtherValidators(newObj);
    }
    if(documentUpload) {
      const newObj = Object.assign(otherValidator, {applicationDocumentCopy: false})
      setOtherValidators(newObj);
    }
    const validationSatisFied = Object.keys(otherValidator).find(key => otherValidator[key]);
    if(!validationSatisFied) {
      if(role === USER_JOB_TITLE.PDM) {
        values.role = USER_JOB_TITLE.DIRECT_PARTNER;
        values.area = _environmentHelperService.getSessionObject().area
      } else if(role === USER_JOB_TITLE.CHANNEL_HEAD) {
        values.role = USER_JOB_TITLE.CHANNEL_PARTNER;
        values.area = _environmentHelperService.getSessionObject().area
      } else {
        values.role = USER_JOB_TITLE.CHANNEL_HEAD;
      }
      values.referalId = _environmentHelperService.getSessionObject()?.empCode;
      values.referedBy = `${_environmentHelperService.getSessionObject()?.firstName} ${_environmentHelperService.getSessionObject()?.lastName}`;
      const payload = {
        referalId: values.referalId,
        referedBy: values.referedBy,
        role: values.role,
        zone: _environmentHelperService.getSessionObject()?.empCode,
        region: _environmentHelperService.getSessionObject()?.region,
        area: values.area,
        department: values.department,
        firstName: values.firstName,
        lastName: values.lastName,
        dob: values.dob,
        gender: values.gender,
        mobileNo: values.mobileNo,
        emailId: values.emailId,
        qualification: values.qualification,
        occupation: values.occupation,
        currentAddress: {
          address: values.currentAddress,
          district: values.currentAddressDistrict,
          state: values.currentAddressState,
          pincode: values.currentAddressPinCode,
          postOffice: values.currentAddressPostOffice
        },
        bothAddressAreSame: isBothAddressSame ? 'Yes' : ' No',
        permenentAddress: {
          address: values.permenentAddress,
          district: values.district,
          state: values.state,
          pincode: values.postOffice,
          postOffice: values.pinCode
        },
        aadharDetail: {
          aadharNo: values.aadharNumber,
          name: values.aadharNumber,
          preoof: aadharCopy
        },
        panDetail: {
          number: values.panNumber,
          name: values.panName,
          preoof: panCopy
        },
        bankDetail: {
          bankName: values.bankName,
          branchName: values.branchName,
          ifscCode: values.ifscCode,
          accountType: values.accountType,
          accountNo: values.accountNo,
          nameAsPerBook: values.nameAsPerBank,
          proof: bankProofCopy
        },
        uploadDocumentCopy: documentUpload,
        photo: photoCopy
      }
      console.log(payload)
      _apiHelper.addUser(payload).then(resp => {
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
    }
  }

  const convertPhotoToBase64 = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result.split(',')[1];
        setPhotoCopy(base64String);
        const newObj = Object.assign(otherValidator, {photoError: false})
        setOtherValidators(newObj);
      };
      reader.readAsDataURL(file);
    }
  };

  const convertAadharCopyToBase64 = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result.split(',')[1];
        setAadharCopy(base64String);
        const newObj = Object.assign(otherValidator, {aadharCopyError: false})
        setOtherValidators(newObj);
      };
      reader.readAsDataURL(file);
    }
  };

  const convertPanCopyToBase64 = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result.split(',')[1];
        setPanCopy(base64String);
        const newObj = Object.assign(otherValidator, {panCopyError: false})
        setOtherValidators(newObj);
      };
      reader.readAsDataURL(file);
    }
  };

  const convertBankProofToBase64 = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result.split(',')[1];
        setBankProofCopy(base64String);
        const newObj = Object.assign(otherValidator, {bankProofError: false})
        setOtherValidators(newObj);
      };
      reader.readAsDataURL(file);
    }
  };

  const convertApplicationToBase64 = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result.split(',')[1];
        setDocumentUpload(base64String);
        const newObj = Object.assign(otherValidator, {applicationDocumentCopy: false})
        setOtherValidators(newObj);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className="flex flex-col flex-grow gap-3 p-6 max-w-[450px] form-height">
      <h2 className="text-2xl font-medium">{ADD_MEMBER.ADD_MEMBER}</h2>
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
        {role === USER_JOB_TITLE.REGIONAL_HEAD && (<div className="flex flex-col gap-2">
          <label className="text-black text-base font-medium">{ZONAL_HEAD.FORM_LABEL.AREA}</label>
          <NewSelectComponent
            placeholder={ZONAL_HEAD.FORM_PLACEHOLDER.AREA}
            
            options={areaList}
            {...register(ZONAL_HEAD.FORM_FIELDS.AREA)}
          />
        </div>)}
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
        <div>Personal Details</div>
        <div className="flex flex-col gap-2">
          <label className="text-black text-base font-medium">{ADD_MEMBER.DOB}</label>
          <NewTestInputComponent
            placeholder={ADD_MEMBER.ENTER_HERE}
            {...register(ADD_MEMBER_FORM_CONTROL_NAME.DOB, {
              required: ADD_MEMBER_FORM_ERROR_MESSAGE.THIS_FIELD_IS_REQUIRED,
              minLength: {
                value: 3,
                message: ADD_MEMBER_FORM_ERROR_MESSAGE.THIS_FIELD_REQUIRES_ATLEAST_3_CHAR
              }
            })}
          />
          {errors[ADD_MEMBER_FORM_CONTROL_NAME.DOB] && <span className="mt-2 text-xs text-red-dark">{errors[ADD_MEMBER_FORM_CONTROL_NAME.DOB].message}</span>}
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-black text-base font-medium">{ADD_MEMBER.QUALIFICATION}</label>
          <NewTestInputComponent
            placeholder={ADD_MEMBER.ENTER_HERE}
            {...register(ADD_MEMBER_FORM_CONTROL_NAME.QUALIFICATION, {
              required: ADD_MEMBER_FORM_ERROR_MESSAGE.THIS_FIELD_IS_REQUIRED,
              minLength: {
                value: 3,
                message: ADD_MEMBER_FORM_ERROR_MESSAGE.THIS_FIELD_REQUIRES_ATLEAST_3_CHAR
              }
            })}
          />
          {errors[ADD_MEMBER_FORM_CONTROL_NAME.QUALIFICATION] && <span className="mt-2 text-xs text-red-dark">{errors[ADD_MEMBER_FORM_CONTROL_NAME.QUALIFICATION].message}</span>}
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-black text-base font-medium">{ADD_MEMBER.OCCUPATION}</label>
          <NewTestInputComponent
            placeholder={ADD_MEMBER.OCCUPATION}
            {...register(ADD_MEMBER_FORM_CONTROL_NAME.OCCUPATION, {
              required: ADD_MEMBER_FORM_ERROR_MESSAGE.THIS_FIELD_IS_REQUIRED,
              minLength: {
                value: 3,
                message: ADD_MEMBER_FORM_ERROR_MESSAGE.THIS_FIELD_REQUIRES_ATLEAST_3_CHAR
              }
            })}
          />
          {errors[ADD_MEMBER_FORM_CONTROL_NAME.OCCUPATION] && <span className="mt-2 text-xs text-red-dark">{errors[ADD_MEMBER_FORM_CONTROL_NAME.OCCUPATION].message}</span>}
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-black text-base font-medium">{ADD_MEMBER.PERMENENT_ADDRESS}</label>
          <NewTestInputComponent
            placeholder={ADD_MEMBER.PERMENENT_ADDRESS}
            {...register(ADD_MEMBER_FORM_CONTROL_NAME.PERMENENT_ADDRESS, {
              required: ADD_MEMBER_FORM_ERROR_MESSAGE.THIS_FIELD_IS_REQUIRED,
              minLength: {
                value: 20,
                message: ADD_MEMBER_FORM_ERROR_MESSAGE.THIS_FIELD_REQUIRES_ATLEAST_20_CHAR
              }
            })}
          />
          {errors[ADD_MEMBER_FORM_CONTROL_NAME.PERMENENT_ADDRESS] && <span className="mt-2 text-xs text-red-dark">{errors[ADD_MEMBER_FORM_CONTROL_NAME.PERMENENT_ADDRESS].message}</span>}
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-black text-base font-medium">{ADD_MEMBER.DISTRICT}</label>
          <NewTestInputComponent
            placeholder={ADD_MEMBER.DISTRICT}
            {...register(ADD_MEMBER_FORM_CONTROL_NAME.DISTRICT, {
              required: ADD_MEMBER_FORM_ERROR_MESSAGE.THIS_FIELD_IS_REQUIRED,
              minLength: {
                value: 3,
                message: ADD_MEMBER_FORM_ERROR_MESSAGE.THIS_FIELD_REQUIRES_ATLEAST_3_CHAR
              }
            })}
          />
          {errors[ADD_MEMBER_FORM_CONTROL_NAME.DISTRICT] && <span className="mt-2 text-xs text-red-dark">{errors[ADD_MEMBER_FORM_CONTROL_NAME.DISTRICT].message}</span>}
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-black text-base font-medium">{ADD_MEMBER.STATE}</label>
          <NewTestInputComponent
            placeholder={ADD_MEMBER.STATE}
            {...register(ADD_MEMBER_FORM_CONTROL_NAME.STATE, {
              required: ADD_MEMBER_FORM_ERROR_MESSAGE.THIS_FIELD_IS_REQUIRED,
              minLength: {
                value: 3,
                message: ADD_MEMBER_FORM_ERROR_MESSAGE.THIS_FIELD_REQUIRES_ATLEAST_3_CHAR
              }
            })}
          />
          {errors[ADD_MEMBER_FORM_CONTROL_NAME.STATE] && <span className="mt-2 text-xs text-red-dark">{errors[ADD_MEMBER_FORM_CONTROL_NAME.STATE].message}</span>}
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-black text-base font-medium">{ADD_MEMBER.POST_OFFICE}</label>
          <NewTestInputComponent
            placeholder={ADD_MEMBER.POST_OFFICE}
            {...register(ADD_MEMBER_FORM_CONTROL_NAME.POST_OFFICE, {
              required: ADD_MEMBER_FORM_ERROR_MESSAGE.THIS_FIELD_IS_REQUIRED,
              minLength: {
                value: 3,
                message: ADD_MEMBER_FORM_ERROR_MESSAGE.THIS_FIELD_REQUIRES_ATLEAST_3_CHAR
              }
            })}
          />
          {errors[ADD_MEMBER_FORM_CONTROL_NAME.POST_OFFICE] && <span className="mt-2 text-xs text-red-dark">{errors[ADD_MEMBER_FORM_CONTROL_NAME.POST_OFFICE].message}</span>}
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-black text-base font-medium">{ADD_MEMBER.PIN_CODE}</label>
          <NewTestInputComponent
            placeholder={ADD_MEMBER.PIN_CODE}
            {...register(ADD_MEMBER_FORM_CONTROL_NAME.PIN_CODE, {
              required: ADD_MEMBER_FORM_ERROR_MESSAGE.THIS_FIELD_IS_REQUIRED,
              minLength: {
                value: 3,
                message: ADD_MEMBER_FORM_ERROR_MESSAGE.THIS_FIELD_REQUIRES_ATLEAST_3_CHAR
              }
            })}
          />
          {errors[ADD_MEMBER_FORM_CONTROL_NAME.PIN_CODE] && <span className="mt-2 text-xs text-red-dark">{errors[ADD_MEMBER_FORM_CONTROL_NAME.PIN_CODE].message}</span>}
        </div>
        <label className="text-black text-base font-medium">{ADD_MEMBER.BOTH_ADDRESS}</label>
        <div className="flex flex-col gap-2 mt-3">
          <label className="text-black text-base font-medium">{ADD_MEMBER.TICK_CHECK_BOX_IF_BOTH_ADDRESS_SAME}</label>
          <input type="checkbox" onChange={onBothAddressSame}/>
        </div>
        {
          !isBothAddressSame &&
          <div>
            <div className="flex flex-col gap-2">
              <label className="text-black text-base font-medium">{ADD_MEMBER.CURRENT_ADDRESS}</label>
              <NewTestInputComponent
                placeholder={ADD_MEMBER.CURRENT_ADDRESS}
                {...register(ADD_MEMBER_FORM_CONTROL_NAME.CURRENT_ADDRESS, {
                  // required: ADD_MEMBER_FORM_ERROR_MESSAGE.THIS_FIELD_IS_REQUIRED,
                  // minLength: {
                  //   value: 20,
                  //   message: ADD_MEMBER_FORM_ERROR_MESSAGE.THIS_FIELD_REQUIRES_ATLEAST_20_CHAR
                  // }
                })}
              />
              {errors[ADD_MEMBER_FORM_CONTROL_NAME.CURRENT_ADDRESS] && <span className="mt-2 text-xs text-red-dark">{errors[ADD_MEMBER_FORM_CONTROL_NAME.CURRENT_ADDRESS].message}</span>}
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-black text-base font-medium">{ADD_MEMBER.DISTRICT}</label>
              <NewTestInputComponent
                placeholder={ADD_MEMBER.DISTRICT}
                {...register(ADD_MEMBER_FORM_CONTROL_NAME.CURRENTADDRESS_DISTRICT, {
                  // required: ADD_MEMBER_FORM_ERROR_MESSAGE.THIS_FIELD_IS_REQUIRED,
                  // minLength: {
                  //   value: 3,
                  //   message: ADD_MEMBER_FORM_ERROR_MESSAGE.THIS_FIELD_REQUIRES_ATLEAST_3_CHAR
                  // }
                })}
              />
              {errors[ADD_MEMBER_FORM_CONTROL_NAME.CURRENTADDRESS_DISTRICT] && <span className="mt-2 text-xs text-red-dark">{errors[ADD_MEMBER_FORM_CONTROL_NAME.CURRENTADDRESS_DISTRICT].message}</span>}
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-black text-base font-medium">{ADD_MEMBER.STATE}</label>
              <NewTestInputComponent
                placeholder={ADD_MEMBER.STATE}
                {...register(ADD_MEMBER_FORM_CONTROL_NAME.CURRENTADDRESS_STATE, {
                  // required: ADD_MEMBER_FORM_ERROR_MESSAGE.THIS_FIELD_IS_REQUIRED,
                  // minLength: {
                  //   value: 3,
                  //   message: ADD_MEMBER_FORM_ERROR_MESSAGE.THIS_FIELD_REQUIRES_ATLEAST_3_CHAR
                  // }
                })}
              />
              {errors[ADD_MEMBER_FORM_CONTROL_NAME.CURRENTADDRESS_STATE] && <span className="mt-2 text-xs text-red-dark">{errors[ADD_MEMBER_FORM_CONTROL_NAME.CURRENTADDRESS_STATE].message}</span>}
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-black text-base font-medium">{ADD_MEMBER.POST_OFFICE}</label>
              <NewTestInputComponent
                placeholder={ADD_MEMBER.POST_OFFICE}
                {...register(ADD_MEMBER_FORM_CONTROL_NAME.CURRENTADDRESS_POSTOFFICE, {
                  // required: ADD_MEMBER_FORM_ERROR_MESSAGE.THIS_FIELD_IS_REQUIRED,
                  // minLength: {
                  //   value: 3,
                  //   message: ADD_MEMBER_FORM_ERROR_MESSAGE.THIS_FIELD_REQUIRES_ATLEAST_3_CHAR
                  // }
                })}
              />
              {errors[ADD_MEMBER_FORM_CONTROL_NAME.CURRENTADDRESS_POSTOFFICE] && <span className="mt-2 text-xs text-red-dark">{errors[ADD_MEMBER_FORM_CONTROL_NAME.CURRENTADDRESS_POSTOFFICE].message}</span>}
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-black text-base font-medium">{ADD_MEMBER.PIN_CODE}</label>
              <NewTestInputComponent
                placeholder={ADD_MEMBER.PIN_CODE}
                {...register(ADD_MEMBER_FORM_CONTROL_NAME.CURRENTADDRESS_PINCODE, {
                  // required: ADD_MEMBER_FORM_ERROR_MESSAGE.THIS_FIELD_IS_REQUIRED,
                  // minLength: {
                  //   value: 3,
                  //   message: ADD_MEMBER_FORM_ERROR_MESSAGE.THIS_FIELD_REQUIRES_ATLEAST_3_CHAR
                  // }
                })}
              />
              {errors[ADD_MEMBER_FORM_CONTROL_NAME.CURRENTADDRESS_PINCODE] && <span className="mt-2 text-xs text-red-dark">{errors[ADD_MEMBER_FORM_CONTROL_NAME.CURRENTADDRESS_PINCODE].message}</span>}
            </div>
          </div>
        }
        <label className="text-black text-base font-medium">{ADD_MEMBER.AADHAR_AND_PAN_INFO}</label>
        <div className="flex flex-col gap-2">
          <label className="text-black text-base font-medium">{ADD_MEMBER.NAME_AS_PER_AADHAR}</label>
          <NewTestInputComponent
            placeholder={ADD_MEMBER.ENTER_HERE}
            {...register(ADD_MEMBER_FORM_CONTROL_NAME.AADHAR_NAME, {
              required: ADD_MEMBER_FORM_ERROR_MESSAGE.THIS_FIELD_IS_REQUIRED,
              minLength: {
                value: 3,
                message: ADD_MEMBER_FORM_ERROR_MESSAGE.THIS_FIELD_REQUIRES_ATLEAST_3_CHAR
              }
            })}
          />
          {errors[ADD_MEMBER_FORM_CONTROL_NAME.AADHAR_NAME] && <span className="mt-2 text-xs text-red-dark">{errors[ADD_MEMBER_FORM_CONTROL_NAME.AADHAR_NAME].message}</span>}
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-black text-base font-medium">{ADD_MEMBER.AADHAR_NUMBER}</label>
          <NewTestInputComponent
            placeholder={ADD_MEMBER.ENTER_HERE}
            {...register(ADD_MEMBER_FORM_CONTROL_NAME.AADHAR_NUMBER, {
              required: ADD_MEMBER_FORM_ERROR_MESSAGE.THIS_FIELD_IS_REQUIRED,
              pattern: {
                value: REGEX.AADHAR,
                message: 'Inavlid Aadhar no.'
              }
            })}
          />
          {errors[ADD_MEMBER_FORM_CONTROL_NAME.AADHAR_NUMBER] && <span className="mt-2 text-xs text-red-dark">{errors[ADD_MEMBER_FORM_CONTROL_NAME.AADHAR_NUMBER].message}</span>}
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-black text-base font-medium">{ADD_MEMBER.NAME_AS_PER_PAN}</label>
          <NewTestInputComponent
            placeholder={ADD_MEMBER.ENTER_HERE}
            {...register(ADD_MEMBER_FORM_CONTROL_NAME.PAN_NAME, {
              required: ADD_MEMBER_FORM_ERROR_MESSAGE.THIS_FIELD_IS_REQUIRED,
              minLength: {
                value: 3,
                message: ADD_MEMBER_FORM_ERROR_MESSAGE.THIS_FIELD_REQUIRES_ATLEAST_3_CHAR
              }
            })}
          />
          {errors[ADD_MEMBER_FORM_CONTROL_NAME.PAN_NAME] && <span className="mt-2 text-xs text-red-dark">{errors[ADD_MEMBER_FORM_CONTROL_NAME.PAN_NAME].message}</span>}
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-black text-base font-medium">{ADD_MEMBER.PAN_NUMBER}</label>
          <NewTestInputComponent
            placeholder={ADD_MEMBER.ENTER_HERE}
            {...register(ADD_MEMBER_FORM_CONTROL_NAME.PAN_NUMBER, {
              required: ADD_MEMBER_FORM_ERROR_MESSAGE.THIS_FIELD_IS_REQUIRED,
              pattern: {
                value: REGEX.PAN_NO,
                message: 'Inavlid PAN no.'
              }
            })}
          />
          {errors[ADD_MEMBER_FORM_CONTROL_NAME.PAN_NUMBER] && <span className="mt-2 text-xs text-red-dark">{errors[ADD_MEMBER_FORM_CONTROL_NAME.PAN_NUMBER].message}</span>}
        </div>
        <label className="text-black text-base font-medium">{ADD_MEMBER.BANK_PASSBOOK_INFO}</label>
        <div className="flex flex-col gap-2">
          <label className="text-black text-base font-medium">{ADD_MEMBER.BANK_NAME}</label>
          <NewTestInputComponent
            placeholder={ADD_MEMBER.ENTER_HERE}
            {...register(ADD_MEMBER_FORM_CONTROL_NAME.BANK_NAME, {
              required: ADD_MEMBER_FORM_ERROR_MESSAGE.THIS_FIELD_IS_REQUIRED,
              minLength: {
                value: 3,
                message: ADD_MEMBER_FORM_ERROR_MESSAGE.THIS_FIELD_REQUIRES_ATLEAST_3_CHAR
              }
            })}
          />
          {errors[ADD_MEMBER_FORM_CONTROL_NAME.BANK_NAME] && <span className="mt-2 text-xs text-red-dark">{errors[ADD_MEMBER_FORM_CONTROL_NAME.BANK_NAME].message}</span>}
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-black text-base font-medium">{ADD_MEMBER.BRANCH_NAME}</label>
          <NewTestInputComponent
            placeholder={ADD_MEMBER.ENTER_HERE}
            {...register(ADD_MEMBER_FORM_CONTROL_NAME.BRANCH_NAME, {
              required: ADD_MEMBER_FORM_ERROR_MESSAGE.THIS_FIELD_IS_REQUIRED,
              minLength: {
                value: 3,
                message: ADD_MEMBER_FORM_ERROR_MESSAGE.THIS_FIELD_REQUIRES_ATLEAST_3_CHAR
              }
            })}
          />
          {errors[ADD_MEMBER_FORM_CONTROL_NAME.BRANCH_NAME] && <span className="mt-2 text-xs text-red-dark">{errors[ADD_MEMBER_FORM_CONTROL_NAME.BRANCH_NAME].message}</span>}
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-black text-base font-medium">{ADD_MEMBER.IFSC_CODE}</label>
          <NewTestInputComponent
            placeholder={ADD_MEMBER.ENTER_HERE}
            {...register(ADD_MEMBER_FORM_CONTROL_NAME.IFSC_CODE, {
              required: ADD_MEMBER_FORM_ERROR_MESSAGE.THIS_FIELD_IS_REQUIRED,
              pattern: {
                value: REGEX.IFSC_CODE,
                message: 'Inavlid IFSC code.'
              }
            })}
          />
          {errors[ADD_MEMBER_FORM_CONTROL_NAME.IFSC_CODE] && <span className="mt-2 text-xs text-red-dark">{errors[ADD_MEMBER_FORM_CONTROL_NAME.IFSC_CODE].message}</span>}
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-black text-base font-medium">{ADD_MEMBER.ACCOUNT_TYPE}</label>
          <NewTestInputComponent
            placeholder={ADD_MEMBER.ENTER_HERE}
            {...register(ADD_MEMBER_FORM_CONTROL_NAME.ACCOUNT_TYPE, {
              required: ADD_MEMBER_FORM_ERROR_MESSAGE.THIS_FIELD_IS_REQUIRED,
              minLength: {
                value: 3,
                message: ADD_MEMBER_FORM_ERROR_MESSAGE.THIS_FIELD_REQUIRES_ATLEAST_3_CHAR
              }
            })}
          />
          {errors[ADD_MEMBER_FORM_CONTROL_NAME.ACCOUNT_TYPE] && <span className="mt-2 text-xs text-red-dark">{errors[ADD_MEMBER_FORM_CONTROL_NAME.ACCOUNT_TYPE].message}</span>}
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-black text-base font-medium">{ADD_MEMBER.ACCOUNT_NUMBER}</label>
          <NewTestInputComponent
            placeholder={ADD_MEMBER.ENTER_HERE}
            {...register(ADD_MEMBER_FORM_CONTROL_NAME.ACCOUNT_NUMBER, {
              required: ADD_MEMBER_FORM_ERROR_MESSAGE.THIS_FIELD_IS_REQUIRED,
              pattern: {
                value: REGEX.ACCOUNT_NO,
                message: 'Inavlid Account no.'
              }
            })}
          />
          {errors[ADD_MEMBER_FORM_CONTROL_NAME.ACCOUNT_NUMBER] && <span className="mt-2 text-xs text-red-dark">{errors[ADD_MEMBER_FORM_CONTROL_NAME.ACCOUNT_NUMBER].message}</span>}
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-black text-base font-medium">{ADD_MEMBER.NAME_AS_PER_BANK}</label>
          <NewTestInputComponent
            placeholder={ADD_MEMBER.ENTER_HERE}
            {...register(ADD_MEMBER_FORM_CONTROL_NAME.NAME_AS_PER_BANK, {
              required: ADD_MEMBER_FORM_ERROR_MESSAGE.THIS_FIELD_IS_REQUIRED,
              minLength: {
                value: 3,
                message: ADD_MEMBER_FORM_ERROR_MESSAGE.THIS_FIELD_REQUIRES_ATLEAST_3_CHAR
              }
            })}
          />
          {errors[ADD_MEMBER_FORM_CONTROL_NAME.NAME_AS_PER_BANK] && <span className="mt-2 text-xs text-red-dark">{errors[ADD_MEMBER_FORM_CONTROL_NAME.NAME_AS_PER_BANK].message}</span>}
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-black text-base font-medium">Applicant Photo or selfie:</label>
          <input type="file" onChange={convertPhotoToBase64} />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-black text-base font-medium">{ADD_MEMBER.AADHAR_COPY}</label>
          <input type="file" onChange={convertAadharCopyToBase64} />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-black text-base font-medium">{ADD_MEMBER.PAN_CARD_COPY}</label>
          <input type="file" onChange={convertPanCopyToBase64} />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-black text-base font-medium">Upload you bank passbook or cheqleaf:</label>
          <input type="file" onChange={convertBankProofToBase64} />
        </div>
        <div className="flex flex-col gap-2 mt-3">
          <label className="text-black text-base font-medium">Upload application copy as pdf.</label>
          <input type="file" onChange={convertApplicationToBase64} />
        </div>
        {(!invalid && (otherValidator.photoError || otherValidator.aadharCopyError || otherValidator.panCopyError || otherValidator.bankProofError || otherValidator.applicationDocumentCopy))
          && <div className="text-base font-medium text-red-dark mt-4 rounded-[4px] bg-red-light p-2">
            {!invalid && otherValidator.photoError && <div>Upload your photo</div>}
            {!invalid && otherValidator.aadharCopyError && <div>Upload your aadhar copy</div>}
            {!invalid && otherValidator.panCopyError && <div>Upload your pan copy</div>}
            {!invalid && otherValidator.bankProofError && <div>Upload your bank proof</div>}
            {!invalid && otherValidator.applicationDocumentCopy && <div>Upload application ducument.</div>}
          </div>
        }
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

export default AddMemberForm;