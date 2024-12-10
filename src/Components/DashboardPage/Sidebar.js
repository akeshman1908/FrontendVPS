// Sidebar.js
import React, { useState } from "react";
import {
  FaBitcoin,
  FaChartLine,
  FaGem,
  FaDollarSign,
  FaBuilding,
  FaBars,
  FaCog,
  FaFileAlt,
  FaWallet,
  FaExchangeAlt,
  FaChartPie,
  FaBell,
  FaBook,
  FaAngleDown,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom"; // Import Link en useNavigate
import styles from "./Sidebar.module.css";

function Sidebar({ onToggle }) {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [activeMenu, setActiveMenu] = useState(null);
  const navigate = useNavigate(); // Voor programmatic navigatie

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
    if (onToggle) {
      onToggle(!isCollapsed); // Informeer de parent component
    }
  };

  const toggleSubmenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  const handleMenuClick = (menu, route) => {
    if (isCollapsed) {
      navigate(route);
    } else {
      toggleSubmenu(menu);
    }
  };

  return (
    <div className={`${styles.sidebar} ${isCollapsed ? styles.collapsed : ""}`}>
      {/* Toggle Button */}
      <button className={styles.toggleButton} onClick={toggleSidebar}>
        <FaBars />
      </button>

      {/* Navigatielijst */}
      <ul className={styles.navList}>
        {/* Overzicht */}
        <li className={styles.navItem}>
          <Link to="/dashboard" className={styles.navLink}>
            <FaChartPie className={styles.icon} />
            {!isCollapsed && <span>Overzicht</span>}
          </Link>
        </li>

        {/* Aandelen */}
        <li className={styles.navItem}>
          <div
            className={`${styles.navLink} ${
              activeMenu === "stocks" ? styles.active : ""
            }`}
            onClick={() => handleMenuClick("stocks", "/stocks")}
          >
            <FaChartLine className={styles.icon} />
            {!isCollapsed && <span>Aandelen</span>}
            {!isCollapsed && (
              <FaAngleDown
                className={`${styles.arrow} ${
                  activeMenu === "stocks" ? styles.open : ""
                }`}
              />
            )}
          </div>
          {activeMenu === "stocks" && !isCollapsed && (
            <ul className={styles.subList}>
              <li className={styles.subItem}>
                {/* Gebruik Link voor Portfolio */}
                <Link to="/stocks" className={styles.subLink}>
                  <FaWallet className={styles.icon} />
                  <span>Portfolio</span>
                </Link>
              </li>
              <li className={styles.subItem}>
                <Link to="/stocks/dividenden" className={styles.subLink}>
                  <FaExchangeAlt className={styles.icon} />
                  <span>Dividenden</span>
                </Link>
              </li>
            </ul>
          )}
        </li>

        {/* Cryptocurrency */}
        <li className={styles.navItem}>
          <div
            className={`${styles.navLink} ${
              activeMenu === "crypto" ? styles.active : ""
            }`}
            onClick={() => handleMenuClick("crypto", "/cryptocurrency")}
          >
            <FaBitcoin className={styles.icon} />
            {!isCollapsed && <span>Cryptocurrency</span>}
            {!isCollapsed && (
              <FaAngleDown
                className={`${styles.arrow} ${
                  activeMenu === "crypto" ? styles.open : ""
                }`}
              />
            )}
          </div>
          {activeMenu === "crypto" && !isCollapsed && (
            <ul className={styles.subList}>
              <li className={styles.subItem}>
                {/* Link naar Overzicht Cryptocurrency */}
                <Link to="/cryptocurrency" className={styles.subLink}>
                  <FaChartLine className={styles.icon} />
                  <span>Overzicht</span>
                </Link>
              </li>
              <li className={styles.subItem}>
                <Link to="/cryptocurrency/wallets" className={styles.subLink}>
                  <FaWallet className={styles.icon} />
                  <span>Wallets</span>
                </Link>
              </li>
              <li className={styles.subItem}>
                <Link to="/cryptocurrency/transacties" className={styles.subLink}>
                  <FaExchangeAlt className={styles.icon} />
                  <span>Transacties</span>
                </Link>
              </li>
            </ul>
          )}
        </li>

        {/* Valuta */}
        <li className={styles.navItem}>
          <div
            className={`${styles.navLink} ${
              activeMenu === "forex" ? styles.active : ""
            }`}
            onClick={() => handleMenuClick("forex", "/forex")}
          >
            <FaDollarSign className={styles.icon} />
            {!isCollapsed && <span>Valuta </span>}
            {!isCollapsed && (
              <FaAngleDown
                className={`${styles.arrow} ${
                  activeMenu === "forex" ? styles.open : ""
                }`}
              />
            )}
          </div>
          {activeMenu === "forex" && !isCollapsed && (
            <ul className={styles.subList}>
              <li className={styles.subItem}>
                <Link to="/forex/valutaparen" className={styles.subLink}>
                  <FaChartLine className={styles.icon} />
                  <span>Valutaparen</span>
                </Link>
              </li>
              <li className={styles.subItem}>
                <Link to="/forex/trends" className={styles.subLink}>
                  <FaExchangeAlt className={styles.icon} />
                  <span>Trends</span>
                </Link>
              </li>
            </ul>
          )}
        </li>

        {/* Edelmetalen */}
        <li className={styles.navItem}>
          <div
            className={`${styles.navLink} ${
              activeMenu === "metals" ? styles.active : ""
            }`}
            onClick={() => handleMenuClick("metals", "/metals")}
          >
            <FaGem className={styles.icon} />
            {!isCollapsed && <span>Edelmetalen</span>}
            {!isCollapsed && (
              <FaAngleDown
                className={`${styles.arrow} ${
                  activeMenu === "metals" ? styles.open : ""
                }`}
              />
            )}
          </div>
          {activeMenu === "metals" && !isCollapsed && (
            <ul className={styles.subList}>
              <li className={styles.subItem}>
                <Link to="/metals/prijzen" className={styles.subLink}>
                  <FaChartLine className={styles.icon} />
                  <span>Prijzen</span>
                </Link>
              </li>
              <li className={styles.subItem}>
                <Link to="/metals/opslaglocaties" className={styles.subLink}>
                  <FaBuilding className={styles.icon} />
                  <span>Opslaglocaties</span>
                </Link>
              </li>
            </ul>
          )}
        </li>

        {/* Vastgoed */}
        <li className={styles.navItem}>
          <Link to="/vastgoed" className={styles.navLink}>
            <FaBuilding className={styles.icon} />
            {!isCollapsed && <span>Vastgoed</span>}
          </Link>
        </li>

        {/* Rapporten */}
        <li className={styles.navItem}>
          <Link to="/rapporten" className={styles.navLink}>
            <FaFileAlt className={styles.icon} />
            {!isCollapsed && <span>Rapporten</span>}
          </Link>
        </li>

        {/* Waarschuwingen */}
        <li className={styles.navItem}>
          <Link to="/waarschuwingen" className={styles.navLink}>
            <FaBell className={styles.icon} />
            {!isCollapsed && <span>Waarschuwingen</span>}
          </Link>
        </li>

        {/* Educatie */}
        <li className={styles.navItem}>
          <Link to="/educatie" className={styles.navLink}>
            <FaBook className={styles.icon} />
            {!isCollapsed && <span>Educatie</span>}
          </Link>
        </li>

        {/* Instellingen */}
        <li className={styles.navItem}>
          <Link to="/instellingen" className={styles.navLink}>
            <FaCog className={styles.icon} />
            {!isCollapsed && <span>Instellingen</span>}
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
