// ChartFilters.js
import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./ChartFilters.module.css";

const ChartFilters = ({ onFilterChange, onChartTypeChange }) => {
  const [selectedTimeFilter, setSelectedTimeFilter] = useState("1J"); // Standaard tijdsfilter
  const [selectedChartType, setSelectedChartType] = useState("Line"); // Standaard grafiektype

  const timeFilters = [
    { label: "1D", value: "1D" },
    { label: "7D", value: "7D" },
    { label: "1M", value: "1M" },
    { label: "6M", value: "6M" },
    { label: "1J", value: "1J" },
    { label: "Alles", value: "All" },
  ];

  const chartTypes = [
    { label: "Lijndiagram", value: "Line" },
    { label: "Kaarsgrafiek", value: "Candlestick" },
    { label: "Staafdiagram", value: "Bar" },
  ];

  const handleTimeFilterClick = (filter) => {
    setSelectedTimeFilter(filter.value);
    if (onFilterChange) {
      onFilterChange(filter.value);
    }
  };

  const handleChartTypeClick = (type) => {
    setSelectedChartType(type.value);
    if (onChartTypeChange) {
      onChartTypeChange(type.value);
    }
  };

  return (
    <div className={styles.filterContainer}>
      {/* Tijdsfilters */}
      <div className={styles.filterGroup}>
        {timeFilters.map((filter, index) => (
          <button
            key={`time-${index}`}
            className={`${styles.filterButton} ${
              selectedTimeFilter === filter.value ? styles.active : ""
            }`}
            onClick={() => handleTimeFilterClick(filter)}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Grafiektypefilters */}
      <div className={styles.chartTypeGroup}>
        {chartTypes.map((type, index) => (
          <button
            key={`chart-${index}`}
            className={`${styles.filterButton} ${
              selectedChartType === type.value ? styles.active : ""
            }`}
            onClick={() => handleChartTypeClick(type)}
          >
            {type.label}
          </button>
        ))}
      </div>
    </div>
  );
};

ChartFilters.propTypes = {
  onFilterChange: PropTypes.func.isRequired, // Callback voor tijdsfilter
  onChartTypeChange: PropTypes.func.isRequired, // Callback voor grafiektype
};

export default ChartFilters;
