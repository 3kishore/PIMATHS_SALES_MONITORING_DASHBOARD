import React, { useState } from 'react';
import { Field, reduxForm } from 'redux-form';
import InputComponent from '../../../components/atom/input-component';
import SelectComponent from '../../../components/atom/select-component';
import { ApiServiceHelper } from '../../api/api.service';
import { EnvironmentHelperService } from '../../helper-service/environment-helper.service';
import { USER_JOB_TITLE } from '../../utilities/APP.constant';
import validators from '../../utilities/validators';
import { ADD_MEMBER, ADD_MEMBER_FORM_CONTROL_NAME, ADD_MEMBER_FORM_ERROR_MESSAGE, EDUCATION_STATUS, ZONAL_HEAD } from './add-member.constant';
// import validators from '../../utilities/validators';

const AddMemberForm = props => {
  const _environmentHelperService = new EnvironmentHelperService();
  const _apiHelper = new ApiServiceHelper();
  const [failedToRequest, setFailedToRequest] = useState(false);
  const role = _environmentHelperService.getRole();

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

  const [isBothAddressSame, setBothAddressSame] = useState(false);

  const onSubmit = (values) => {
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
      const payload = {
        zone: 'tamil-nadu',
        region: 'chennai',
        area: 'vandaloor',
        department: 'direct-sales-team',
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
        bothAddressAreSame: values.currentAddressPinCode ? 'Yes' : ' No',
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
      if(_environmentHelperService.isAdmin()) {
        payload.isApproved = true;
        _apiHelper.approveUser(payload).then(resp => {}).catch(err => {setFailedToRequest(true)});
      } else {
        _apiHelper.addUser(payload).then(resp => {}).catch(err => {setFailedToRequest(true)});
      }
    }
  }

  function onBothAddressSame(event) {
    setBothAddressSame(event.target.checked);
  }

  const formValidators = {
    referedBy: validators.required(ADD_MEMBER_FORM_ERROR_MESSAGE.SELECT_VALUE),
    referelCode: validators.required(ADD_MEMBER_FORM_ERROR_MESSAGE.THIS_FIELD_IS_REQUIRED),
    jobRole: validators.required(ADD_MEMBER_FORM_ERROR_MESSAGE.SELECT_VALUE),
    name: [validators.required(ADD_MEMBER_FORM_ERROR_MESSAGE.THIS_FIELD_IS_REQUIRED), validators.minLength(3, ADD_MEMBER_FORM_ERROR_MESSAGE.THIS_FIELD_REQUIRES_ATLEAST_3_CHAR)],
    area: [validators.required(ADD_MEMBER_FORM_ERROR_MESSAGE.THIS_FIELD_IS_REQUIRED), validators.minLength(3, ADD_MEMBER_FORM_ERROR_MESSAGE.THIS_FIELD_REQUIRES_ATLEAST_3_CHAR)],
    dob: validators.required(ADD_MEMBER_FORM_ERROR_MESSAGE.THIS_FIELD_IS_REQUIRED),
    age: [validators.required(ADD_MEMBER_FORM_ERROR_MESSAGE.THIS_FIELD_IS_REQUIRED), validators.regex(/^\d{2}$/, ADD_MEMBER_FORM_ERROR_MESSAGE.INVALID_MOBILE_NUMBER)],
    mobileNumber: [validators.required(ADD_MEMBER_FORM_ERROR_MESSAGE.THIS_FIELD_IS_REQUIRED), validators.regex(/^\d{10}$/, ADD_MEMBER_FORM_ERROR_MESSAGE.INVALID_MOBILE_NUMBER)],
    emailId: [validators.required(ADD_MEMBER_FORM_ERROR_MESSAGE.THIS_FIELD_IS_REQUIRED), validators.regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, ADD_MEMBER_FORM_ERROR_MESSAGE.INVALID_EMAIL_ID)],
    qualification: [validators.required(ADD_MEMBER_FORM_ERROR_MESSAGE.THIS_FIELD_IS_REQUIRED), validators.minLength(3, ADD_MEMBER_FORM_ERROR_MESSAGE.THIS_FIELD_REQUIRES_ATLEAST_3_CHAR)],
    occupation: [validators.required(ADD_MEMBER_FORM_ERROR_MESSAGE.THIS_FIELD_IS_REQUIRED), validators.minLength(3, ADD_MEMBER_FORM_ERROR_MESSAGE.THIS_FIELD_REQUIRES_ATLEAST_3_CHAR)],
    permenentAddress: [validators.required(ADD_MEMBER_FORM_ERROR_MESSAGE.THIS_FIELD_IS_REQUIRED), validators.minLength(3, ADD_MEMBER_FORM_ERROR_MESSAGE.THIS_FIELD_REQUIRES_ATLEAST_3_CHAR)],
    district: [validators.required(ADD_MEMBER_FORM_ERROR_MESSAGE.THIS_FIELD_IS_REQUIRED), validators.minLength(3, ADD_MEMBER_FORM_ERROR_MESSAGE.THIS_FIELD_REQUIRES_ATLEAST_3_CHAR)],
    state: [validators.required(ADD_MEMBER_FORM_ERROR_MESSAGE.THIS_FIELD_IS_REQUIRED), validators.minLength(3, ADD_MEMBER_FORM_ERROR_MESSAGE.THIS_FIELD_REQUIRES_ATLEAST_3_CHAR)],
    postOffice: [validators.required(ADD_MEMBER_FORM_ERROR_MESSAGE.THIS_FIELD_IS_REQUIRED), validators.minLength(3, ADD_MEMBER_FORM_ERROR_MESSAGE.THIS_FIELD_REQUIRES_ATLEAST_3_CHAR)],
    pinCode: validators.required(ADD_MEMBER_FORM_ERROR_MESSAGE.THIS_FIELD_IS_REQUIRED),
    currentAddress: [validators.required(ADD_MEMBER_FORM_ERROR_MESSAGE.THIS_FIELD_IS_REQUIRED), validators.minLength(3, ADD_MEMBER_FORM_ERROR_MESSAGE.THIS_FIELD_REQUIRES_ATLEAST_3_CHAR)],
    currentAddressDistrict: [validators.required(ADD_MEMBER_FORM_ERROR_MESSAGE.THIS_FIELD_IS_REQUIRED), validators.minLength(3, ADD_MEMBER_FORM_ERROR_MESSAGE.THIS_FIELD_REQUIRES_ATLEAST_3_CHAR)],
    currentAddressState: [validators.required(ADD_MEMBER_FORM_ERROR_MESSAGE.THIS_FIELD_IS_REQUIRED), validators.minLength(3, ADD_MEMBER_FORM_ERROR_MESSAGE.THIS_FIELD_REQUIRES_ATLEAST_3_CHAR)],
    currentAddressPostOffice: [validators.required(ADD_MEMBER_FORM_ERROR_MESSAGE.THIS_FIELD_IS_REQUIRED), validators.minLength(3, ADD_MEMBER_FORM_ERROR_MESSAGE.THIS_FIELD_REQUIRES_ATLEAST_3_CHAR)],
    currentAddressPinCode: validators.required(ADD_MEMBER_FORM_ERROR_MESSAGE.THIS_FIELD_IS_REQUIRED),
    panName: [validators.required(ADD_MEMBER_FORM_ERROR_MESSAGE.THIS_FIELD_IS_REQUIRED), validators.minLength(3, ADD_MEMBER_FORM_ERROR_MESSAGE.THIS_FIELD_REQUIRES_ATLEAST_3_CHAR)],
    aadharName: [validators.required(ADD_MEMBER_FORM_ERROR_MESSAGE.THIS_FIELD_IS_REQUIRED), validators.minLength(3, ADD_MEMBER_FORM_ERROR_MESSAGE.THIS_FIELD_REQUIRES_ATLEAST_3_CHAR)],
    bankName: [validators.required(ADD_MEMBER_FORM_ERROR_MESSAGE.THIS_FIELD_IS_REQUIRED), validators.minLength(3, ADD_MEMBER_FORM_ERROR_MESSAGE.THIS_FIELD_REQUIRES_ATLEAST_3_CHAR)],
    branchName: [validators.required(ADD_MEMBER_FORM_ERROR_MESSAGE.THIS_FIELD_IS_REQUIRED), validators.minLength(3, ADD_MEMBER_FORM_ERROR_MESSAGE.THIS_FIELD_REQUIRES_ATLEAST_3_CHAR)],
    accountType: [validators.required(ADD_MEMBER_FORM_ERROR_MESSAGE.THIS_FIELD_IS_REQUIRED), validators.minLength(3, ADD_MEMBER_FORM_ERROR_MESSAGE.THIS_FIELD_REQUIRES_ATLEAST_3_CHAR)],
    nameAsPerBank: [validators.required(ADD_MEMBER_FORM_ERROR_MESSAGE.THIS_FIELD_IS_REQUIRED), validators.minLength(3, ADD_MEMBER_FORM_ERROR_MESSAGE.THIS_FIELD_REQUIRES_ATLEAST_3_CHAR)],
    panNumber: [validators.required(ADD_MEMBER_FORM_ERROR_MESSAGE.THIS_FIELD_IS_REQUIRED), validators.regex(/^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/, ADD_MEMBER_FORM_ERROR_MESSAGE.INVALID_PAN)],
    aadharNumber: [validators.required(ADD_MEMBER_FORM_ERROR_MESSAGE.THIS_FIELD_IS_REQUIRED), validators.regex(/^\d{12}$/, ADD_MEMBER_FORM_ERROR_MESSAGE.INVALID_AADHAR)],
    accountNumber: [validators.required(ADD_MEMBER_FORM_ERROR_MESSAGE.THIS_FIELD_IS_REQUIRED), validators.regex(/^([0-9]{11})|([0-9]{2}-[0-9]{3}-[0-9]{6})$/, ADD_MEMBER_FORM_ERROR_MESSAGE.INAVALID_BANK_ACC_NO)],
    ifscCode: [validators.required(ADD_MEMBER_FORM_ERROR_MESSAGE.THIS_FIELD_IS_REQUIRED), validators.regex(/^[A-Za-z]{4}[a-zA-Z0-9]{7}$/, ADD_MEMBER_FORM_ERROR_MESSAGE.INVALID_IFSC_CODE)]
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

  const convertApplicantSignToBase64 = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result.split(',')[1];
        setDocumentUpload(base64String);
        const newObj = Object.assign(otherValidator, {applicantSignError: false})
        setOtherValidators(newObj);
      };
      reader.readAsDataURL(file);
    }
  };

//  const { handleSubmit, pristine, submitting } = props;
const { handleSubmit, pristine, submitting } = props;
 return (
  <div className="flex flex-col flex-grow gap-3 p-6 max-w-[450px] form-height">
    <h2 className="text-2xl font-medium">{ADD_MEMBER.ADD_MEMBER}</h2>
    <div className="flex flex-col gap-2">
      <label className="text-black text-base font-medium">{ZONAL_HEAD.FORM_LABEL.FIRST_NAME}</label>
      <Field
        name={ZONAL_HEAD.FORM_FIELDS.FIRST_NAME}
        component={InputComponent}
        placeholder={ZONAL_HEAD.FORM_PLACEHOLDER.FIRST_NAME}
        validate={formValidators.firstName}
      />
    </div>
    <div className="flex flex-col gap-2">
      <label className="text-black text-base font-medium">{ZONAL_HEAD.FORM_LABEL.LAST_NAME}</label>
      <Field
        name={ZONAL_HEAD.FORM_FIELDS.LAST_NAME}
        component={InputComponent}
        placeholder={ZONAL_HEAD.FORM_PLACEHOLDER.LAST_NAME}
        validate={formValidators.lastName}
      />
    </div>
    <div className="flex flex-col gap-2">
      <label className="text-black text-base font-medium">{ADD_MEMBER.MOBILE_NUMBER}</label>
      <Field
        name={ZONAL_HEAD.FORM_FIELDS.MOBILE_NO}
        component={InputComponent}
        placeholder={ZONAL_HEAD.FORM_PLACEHOLDER.MOBILE_NO}
        validate={formValidators.mobileNumber}
      />
    </div>
    <div className="flex flex-col gap-2 mt-3">
      <label className="text-black text-base font-medium">{ADD_MEMBER.EMAIL_ID}</label>
      <Field
        name={ZONAL_HEAD.FORM_FIELDS.EMAIL_ID}
        component={InputComponent}
        placeholder={ZONAL_HEAD.FORM_PLACEHOLDER.EMAIL_ID}
        validate={formValidators.emailId}
      />
    </div>
    {/* {role === USER_JOB_TITLE.REGIONAL_HEAD && <div className="flex flex-col gap-2">
      <label className="text-black text-base font-medium">{ZONAL_HEAD.FORM_LABEL.AREA}</label>
      <Field 
        name={ZONAL_HEAD.FORM_FIELDS.AREA}
        component={SelectComponent}
        placeholder={ZONAL_HEAD.FORM_PLACEHOLDER.AREA}
        options={LOCATION_LIST[0].subRegion}
        disabled={true}
      />
    </div>} */}
    <div>Personal Details</div>
    <div className="flex flex-col gap-2 mt-3">
      <label className="text-black text-base font-medium">{ADD_MEMBER.DOB}</label>
      <Field
        name={ADD_MEMBER_FORM_CONTROL_NAME.DOB}
        component={InputComponent}
        placeholder={ADD_MEMBER.ENTER_HERE}
        validate={formValidators.dob}
      />
    </div>
    <div className="flex flex-col gap-2">
      <label className="text-black text-base font-medium">{ADD_MEMBER.GENDER}</label>
      <div>
        <label>
          <Field
            name={ADD_MEMBER_FORM_CONTROL_NAME.GENDER}
            component="input"
            type="radio"
            value="male"
          />{' '}
          Male
        </label>
        <label>
          <Field
            name={ADD_MEMBER_FORM_CONTROL_NAME.GENDER}
            component="input"
            type="radio"
            value="female"
          />{' '}
          Female
        </label>
      </div>
    </div>
    <div className="flex flex-col gap-2">
      <label className="text-black text-base font-medium">{ADD_MEMBER.QUALIFICATION}</label>
      <Field 
        name={ADD_MEMBER_FORM_CONTROL_NAME.QUALIFICATION}
        component={SelectComponent}
        placeholder={ADD_MEMBER.ENTER_HERE}
        options={EDUCATION_STATUS}
        disabled={true}
      />
    </div>
    <div className="flex flex-col gap-2 mt-3">
      <label className="text-black text-base font-medium">{ADD_MEMBER.OCCUPATION}</label>
      <Field
        name={ADD_MEMBER_FORM_CONTROL_NAME.OCCUPATION}
        component={InputComponent}
        placeholder={ADD_MEMBER.ENTER_HERE}
        validate={formValidators.occupation}
      />
    </div>
    <div className="flex flex-col gap-2">
      <label className="text-black text-base font-medium">{ADD_MEMBER.PERMENENT_ADDRESS}</label>
      <Field
        name={ADD_MEMBER_FORM_CONTROL_NAME.PERMENENT_ADDRESS}
        component={InputComponent}
        placeholder={ADD_MEMBER.ENTER_HERE}
        validate={formValidators.permenentAddress}
      />
    </div>
    <div className="flex flex-col gap-2 mt-3">
      <label className="text-black text-base font-medium">{ADD_MEMBER.DISTRICT}</label>
      <Field
        name={ADD_MEMBER_FORM_CONTROL_NAME.DISTRICT}
        component={InputComponent}
        placeholder={ADD_MEMBER.ENTER_HERE}
        validate={formValidators.district}
      />
    </div>
    <div className="flex flex-col gap-2">
      <label className="text-black text-base font-medium">{ADD_MEMBER.STATE}</label>
      <Field
        name={ADD_MEMBER_FORM_CONTROL_NAME.STATE}
        component={InputComponent}
        placeholder={ADD_MEMBER.ENTER_HERE}
        validate={formValidators.state}
      />
    </div>

    <div className="flex flex-col gap-2 mt-3">
      <label className="text-black text-base font-medium">{ADD_MEMBER.POST_OFFICE}</label>
      <Field
        name={ADD_MEMBER_FORM_CONTROL_NAME.POST_OFFICE}
        component={InputComponent}
        placeholder={ADD_MEMBER.ENTER_HERE}
        validate={formValidators.postOffice}
      />
    </div>
    <div className="flex flex-col gap-2">
      <label className="text-black text-base font-medium">{ADD_MEMBER.PIN_CODE}</label>
      <Field
        name={ADD_MEMBER_FORM_CONTROL_NAME.PIN_CODE}
        component={InputComponent}
        placeholder={ADD_MEMBER.ENTER_HERE}
        validate={formValidators.pinCode}
      />
    </div>
    <label className="text-black text-base font-medium">{ADD_MEMBER.BOTH_ADDRESS}</label>
    <div className="flex flex-col gap-2 mt-3">
      <label className="text-black text-base font-medium">{ADD_MEMBER.TICK_CHECK_BOX_IF_BOTH_ADDRESS_SAME}{isBothAddressSame}</label>
      <Field
        name={ADD_MEMBER_FORM_CONTROL_NAME.BOTH_ADDRESS_SAME}
        component="input"
        type="checkbox"
        onChange={onBothAddressSame}
      />
    </div>
    {/* {
      !isBothAddressSame && 
      <div className='flex flex-col gap-2'>
        <div className="flex flex-col gap-2">
          <label className="text-black text-base font-medium">{ADD_MEMBER.CURRENT_ADDRESS}</label>
          <Field
            name={ADD_MEMBER_FORM_CONTROL_NAME.CURRENT_ADDRESS}
            component={InputComponent}
            placeholder={ADD_MEMBER.ENTER_HERE}
            // validate={!isBothAddressSame ? formValidators.currentAddress : undefined}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-black text-base font-medium">{ADD_MEMBER.DISTRICT}</label>
          <Field
            name={ADD_MEMBER_FORM_CONTROL_NAME.CURRENTADDRESS_DISTRICT}
            component={InputComponent}
            placeholder={ADD_MEMBER.ENTER_HERE}
            // validate={!isBothAddressSame ? formValidators.currentAddressDistrict : undefined}
          />
        </div><div className="flex flex-col gap-2 mt-3">
          <label className="text-black text-base font-medium">{ADD_MEMBER.STATE}</label>
          <Field
            name={ADD_MEMBER_FORM_CONTROL_NAME.CURRENTADDRESS_STATE}
            component={InputComponent}
            placeholder={ADD_MEMBER.ENTER_HERE}
            // validate={!isBothAddressSame ? formValidators.currentAddressState : undefined}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-black text-base font-medium">{ADD_MEMBER.POST_OFFICE}</label>
          <Field
            name={ADD_MEMBER_FORM_CONTROL_NAME.CURRENTADDRESS_POSTOFFICE}
            component={InputComponent}
            placeholder={ADD_MEMBER.ENTER_HERE}
            // validate={!isBothAddressSame ? formValidators.currentAddressPostOffice : undefined}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-black text-base font-medium">{ADD_MEMBER.CURRENT_ADDRESS_PIN_CODE}</label>
          <Field
            name={ADD_MEMBER_FORM_CONTROL_NAME.CURRENTADDRESS_PINCODE}
            component={InputComponent}
            placeholder={ADD_MEMBER.ENTER_HERE}
            // validate={!isBothAddressSame ? formValidators.currentAddressPinCode : undefined}
          />
        </div>
      </div>
    } */}
    <label className="text-black text-base font-medium">{ADD_MEMBER.AADHAR_AND_PAN_INFO}</label>
    <div className="flex flex-col gap-2">
      <label className="text-black text-base font-medium">{ADD_MEMBER.NAME_AS_PER_AADHAR}</label>
      <Field
        name={ADD_MEMBER_FORM_CONTROL_NAME.AADHAR_NAME}
        component={InputComponent}
        placeholder={ADD_MEMBER.ENTER_HERE}
        validate={formValidators.aadharName}
      />
    </div>
    <div className="flex flex-col gap-2 mt-3">
      <label className="text-black text-base font-medium">{ADD_MEMBER.AADHAR_NUMBER}</label>
      <Field
        name={ADD_MEMBER_FORM_CONTROL_NAME.AADHAR_NUMBER}
        component={InputComponent}
        placeholder={ADD_MEMBER.ENTER_HERE}
        validate={formValidators.aadharNumber}
      />
    </div>
    <div className="flex flex-col gap-2">
      <label className="text-black text-base font-medium">{ADD_MEMBER.NAME_AS_PER_PAN}</label>
      <Field
        name={ADD_MEMBER_FORM_CONTROL_NAME.PAN_NAME}
        component={InputComponent}
        placeholder={ADD_MEMBER.ENTER_HERE}
        validate={formValidators.panName}
      />
    </div>
    <div className="flex flex-col gap-2 mt-3">
      <label className="text-black text-base font-medium">{ADD_MEMBER.PAN_NUMBER}</label>
      <Field
        name={ADD_MEMBER_FORM_CONTROL_NAME.PAN_NUMBER}
        component={InputComponent}
        placeholder={ADD_MEMBER.ENTER_HERE}
        validate={formValidators.panNumber}
      />
    </div>
    <label className="text-black text-base font-medium">{ADD_MEMBER.BANK_PASSBOOK_INFO}</label>
    <div className="flex flex-col gap-2">
      <label className="text-black text-base font-medium">{ADD_MEMBER.BANK_NAME}</label>
      <Field
        name={ADD_MEMBER_FORM_CONTROL_NAME.BANK_NAME}
        component={InputComponent}
        placeholder={ADD_MEMBER.ENTER_HERE}
        validate={formValidators.bankName}
      />
    </div><div className="flex flex-col gap-2 mt-3">
      <label className="text-black text-base font-medium">{ADD_MEMBER.BRANCH_NAME}</label>
      <Field
        name={ADD_MEMBER_FORM_CONTROL_NAME.BRANCH_NAME}
        component={InputComponent}
        placeholder={ADD_MEMBER.ENTER_HERE}
        validate={formValidators.branchName}
      />
    </div>
    <div className="flex flex-col gap-2">
      <label className="text-black text-base font-medium">{ADD_MEMBER.IFSC_CODE}</label>
      <Field
        name={ADD_MEMBER_FORM_CONTROL_NAME.IFSC_CODE}
        component={InputComponent}
        placeholder={ADD_MEMBER.ENTER_HERE}
        validate={formValidators.ifscCode}
      />
    </div>
    <div className="flex flex-col gap-2">
      <label className="text-black text-base font-medium">{ADD_MEMBER.ACCOUNT_TYPE}</label>
      <Field
        name={ADD_MEMBER_FORM_CONTROL_NAME.ACCOUNT_TYPE}
        component={InputComponent}
        placeholder={ADD_MEMBER.ENTER_HERE}
        validate={formValidators.accountType}
      />
    </div>
    <div className="flex flex-col gap-2 mt-3">
      <label className="text-black text-base font-medium">{ADD_MEMBER.ACCOUNT_NUMBER}</label>
      <Field
        name={ADD_MEMBER_FORM_CONTROL_NAME.ACCOUNT_NUMBER}
        component={InputComponent}
        placeholder={ADD_MEMBER.ENTER_HERE}
        validate={formValidators.accountNumber}
      />
    </div>
    <div className="flex flex-col gap-2">
      <label className="text-black text-base font-medium">{ADD_MEMBER.NAME_AS_PER_BANK}</label>
      <Field
        name={ADD_MEMBER_FORM_CONTROL_NAME.NAME_AS_PER_BANK}
        component={InputComponent}
        placeholder={ADD_MEMBER.ENTER_HERE}
        validate={formValidators.nameAsPerBank}
      />
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
      <input type="file" onChange={convertApplicantSignToBase64} />
    </div>
    {/* {(!invalid && (otherValidator.photoError || otherValidator.aadharCopyError || otherValidator.panCopyError || otherValidator.bankProofError || otherValidator.applicationDocumentCopy))
      && <div className="text-base font-medium text-red-dark mt-4 rounded-[4px] bg-red-light p-2">
        {!invalid && otherValidator.photoError && <div>Upload your photo</div>}
        {!invalid && otherValidator.aadharCopyError && <div>Upload your aadhar copy</div>}
        {!invalid && otherValidator.panCopyError && <div>Upload your pan copy</div>}
        {!invalid && otherValidator.bankProofError && <div>Upload your bank proof</div>}
        {!invalid && otherValidator.applicationDocumentCopy && <div>Upload referal person sign</div>}
      </div>
    } */}
    <div className="flex flex-wrap gap-2 mt-3 items-center">
      <button className="secondary w-fit" onClick={handleSubmit(onSubmit)} disabled={pristine || submitting}>{ADD_MEMBER.ADD_MEMBER}</button>
      {/* {
        failedToRequest &&
          <div className="text-base font-medium text-red-dark mt-4 rounded-[4px] bg-red-light p-2">Failed to upload.</div>
      } */}
    </div>
  </div> 
 );
};

export default reduxForm({
 form: 'addMember',
})(AddMemberForm);
