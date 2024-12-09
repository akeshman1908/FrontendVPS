import React, { useState } from "react";
import { FaSort, FaSortUp, FaSortDown } from "react-icons/fa"; // Font Awesome icons
import styles from "./AssetPieTable.module.css";

const AssetPieTable = ({ data = [] }) => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  // Sorteer de data op basis van sortConfig
  const sortedData = [...data].sort((a, b) => {
    if (sortConfig.key) {
      const aValue = a[sortConfig.key];
      const bValue = b[sortConfig.key];
      if (typeof aValue === "number") {
        return sortConfig.direction === "asc" ? aValue - bValue : bValue - aValue;
      } else {
        return sortConfig.direction === "asc"
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      }
    }
    return 0;
  });

  // Stel sortConfig in wanneer een kolom wordt geklikt
  const handleSort = (key) => {
    setSortConfig((prev) => ({
      key,
      direction: prev.key === key && prev.direction === "asc" ? "desc" : "asc",
    }));
  };

  // Functie om het juiste icoon te tonen
  const getSortIcon = (key) => {
    if (sortConfig.key === key) {
      return sortConfig.direction === "asc" ? <FaSortUp /> : <FaSortDown />;
    }
    return <FaSort />;
  };

  return (
    <div className={styles.wrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th onClick={() => handleSort("asset")}>
              <div className={styles.thContent}>
                Asset {getSortIcon("asset")}
              </div>
            </th>
            <th onClick={() => handleSort("portfolioWeight")}>
              <div className={styles.thContent}>
                Portefeuille Gewicht (%) {getSortIcon("portfolioWeight")}
              </div>
            </th>
            <th onClick={() => handleSort("totalPercentage")}>
              <div className={styles.thContent}>
                Totaal Percentage (%) {getSortIcon("totalPercentage")}
              </div>
            </th>
            <th onClick={() => handleSort("change24h")}>
              <div className={styles.thContent}>
                24H Verandering (%) {getSortIcon("change24h")}
              </div>
            </th>
            <th onClick={() => handleSort("change1h")}>
              <div className={styles.thContent}>
                1H Verandering (%) {getSortIcon("change1h")}
              </div>
            </th>
            <th>
              <div className={styles.thContent}>Kleur Indicator</div>
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((item, index) => (
            <tr key={index}>
              <td>{item.asset}</td>
              <td>{item.portfolioWeight.toFixed(2)}%</td>
              <td>{item.totalPercentage.toFixed(2)}%</td>
              <td className={item.change24h > 0 ? styles.positive : styles.negative}>
                {item.change24h > 0 ? <FaSortUp /> : <FaSortDown />} {item.change24h}%
              </td>
              <td className={item.change1h > 0 ? styles.positive : styles.negative}>
                {item.change1h > 0 ? <FaSortUp /> : <FaSortDown />} {item.change1h}%
              </td>
              <td>{item.icon}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AssetPieTable;
