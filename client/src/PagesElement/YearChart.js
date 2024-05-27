import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import toast, { Toaster } from 'react-hot-toast';
import 'chart.js/auto'; // Ensure all chart types are loaded


const YearChart = () => {
  const [yearData, setYearData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userResponse = await axios.get('/api/v1/data/get-Year');
        const years = userResponse.data.year;
        const yearCounts = years.reduce((acc, year) => {
          if (year) {
            acc[year] = (acc[year] || 0) + 1;
          }
          return acc;
        }, {});

        setYearData(yearCounts);
        toast.success("Data fetched successfully");
        console.log(yearCounts);
      } catch (error) {
        toast.error('Error fetching data');
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const labels = Object.keys(yearData);
  const data = Object.values(yearData);

  const chartData = {
    labels,
    datasets: [
      {
        label: 'Occurrences',
        data,
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        borderColor: 'rgba(53, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      
      <Toaster />
      <main className="chart-container">
        <h1>Year Occurrences</h1>
        <section>
          <Bar data={chartData} options={options} />
        </section>
      </main>
    </div>
  );
};

export default YearChart;
