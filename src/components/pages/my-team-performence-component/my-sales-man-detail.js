import axios from "axios";
import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import { useNavigate } from "react-router-dom";

function MyTeamPerformenceComponent() {

  const [report, setReport] = useState([]);

  const [chartData, setChartData] = useState([["person", "points"]]);

  const [isLoading, setIsLoading] = useState(true);

  function getMyTeamReport() {
    setIsLoading(true);
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const fakeReportData = {
          salesList: [
            { empCode: 'cm-e-sh-1', name: 'Marri', salesArea: 'Chennai', mobileNo: '9087654321', points: 800 },
            { empCode: 'cm-e-sh-1', name: 'Soori', salesArea: 'Madurai', mobileNo: '9087654321', points: 800 },
            { empCode: 'cm-e-sh-1', name: 'Lary', salesArea: 'Trichi', mobileNo: '9087654321', points: 800 },
            { empCode: 'cm-e-sh-1', name: 'Harry', salesArea: 'Coimbatore', mobileNo: '9087654321', points: 800 },
            { empCode: 'cm-e-sh-1', name: 'Carry', salesArea: 'Tuty', mobileNo: '9087654321', points: 800 },
            { empCode: 'cm-e-sh-1', name: 'Mery', salesArea: 'Dindukal', mobileNo: '9087654321', points: 800 },
          ]
        };
        let chart = [
          ["person", "points"]
        ]
        fakeReportData.salesList.forEach((sales) => chart.push([sales.name, sales.points]));
        setChartData(chart);
        setReport(fakeReportData.salesList);
        setIsLoading(false);
      }
    );
  }

  const navigate = useNavigate();

  function goToDetails() {
    navigate(`/home/my-team-performence`);
  };

  useEffect(() => {
    setTimeout(() => {
      getMyTeamReport();
    }, 1000)
  }, []);

  return (
    <div>
      <div className="w-fit text-sm text-blue-4 cursor-pointer p-2" onClick={() => goToDetails()}>Back</div>
      {
        !isLoading ? <div>
          <MyTeamReportChart chartData={chartData} />
          <MyTeamReportTable salesManList={report} />
        </div> : <div className="h-80 bg-neutral-7 flex justify-center items-center">Loading...</div>
      }
    </div>
  );
}

function MyTeamReportChart({chartData}) {
  const options = {
    title: "My team last 7 days performance",
  };
  return (
    <Chart
      chartType="PieChart"
      data={chartData}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  )
}


function MyTeamReportTable({salesManList}) {

  return (
    <div className="w-full grid-ui">
      <div className="overflow-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b-[2px] border-neutral-8">
              <th className="first:sticky first:left-[0px] first:bg-white"> 
                <div className="min-h-[40px] min-w-[200px] flex flex-row justify-between py-[12px] pl-[12px]">
                  <div className="border-r-[1px] border-neutral-8 w-full flex flex-row justify-between h-[16px] pr-[12px]">
                    <div className="flex flex-row gap-[12px]">
                      <span className="text-xs text-neutral-2 font-medium">Emp code</span>
                    </div>
                  </div>
                </div>
              </th>
              <th className="first:sticky first:left-[0px] first:bg-white"> 
                <div className="min-h-[40px] min-w-[200px] flex flex-row justify-between py-[12px] pl-[12px]">
                  <div className="border-r-[1px] border-neutral-8 w-full flex flex-row justify-between h-[16px] pr-[12px]">
                    <div className="flex flex-row gap-[12px]">
                      <span className="text-xs text-neutral-2 font-medium">Name</span>
                    </div>
                  </div>
                </div>
              </th>
              <th className="first:sticky first:left-[0px] first:bg-white"> 
                <div className="min-h-[40px] min-w-[200px] flex flex-row justify-between py-[12px] pl-[12px]">
                  <div className="border-r-[1px] border-neutral-8 w-full flex flex-row justify-between h-[16px] pr-[12px]">
                    <div className="flex flex-row gap-[12px]">
                      <span className="text-xs text-neutral-2 font-medium">Region</span>
                    </div>
                  </div>
                </div>
              </th>
              <th className="first:sticky first:left-[0px] first:bg-white"> 
                <div className="min-h-[40px] min-w-[200px] flex flex-row justify-between py-[12px] pl-[12px]">
                  <div className="border-r-[1px] border-neutral-8 w-full flex flex-row justify-between h-[16px] pr-[12px]">
                    <div className="flex flex-row gap-[12px]">
                      <span className="text-xs text-neutral-2 font-medium">Ph. No</span>
                    </div>
                  </div>
                </div>
              </th>
              <th className="first:sticky first:left-[0px] first:bg-white"> 
                <div className="min-h-[40px] min-w-[200px] flex flex-row justify-between py-[12px] pl-[12px]">
                  <div className="border-r-[1px] border-neutral-8 w-full flex flex-row justify-between h-[16px] pr-[12px]">
                    <div className="flex flex-row gap-[12px]">
                      <span className="text-xs text-neutral-2 font-medium">Points</span>
                    </div>
                  </div>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {
              salesManList.map((salesManDetail, index) => (
                <tr className="bg-neutral-9 subHeader" key={'sales-mans-report-' + index}>
                  <td className="first:bg-neutral-9 first:sticky first:left-[0px]">
                    <div className="h-[40px] min-w-[200px] flex flex-row px-[12px] text-neutral-1">
                      <span className="text-base-4 leading-[1.71] text-left">{salesManDetail.empCode}</span>
                    </div>
                  </td>
                  <td className="first:bg-neutral-9 first:sticky first:left-[0px]">
                    <div className="h-[40px] min-w-[200px] flex flex-row px-[12px] text-neutral-1">
                      <span className="text-base-4 leading-[1.71] text-left">{salesManDetail.name}</span>
                    </div>
                  </td>
                  <td className="first:bg-neutral-9 first:sticky first:left-[0px]">
                    <div className="h-[40px] min-w-[200px] flex flex-row px-[12px] py-[9px]">
                      <span className="text-base-4 leading-[1.71] text-neutral-1 text-left">{salesManDetail.salesArea}</span>
                    </div>
                  </td>
                  <td className="first:bg-neutral-9 first:sticky first:left-[0px]">
                    <div className="h-[40px] min-w-[200px] flex flex-row px-[12px] py-[9px]">
                      <span className="text-base-4 leading-[1.71] text-neutral-1 text-left">{salesManDetail.mobileNo}</span>
                    </div>
                  </td>
                  <td className="first:bg-neutral-9 first:sticky first:left-[0px]">
                    <div className="h-[40px] min-w-[200px] flex flex-row px-[12px] py-[9px]">
                      <span className="text-base-4 leading-[1.71] text-neutral-1 text-left">{salesManDetail.points}</span>
                    </div>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default MyTeamPerformenceComponent;
