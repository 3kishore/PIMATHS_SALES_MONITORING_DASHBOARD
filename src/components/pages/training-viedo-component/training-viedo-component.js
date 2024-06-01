import { useEffect, useState } from "react";
import YouTube from "react-youtube";
import { ApiServiceHelper } from "../../../services/api/api.service";
import { APP } from "../../../services/utilities/APP.constant";
import ErrorPageComponent from "../error-page/error-page.component";

function TrainingViedoComponent() {

  const [trainingSessions, setTrainingSessions] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  
  const [isErrorOccured, setIsErrorOccured] = useState(false);

  const _apiHelper = new ApiServiceHelper();  

  function getMyTrainingSessions() {
    _apiHelper.getMyTrainingSession().then(resp => {
      // resp = {
      //   data: {
      //     status: true,
      //     message: 'Success',
      //     content: ['PhxfspwMdww', '7YpB7suzrto']
      //   }
      // }
      if(resp?.data?.status) {
        setTrainingSessions(resp?.data?.content || []);
        setIsLoading(false);
        setIsErrorOccured(false);
      } else {
        setIsLoading(false);
        setIsErrorOccured(true);
      }
    }).catch(err => {
      setIsLoading(false);
      setIsErrorOccured(true);
    })
  }

  useEffect(() => {
    setTimeout(() => {
      getMyTrainingSessions();
    }, 1000)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-full m-5">
      <h2 className="text-2xl font-medium mb-3">{APP.TRAINING_VIEDO_TITLE}</h2>
      {
        !isLoading ?
          !isErrorOccured ?
            <div className="flex flex-col gap-3">
              {
                trainingSessions.length ? 
                trainingSessions.map(viedo => (
                  <YouTube videoId={viedo}/>
                )) : <div className="text-xl font-bold">No Training Session Available.</div>
              }
            </div> : <ErrorPageComponent />
          : <div className="h-80 bg-neutral-7 flex justify-center items-center">Loading...</div>
      }
      
    </div>
  ) 
}
  
export default TrainingViedoComponent;
