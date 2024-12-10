import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  Tooltip,
  Legend,
  PointElement,
  LinearScale,
  CategoryScale,
} from "chart.js";
import styles from "./AssetLineChart.module.css";

ChartJS.register(
  LineElement,
  Tooltip,
  Legend,
  PointElement,
  LinearScale,
  CategoryScale
);

const AssetLineChart = ({ data, timeFrame, userName, showAssetsInLegend }) => {
  if (!data || data.length === 0 || !data[0].values || data[0].values.length === 0) {
    return <div className={styles.noData}>Geen gegevens beschikbaar voor het geselecteerde tijdsbestek.</div>;
  }

  const labels = data[0].values.map((item) => item.month);

  const chartDatasets = data.map((asset) => ({
    label: asset.label || "Onbekend",
    data: asset.values.map((item) => item.value || 0),
    borderColor: asset.color || "#4caf50",
    backgroundColor: "rgba(76, 175, 80, 0.2)",
    fill: true,
    tension: 0.4,
    borderWidth: 2,
    pointRadius: 3,
    pointHoverRadius: 5,
  }));

  const chartData = {
    labels,
    datasets: chartDatasets,
  };

  const hour = new Date().getHours();
  const greeting =
    hour < 12 ? "Goedemorgen" : hour < 18 ? "Goedemiddag" : "Goedenavond";

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, 
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            const value = tooltipItem.raw || 0;
            return `${tooltipItem.dataset.label}: €${value.toFixed(2)}`;
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Maanden",
          color: "#fff",
          font: {
            size: 14,
            weight: "bold",
          },
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
        },
        ticks: {
          color: "#fff",
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Portfolio Waarde (€)",
          color: "#fff",
          font: {
            size: 14,
            weight: "bold",
          },
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
        },
        ticks: {
          color: "#fff",
          callback: (value) => `€${value}`,
        },
      },
    },
  };

  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <div className={styles.chartContainer}>
          <Line data={chartData} options={options} />
        </div>

        <div className={styles.rightPanel}>
          <div className={styles.greeting}>
            {greeting} {userName}, welkom op je vermogens dashboard.
          </div>

          <div className={styles.legend}>
            {showAssetsInLegend.map((asset, index) => {
              const latestMonth = data[0].values[data[0].values.length - 1].month;
              const latestValue = asset.values.find((v) => v.month === latestMonth)?.value || 0;
              return (
                <div key={index} className={styles.legendItem}>
                  <div className={styles.legendDetails}>
                    <span
                      className={styles.legendColorIndicator}
                      style={{ backgroundColor: asset.color || "#ccc" }}
                    ></span>
                    <span>{asset.label || "Onbekend"}</span>
                  </div>
                  <span className={styles.percentage}>
                    €{latestValue.toFixed(2)}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssetLineChart;
