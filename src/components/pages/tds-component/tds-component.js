import axios from "axios";
import { useEffect, useState, useCallback } from "react";
import { APP, BASE_64_FILE } from "../../../services/utilities/APP.constant";

function MyTdsComponent() {
  const [myTdsList, setMyTdsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const downloadMyTds = useCallback((tdsList) => {
    tdsList.forEach((obj) => {
      const byteCharacters = atob(BASE_64_FILE);
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      const blob = new Blob([byteArray], { type: 'application/octet-stream' });
      const url = URL.createObjectURL(blob);
      obj.downloadUrl = url;
    });
  }, []);

  const getMyTdsReport = useCallback(() => {
    setIsLoading(true);
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const fakeReportData = [
          {
            quarter: 'Q1 of 22-23',
            pdfCopy: ''
          },
          {
            quarter: 'Q2 of 22-23',
            pdfCopy: ''
          },
          {
            quarter: 'Q3 of 22-23',
            pdfCopy: ''
          },
          {
            quarter: 'Q4 of 22-23',
            pdfCopy: ''
          },
        ];
        downloadMyTds(fakeReportData);
        setMyTdsList(fakeReportData);
        setIsLoading(false);
      });
  }, [downloadMyTds]);

  useEffect(() => {
    getMyTdsReport();
  }, [getMyTdsReport]);

  return (
    <div>
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
                            <span className="text-xs text-neutral-2 font-medium">Month</span>
                          </div>
                        </div>
                      </div>
                    </th>
                    <th className="first:sticky first:left-[0px] first:bg-white">
                      <div className="min-h-[40px] min-w-[200px] flex flex-row justify-between py-[12px] pl-[12px]">
                        <div className="border-r-[1px] border-neutral-8 w-full flex flex-row justify-between h-[16px] pr-[12px]">
                          <div className="flex flex-row gap-[12px]">
                            <span className="text-xs text-neutral-2 font-medium">Click below buttons to download</span>
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
                        <div className='h-[40px] min-w-[200px] flex flex-row px-[12px] text-neutral-1'>
                          <span className="text-base-4 leading-[1.71] text-left">{tds.quarter}</span>
                        </div>
                      </td>
                      <td className="first:bg-neutral-9 first:sticky first:left-[0px]">
                        <div className='h-[40px] min-w-[200px] flex cursor-pointer flex-row px-[12px] text-neutral-1'>
                          <a className="flex items-center text-blue-4" href={tds.downloadUrl} download={tds.quarter}>Download</a>
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