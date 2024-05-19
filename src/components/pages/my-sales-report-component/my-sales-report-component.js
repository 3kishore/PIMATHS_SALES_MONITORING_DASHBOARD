import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Chart } from "react-google-charts";

function MySalesReportComponent() {
  const [selectedDate, setSelectedDate] = useState('');
  const [pastReport, setPastReport] = useState({});
  const [isPastReportLoading, setPastReportLoadingStatus] = useState(true);

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
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const fakeReportData = {
          points: 5000,
          salesList: [
            { name: 'Kishore', course: '12th', points: '800' },
            { name: 'Marri', course: '11th', points: '700' },
            { name: 'Annable', course: '10th', points: '600' },
            { name: 'Luke', course: '9th', points: '500' }
          ]
        };
        setPastReport(fakeReportData);
        setPastReportLoadingStatus(false);
      });
  }

  useEffect(() => {
    setSelectedDate(getPreviousDayDate());
    getMySalesReport();
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
              <div>
                <div>Points Earned: {pastReport.points}</div>
                <MySalesReport salesList={pastReport.salesList} />
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

  const options = {
    title: "My last 7 days performance",
    curveType: "function",
    legend: { position: "bottom" },
  };

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        setChartDate([
          ["Date", "Sales"],
          ["2024-04-26", 1000],
          ["2024-04-27", 100],
          ["2024-04-28", 500],
          ["2024-04-29", 300],
          ["2024-04-30", 800],
          ["2024-05-01", 700],
          ["2024-05-02", 200],
        ]);
        setLoadingStatus(false);
      });
  }, []);

  return (
    <div>
      {isLoading ? <div>Loading...</div> : (
        <div>
          <Chart
            chartType="LineChart"
            width="100%"
            height="400px"
            data={chartData}
            options={options}
          />
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
                      <span className="text-xs text-neutral-2 font-medium">Points</span>
                    </div>
                  </div>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {salesList.map((salesData, index) => (
              <tr className="bg-neutral-9 subHeader" key={'sales-detail-' + index}>
                <td className="first:bg-neutral-9 first:sticky first:left-[0px]">
                  <div className="h-[40px] min-w-[50px] flex flex-row px-[12px] py-[9px]">
                    <span className="text-base-4 leading-[1.71] text-neutral-1 text-left">{index + 1}</span>
                  </div>
                </td>
                <td className="first:bg-neutral-9 first:sticky first:left-[0px]">
                  <div className="h-[40px] min-w-[200px] flex flex-row px-[12px] py-[9px]">
                    <span className="text-base-4 leading-[1.71] text-neutral-1 text-left">{salesData.name}</span>
                  </div>
                </td>
                <td className="first:bg-neutral-9 first:sticky first:left-[0px]">
                  <div className="h-[40px] min-w-[200px] flex flex-row px-[12px] py-[9px]">
                    <span className="text-base-4 leading-[1.71] text-neutral-1 text-left">{salesData.course}</span>
                  </div>
                </td>
                <td className="first:bg-neutral-9 first:sticky first:left-[0px]">
                  <div className="h-[40px] min-w-[200px] flex flex-row px-[12px] py-[9px]">
                    <span className="text-base-4 leading-[1.71] text-neutral-1 text-left">{salesData.points}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MySalesReportComponent;