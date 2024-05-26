import { useCallback, useEffect, useState } from "react";
import { APPROVE_OR_REJECT_LICENSE } from "../../../services/models/approve-or-reject-license/approve-or-reject-license.constant";
import { BASE_64_FILE } from "../../../services/utilities/APP.constant";

function ApproveOrRejectLicenseComponent() {
  const [list, setList] = useState(
    [
      {
        // Extra Keys
          referedEmpCode: 'emp-code-096',
          referalPersonJobTitle: 'Sales Head',
          refredEmpName: 'McRoven',
          referedPersonRegion: 'Thiruvallur',
        //
         appliedFor: 'Promoter',
         location: 'Mathur',
         referredBy: '',
         personalInfo: {
          name: 'Steve',
          dob: '17/10/2000',
          gender: 'male',
          age: '23',
          mobileNo: '8190765432',
          emailId: 'steve@gamil.com',
          qualification: 'Bcom',
          occupation: 'IT proffessional',
          photo: BASE_64_FILE //new key
        },
       address: {
         current: {
            currentAddress: 'No 81, 8th street, rasipuram',
             district: 'chennai',
             state: 'Tamil Nadu',
             postOffice: '600039',
             pinCode: '600039',
          },
          isBothSame: 'yes',
          permenent: {
            permenentAddress: 'No 81, 8th street, rasipuram',
            district: 'chennai',
            state: 'Tamil Nadu',
            postOffice: '600039',
            pinCode: '600039',
          }
        },
        identityInfo: {
          aadharInfo: {
            name: 'Steve',
            aadharNo: '908790876754',
            aadharCopy: BASE_64_FILE
          },
          panInfo: {
            name: 'Steve',
            panNo: '67bbj90',
            panCopy: BASE_64_FILE
          },
          bankInfo: {
            name: 'Kishore',
            bankName: 'IOB',
            branchName: 'rasipuram',
            ifscCode: '345609',
            accountNo: '30000089654332',
            accountType: 'savings',
            passBook: BASE_64_FILE, //new key
            cheqLeaf: BASE_64_FILE, // new key
          },
          applicantSign: BASE_64_FILE,
          referalSign: BASE_64_FILE
        },
      },
      {
        // Extra Keys
        referedEmpCode: 'emp-code-096',
        referalPersonJobTitle: 'Sales Head',
        refredEmpName: 'McRoven',
        referedPersonRegion: 'Chennai',
        //
        appliedFor: 'Promoter',
        location: 'Wimco Nagar',
        referredBy: '',
        personalInfo: {
         name: 'Steve',
         dob: '17/10/2000',
         gender: 'male',
         age: '23',
         mobileNo: '8190765432',
         emailId: 'steve@gamil.com',
         qualification: 'Bcom',
         occupation: 'IT proffessional',
         photo: BASE_64_FILE //new key
        },
        address: {
          current: {
            currentAddress: 'No 81, 8th street, rasipuram',
            district: 'chennai',
            state: 'Tamil Nadu',
            postOffice: '600039',
            pinCode: '600039',
          },
          isBothSame: 'yes',
          permenent: {
            permenentAddress: 'No 81, 8th street, rasipuram',
            district: 'chennai',
            state: 'Tamil Nadu',
            postOffice: '600039',
            pinCode: '600039',
          }
        },
        identityInfo: {
          aadharInfo: {
            name: 'Steve',
            aadharNo: '908790876754',
            aadharCopy: BASE_64_FILE
          },
          panInfo: {
            name: 'Steve',
            panNo: '67bbj90',
            panCopy: BASE_64_FILE
          },
          bankInfo: {
            name: 'Kishore',
            bankName: 'IOB',
            branchName: 'rasipuram',
            ifscCode: '345609',
            accountNo: '30000089654332',
            accountType: 'savings',
            passBook: BASE_64_FILE, //new key
            cheqLeaf: BASE_64_FILE, // new key
          },
          applicantSign: BASE_64_FILE,
          referalSign: BASE_64_FILE
        },
     }
    ]  
  )

  const generateDownloadUrl = useCallback((applications) => {
    applications.forEach((obj) => {
      if(obj?.personalInfo?.photo) {
        const byteCharacters = atob(obj.personalInfo.photo);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
          byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        const blob = new Blob([byteArray], { type: 'application/octet-stream' });
        const url = URL.createObjectURL(blob);
        obj.photoUrl = url;
      }

      if(obj?.identityInfo?.aadharInfo?.aadharCopy) {
        const byteCharacters = atob(obj.identityInfo.aadharInfo.aadharCopy);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
          byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        const blob = new Blob([byteArray], { type: 'application/octet-stream' });
        const url = URL.createObjectURL(blob);
        obj.aadharCopyUrl = url;
      }

      if(obj?.identityInfo?.panInfo?.panCopy) {
        const byteCharacters = atob(obj.identityInfo.panInfo.panCopy);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
          byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        const blob = new Blob([byteArray], { type: 'application/octet-stream' });
        const url = URL.createObjectURL(blob);
        obj.panCopyUrl = url;
      }

      if(obj?.identityInfo?.bankInfo?.passBook) {
        const byteCharacters = atob(obj.identityInfo.bankInfo.passBook);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
          byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        const blob = new Blob([byteArray], { type: 'application/octet-stream' });
        const url = URL.createObjectURL(blob);
        obj.passBookUrl = url;
      }

      if(obj?.identityInfo?.bankInfo?.cheqLeaf) {
        const byteCharacters = atob(obj.identityInfo.bankInfo.cheqLeaf);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
          byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        const blob = new Blob([byteArray], { type: 'application/octet-stream' });
        const url = URL.createObjectURL(blob);
        obj.cheqLeafUrl = url;
      }

      if(obj?.identityInfo?.applicantSign) {
        const byteCharacters = atob(obj.identityInfo.applicantSign);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
          byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        const blob = new Blob([byteArray], { type: 'application/octet-stream' });
        const url = URL.createObjectURL(blob);
        obj.applicantSignUrl = url;
      }

      if(obj?.identityInfo?.referalSign) {
        const byteCharacters = atob(obj.identityInfo.referalSign);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
          byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        const blob = new Blob([byteArray], { type: 'application/octet-stream' });
        const url = URL.createObjectURL(blob);
        obj.referalSignUrl = url;
      }
    });
  }, []);

  function changeState(index, isOpened) {
    const newList = list.map((item, i) => (
      i === index ? { ...item, isOpened: !isOpened } : { ...item, isOpened: false }
    ));
    setList(newList);
  }

  useEffect(() => {
    generateDownloadUrl(list);
    // eslint-disable-next-line 
  }, []);
  return (
    // <div onClick={() => changeState(index, val.isOpened)}>Open Value</div>
    <div className="w-full flex flex-col gap-3">
      {
        list.map((val, index) => (
          <div className="mx-3 highlight-box">
            <div className="flex flex-wrap justify-between items-center w-full p-3 border-b-2 border-s-box-shadow">
              <div className="text-base font-medium">
                <span className="text-xl font-bold">{APPROVE_OR_REJECT_LICENSE.APPLIED_FOR}:</span> {val.appliedFor}
              </div>
              <div className="flex flex-wrap gap-2">
                <button className="primary success">{APPROVE_OR_REJECT_LICENSE.APPROVE}</button>
                <button className="primary danger">{APPROVE_OR_REJECT_LICENSE.REJECT}</button>
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
                <span className="text-base font-medium">{APPROVE_OR_REJECT_LICENSE.REFERAL_PERSON_REGION}:</span> {val.referedPersonRegion}
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
                        href={val.photoUrl} download={val.personalInfo.name + '-photo'}
                      >{val.personalInfo.name} Photo</a>)
                    }
                    {
                      val.aadharCopyUrl && (
                      <a
                        className="flex items-center text-blue-4 cursor-pointer"
                        href={val.aadharCopyUrl} download={val.personalInfo.name + '-aadhar'}
                      >{val.personalInfo.name} Aadhar</a>)
                    }
                    {
                      val.panCopyUrl && (
                      <a
                        className="flex items-center text-blue-4 cursor-pointer"
                        href={val.panCopyUrl} download={val.personalInfo.name + '-pan'}
                      >{val.personalInfo.name} Pan</a>)
                    }
                    {
                      val.passBookUrl && (
                      <a
                        className="flex items-center text-blue-4 cursor-pointer"
                        href={val.passBookUrl} download={val.personalInfo.name + '-passbook'}
                      >{val.personalInfo.name} Passbook</a>)
                    }
                    {
                      val.cheqLeafUrl && (
                      <a
                        className="flex items-center text-blue-4 cursor-pointer"
                        href={val.cheqLeafUrl} download={val.personalInfo.name + '-cheq-leaf'}
                      >{val.personalInfo.name} Cheq Leaf</a>)
                    }
                    {
                      val.applicantSignUrl && (
                      <a
                        className="flex items-center text-blue-4 cursor-pointer"
                        href={val.applicantSignUrl} download={val.personalInfo.name + '-applicant-sign'}
                      >{val.personalInfo.name} Signature</a>)
                    }
                    {
                      val.referalSignUrl && (
                      <a
                        className="flex items-center text-blue-4 cursor-pointer"
                        href={val.referalSignUrl} download={val.personalInfo.name + '-refered-person-sign'}
                      >Referal Person Sign</a>)
                    }
                  </div>
                </div>
                <div className="flex flex-col gap-2 text-base font-normal">
                  <span className="text-xl font-bold mt-4">Applicant Deatils:</span>
                  <div className="flex flex-wrap gap-2">
                    <div>
                      <span className="text-base font-bold">Name:</span> {val.personalInfo.name}<span className="bold">,</span>
                    </div>
                    <div>
                      <span className="text-base font-bold">Mobile No:</span> {val.personalInfo.mobileNo}<span className="bold">,</span>
                    </div>
                    <div>
                      <span className="text-base font-bold">Email Id:</span> {val.personalInfo.emailId}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <div>
                      <span className="text-base font-bold">Current Address:</span>
                        {val.address.current.currentAddress + ' ' + val.address.current.district + ' ' + val.address.current.pinCode}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
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
                  </div>
                </div>
              </div>
            )}
          </div>
        ))
      }
    </div>
  )
}

export default ApproveOrRejectLicenseComponent;
