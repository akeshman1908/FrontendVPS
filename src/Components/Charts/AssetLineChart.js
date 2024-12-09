import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, Tooltip, Legend, PointElement, LinearScale, CategoryScale } from "chart.js";
import styles from "./AssetLineChart.module.css";

// Chart.js registratie
ChartJS.register(LineElement, Tooltip, Legend, PointElement, LinearScale, CategoryScale);

const AssetLineChart = ({ data, filters, userName, showAssetsInLegend }) => {
  // data format:
  // [
  //   {
  //     label: "Gemiddeld" (of asset naam),
  //     color: "#color",
  //     values: [{ month: "Jan", value: number }, { month: "Feb", value: number }, ...]
  //   }
  // ]

  const chartData = {
    labels: data[0].values.map((item) => item.month),
    datasets: [
      {
        label: data[0].label || "Onbekend",
        data: data[0].values.map((item) => item.value || 0),
        borderColor: data[0].color || "#4caf50",
        backgroundColor: "rgba(76, 175, 80, 0.2)",
        fill: true,
        tension: 0.4,
        borderWidth: 2,
      },
    ],
  };

  // Bepaal begroeting op basis van tijd
  const hour = new Date().getHours();
  const greeting =
    hour < 12
      ? "Goedemorgen"
      : hour < 18
      ? "Goedemiddag"
      : "Goedenavond";

  // Grafiekopties
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // Verberg de legenda in de chart zelf
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            const value = tooltipItem.raw || 0;
            return `${tooltipItem.label}: ${value.toFixed(2)}`;
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
          text: "Portfolio Waarde",
          color: "#fff",
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
        },
        ticks: {
          color: "#fff",
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
          <div className={styles.filters}>
            {filters.map((filter, index) => (
              <span key={index} className={styles.filter}>
                {filter}
              </span>
            ))}
          </div>

          <div className={styles.legend}>
            {/* Laat de eerste 5 assets zien in de legend aan de rechterkant */}
            {showAssetsInLegend.map((asset, index) => {
              // Laat bijvoorbeeld de laatste maand (Dec) waarde zien in de legend
              const decValue = asset.values.find((v) => v.month === "Dec")?.value || 0;
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
                    {decValue.toFixed(2)}
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
