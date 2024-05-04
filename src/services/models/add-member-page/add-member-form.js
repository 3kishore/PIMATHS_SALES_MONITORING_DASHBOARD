import React from 'react';
import { Field, reduxForm } from 'redux-form';
import InputComponent from '../../../components/atom/input-component';
import { ADD_MEMBER, ADD_MEMBER_FORM_CONTROL_NAME, JOB_ROLE_ARR, REFERED_BY_ARR } from './add-member.constant';
// import validators from '../../utilities/validators';

const onSubmit = (values) => {
  console.log(values);
}

// const formValidators = {
//   name: [validators.required(LOGIN_PAGE.FORM_ERROR_MESSAGE.USER_NAME_REQUIRED), validators.minLength(3, LOGIN_PAGE.FORM_ERROR_MESSAGE.USER_NAME_SHOULD_CONTAIN_THREE_CHAR)],
//   password: validators.required(LOGIN_PAGE.FORM_ERROR_MESSAGE.PASSWORD_REQUIRED)
// }

const AddMemberForm = props => {
//  const { handleSubmit, pristine, submitting } = props;
const { handleSubmit, pristine, submitting } = props;
 return (
  <div className="flex flex-col flex-grow gap-3 p-6 max-w-[450px]">
    <h2 className="text-2xl font-medium">{ADD_MEMBER.ADD_MEMBER}</h2>
    <div className="flex flex-col gap-2 mt-3">
      <label className="text-black text-base font-medium">{ADD_MEMBER.APPLIED_FOR}</label>
      <Field
        name={ADD_MEMBER_FORM_CONTROL_NAME.JOB_ROLE}
        className="select-input"
        component="select"
        placeholder={ADD_MEMBER.ENTER_HERE}
      >
        <option disabled value="">Select here</option>
        {JOB_ROLE_ARR.map((val) => (
          <option key={val.value} value={val.value}>
            {val.label}
          </option>
        ))}
      </Field>
    </div>
    <div className="flex flex-col gap-2">
      <label className="text-black text-base font-medium">{ADD_MEMBER.REFERAL_PERSON}</label>
      <Field
        name={ADD_MEMBER_FORM_CONTROL_NAME.REFERED_BY}
        className="select-input"
        component="select"
        placeholder={ADD_MEMBER.ENTER_HERE}
      >
        <option disabled value="">Select here</option>
        {REFERED_BY_ARR.map((val) => (
          <option key={val.value} value={val.value}>
            {val.label}
          </option>
        ))}
      </Field>
    </div>
    <div className="flex flex-col gap-2 mt-3">
      <label className="text-black text-base font-medium">{ADD_MEMBER.REFERAL_CODE}</label>
      <Field
        name={ADD_MEMBER_FORM_CONTROL_NAME.REFEREL_CODE}
        component={InputComponent}
        placeholder={ADD_MEMBER.ENTER_HERE}
      />
    </div>
    <label className="text-black text-base font-medium">{ADD_MEMBER.PERSONAL_INFORMATION}</label>
    <div className="flex flex-col gap-2">
      <label className="text-black text-base font-medium">{ADD_MEMBER.NAME}</label>
      <Field
        name={ADD_MEMBER_FORM_CONTROL_NAME.NAME}
        component={InputComponent}
        placeholder={ADD_MEMBER.ENTER_HERE}
      />
    </div>
    <div className="flex flex-col gap-2 mt-3">
      <label className="text-black text-base font-medium">{ADD_MEMBER.DOB}</label>
      <Field
        name={ADD_MEMBER_FORM_CONTROL_NAME.DOB}
        component={InputComponent}
        placeholder={ADD_MEMBER.ENTER_HERE}
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
      <label className="text-black text-base font-medium">{ADD_MEMBER.AGE}</label>
      <Field
        name={ADD_MEMBER_FORM_CONTROL_NAME.AGE}
        component={InputComponent}
        placeholder={ADD_MEMBER.ENTER_HERE}
      />
    </div>
    <div className="flex flex-col gap-2">
      <label className="text-black text-base font-medium">{ADD_MEMBER.MOBILE_NUMBER}</label>
      <Field
        name={ADD_MEMBER_FORM_CONTROL_NAME.MOBILE_NUMBER}
        component={InputComponent}
        placeholder={ADD_MEMBER.ENTER_HERE}
      />
    </div>
    <div className="flex flex-col gap-2 mt-3">
      <label className="text-black text-base font-medium">{ADD_MEMBER.EMAIL_ID}</label>
      <Field
        name={ADD_MEMBER_FORM_CONTROL_NAME.EMAILID}
        component={InputComponent}
        placeholder={ADD_MEMBER.ENTER_HERE}
      />
    </div>
    <div className="flex flex-col gap-2">
      <label className="text-black text-base font-medium">{ADD_MEMBER.QUALIFICATION}</label>
      <Field
        name={ADD_MEMBER_FORM_CONTROL_NAME.QUALIFICATION}
        component={InputComponent}
        placeholder={ADD_MEMBER.ENTER_HERE}
      />
    </div>
    <div className="flex flex-col gap-2 mt-3">
      <label className="text-black text-base font-medium">{ADD_MEMBER.OCCUPATION}</label>
      <Field
        name={ADD_MEMBER_FORM_CONTROL_NAME.OCCUPATION}
        component={InputComponent}
        placeholder={ADD_MEMBER.ENTER_HERE}
      />
    </div>
    <div className="flex flex-col gap-2">
      <label className="text-black text-base font-medium">{ADD_MEMBER.PERMENENT_ADDRESS}</label>
      <Field
        name={ADD_MEMBER_FORM_CONTROL_NAME.PERMENENT_ADDRESS}
        component={InputComponent}
        placeholder={ADD_MEMBER.ENTER_HERE}
      />
    </div>
    <div className="flex flex-col gap-2 mt-3">
      <label className="text-black text-base font-medium">{ADD_MEMBER.DISTRICT}</label>
      <Field
        name={ADD_MEMBER_FORM_CONTROL_NAME.DISTRICT}
        component={InputComponent}
        placeholder={ADD_MEMBER.ENTER_HERE}
      />
    </div>
    <div className="flex flex-col gap-2">
      <label className="text-black text-base font-medium">{ADD_MEMBER.STATE}</label>
      <Field
        name={ADD_MEMBER_FORM_CONTROL_NAME.STATE}
        component={InputComponent}
        placeholder={ADD_MEMBER.ENTER_HERE}
      />
    </div>
    <div className="flex flex-col gap-2 mt-3">
      <label className="text-black text-base font-medium">{ADD_MEMBER.POST_OFFICE}</label>
      <Field
        name={ADD_MEMBER_FORM_CONTROL_NAME.POST_OFFICE}
        component={InputComponent}
        placeholder={ADD_MEMBER.ENTER_HERE}
      />
    </div>
    <div className="flex flex-col gap-2">
      <label className="text-black text-base font-medium">{ADD_MEMBER.PIN_CODE}</label>
      <Field
        name={ADD_MEMBER_FORM_CONTROL_NAME.PIN_CODE}
        component={InputComponent}
        placeholder={ADD_MEMBER.ENTER_HERE}
      />
    </div>
    <label className="text-black text-base font-medium">{ADD_MEMBER.BOTH_ADDRESS}</label>
    <div className="flex flex-col gap-2 mt-3">
      <label className="text-black text-base font-medium">{ADD_MEMBER.TICK_CHECK_BOX_IF_BOTH_ADDRESS_SAME}</label>
      <Field
        name={ADD_MEMBER_FORM_CONTROL_NAME.BOTH_ADDRESS_SAME}
        component="input"
        type="checkbox"
      />
    </div>
    <div className="flex flex-col gap-2">
      <label className="text-black text-base font-medium">{ADD_MEMBER.DISTRICT}</label>
      <Field
        name={ADD_MEMBER_FORM_CONTROL_NAME.CURRENTADDRESS_DISTRICT}
        component={InputComponent}
        placeholder={ADD_MEMBER.ENTER_HERE}
      />
    </div><div className="flex flex-col gap-2 mt-3">
      <label className="text-black text-base font-medium">{ADD_MEMBER.STATE}</label>
      <Field
        name={ADD_MEMBER_FORM_CONTROL_NAME.CURRENTADDRESS_STATE}
        component={InputComponent}
        placeholder={ADD_MEMBER.ENTER_HERE}
      />
    </div>
    <div className="flex flex-col gap-2">
      <label className="text-black text-base font-medium">{ADD_MEMBER.POST_OFFICE}</label>
      <Field
        name={ADD_MEMBER_FORM_CONTROL_NAME.CURRENTADDRESS_POSTOFFICE}
        component={InputComponent}
        placeholder={ADD_MEMBER.ENTER_HERE}
      />
    </div>
    <label className="text-black text-base font-medium">{ADD_MEMBER.AADHAR_AND_PAN_INFO}</label>
    <div className="flex flex-col gap-2">
      <label className="text-black text-base font-medium">{ADD_MEMBER.NAME_AS_PER_AADHAR}</label>
      <Field
        name={ADD_MEMBER_FORM_CONTROL_NAME.AADHAR_NAME}
        component={InputComponent}
        placeholder={ADD_MEMBER.ENTER_HERE}
      />
    </div>
    <div className="flex flex-col gap-2 mt-3">
      <label className="text-black text-base font-medium">{ADD_MEMBER.AADHAR_NUMBER}</label>
      <Field
        name={ADD_MEMBER_FORM_CONTROL_NAME.AADHAR_NUMBER}
        component={InputComponent}
        placeholder={ADD_MEMBER.ENTER_HERE}
      />
    </div>
    <div className="flex flex-col gap-2">
      <label className="text-black text-base font-medium">{ADD_MEMBER.NAME_AS_PER_PAN}</label>
      <Field
        name={ADD_MEMBER_FORM_CONTROL_NAME.PAN_NAME}
        component={InputComponent}
        placeholder={ADD_MEMBER.ENTER_HERE}
      />
    </div>
    <div className="flex flex-col gap-2 mt-3">
      <label className="text-black text-base font-medium">{ADD_MEMBER.PAN_NUMBER}</label>
      <Field
        name={ADD_MEMBER_FORM_CONTROL_NAME.PAN_NUMBER}
        component={InputComponent}
        placeholder={ADD_MEMBER.ENTER_HERE}
      />
    </div>
    <label className="text-black text-base font-medium">{ADD_MEMBER.BANK_PASSBOOK_INFO}</label>
    <div className="flex flex-col gap-2">
      <label className="text-black text-base font-medium">{ADD_MEMBER.BANK_NAME}</label>
      <Field
        name={ADD_MEMBER_FORM_CONTROL_NAME.BANK_NAME}
        component={InputComponent}
        placeholder={ADD_MEMBER.ENTER_HERE}
      />
    </div><div className="flex flex-col gap-2 mt-3">
      <label className="text-black text-base font-medium">{ADD_MEMBER.BRANCH_NAME}</label>
      <Field
        name={ADD_MEMBER_FORM_CONTROL_NAME.BRANCH_NAME}
        component={InputComponent}
        placeholder={ADD_MEMBER.ENTER_HERE}
      />
    </div>
    <div className="flex flex-col gap-2">
      <label className="text-black text-base font-medium">{ADD_MEMBER.IFSC_CODE}</label>
      <Field
        name={ADD_MEMBER_FORM_CONTROL_NAME.IFSC_CODE}
        component={InputComponent}
        placeholder={ADD_MEMBER.ENTER_HERE}
      />
    </div>
    <div className="flex flex-col gap-2">
      <label className="text-black text-base font-medium">{ADD_MEMBER.ACCOUNT_TYPE}</label>
      <Field
        name={ADD_MEMBER_FORM_CONTROL_NAME.ACCOUNT_TYPE}
        component={InputComponent}
        placeholder={ADD_MEMBER.ENTER_HERE}
      />
    </div>
    <div className="flex flex-col gap-2 mt-3">
      <label className="text-black text-base font-medium">{ADD_MEMBER.ACCOUNT_NUMBER}</label>
      <Field
        name={ADD_MEMBER_FORM_CONTROL_NAME.ACCOUNT_NUMBER}
        component={InputComponent}
        placeholder={ADD_MEMBER.ENTER_HERE}
      />
    </div>
    <div className="flex flex-col gap-2">
      <label className="text-black text-base font-medium">{ADD_MEMBER.NAME_AS_PER_BANK}</label>
      <Field
        name={ADD_MEMBER_FORM_CONTROL_NAME.NAME_AS_PER_BANK}
        component={InputComponent}
        placeholder={ADD_MEMBER.ENTER_HERE}
      />
    </div>
    <div className="flex flex-col gap-2">
      <label className="text-black text-base font-medium">{ADD_MEMBER.AADHAR_COPY}</label>
      <input type="file" />
    </div>
    <div className="flex flex-col gap-2">
      <label className="text-black text-base font-medium">{ADD_MEMBER.PAN_CARD_COPY}</label>
      <input type="file" />
    </div>
    <div className="flex flex-col gap-2 mt-3">
      <label className="text-black text-base font-medium">{ADD_MEMBER.APPLICANT_SIGN}</label>
      <input type="file" />

    </div>
    <div className="flex flex-col gap-2">
      <label className="text-black text-base font-medium">{ADD_MEMBER.REFERAL_PERSON_SIGN}</label>
      <input type="file" />
    </div>

    <div className="flex flex-wrap gap-2 mt-3 items-center">
      <button className="secondary w-fit" onClick={handleSubmit(onSubmit)} disabled={pristine || submitting}>{ADD_MEMBER.ADD_MEMBER}</button>
    </div>
  </div> 
 );
};

export default reduxForm({
 form: 'addMember',
})(AddMemberForm);
