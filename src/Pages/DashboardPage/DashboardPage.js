import React, { useState } from "react";
import Navbar from "../../Components/DashboardPage/Navbar";
import Sidebar from "../../Components/DashboardPage/Sidebar";
import AssetPieChart from "../../Components/Charts/AssetPieChart";
import AssetPieTable from "../../Components/Table/AssetPieTable";
import Pagination from "../../Components/Table/Pagination"; // Voeg het paginatiecomponent toe
import styles from "./DashboardPage.module.css";

function DashboardPage() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [currentPage, setCurrentPage] = useState(1); // Huidige pagina
  const itemsPerPage = 5; // Aantal items per pagina

  const chartData = [
    { label: "Aandelen", percentage: 40, color: "#4e79a7" },
    { label: "Cryptovaluta", percentage: 20, color: "#f28e2c" },
    { label: "Valuta", percentage: 10, color: "#e15759" },
    { label: "Edelmetalen", percentage: 15, color: "#76b7b2" },
    { label: "Vastgoed", percentage: 15, color: "#59a14f" },
  ];

  // Filters voor het dashboard
  const filters = ["Categorie", "Regio", "Valuta", "Beurs", "Strategie"];

  const handleSidebarToggle = (collapsed) => {
    setIsSidebarCollapsed(collapsed);
  };

  // Bereken de huidige items op basis van paginering
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = chartData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(chartData.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className={styles.dashboard}>
      <Navbar />
      <div className={styles.container}>
        <Sidebar onToggle={handleSidebarToggle} />
        <main
          className={`${styles.content} ${
            isSidebarCollapsed ? styles.collapsed : ""
          }`}
        >
          {/* Grafiek */}
          <AssetPieChart data={chartData} filters={filters} userName="David" />

          {/* Tabel */}
          <div className={styles.tableWrapper}>
            <AssetPieTable
              data={currentItems.map((item) => ({
                asset: item.label,
                portfolioWeight: item.percentage,
                totalPercentage: item.percentage,
                change24h: (Math.random() * 10 - 5).toFixed(2),
                change1h: (Math.random() * 5 - 2.5).toFixed(2),
                icon: (
                  <div
                    style={{
                      backgroundColor: item.color,
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                    }}
                  ></div>
                ),
              }))}
            />
             {/* Paginatie */}
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

export default DashboardPage;
