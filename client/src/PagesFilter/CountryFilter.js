// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { BarChart } from '../ReactCharts/Barcharts'; // Adjust the import path as needed
// import toast, { Toaster } from 'react-hot-toast';
// import Navbar from "../components/Navbar"
// const CountryFilter = () => {

//   const [countryLabels, setCountryLabels] = useState([]);
//   const [countryCounts, setCountryCounts] = useState([]);
//   const [filter, setFilter] = useState('');

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const userResponse = await axios.get('/api/v1/data/get-country');
//         const countries = userResponse.data.country.filter(Boolean); // Filter out empty strings
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

//   useEffect(() => {
//     // Filter the country data based on the filter input
//     const filteredLabels = countryLabels.filter(label =>
//       label.toLowerCase().includes(filter.toLowerCase())
//     );
//     const filteredCounts = filteredLabels.map(label => countryCounts[countryLabels.indexOf(label)]);

//     setCountryLabels(filteredLabels);
//     setCountryCounts(filteredCounts);
//   }, [filter, countryLabels, countryCounts]);

//   return (
//     <>
//       <div>
//         <Navbar/>
//         <Toaster />
//         <main className="chart-container">
//           <h1>Country Distribution</h1>
//           <input
//             type="text"
//             placeholder="Filter countries..."
//             value={filter}
//             onChange={(e) => setFilter(e.target.value)}
//           />
//           <section>
//             <BarChart
//               data_1={countryCounts}
//               data_2={[]} // No second dataset needed
//               title_1="Country Count"
//               title_2=""
//               bgColor_1="rgba(53, 162, 255, 0.5)"
//               bgColor_2=""
//               labels={countryLabels}
//               horizontal={true} // Adjust as necessary
//             />
//             <h2>Country Occurrences</h2>
//           </section>
//         </main>
//       </div>
//     </>
//   );
// }

// export default CountryFilter;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BarChart } from '../ReactCharts/Barcharts'; // Adjust the import path as needed
import toast, { Toaster } from 'react-hot-toast';
import Navbar from "../components/Navbar"

const CountryFilter = () => {
  const [countryLabels, setCountryLabels] = useState([]);
  const [countryCounts, setCountryCounts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userResponse = await axios.get('/api/v1/data/get-country');
        const countries = userResponse.data.country.filter(Boolean); // Filter out empty strings
        const countryCountMap = countries.reduce((acc, country) => {
          acc[country] = (acc[country] || 0) + 1;
          return acc;
        }, {});

        const labels = Object.keys(countryCountMap);
        const counts = Object.values(countryCountMap);

        setCountryLabels(labels);
        setCountryCounts(counts);

        toast.success("Data fetched successfully");
      } catch (error) {
        toast.error('Error fetching data');
        console.error(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Filter the country data based on the filter input
    const filteredLabels = countryLabels.filter(label =>
      label.toLowerCase().includes(filter.toLowerCase())
    );
    const filteredCounts = filteredLabels.map(label => countryCounts[countryLabels.indexOf(label)]);

    setCountryLabels(filteredLabels);
    setCountryCounts(filteredCounts);
  }, [filter, countryLabels, countryCounts]);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar/>
      <Toaster />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Country Distribution</h1>
        <input
          type="text"
          placeholder="Filter countries..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border border-gray-300 rounded-md px-3 py-2 w-full mb-4"
        />
        <section>
          <BarChart
            data_1={countryCounts}
            data_2={[]} // No second dataset needed
            title_1="Country Count"
            title_2=""
            bgColor_1="rgba(53, 162, 255, 0.5)"
            bgColor_2=""
            labels={countryLabels}
            horizontal={true} // Adjust as necessary
          />
          <h2>Country Occurrences</h2>
        </section>
      </main>
    </div>
  );
}

export default CountryFilter;
