import { useCallback, useEffect, useState } from "react";
import { ApiServiceHelper } from "../../../services/api/api.service";
import { APPROVE_OR_REJECT_LICENSE } from "../../../services/models/approve-or-reject-license/approve-or-reject-license.constant";
import { BASE_64_FILE } from "../../../services/utilities/APP.constant";
import ErrorPageComponent from "../error-page/error-page.component";

function ApproveOrRejectLicenseComponent() {
  const _apiHelper = new ApiServiceHelper();
  const [list, setList] = useState([])

  const [isPastReportLoading, setPastReportLoadingStatus] = useState(true);
  const [isErrorOccured, setIsErrorOccured] = useState(false);

  function getRequestList() {
    _apiHelper.getRequestList().then(resp => {
      // resp = {
      //   data: {
      //     status: true
      //   }
      // }
      if(resp?.data?.status) {
        generateDownloadUrl(resp.data.content || []);

        setPastReportLoadingStatus(false);
        setIsErrorOccured(false);
      } else {
        setPastReportLoadingStatus(false);
        setIsErrorOccured(true);
      }
    }).catch(err => {
      setPastReportLoadingStatus(false);
      setIsErrorOccured(true);
    })
  }

  const generateDownloadUrl = useCallback((applications) => {
    applications.forEach((obj) => {
      if(obj?.photo) {
        const byteCharacters = atob(obj.photo);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
          byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        const blob = new Blob([byteArray], { type: 'application/octet-stream' });
        const url = URL.createObjectURL(blob);
        obj.photoUrl = url;
      }

      if(obj?.aadharDetail.proof) {
        const byteCharacters = atob(obj.aadharDetail.proof);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
          byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        const blob = new Blob([byteArray], { type: 'application/octet-stream' });
        const url = URL.createObjectURL(blob);
        obj.aadharCopyUrl = url;
      }

      if(obj?.panDetail.proof) {
        const byteCharacters = atob(obj.panDetail.proof);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
          byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        const blob = new Blob([byteArray], { type: 'application/octet-stream' });
        const url = URL.createObjectURL(blob);
        obj.panCopyUrl = url;
      }

      if(obj?.ibankDetail?.passBook) {
        const byteCharacters = atob(obj.bankDetail.proof);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
          byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        const blob = new Blob([byteArray], { type: 'application/octet-stream' });
        const url = URL.createObjectURL(blob);
        obj.passBookUrl = url;
      }

      if(obj?.uploadDocumentCopy) {
        const byteCharacters = atob(obj.uploadDocumentCopy);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
          byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        const blob = new Blob([byteArray], { type: 'application/octet-stream' });
        const url = URL.createObjectURL(blob);
        obj.documentCopyUrl = url;
      }
      setList(applications);
    });
  }, []);

  function changeState(index, isOpened) {
    const newList = list.map((item, i) => (
      i === index ? { ...item, isOpened: !isOpened } : { ...item, isOpened: false }
    ));
    setList(newList);
  }

  function approveUser(val, isApproved = true) {
    val.isApproved = isApproved;
    _apiHelper.approveUser(val).then(resp => {
      if(resp?.data?.status) {
        getRequestList();
      }
    })
  }

  useEffect(() => {
    getRequestList();
    // eslint-disable-next-line 
  }, []);
  return (
    <div className="w-full">
      {
        isPastReportLoading ? <div className="h-80 bg-neutral-7 w-full flex justify-center items-center">Loading...</div> :
        isErrorOccured ? <ErrorPageComponent />  :
        <div className="w-full flex flex-col gap-3">
          {
            list.map((val, index) => (
              <div className="mx-3 highlight-box">
                <div className="flex flex-wrap justify-between items-center w-full p-3 border-b-2 border-s-box-shadow">
                  <div className="text-base font-medium">
                    <span className="text-xl font-bold">{APPROVE_OR_REJECT_LICENSE.APPLIED_FOR}:</span> {val.role}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <button className="primary success" onClick={() => approveUser(val, true)}>{APPROVE_OR_REJECT_LICENSE.APPROVE}</button>
                    <button className="primary danger" onClick={() => approveUser(val, false)}>{APPROVE_OR_REJECT_LICENSE.REJECT}</button>
                    {
                      !val.isOpened ? 
                        <button className="secondary" onClick={() => changeState(index, val.isOpened)}>{APPROVE_OR_REJECT_LICENSE.VIEW_DETAIL}</button> :
                        <button className="secondary" onClick={() => changeState(index, val.isOpened)}>{APPROVE_OR_REJECT_LICENSE.CLOSE_DETAIL}</button>
                    }
                  </div>
                </div>
                <div className="flex flex-wrap gap-3 pt-3">
                  <div className="text-sm font-normal">
                    <span className="text-base font-medium">{APPROVE_OR_REJECT_LICENSE.APPLIED_BY}:</span> {val.refredEmpName} ({val.referedEmpCode})
                  </div>
                  <div className="text-sm font-normal">
                    <span className="text-base font-medium">{APPROVE_OR_REJECT_LICENSE.REFERAL_PERSON_REGION}:</span> {val.zone} {val.region ? val.region : ''} {val.area ? val.area : ''}
                  </div>
                </div>
                {
                  val.isOpened && (
                  <div className="toggle-content">
                    <div className="mt-3">
                      <span className="text-xl font-medium">Download and verify documents.</span>
                      <div className="flex flex-wrap gap-3">
                        {
                          val.photoUrl && (
                          <a
                            className="flex items-center text-blue-4 cursor-pointer"
                            href={val.photoUrl} download={val.firstName + '-photo'}
                          >{val.firstName} Photo</a>)
                        }
                        {
                          val.aadharCopyUrl && (
                          <a
                            className="flex items-center text-blue-4 cursor-pointer"
                            href={val.aadharCopyUrl} download={val.firstName + '-aadhar'}
                          >{val.firstName} Aadhar</a>)
                        }
                        {
                          val.panCopyUrl && (
                          <a
                            className="flex items-center text-blue-4 cursor-pointer"
                            href={val.panCopyUrl} download={val.firstName + '-pan'}
                          >{val.firstName} Pan</a>)
                        }
                        {
                          val.passBookUrl && (
                          <a
                            className="flex items-center text-blue-4 cursor-pointer"
                            href={val.passBookUrl} download={val.firstName + '-passbook'}
                          >{val.firstName} Passbook</a>)
                        }
                        {
                          val.documentCopyUrl && (
                          <a
                            className="flex items-center text-blue-4 cursor-pointer"
                            href={val.documentCopyUrl} download={val.firstName + '-refered-person-sign'}
                          >Referal Person Sign</a>)
                        }
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 text-base font-normal">
                      <span className="text-xl font-bold mt-4">Applicant Deatils:</span>
                      <div className="flex flex-wrap gap-2">
                        <div>
                          <span className="text-base font-bold">Name:</span> {val.firstName}<span className="bold">,</span>
                        </div>
                        <div>
                          <span className="text-base font-bold">Mobile No:</span> {val.mobileNo}<span className="bold">,</span>
                        </div>
                        <div>
                          <span className="text-base font-bold">Email Id:</span> {val.emailId}
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <div>
                          <span className="text-base font-bold">Current Address:</span>
                            {val.currentAddress.address + ' ' + val.currentAddress.district + ' ' + val.currentAddress.state}
                        </div>
                      </div>
                      {/* <div className="flex flex-wrap gap-2">
                        <div>
                          <span className="text-base font-bold">Permenent Address:</span>
                            {val.address.permenent.permenentAddress + ' ' + val.address.permenent.district + ' ' + val.address.permenent.pinCode}
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        <div>
                          <span className="text-base font-bold">Name As Per Aadhar:</span> {val.identityInfo.aadharInfo.name}<span className="bold">,</span>
                        </div>
                        <div>
                          <span className="text-base font-bold">Aadhar No:</span> {val.identityInfo.aadharInfo.aadharNo}
                        </div>
                      </div>
    
                      <div className="flex flex-wrap gap-2">
                        <div>
                          <span className="text-base font-bold">Name As Per Pan:</span> {val.identityInfo.panInfo.name}<span className="bold">,</span>
                        </div>
                        <div>
                          <span className="text-base font-bold">Pan No:</span> {val.identityInfo.panInfo.panNo}
                        </div>
                      </div>
    
                      <div className="flex flex-wrap gap-2">
                        <div>
                          <span className="text-base font-bold">Name As Per Bank Account:</span> {val.identityInfo.bankInfo.name}<span className="bold">,</span>
                        </div>
                        <div>
                          <span className="text-base font-bold">Bank Name:</span> {val.identityInfo.bankInfo.bankName}<span className="bold">,</span>
                        </div>
                        <div>
                          <span className="text-base font-bold">Branch Name:</span> {val.identityInfo.bankInfo.branchName}<span className="bold">,</span>
                        </div>
                        <div>
                          <span className="text-base font-bold">Account No:</span> {val.identityInfo.bankInfo.accountNo}<span className="bold">,</span>
                        </div>
                        <div>
                          <span className="text-base font-bold">IFSC Code:</span> {val.identityInfo.bankInfo.ifscCode}
                        </div>
                      </div> */}
                    </div>
                  </div>
                )}
              </div>
            ))
          }
        </div>
      }
    </div>
  )
}

export default ApproveOrRejectLicenseComponent;
