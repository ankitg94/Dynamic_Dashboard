
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Pie } from 'react-chartjs-2';
// import toast, { Toaster } from 'react-hot-toast';
// import 'chart.js/auto'; // Ensure all chart types are loaded
// import Navbar from '../components/Navbar';


// const TopicFilter = () => {
//   const [topicData, setTopicData] = useState({});
//   const [filteredTopicData, setFilteredTopicData] = useState({});
//   const [filter, setFilter] = useState('');

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('/api/v1/data/get-topics');
//         const topics = response.data.topic;

//         // Count the occurrences of each topic
//         const topicCounts = topics.reduce((acc, topic) => {
//           if (topic) {
//             acc[topic] = (acc[topic] || 0) + 1;
//           }
//           return acc;
//         }, {});

//         setTopicData(topicCounts);
//         setFilteredTopicData(topicCounts); // Initially, filtered data is the same as the original data
//         toast.success("Data fetched successfully");
//       } catch (error) {
//         toast.error('Error fetching data');
//         console.error(error);
//       }
//     };

//     fetchData();
//   }, []);

//   useEffect(() => {
//     // Filter the topic data based on the filter input
//     if (filter) {
//       const filteredData = Object.keys(topicData).reduce((acc, key) => {
//         if (key.toLowerCase().includes(filter.toLowerCase())) {
//           acc[key] = topicData[key];
//         }
//         return acc;
//       }, {});
//       setFilteredTopicData(filteredData);
//     } else {
//       setFilteredTopicData(topicData);
//     }
//   }, [filter, topicData]);

//   const labels = Object.keys(filteredTopicData); 
//   const data = Object.values(filteredTopicData);

//   const chartData = {
//     labels,
//     datasets: [
//       {
//         label: 'Occurrences',
//         data,
//         backgroundColor: [
//           '#FF6384',
//           '#36A2EB',
//           '#FFCE56',
//           '#4BC0C0',
//           '#9966FF',
//           '#FF9F40',
//           '#FF6384',
//           '#36A2EB',
//           '#FFCE56',
//           '#4BC0C0',
//         ], // You can add more colors or use a dynamic color generation
//         borderColor: 'rgba(255, 255, 255, 1)',
//         borderWidth: 2,
//       },
//     ],
//   };

//   return (
//     <div>
//       <Toaster />
//       <Navbar/>
//       <main className="chart-container">
//         <h1>Sectors</h1>
//         <input
//           type="text"
//           placeholder="Filter topics..."
//           value={filter}
//           onChange={(e) => setFilter(e.target.value)}
//         />
//         <section>
//           <Pie data={chartData} />
//         </section>
//       </main>
//     </div>
//   );
// };

// export default TopicFilter;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Pie } from 'react-chartjs-2';
import toast, { Toaster } from 'react-hot-toast';
import 'chart.js/auto'; // Ensure all chart types are loaded
import Navbar from '../components/Navbar';

const TopicFilter = () => {
  const [topicData, setTopicData] = useState({});
  const [filteredTopicData, setFilteredTopicData] = useState({});
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/v1/data/get-topics');
        const topics = response.data.topic;

        // Count the occurrences of each topic
        const topicCounts = topics.reduce((acc, topic) => {
          if (topic) {
            acc[topic] = (acc[topic] || 0) + 1;
          }
          return acc;
        }, {});

        setTopicData(topicCounts);
        setFilteredTopicData(topicCounts); // Initially, filtered data is the same as the original data
        toast.success("Data fetched successfully");
      } catch (error) {
        toast.error('Error fetching data');
        console.error(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Filter the topic data based on the filter input
    if (filter) {
      const filteredData = Object.keys(topicData).reduce((acc, key) => {
        if (key.toLowerCase().includes(filter.toLowerCase())) {
          acc[key] = topicData[key];
        }
        return acc;
      }, {});
      setFilteredTopicData(filteredData);
    } else {
      setFilteredTopicData(topicData);
    }
  }, [filter, topicData]);

  const labels = Object.keys(filteredTopicData); 
  const data = Object.values(filteredTopicData);

  const chartData = {
    labels,
    datasets: [
      {
        label: 'Occurrences',
        data,
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
          '#FF9F40',
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
        ], // You can add more colors or use a dynamic color generation
        borderColor: 'rgba(255, 255, 255, 1)',
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Toaster />
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Sectors</h1>
        <input
          type="text"
          placeholder="Filter topics..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
        />
        <section className="mt-8">
          <Pie data={chartData} />
        </section>
      </main>
    </div>
  );
};

export default TopicFilter;
