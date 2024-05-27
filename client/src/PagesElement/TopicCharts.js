import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Pie } from 'react-chartjs-2';
import toast, { Toaster } from 'react-hot-toast';
import 'chart.js/auto'; // Ensure all chart types are loaded


const TopicCharts = () => {
  const [topicData, setTopicData] = useState({});

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
        toast.success("Data fetched successfully");
      } catch (error) {
        toast.error('Error fetching data');
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const labels = Object.keys(topicData);
  const data = Object.values(topicData);

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
    <div>
      
      <Toaster />
      <main className="chart-container">
        <h1>Topic Occurrences</h1>
        <section>
          <Pie data={chartData} />
        </section>
      </main>
    </div>
  );
};

export default TopicCharts;


