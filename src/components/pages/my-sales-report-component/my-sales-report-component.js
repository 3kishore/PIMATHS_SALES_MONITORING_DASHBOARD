import React, { useEffect, useState } from 'react';
import { Chart } from "react-google-charts";
import { ApiServiceHelper } from '../../../services/api/api.service';
import { EnvironmentHelperService } from '../../../services/helper-service/environment-helper.service';
import ErrorPageComponent from '../error-page/error-page.component';

function MySalesReportComponent() {
  const [selectedDate, setSelectedDate] = useState('');
  const [pastReport, setPastReport] = useState({});
  const [isErrorOccured, setIsErrorOccured] = useState(false);
  const [isPastReportLoading, setPastReportLoadingStatus] = useState(true);
  const _apiHelper = new ApiServiceHelper();
  const _environmentHelperService = new EnvironmentHelperService();

  const getPreviousDayDate = () => {
    const today = new Date();
    const previousDay = new Date(today);
    previousDay.setDate(today.getDate() - 1);
    return previousDay.toISOString().split('T')[0];
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  function getMySalesReport() {
    setPastReportLoadingStatus(true);
    const getDate = selectedDate || getPreviousDayDate();
    const dateArr = getDate.split('-');
    const date = dateArr[2];
    const monthArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const monthNo = parseInt(dateArr[1]);
    const month = monthArr[monthNo - 1];
    const year = dateArr[0];
    const payload = {
      empCode: _environmentHelperService.getEmpCode(),
      date: `${date}-${month}-${year}`
    }
    _apiHelper.getMyDayWiseSalesReport(payload).then(resp => {
      resp = {
        data: {
          status: true,
          message: 'Success',
          content: {
            points: 4800,
            soldTo: [
              {
                orderNo: '10145r',
                orderStatus: 'completed',
                orederDate: '18-may-2021',
                firstName: 'John',
                lastName: 'joe',
                address: 'dvfdv',
                city: 'new york',
                postalCode: '600039',
                emailId: 'john@gamil.com',
                phNo: '8190765432',
                orderTotal: '300',
                discountAmount: '200',
                netAmount: '3243',
                points: '700',
                courseName: '12th',
                empCode: 'emp-code-1'
              },
              {
                orderNo: '10145r',
                orderStatus: 'completed',
                orederDate: '18-may-2021',
                firstName: 'John',
                lastName: 'joe',
                address: 'dvfdv',
                city: 'new york',
                postalCode: '600039',
                emailId: 'john@gamil.com',
                phNo: '8190765432',
                orderTotal: '300',
                discountAmount: '200',
                netAmount: '3243',
                points: '700',
                courseName: '12th',
                empCode: 'emp-code-1'
              }
            ]
          }
        }
      }
      if(resp?.data?.status) {
        setPastReport(resp.data.content);
        setPastReportLoadingStatus(false);
        setIsErrorOccured(false);
      } else {
        setPastReportLoadingStatus(false);
        setIsErrorOccured(true);
      }
    }).catch(err => {
      setPastReportLoadingStatus(false);
      setIsErrorOccured(true);
    })
  }

  useEffect(() => {
    setSelectedDate(getPreviousDayDate());
    setTimeout(() => {
      getMySalesReport();
    }, 500)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold text-center mb-6">Sales Dashboard</h1>
      <SalesReportChart />
      <div className="flex justify-center items-center gap-2 mb-4 mt-4">
        <label htmlFor="datePicker" className="mr-2">Select Date:</label>
        <input
          type="date"
          id="datePicker"
          value={selectedDate}
          onChange={handleDateChange}
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
        <button onClick={getMySalesReport} className="secondary focus:outline-none">Fetch Report</button>
      </div>
      <div>
        {pastReport ? (
          <div className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-4">Sales Report</h2>
            {isPastReportLoading ? <div>Loading</div> : (
              isErrorOccured ? <ErrorPageComponent /> :
              <div>
                <div>Points Earned: {pastReport.points}</div>
                <MySalesReport salesList={pastReport.soldTo} />
              </div>
            )}
          </div>
        ) : <div></div>}
      </div>
    </div>
  );
}

function SalesReportChart() {
  const [isLoading, setLoadingStatus] = useState(true);
  const [chartData, setChartDate] = useState([]);
  const [isErrorOccured, setIsErrorOccured] = useState(false);

  const _apiHelper = new ApiServiceHelper();
  const _environmentHelperService = new EnvironmentHelperService();

  const options = {
    title: "My last 7 days performance",
    curveType: "function",
    legend: { position: "bottom" },
  };

  useEffect(() => {
    const payload = {
      empCode: _environmentHelperService.getEmpCode()
    }
    _apiHelper.getMySalesSummary(payload).then(resp => {
      resp = {
        data: {
          status: true,
          message: 'Success',
          content: [
            {
              date: '2024-04-26', point: 1000
            },
            {
              date: '2024-04-27', point: 2000
            },
            {
              date: '2024-04-28', point: 2300
            },
            {
              date: '2024-04-29', point: 800
            },
            {
              date: '2024-04-30', point: 900
            },
            {
              date: '2024-04-31', point: 9000
            },
            {
              date: '2024-05-01', point: 10000
            },
            {
              date: '2024-05-02', point: 15000
            }
          ]
        }
      }
      if(resp?.data?.status) {
        let chartData = [
          ["Date", "Sales"],
          ...resp?.data?.content?.map(val => [val.date, val.point])
        ]
        setChartDate(resp?.data?.content?.length ? chartData :  []);
        setLoadingStatus(false);
        setIsErrorOccured(false);
      } else {
        setLoadingStatus(false);
        setIsErrorOccured(true);
      }
    }).catch(err => {
      setLoadingStatus(false);
      setIsErrorOccured(true);
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {isLoading ? <div>Loading...</div> : (
        isErrorOccured ? <ErrorPageComponent />  :
        <div>
          {
            chartData.length ?
              <Chart
                chartType="LineChart"
                width="100%"
                height="400px"
                data={chartData}
                options={options}
              /> :
              <div className='text-2xl font-bold mt-5'></div>
          }
          
        </div>
      )}
    </div>
  );
}

function MySalesReport({ salesList }) {
  return (
    <div className="w-full grid-ui mt-4">
      <div className="overflow-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b-[2px] border-neutral-8">
              <th className="first:sticky first:left-[0px] first:bg-white">
                <div className="min-h-[40px] min-w-[50px] flex flex-row justify-between py-[12px] pl-[12px]">
                  <div className="border-r-[1px] border-neutral-8 w-full flex flex-row justify-between h-[16px] pr-[12px]">
                    <div className="flex flex-row gap-[12px]">
                      <span className="text-xs text-neutral-2 font-medium">S.No</span>
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
                      <span className="text-xs text-neutral-2 font-medium">Course</span>
                    </div>
                  </div>
                </div>
              </th>
              <th className="first:sticky first:left-[0px] first:bg-white">
                <div className="min-h-[40px] min-w-[200px] flex flex-row justify-between py-[12px] pl-[12px]">
                  <div className="border-r-[1px] border-neutral-8 w-full flex flex-row justify-between h-[16px] pr-[12px]">
                    <div className="flex flex-row gap-[12px]">
                      <span className="text-xs text-neutral-2 font-medium">Order Status</span>
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
              salesList?.length ?
              salesList.map((salesData, index) => (
                <tr className="bg-neutral-9 subHeader" key={'sales-detail-' + index}>
                  <td className="first:bg-neutral-9 first:sticky first:left-[0px]">
                    <div className="h-[40px] min-w-[50px] flex flex-row px-[12px] py-[9px]">
                      <span className="text-base-4 leading-[1.71] text-neutral-1 text-left">{index + 1}</span>
                    </div>
                  </td>
                  <td className="first:bg-neutral-9 first:sticky first:left-[0px]">
                    <div className="h-[40px] min-w-[200px] flex flex-row px-[12px] py-[9px]">
                      <span className="text-base-4 leading-[1.71] text-neutral-1 text-left">{salesData.firstName}</span>
                    </div>
                  </td>
                  <td className="first:bg-neutral-9 first:sticky first:left-[0px]">
                    <div className="h-[40px] min-w-[200px] flex flex-row px-[12px] py-[9px]">
                      <span className="text-base-4 leading-[1.71] text-neutral-1 text-left">{salesData.courseName}</span>
                    </div>
                  </td>
                  <td className="first:bg-neutral-9 first:sticky first:left-[0px]">
                    <div className="h-[40px] min-w-[200px] flex flex-row px-[12px] py-[9px]">
                      <span className="text-base-4 leading-[1.71] text-neutral-1 text-left">{salesData.orderStatus}</span>
                    </div>
                  </td>
                  <td className="first:bg-neutral-9 first:sticky first:left-[0px]">
                    <div className="h-[40px] min-w-[200px] flex flex-row px-[12px] py-[9px]">
                      <span className="text-base-4 leading-[1.71] text-neutral-1 text-left">{salesData.points}</span>
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
  );
}

export default MySalesReportComponent;