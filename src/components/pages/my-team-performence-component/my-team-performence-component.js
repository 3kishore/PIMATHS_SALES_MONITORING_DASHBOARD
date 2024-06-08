import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import { useNavigate } from "react-router-dom";
import { ApiServiceHelper } from "../../../services/api/api.service";
import { EnvironmentHelperService } from "../../../services/helper-service/environment-helper.service";
import { VIEW_ONLY_SINGLE_LEVEL } from "../../../services/utilities/APP.constant";
import ErrorPageComponent from "../error-page/error-page.component";

function MyTeamPerformenceComponent() {

  const [report, setReport] = useState([]);
  const [chartData, setChartData] = useState([["person", "points"]]);
  const [isLoading, setIsLoading] = useState(true);
  const [isErrorOccured, setIsErrorOccured] = useState(false);
  const _apiHelper = new ApiServiceHelper();
  const _environmentHelperService = new EnvironmentHelperService();
  
  function getMyTeamReport() {
    setIsLoading(true);
    const payload = {empCode: _environmentHelperService.getEmpCode()}
    _apiHelper.getMyDirectTeam(payload).then(resp => {
      // resp = {
      //   data: {
      //     status: true,
      //     message: 'Success',
      //     content: [
      //       { empCode: 'cm-e-sh-1', name: 'John', region: 'Chennai', phNo: '9087654321', points: 800 },
      //       { empCode: 'cm-e-sh-1', name: 'Mike', region: 'Madurai', phNo: '9087654321', points: 800 },
      //       { empCode: 'cm-e-sh-1', name: 'Luna', region: 'Trichi', phNo: '9087654321', points: 800 },
      //       { empCode: 'cm-e-sh-1', name: 'Tena', region: 'Coimbatore', phNo: '9087654321', points: 800 },
      //       { empCode: 'cm-e-sh-1', name: 'Joe', region: 'Tuty', phNo: '9087654321', points: 800 },
      //       { empCode: 'cm-e-sh-1', name: 'Andres', region: 'Dindukal', phNo: '9087654321', points: 800 }
      //     ]
      //   }      
      // }
      if(resp?.data?.status) {
        let chart = [
          ["person", "points"],
          ...resp?.data?.content?.map((sales) => [sales.name, sales.points]) || []
        ]
        setChartData(chart);
        setReport(resp?.data?.content || []);
        setIsLoading(false);
        setIsErrorOccured(false);
      } else {
        setIsLoading(false);
        setIsErrorOccured(true);
      }
    }).catch(err => {
      setIsLoading(false);
      setIsErrorOccured(true);
      console.log(err);
    })
  }

  useEffect(() => {
    setTimeout(() => {
      getMyTeamReport();
    }, 1000)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-full">
      {
        !isLoading ? 
        (
          isErrorOccured ? <div className="mt-6"><ErrorPageComponent /> </div>:
          <div>
            <MyTeamReportChart chartData={chartData} />
            <MyTeamReportTable salesManList={report} />
          </div>
        ) :
        <div className="h-80 bg-neutral-7 w-full flex justify-center items-center">Loading...</div>
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

  const [showNavigation, setNavigation] = useState(false);

  const navigate = useNavigate();

  const goToDetails = (id) => {
    // Navigate to the '/other-page' route
    if(!VIEW_ONLY_SINGLE_LEVEL.includes('channel-head-h')) {
      navigate(`/home/my-team-performence/${id}`);
    }
  };

  useEffect(() => {
    setNavigation(true);
  }, []);

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
              salesManList?.length ?
              salesManList.map((salesManDetail, index) => (
                <tr className="bg-neutral-9 subHeader" key={'sales-mans-report-' + index}>
                  <td className="first:bg-neutral-9 first:sticky first:left-[0px]">
                    <div className={
                      showNavigation ? 'h-[40px] min-w-[200px] flex flex-row px-[12px] text-blue-4 py-[9px] cursor-pointer':
                      'h-[40px] min-w-[200px] flex flex-row px-[12px] text-neutral-1'}
                      onClick={() => goToDetails(salesManDetail.name)}
                    >
                      <span className="text-base-4 leading-[1.71] text-left">{salesManDetail.empCode}</span>
                    </div>
                  </td>
                  <td className="first:bg-neutral-9 first:sticky first:left-[0px]">
                    <div className={
                      showNavigation ? 'h-[40px] min-w-[200px] flex flex-row px-[12px] text-blue-4 py-[9px] cursor-pointer':
                      'h-[40px] min-w-[200px] flex flex-row px-[12px] text-neutral-1'}
                      onClick={() => goToDetails(salesManDetail.name)}
                    >
                      <span className="text-base-4 leading-[1.71] text-left">{salesManDetail.name}</span>
                    </div>
                  </td>
                  <td className="first:bg-neutral-9 first:sticky first:left-[0px]">
                    <div className="h-[40px] min-w-[200px] flex flex-row px-[12px] py-[9px]">
                      <span className="text-base-4 leading-[1.71] text-neutral-1 text-left">{salesManDetail.region}</span>
                    </div>
                  </td>
                  <td className="first:bg-neutral-9 first:sticky first:left-[0px]">
                    <div className="h-[40px] min-w-[200px] flex flex-row px-[12px] py-[9px]">
                      <span className="text-base-4 leading-[1.71] text-neutral-1 text-left">{salesManDetail.phNo}</span>
                    </div>
                  </td>
                  <td className="first:bg-neutral-9 first:sticky first:left-[0px]">
                    <div className="h-[40px] min-w-[200px] flex flex-row px-[12px] py-[9px]">
                      <span className="text-base-4 leading-[1.71] text-neutral-1 text-left">{salesManDetail.points}</span>
                    </div>
                  </td>
                </tr>
              )) : 
              <tr className="bg-neutral-9 subHeader">
                <td className="first:bg-neutral-9 first:sticky first:left-[0px]" colSpan={5}>
                  <div className="flex justify-center flex-row px-[12px] py-[24px]">
                    <span className="text-2xl font-bold leading-[1.71] text-neutral-1 text-left">No Data Found.</span>
                  </div>
                </td>
              </tr>
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default MyTeamPerformenceComponent;
