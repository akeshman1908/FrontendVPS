import React, { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import Navbar from "../../Components/DashboardPage/Navbar";
import Sidebar from "../../Components/DashboardPage/Sidebar";
import AssetPieChart from "../../Components/Charts/AssetPieChart";
import AssetPieTable from "../../Components/Table/AssetPieTable";
import Pagination from "../../Components/Table/Pagination"; 
import styles from "./DashboardPage.module.css";
import ChartFilters from "../../Components/Charts/ChartFilters"; // Importeer de ChartFilters component

function DashboardPage() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [userName, setUserName] = useState("");
  const itemsPerPage = 5;
  const [selectedFilter, setSelectedFilter] = useState("1J"); // Standaard filter


  const chartData = [
    { label: "Aandelen", percentage: 40, color: "#4e79a7" },
    { label: "Cryptovaluta", percentage: 20, color: "#f28e2c" },
    { label: "Valuta", percentage: 10, color: "#e15759" },
    { label: "Edelmetalen", percentage: 15, color: "#76b7b2" },
    { label: "Vastgoed", percentage: 15, color: "#59a14f" },
  ];

  const filters = ["Categorie", "Regio", "Valuta", "Beurs", "Strategie"];

  const handleSidebarToggle = (collapsed) => {
    setIsSidebarCollapsed(collapsed);
  };

  // Pagination calculations
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = chartData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(chartData.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
    setCurrentPage(1); // Reset naar eerste pagina bij filterwijziging
  };
  
  // Function to read and decode the JWT token
  const getUserNameFromToken = () => {
    const token = localStorage.getItem("authToken");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        // Assuming 'unique_name' is present in the decoded token
        if (decoded && decoded.unique_name) {
          setUserName(decoded.unique_name);
        }
      } catch (error) {
        console.error("Error decoding token:", error);
      }
    }
  };

  useEffect(() => {
    getUserNameFromToken();
  }, []);

  return (
    <div className={styles.dashboard}>
      <Navbar />
      <div className={styles.container}>
        <Sidebar onToggle={handleSidebarToggle} />
        <main
          className={`${styles.content} ${isSidebarCollapsed ? styles.collapsed : ""}`}
        >
          <AssetPieChart data={chartData} filters={filters} userName={userName} />

          <div className={styles.tableWrapper}>
          <ChartFilters onFilterChange={handleFilterChange} />

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
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
              // If needed, add totalResults or itemsPerPage here
            />
          </div>
        </main>
      </div>
    </div>
  );
}

export default DashboardPage;
