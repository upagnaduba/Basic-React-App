import React from 'react';

const CompanyGrowth = () => {
  const growthData = [
    { year: 2021, revenue: "$1M", profit: "$200K" },
    { year: 2022, revenue: "$2M", profit: "$500K" },
    { year: 2023, revenue: "$3M", profit: "$1M" },
    // Add more data here
  ];

  return (
    <div>
      <h2>Company Growth</h2>
      <table>
        <thead>
          <tr>
            <th>Year</th>
            <th>Revenue</th>
            <th>Profit</th>
          </tr>
        </thead>
        <tbody>
          {growthData.map((data, index) => (
            <tr key={index}>
              <td>{data.year}</td>
              <td>{data.revenue}</td>
              <td>{data.profit}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CompanyGrowth;
