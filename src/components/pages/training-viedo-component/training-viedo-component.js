import axios from "axios";
import { useEffect, useState } from "react";
import YouTube from "react-youtube";
import { APP } from "../../../services/utilities/APP.constant";

function TrainingViedoComponent() {

  const [trainingSessions, setTrainingSessions] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  

  function getMyTrainingSessions() {
    setIsLoading(true);
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const fakeReportData = ['PhxfspwMdww', '7YpB7suzrto'];
        setTrainingSessions(fakeReportData);
        setIsLoading(false);
      });
  }

  useEffect(() => {
    setTimeout(() => {
      getMyTrainingSessions();
    }, 1000)
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-medium mb-3">{APP.TRAINING_VIEDO_TITLE}</h2>
      {
        !isLoading ? <div className="flex flex-col gap-3">
          {
            trainingSessions.map(viedo => (
              <YouTube videoId={viedo}/>
            ))
          }
        </div> : <div className="h-80 bg-neutral-7 flex justify-center items-center">Loading...</div>
      }
      
    </div>
  ) 
}
  
export default TrainingViedoComponent;
