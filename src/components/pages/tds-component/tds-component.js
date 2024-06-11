import { useEffect, useState } from "react";
import { ApiServiceHelper } from "../../../services/api/api.service";
import { EnvironmentHelperService } from "../../../services/helper-service/environment-helper.service";
import { APP, SHOW_LABEL_AS_INCENTIVE } from "../../../services/utilities/APP.constant";

function MyTdsComponent() {
  const _environmentHelperService = new EnvironmentHelperService();
  const _apiHelper = new ApiServiceHelper();
  const [myTdsList, setMyTdsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  function getMyTdsReport() {
    setIsLoading(true);
    _apiHelper.getMyPayoutReport().then(resp => {
      if(resp.data.status) {
        setMyTdsList(resp.data.content || []);
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    }).catch(err => {
      setIsLoading(false);
    })
  };

  useEffect(() => {
    getMyTdsReport();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="content-width m-6">
      {!isLoading ? (
        <div>
          <h2 className="text-2xl font-medium mb-2">{APP.DOWNLOAD_MY_TDS}</h2>
          <div className="w-full grid-ui">
            <div className="overflow-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-[2px] border-neutral-8">
                    <th className="first:sticky first:left-[0px] first:bg-white">
                      <div className="min-h-[40px] min-w-[200px] flex flex-row justify-between py-[12px] pl-[12px]">
                        <div className="border-r-[1px] border-neutral-8 w-full flex flex-row justify-between h-[16px] pr-[12px]">
                          <div className="flex flex-row gap-[12px]">
                            <span className="text-xs text-neutral-2 font-medium">Date of payout</span>
                          </div>
                        </div>
                      </div>
                    </th>
                    <th className="first:sticky first:left-[0px] first:bg-white">
                      <div className="min-h-[40px] min-w-[200px] flex flex-row justify-between py-[12px] pl-[12px]">
                        <div className="border-r-[1px] border-neutral-8 w-full flex flex-row justify-between h-[16px] pr-[12px]">
                          <div className="flex flex-row gap-[12px]">
                            <span className="text-xs text-neutral-2 font-medium">
                              {
                                SHOW_LABEL_AS_INCENTIVE.includes(_environmentHelperService.getRole()) ? 'Monthly Fixed Commission' :
                                'Monthly Fixed Incentive'
                              }
                            </span>
                          </div>
                        </div>
                      </div>
                    </th>
                    <th className="first:sticky first:left-[0px] first:bg-white">
                      <div className="min-h-[40px] min-w-[200px] flex flex-row justify-between py-[12px] pl-[12px]">
                        <div className="border-r-[1px] border-neutral-8 w-full flex flex-row justify-between h-[16px] pr-[12px]">
                          <div className="flex flex-row gap-[12px]">
                            <span className="text-xs text-neutral-2 font-medium">
                              {
                                SHOW_LABEL_AS_INCENTIVE.includes(_environmentHelperService.getRole()) ? 'Monthly Special Commission' :
                                'Monthly Special Incentive'
                              }
                            </span>
                          </div>
                        </div>
                      </div>
                    </th>
                    <th className="first:sticky first:left-[0px] first:bg-white">
                      <div className="min-h-[40px] min-w-[200px] flex flex-row justify-between py-[12px] pl-[12px]">
                        <div className="border-r-[1px] border-neutral-8 w-full flex flex-row justify-between h-[16px] pr-[12px]">
                          <div className="flex flex-row gap-[12px]">
                            <span className="text-xs text-neutral-2 font-medium">
                              {
                                SHOW_LABEL_AS_INCENTIVE.includes(_environmentHelperService.getRole()) ? 'Total Commission' :
                                'Total Incentive'
                              }
                            </span>
                          </div>
                        </div>
                      </div>
                    </th>
                    <th className="first:sticky first:left-[0px] first:bg-white">
                      <div className="min-h-[40px] min-w-[200px] flex flex-row justify-between py-[12px] pl-[12px]">
                        <div className="border-r-[1px] border-neutral-8 w-full flex flex-row justify-between h-[16px] pr-[12px]">
                          <div className="flex flex-row gap-[12px]">
                            <span className="text-xs text-neutral-2 font-medium">TDS Amount</span>
                          </div>
                        </div>
                      </div>
                    </th>
                    <th className="first:sticky first:left-[0px] first:bg-white">
                      <div className="min-h-[40px] min-w-[200px] flex flex-row justify-between py-[12px] pl-[12px]">
                        <div className="border-r-[1px] border-neutral-8 w-full flex flex-row justify-between h-[16px] pr-[12px]">
                          <div className="flex flex-row gap-[12px]">
                            <span className="text-xs text-neutral-2 font-medium">Net Payout</span>
                          </div>
                        </div>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {myTdsList.map((tds, index) => (
                    <tr className="bg-neutral-9 subHeader" key={'sales-mans-report-' + index}>
                      <td className="first:bg-neutral-9 first:sticky first:left-[0px]">
                        <div className='h-[40px] min-w-[200px] flex flex-row px-[12px] items-center text-neutral-1'>
                          <span className="text-base-4 leading-[1.71] text-left">{tds.dateOfPayout}</span>
                        </div>
                      </td>
                      <td className="first:bg-neutral-9 first:sticky first:left-[0px]">
                        {/* <div className='h-[40px] min-w-[200px] flex cursor-pointer flex-row px-[12px] text-neutral-1'>
                          <a className="flex items-center text-blue-4" href={tds.downloadUrl} download={tds.quarter}>Download</a>
                        </div> */}
                        <div className='h-[40px] min-w-[200px] flex flex-row px-[12px] items-center text-neutral-1'>
                          <span className="text-base-4 leading-[1.71] text-left">{tds.monthlyFixedCommission}</span>
                        </div>
                      </td>
                      <td className="first:bg-neutral-9 first:sticky first:left-[0px]">
                        <div className='h-[40px] min-w-[200px] flex flex-row px-[12px] items-center text-neutral-1'>
                          <span className="text-base-4 leading-[1.71] text-left">{tds.monthlySpecialCommission}</span>
                        </div>
                      </td>
                      <td className="first:bg-neutral-9 first:sticky first:left-[0px]">
                        <div className='h-[40px] min-w-[200px] flex flex-row px-[12px] items-center text-neutral-1'>
                          <span className="text-base-4 leading-[1.71] text-left">{tds.totalCommission}</span>
                        </div>
                      </td>
                      <td className="first:bg-neutral-9 first:sticky first:left-[0px]">
                        <div className='h-[40px] min-w-[200px] flex flex-row px-[12px] items-center text-neutral-1'>
                          <span className="text-base-4 leading-[1.71] text-left">{tds.tdsAmount}</span>
                        </div>
                      </td>
                      <td className="first:bg-neutral-9 first:sticky first:left-[0px]">
                        <div className='h-[40px] min-w-[200px] flex flex-row px-[12px] items-center text-neutral-1'>
                          <span className="text-base-4 leading-[1.71] text-left">{tds.netPayout}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ) : (
        <div className="h-80 bg-neutral-7 flex justify-center items-center">Loading...</div>
      )}
    </div>
  );
}

export default MyTdsComponent;



// // const [base64, setBase64] = useState('');
// const [fileName, setFileName] = useState('');
// const [downloadUrl, setDownloadUrl] = useState('');

// const handleFileChange = (event) => {
//   const file = event.target.files[0];
//   if (file) {
//     setFileName(file.name);
//     const reader = new FileReader();
//     reader.onloadend = () => {
//       const base64String = reader.result.split(',')[1];
//       // setBase64(base64String);
//       console.log(base64String);
//       createDownloadUrl(base64String)
//     };
//     reader.readAsDataURL(file);
//   }
// };

// const createDownloadUrl = (base64) => {
//   const byteCharacters = atob(base64);
//   const byteNumbers = new Array(byteCharacters.length);
//   for (let i = 0; i < byteCharacters.length; i++) {
//     byteNumbers[i] = byteCharacters.charCodeAt(i);
//   }
//   const byteArray = new Uint8Array(byteNumbers);
//   const blob = new Blob([byteArray], { type: 'application/octet-stream' });
//   const url = URL.createObjectURL(blob);
//   setDownloadUrl(url);
// };


// <div>
//         <input type="file" onChange={handleFileChange} />
//         {downloadUrl && (
//           <a href={downloadUrl} download={fileName}>
//             Download {fileName}
//           </a>
//         )}
//       </div>