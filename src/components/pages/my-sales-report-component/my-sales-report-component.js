import axios from 'axios';
import React, { useEffect, useState } from 'react';
function MySalesReportComponent() {

  const [selectedDate, setSelectedDate] = useState('');

  const [pastReport, setPastReport] = useState({});

  // const [todaySales, setTodaySales] = useState(null);

  const [isPastReportLoading, setPastReportLoadingStatus] = useState(true);

  // const [isToadyReportLoading, setTodayReportLoadingStatus] = useState(true);

  const getPreviousDayDate = () => {
    const today = new Date();
    const previousDay = new Date(today);
    previousDay.setDate(today.getDate() - 1);
    return previousDay.toISOString().split('T')[0];
  };
  
  // Function to handle date change
  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
    console.log(selectedDate)
  };

  function getMySalesReport() {
    setPastReportLoadingStatus(true);
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const fakeReportData ={ points: 5000 };
        setPastReport(fakeReportData);
        setPastReportLoadingStatus(false);
      })
  }

  useEffect(() => {
    setSelectedDate(getPreviousDayDate());
    getMySalesReport();
  }, []);

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold text-center mb-6">Sales Dashboard</h1>
      <div className="flex justify-center items-center gap-2 mb-4">
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
      <div className="max-w-md mx-auto">
        {pastReport ? (
          <div className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-4">Sales Report</h2>
            {
              isPastReportLoading ? <div>Loading</div>:
              <div>Points Earned: {pastReport.points}</div>
            }
          </div>
        ) : (
          <p className="text-center text-gray-600">No report data available</p>
        )}
      </div>
    </div>
  );
}

export default MySalesReportComponent;
