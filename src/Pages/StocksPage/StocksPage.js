import React, { useState } from "react";
import Navbar from "../../Components/DashboardPage/Navbar";
import Sidebar from "../../Components/DashboardPage/Sidebar";
import AssetLineChart from "../../Components/Charts/AssetLineChart";
import Pagination from "../../Components/Table/Pagination";
import AssetLineTable from "../../Components/Table/AssetLineTable"; 
import styles from "./StocksPage.module.css";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function StocksPage() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedAsset, setSelectedAsset] = useState(null);
  const itemsPerPage = 5;

  // Voorbeeld maandelijkse data
  const assets = [
    {
      label: "Apple",
      color: "#1f77b4",
      values: [
        { month: "Jan", value: 15000 },
        { month: "Feb", value: 15200 },
        { month: "Mar", value: 15500 },
        { month: "Apr", value: 15800 },
        { month: "May", value: 16000 },
        { month: "Jun", value: 16200 },
        { month: "Jul", value: 16500 },
        { month: "Aug", value: 16800 },
        { month: "Sep", value: 17000 },
        { month: "Oct", value: 17200 },
        { month: "Nov", value: 17500 },
        { month: "Dec", value: 17800 },
      ],
    },
    {
      label: "Microsoft",
      color: "#ff7f0e",
      values: [
        { month: "Jan", value: 25000 },
        { month: "Feb", value: 25200 },
        { month: "Mar", value: 25500 },
        { month: "Apr", value: 25800 },
        { month: "May", value: 26000 },
        { month: "Jun", value: 26200 },
        { month: "Jul", value: 26500 },
        { month: "Aug", value: 26800 },
        { month: "Sep", value: 27000 },
        { month: "Oct", value: 27200 },
        { month: "Nov", value: 27500 },
        { month: "Dec", value: 27800 },
      ],
    },
    {
      label: "Amazon",
      color: "#2ca02c",
      values: [
        { month: "Jan", value: 35000 },
        { month: "Feb", value: 35200 },
        { month: "Mar", value: 35500 },
        { month: "Apr", value: 35800 },
        { month: "May", value: 36000 },
        { month: "Jun", value: 36200 },
        { month: "Jul", value: 36500 },
        { month: "Aug", value: 36800 },
        { month: "Sep", value: 37000 },
        { month: "Oct", value: 37200 },
        { month: "Nov", value: 37500 },
        { month: "Dec", value: 37800 },
      ],
    },
    {
      label: "Google",
      color: "#d62728",
      values: [
        { month: "Jan", value: 45000 },
        { month: "Feb", value: 45200 },
        { month: "Mar", value: 45500 },
        { month: "Apr", value: 45800 },
        { month: "May", value: 46000 },
        { month: "Jun", value: 46200 },
        { month: "Jul", value: 46500 },
        { month: "Aug", value: 46800 },
        { month: "Sep", value: 47000 },
        { month: "Oct", value: 47200 },
        { month: "Nov", value: 47500 },
        { month: "Dec", value: 47800 },
      ],
    },
    {
      label: "Tesla",
      color: "#9467bd",
      values: [
        { month: "Jan", value: 55000 },
        { month: "Feb", value: 55200 },
        { month: "Mar", value: 55500 },
        { month: "Apr", value: 55800 },
        { month: "May", value: 56000 },
        { month: "Jun", value: 56200 },
        { month: "Jul", value: 56500 },
        { month: "Aug", value: 56800 },
        { month: "Sep", value: 57000 },
        { month: "Oct", value: 57200 },
        { month: "Nov", value: 57500 },
        { month: "Dec", value: 57800 },
      ],
    },
    {
      label: "Meta",
      color: "#8c564b",
      values: [
        { month: "Jan", value: 65000 },
        { month: "Feb", value: 65200 },
        { month: "Mar", value: 65500 },
        { month: "Apr", value: 65800 },
        { month: "May", value: 66000 },
        { month: "Jun", value: 66200 },
        { month: "Jul", value: 66500 },
        { month: "Aug", value: 66800 },
        { month: "Sep", value: 67000 },
        { month: "Oct", value: 67200 },
        { month: "Nov", value: 67500 },
        { month: "Dec", value: 67800 },
      ],
    },
  ];

  const handleSidebarToggle = (collapsed) => {
    setIsSidebarCollapsed(collapsed);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = assets.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(assets.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const topFiveAssets = assets.slice(0, 5);

  const handleAssetClick = (asset) => {
    setSelectedAsset(asset);
  };

  // Chart Data
  let chartData;
  if (selectedAsset) {
    // Toon enkel het geselecteerde aandeel
    chartData = [
      {
        label: selectedAsset.label,
        color: selectedAsset.color,
        values: selectedAsset.values,
      },
    ];
  } else {
    // Toon gemiddelde van alle aandelen
    const numberOfAssets = assets.length;
    const avgValues = MONTHS.map((m) => {
      const sum = assets.reduce((acc, asset) => {
        const monthVal = asset.values.find((val) => val.month === m)?.value || 0;
        return acc + monthVal;
      }, 0);
      return { month: m, value: sum / numberOfAssets };
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
  const allAverages = assets.map(a => {
    const sum = a.values.reduce((acc, val) => acc + val.value, 0);
    const avg = sum / 12;
    return { asset: a.label, avg, color: a.color, original: a };
  });

  const totalAvgSum = allAverages.reduce((acc, obj) => acc + obj.avg, 0);

  const tableData = allAverages.map(item => {
    const decValue = item.original.values.find(v => v.month === "Dec").value;
    const novValue = item.original.values.find(v => v.month === "Nov").value;
    const change24h = ((decValue - novValue) / novValue) * 100;
    const change1h = change24h / 2;

    return {
      asset: item.asset,
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

  const currentTableItems = tableData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className={styles.stocks}>
      <Navbar />
      <div className={styles.container}>
        <Sidebar onToggle={handleSidebarToggle} />
        <main className={`${styles.content} ${isSidebarCollapsed ? styles.collapsed : ""}`}>
          <AssetLineChart
            data={chartData}
            filters={[]}
            userName="David"
            showAssetsInLegend={topFiveAssets}
          />

          <div className={styles.tableWrapper}>
            <AssetLineTable
              data={currentTableItems}
            />
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </main>
      </div>
    </div>
  );
}

export default StocksPage;
