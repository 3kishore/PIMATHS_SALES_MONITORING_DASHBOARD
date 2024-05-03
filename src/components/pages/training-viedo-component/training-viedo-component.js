import YouTube from "react-youtube";
import { APP } from "../../../services/utilities/APP.constant";

function TrainingViedoComponent() {
  return (
    <div>
      <h2 className="text-2xl font-medium mb-3">{APP.TRAINING_VIEDO_TITLE}</h2>
      <YouTube videoId="5GSt99nxiJQ"/>
    </div>
  ) 
}
  
export default TrainingViedoComponent;
