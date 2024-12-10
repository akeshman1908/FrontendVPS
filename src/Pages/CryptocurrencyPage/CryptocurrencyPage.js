// CryptocurrencyPage.js
import React, { useState } from "react";
import Navbar from "../../Components/DashboardPage/Navbar";
import Sidebar from "../../Components/DashboardPage/Sidebar";
import AssetLineChart from "../../Components/Charts/AssetLineChart";
import Pagination from "../../Components/Table/Pagination";
import AssetLineTable from "../../Components/Table/AssetLineTable"; 
import styles from "./CryptocurrencyPage.module.css";
import ChartFilters from "../../Components/Charts/ChartFilters"; // Importeer de ChartFilters component

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function CryptocurrencyPage() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCrypto, setSelectedCrypto] = useState(null);
  const itemsPerPage = 5; // Maximaal 5 items per pagina
  const [selectedFilter, setSelectedFilter] = useState("1J"); // Standaard filter


  // Uitgebreide maandelijkse cryptocurrency data
  const cryptocurrencies = [
    {
      label: "Bitcoin",
      color: "#f7931a",
      values: [
        { month: "Jan", value: 30000 },
        { month: "Feb", value: 32000 },
        { month: "Mar", value: 31000 },
        { month: "Apr", value: 33000 },
        { month: "May", value: 35000 },
        { month: "Jun", value: 34000 },
        { month: "Jul", value: 36000 },
        { month: "Aug", value: 37000 },
        { month: "Sep", value: 38000 },
        { month: "Oct", value: 39000 },
        { month: "Nov", value: 40000 },
        { month: "Dec", value: 42000 },
      ],
    },
    {
      label: "Ethereum",
      color: "#3c3c3d",
      values: [
        { month: "Jan", value: 2000 },
        { month: "Feb", value: 2200 },
        { month: "Mar", value: 2100 },
        { month: "Apr", value: 2300 },
        { month: "May", value: 2500 },
        { month: "Jun", value: 2400 },
        { month: "Jul", value: 2600 },
        { month: "Aug", value: 2700 },
        { month: "Sep", value: 2800 },
        { month: "Oct", value: 2900 },
        { month: "Nov", value: 3000 },
        { month: "Dec", value: 3200 },
      ],
    },
    {
      label: "Ripple",
      color: "#346aa9",
      values: [
        { month: "Jan", value: 0.5 },
        { month: "Feb", value: 0.55 },
        { month: "Mar", value: 0.52 },
        { month: "Apr", value: 0.58 },
        { month: "May", value: 0.60 },
        { month: "Jun", value: 0.62 },
        { month: "Jul", value: 0.65 },
        { month: "Aug", value: 0.68 },
        { month: "Sep", value: 0.70 },
        { month: "Oct", value: 0.72 },
        { month: "Nov", value: 0.75 },
        { month: "Dec", value: 0.78 },
      ],
    },
    {
      label: "Litecoin",
      color: "#bebebe",
      values: [
        { month: "Jan", value: 150 },
        { month: "Feb", value: 155 },
        { month: "Mar", value: 152 },
        { month: "Apr", value: 158 },
        { month: "May", value: 160 },
        { month: "Jun", value: 162 },
        { month: "Jul", value: 165 },
        { month: "Aug", value: 168 },
        { month: "Sep", value: 170 },
        { month: "Oct", value: 172 },
        { month: "Nov", value: 175 },
        { month: "Dec", value: 178 },
      ],
    },
    {
      label: "Cardano",
      color: "#0033ad",
      values: [
        { month: "Jan", value: 1.2 },
        { month: "Feb", value: 1.25 },
        { month: "Mar", value: 1.22 },
        { month: "Apr", value: 1.28 },
        { month: "May", value: 1.30 },
        { month: "Jun", value: 1.32 },
        { month: "Jul", value: 1.35 },
        { month: "Aug", value: 1.38 },
        { month: "Sep", value: 1.40 },
        { month: "Oct", value: 1.42 },
        { month: "Nov", value: 1.45 },
        { month: "Dec", value: 1.48 },
      ],
    },
    {
      label: "Binance Coin",
      color: "#f3ba2f",
      values: [
        { month: "Jan", value: 300 },
        { month: "Feb", value: 320 },
        { month: "Mar", value: 310 },
        { month: "Apr", value: 330 },
        { month: "May", value: 350 },
        { month: "Jun", value: 340 },
        { month: "Jul", value: 360 },
        { month: "Aug", value: 370 },
        { month: "Sep", value: 380 },
        { month: "Oct", value: 390 },
        { month: "Nov", value: 400 },
        { month: "Dec", value: 420 },
      ],
    },
    {
      label: "Polkadot",
      color: "#e6007a",
      values: [
        { month: "Jan", value: 35 },
        { month: "Feb", value: 38 },
        { month: "Mar", value: 36 },
        { month: "Apr", value: 40 },
        { month: "May", value: 42 },
        { month: "Jun", value: 44 },
        { month: "Jul", value: 46 },
        { month: "Aug", value: 48 },
        { month: "Sep", value: 50 },
        { month: "Oct", value: 52 },
        { month: "Nov", value: 54 },
        { month: "Dec", value: 56 },
      ],
    },
    {
      label: "Dogecoin",
      color: "#c2a633",
      values: [
        { month: "Jan", value: 0.05 },
        { month: "Feb", value: 0.055 },
        { month: "Mar", value: 0.052 },
        { month: "Apr", value: 0.058 },
        { month: "May", value: 0.060 },
        { month: "Jun", value: 0.062 },
        { month: "Jul", value: 0.065 },
        { month: "Aug", value: 0.068 },
        { month: "Sep", value: 0.070 },
        { month: "Oct", value: 0.072 },
        { month: "Nov", value: 0.075 },
        { month: "Dec", value: 0.078 },
      ],
    },
    // Voeg hier indien nodig meer cryptocurrencies toe
  ];

  const handleSidebarToggle = (collapsed) => {
    setIsSidebarCollapsed(collapsed);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = cryptocurrencies.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(cryptocurrencies.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const topFiveCryptos = cryptocurrencies.slice(0, 5);

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
    setCurrentPage(1); // Reset naar eerste pagina bij filterwijziging
  };

  

  const handleCryptoClick = (crypto) => {
    setSelectedCrypto(crypto);
  };

  // Chart Data
  let chartData;
  if (selectedCrypto) {
    // Toon enkel de geselecteerde cryptocurrency
    chartData = [
      {
        label: selectedCrypto.label,
        color: selectedCrypto.color,
        values: selectedCrypto.values,
      },
    ];
  } else {
    // Toon gemiddelde van alle cryptocurrencies
    const numberOfCryptos = cryptocurrencies.length;
    const avgValues = MONTHS.map((m) => {
      const sum = cryptocurrencies.reduce((acc, crypto) => {
        const monthVal = crypto.values.find((val) => val.month === m)?.value || 0;
        return acc + monthVal;
      }, 0);
      return { month: m, value: sum / numberOfCryptos };
    });

    chartData = [
      {
        label: "Gemiddeld",
        color: "#4caf50",
        values: avgValues,
      },
    ];
  }

  // Tabel Data Berekening (gemiddelden, percentages, changes)
  const allAverages = cryptocurrencies.map(a => {
    const sum = a.values.reduce((acc, val) => acc + val.value, 0);
    const avg = sum / 12;
    return { crypto: a.label, avg, color: a.color, original: a };
  });

  const totalAvgSum = allAverages.reduce((acc, obj) => acc + obj.avg, 0);

  const tableData = allAverages.map(item => {
    const decValue = item.original.values.find(v => v.month === "Dec").value;
    const novValue = item.original.values.find(v => v.month === "Nov").value;
    const change24h = ((decValue - novValue) / novValue) * 100;
    const change1h = change24h / 2;

    return {
      asset: item.crypto, // Wijzig 'crypto' naar 'asset'
      portfolioWeight: item.avg,
      totalPercentage: (item.avg / totalAvgSum) * 100,
      change24h: parseFloat(change24h.toFixed(2)),
      change1h: parseFloat(change1h.toFixed(2)),
      icon: (
        <div
          style={{
            backgroundColor: item.color,
            width: "10px",
            height: "10px",
            borderRadius: "50%",
          }}
        />
      ),
    };
  });

  console.log("Table Data:", tableData); // Debugging

  const currentTableItems = tableData.slice(indexOfFirstItem, indexOfLastItem);
  console.log("Current Table Items:", currentTableItems); // Debugging

  return (
    <div className={styles.cryptocurrency}>
      <Navbar />
      <div className={styles.container}>
        <Sidebar onToggle={handleSidebarToggle} />
        <main className={`${styles.content} ${isSidebarCollapsed ? styles.collapsed : ""}`}>
          <AssetLineChart
            data={chartData}
            filters={[]} // Voeg eventueel filters toe indien nodig
            userName="David"
            showAssetsInLegend={topFiveCryptos}
          />

          <div className={styles.tableWrapper}>
          <ChartFilters onFilterChange={handleFilterChange} />

            <AssetLineTable
              data={currentTableItems}
              onAssetClick={handleCryptoClick} // Optioneel, indien je klikfunctionaliteit wilt toevoegen
            />
            {totalPages > 1 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

export default CryptocurrencyPage;
