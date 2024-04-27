import { APP } from "../../../services/utilities/APP.constant";
// import { renderToString } from "react-dom/server";

function MyTdsComponent() {
  // renderToString
  return (
    <div>
      <div className="flex flex-wrap gap-3 items-center mb-3">
        <div className="text-2xl font-medium">{APP.TDS_TITLE}</div>
        <button className="secondary w-fit">Download My TDS</button>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-wrap gap-2">
          <div className="text-xl font-medium">Name: </div>
          <div className="text-base">Kishore</div>
        </div>
        <div className="flex flex-wrap gap-2">
          <div className="text-xl font-medium">Salary: </div>
          <div className="text-base">1,00,0000</div>
        </div>
        <div className="flex flex-wrap gap-2">
          <div className="text-xl font-medium">Tax in Perccentage (%): </div>
          <div className="text-base">18%</div>
        </div>
        <div className="flex flex-wrap gap-2">
          <div className="text-xl font-medium">Tax Amount: </div>
          <div className="text-base">18000</div>
        </div>
        <div className="flex flex-wrap gap-2">
          <div className="text-xl font-medium">Payment Datae: </div>
          <div className="text-base">30-Apr-2024</div>
        </div>
      </div>
    </div>
  ) 
}

export default MyTdsComponent;
