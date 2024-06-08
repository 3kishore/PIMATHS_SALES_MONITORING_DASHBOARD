import AddMemberForm from "../../../services/models/add-member-page/add-member-form";
import { Provider } from "react-redux";
import addMember from "../../../services/models/add-member-page/add-member";
// import { EnvironmentHelperService } from "../../../services/helper-service/environment-helper.service";
// import { USER_JOB_TITLE } from "../../../services/utilities/APP.constant";
// import { DEPARTMENT_LIST } from "../../../services/models/add-member-page/add-member.constant";
// import PdmPromotorSalesHeadForm from "../../../services/models/add-member-page/pdm-promotor-sales-head-form";
// import RegionalHeadForm from "../../../services/models/add-member-page/regional-head-form";
// import ZonalAdminForm from "../../../services/models/add-member-page/zonal-admin-form";
// import ZonalHeadForm from "../../../services/models/add-member-page/zonal-head-form";

function AddMemberComponent() {
  // const _environmentHelperService = new EnvironmentHelperService();
  // const renderForm = () => {
  //   const role = _environmentHelperService.getRole();
  //   const department = _environmentHelperService.getSessionObject().department;
  //   const ds = DEPARTMENT_LIST[0].value;
  //   const dp = DEPARTMENT_LIST[1].value;
  //   const cp = DEPARTMENT_LIST[2].value;
  //   if (role === USER_JOB_TITLE.admin) {
  //     return <ZonalAdminForm />;
  //   } else if (role === USER_JOB_TITLE.MASTER_ADMIN) {
  //     return <ZonalHeadForm />;
  //   } else if (role === USER_JOB_TITLE.ZONAL_HEAD) {
  //     return <RegionalHeadForm />;
  //   } else if(role === USER_JOB_TITLE.REGIONAL_HEAD && department === ds) {
  //     return <PdmPromotorSalesHeadForm />;
  //   } else if(role === USER_JOB_TITLE.REGIONAL_HEAD && department === dp) {
  //     return <PdmPromotorSalesHeadForm />;
  //   } else if(role === USER_JOB_TITLE.REGIONAL_HEAD && department === cp) {
  //     return <AddMemberForm />;
  //   } else if (role === USER_JOB_TITLE.SALES_HEAD) {
  //     return <PdmPromotorSalesHeadForm />;
  //   } else if (role === USER_JOB_TITLE.PDM) {
  //     return  <AddMemberForm />;
  //   } else if (role === USER_JOB_TITLE.CHANNEL_HEAD ) {
  //     return <AddMemberForm />;
  //   } else {
  //     return null; // Optionally render nothing or some default component
  //   }
  // };

  return (
    <Provider store={addMember}>
      <div>
       <AddMemberForm />
      </div>
    </Provider>
  )
}

export default AddMemberComponent;
