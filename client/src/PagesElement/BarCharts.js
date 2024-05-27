import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { LineChart } from '../ReactCharts/Charts'; // Adjust the import path as needed
import toast, { Toaster } from 'react-hot-toast';

const months = [
  'January', 'February', 'March', 'April', 'May', 'June', 'July', 
  'Aug', 'Sept', 'Oct', 'Nov', 'Dec'
];

const BarCharts = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userResponse = await axios.get('/api/v1/data/get-Likehood');
        setUserData(userResponse.data.LikeHood);
        toast.success("Data fetched successfully");
        console.log(userResponse.data.LikeHood);
      } catch (error) {
        toast.error('Error fetching data');
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Toaster/>
      <main className="chart-container">
        
        <section>
          <LineChart
            data={userData}
            label="Users"
            borderColor="rgb(53, 162, 255)"
            backgroundColor="rgba(53, 162, 255,0.5)"
            labels={months}
          />
          
        </section>
      </main> 
    </div>
  );
};

export default BarCharts;
