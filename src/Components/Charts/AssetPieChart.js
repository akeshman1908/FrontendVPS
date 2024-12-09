import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import styles from "./AssetPieChart.module.css";

ChartJS.register(ArcElement, Tooltip, Legend);

const AssetPieChart = ({ data, filters, userName }) => {
  const chartData = {
    labels: data.map((item) => item.label),
    datasets: [
      {
        data: data.map((item) => item.percentage),
        backgroundColor: data.map((item) => item.color),
        borderWidth: 1,
      },
    ],
  };

  const hour = new Date().getHours();
  let greeting;
  if (hour < 12) {
    greeting = "Goedemorgen";
  } else if (hour < 18) {
    greeting = "Goedemiddag";
  } else {
    greeting = "Goedenavond";
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) =>
            `${tooltipItem.label}: ${tooltipItem.raw.toFixed(2)}%`,
        },
      },
    },
  };

  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <div className={styles.chartContainer}>
          <Pie data={chartData} options={options} />
        </div>

        <div className={styles.rightPanel}>
          <div className={styles.greeting}>
            {greeting} {userName}, welkom op je vermogens dashboard.
          </div>
          <div className={styles.filters}>
            {filters.map((filter, index) => (
              <span key={index} className={styles.filter}>
                {filter}
              </span>
            ))}
          </div>

          <div className={styles.legend}>
            {data.map((item, index) => (
              <div key={index} className={styles.legendItem}>
                <div className={styles.legendDetails}>
                  <span
                    className={styles.legendColorIndicator}
                    style={{ backgroundColor: item.color }}
                  ></span>
                  <span>{item.label}</span>
                </div>
                <span className={styles.percentage}>
                  {item.percentage.toFixed(2)}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssetPieChart;
