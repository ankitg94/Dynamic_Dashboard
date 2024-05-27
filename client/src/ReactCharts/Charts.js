import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend,
    Filler,
  } from "chart.js";
  import { Line } from "react-chartjs-2";
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend,
    Filler
  );
  
  export const LineChart = ({ data, label, backgroundColor, borderColor, labels }) => {
    const options = {
      responsive: true,
      plugins: {
        legend: {
          display: false,
        },
        title: {
          display: false,
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          grid: {
            display: false,
          },
        },
        x: {
          grid: {
            display: false,
          },
        },
      },
    };
  
    const chartData = {
      labels,
      datasets: [
        {
          fill: true,
          label,
          data,
          backgroundColor,
          borderColor,
        },
      ],
    };
  
    return <Line options={options} data={chartData} />;
  };
  