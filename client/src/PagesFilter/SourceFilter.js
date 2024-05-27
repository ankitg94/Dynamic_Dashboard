
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { BarChart } from '../ReactCharts/Barcharts'; // Adjust the import path as needed
// import toast, { Toaster } from 'react-hot-toast';
// import Navbar from '../components/Navbar';

// const SourceFilter = () => {
//   const [countryLabels, setCountryLabels] = useState([]);
//   const [countryCounts, setCountryCounts] = useState([]);
//   const [filterText, setFilterText] = useState('');

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const userResponse = await axios.get('/api/v1/data/get-source');
//         const countries = userResponse.data.source.filter(Boolean); // Filter out empty strings
//         const countryCountMap = countries.reduce((acc, country) => {
//           acc[country] = (acc[country] || 0) + 1;
//           return acc;
//         }, {});

//         const labels = Object.keys(countryCountMap);
//         const counts = Object.values(countryCountMap);

//         setCountryLabels(labels);
//         setCountryCounts(counts);

//         toast.success("Data fetched successfully");
//       } catch (error) {
//         toast.error('Error fetching data');
//         console.error(error);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleFilterChange = (event) => {
//     setFilterText(event.target.value);
//   };

//   const filteredLabels = countryLabels.filter((label) =>
//     label.toLowerCase().includes(filterText.toLowerCase())
//   );
//   const filteredCounts = filteredLabels.map((label) => countryCounts[countryLabels.indexOf(label)]);

//   return (
//     <>
//       <div>
//         <Navbar/>
//         <Toaster />
//         <main className="chart-container">
//           <h1>Source Distribution</h1>
//           <section>
//             <input
//               type="text"
//               placeholder="Filter sources..."
//               value={filterText}
//               onChange={handleFilterChange}
//             />
//             <BarChart
//               data_1={filteredCounts}
//               data_2={[]} // No second dataset needed
//               title_1="Country Count"
//               title_2=""
//               bgColor_1="rgba(53, 162, 255, 0.5)"
//               bgColor_2=""
//               labels={filteredLabels}
//               horizontal={true} // Adjust as necessary
//             />
//             <h2>Country Occurrences</h2>
//           </section>
//         </main>
//       </div>
//     </>
//   );
// }

// export default SourceFilter;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import toast, { Toaster } from 'react-hot-toast';
import Navbar from '../components/Navbar';

const SourceFilter = () => {
  const [countryLabels, setCountryLabels] = useState([]);
  const [countryCounts, setCountryCounts] = useState([]);
  const [filterText, setFilterText] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userResponse = await axios.get('/api/v1/data/get-source');
        const countries = userResponse.data.source.filter(Boolean); // Filter out empty strings
        const countryCountMap = countries.reduce((acc, country) => {
          acc[country] = (acc[country] || 0) + 1;
          return acc;
        }, {});

        const labels = Object.keys(countryCountMap);
        const counts = Object.values(countryCountMap);

        setCountryLabels(labels);
        setCountryCounts(counts);

        toast.success('Data fetched successfully');
      } catch (error) {
        toast.error('Error fetching data');
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleFilterChange = (event) => {
    setFilterText(event.target.value);
  };

  const filteredLabels = countryLabels.filter((label) =>
    label.toLowerCase().includes(filterText.toLowerCase())
  );
  const filteredCounts = filteredLabels.map(
    (label) => countryCounts[countryLabels.indexOf(label)]
  );

  const chartData = {
    labels: filteredLabels,
    datasets: [
      {
        label: 'Country Count',
        data: filteredCounts,
        backgroundColor: 'rgba(53, 162, 255, 0.5)',
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Toaster />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Source Distribution</h1>
        <section>
          <input
            type="text"
            placeholder="Filter sources..."
            value={filterText}
            onChange={handleFilterChange}
            className="w-full p-2 mb-4 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
          />
          <div className="w-full">
            <Bar data={chartData} />
          </div>
          
        </section>
      </main>
    </div>
  );
};

export default SourceFilter;
