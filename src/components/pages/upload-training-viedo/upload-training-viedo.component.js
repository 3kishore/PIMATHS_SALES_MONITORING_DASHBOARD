import { useState } from "react";
import { ApiServiceHelper } from "../../../services/api/api.service";
import { APP } from "../../../services/utilities/APP.constant";

function UploadTrainingViedoComponent() {
    const [items, setItems] = useState([]);
    const [isExsist, setIsExist] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [showSuccesPage, setShowSucessPage] = useState(false);
    const [isErrorOccured, setIsErrorOccured] = useState(false);
    const _apiHelper = new ApiServiceHelper();  

    const handleAddItem = () => {
        if (inputValue.trim()) {
            const index = items.findIndex(link => link === inputValue.trim());
            if(index < 0) {
                setItems([...items, inputValue.trim()]);
                setInputValue('');
                setIsExist(false);
            } else {
                setIsExist(true);
                setInputValue('');
            }
        }
    };

    // Handler to delete item
    const handleDeleteItem = (index) => {
        setItems(items.filter((_, i) => i !== index));
    };

    function uploadNewTrainingSessions() {
      _apiHelper.uploadTrainingSessions(items).then(resp => {
        resp = {
          data: {
            status: true
          }
        }
        if(resp?.data?.status) {
          setShowSucessPage(true);
          setIsExist(false);
          setInputValue('');
          setItems([]);
          setIsErrorOccured(false);
        } else {
          setIsErrorOccured(true);
        }
      }).catch(err => {
        setIsErrorOccured(true);
      })
    }

    function goBackToUploadPage() {
      setShowSucessPage(false);
    }
  
    return (
      <div className="w-full m-6">
        {!showSuccesPage ? 
          <div>
            <h2 className="text-2xl font-medium mb-2">{APP.ADD_TRAINING_VIEDO}</h2>
            <h3 className="text-xl font-medium mb-3">{APP.MESSAGE.TRAINING_VIEDO_UPLOAD_INFO}</h3>
            <div className="flex flex-col gap-2">
              <div>
                <input 
                  className="text-input"
                  type="text" 
                  value={inputValue} 
                  onChange={(e) => setInputValue(e.target.value)} 
                  placeholder="Enter your viedo link here."
                />
              </div>
              {isExsist && inputValue?.trim() ? <div className="text-sm text-red">Url already entered.</div> : <span></span>}
              <div>
                <button className="primary" onClick={handleAddItem}>Add link</button>
              </div>
            </div>

            {
              isErrorOccured ?
                <div className="text-base font-medium text-red-dark mt-4 rounded-[4px] bg-red-light p-2">Failed to upload.</div> : <div></div>
            }
            <div className="w-full grid-ui mt-8">
              <div className="overflow-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-[2px] border-neutral-8">
                      <th className="first:sticky first:left-[0px] first:bg-white">
                        <div className="min-h-[40px] min-w-[200px] flex flex-row justify-between py-[12px] pl-[12px]">
                          <div className="border-r-[1px] border-neutral-8 w-full flex flex-row justify-between h-[16px] pr-[12px]">
                            <div className="flex flex-row gap-[12px]">
                              <span className="text-xs text-neutral-2 font-medium">Viedo Link</span>
                            </div>
                          </div>
                        </div>
                      </th>
                      <th className="first:sticky first:left-[0px] first:bg-white">
                        <div className="min-h-[40px] min-w-[200px] flex flex-row justify-between py-[12px] pl-[12px]">
                          <div className="border-r-[1px] border-neutral-8 w-full flex flex-row justify-between h-[16px] pr-[12px]">
                            <div className="flex flex-row gap-[12px]">
                              <span className="text-xs text-neutral-2 font-medium"></span>
                            </div>
                          </div>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.length ? items.map((viedoLink, index) => (
                      <tr className="bg-neutral-9 subHeader" key={'sales-mans-report-' + index}>
                        <td className="first:bg-neutral-9 first:sticky first:left-[0px]">
                          <div className='h-[40px] min-w-[200px] flex flex-row px-[12px] text-neutral-1'>
                            <span className="text-base-4 leading-[1.71] text-left">{viedoLink}</span>
                          </div>
                        </td>
                        <td className="first:bg-neutral-9 first:sticky first:left-[0px]">
                          <div className='h-[40px] min-w-[200px] flex cursor-pointer flex-row px-[12px] text-neutral-1'>
                            <button className="tertiary" onClick={() => handleDeleteItem(index)}>Delete</button>
                          </div>
                        </td>
                      </tr>
                    )) :
                    <tr>
                      <td className="text-center text-xl font-medium pt-11" colSpan={2}>Link Not Added Yet</td>
                    </tr>}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="flex justify-center mt-9">
              <button className="primary" disabled={!items.length} onClick={uploadNewTrainingSessions}>Upload Training Sesssions</button>
            </div>
          </div> :
          <div className="m-3 w-full h-80 flex flex-col bg-green-light justify-center items-center gap-2">
            <div>Uploaded Successfully...</div>
            <button className="tertiary" onClick={goBackToUploadPage}>Back</button>
          </div>
        }
        

      </div>
    )
  }
  
  export default UploadTrainingViedoComponent;
  