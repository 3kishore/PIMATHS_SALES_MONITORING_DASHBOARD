import React, { useState } from 'react';
function MySalesReportComponent() {
  // State to store selected date
  const [selectedDate, setSelectedDate] = useState('');
  // State to store fake report data
  const [reportData, setReportData] = useState(null);

  // Function to handle date change
  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  // Function to fetch fake report data based on selected date
  const fetchReportData = () => {
    // Logic to fetch report data for the selected date
    // For demonstration purposes, we'll generate some fake report data
    const fakeReportData = [
      { product: 'Product A', sales: 100 },
      { product: 'Product B', sales: 150 },
      { product: 'Product C', sales: 80 },
    ];
    setReportData(fakeReportData);
  };

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold text-center mb-6">Sales Dashboard</h1>
      <div className="flex justify-center mb-4">
        <label htmlFor="datePicker" className="mr-2">Select Date:</label>
        <input
          type="date"
          id="datePicker"
          value={selectedDate}
          onChange={handleDateChange}
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
        <button onClick={fetchReportData} className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none">Fetch Report</button>
      </div>
      <div className="max-w-md mx-auto">
        {reportData ? (
          <div className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-4">Sales Report</h2>
            <ul>
              {reportData.map((item, index) => (
                <li key={index} className="flex justify-between">
                  <span>{item.product}</span>
                  <span>{item.sales} units</span>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p className="text-center text-gray-600">No report data available</p>
        )}
      </div>
    </div>
  );
}

export default MySalesReportComponent;
