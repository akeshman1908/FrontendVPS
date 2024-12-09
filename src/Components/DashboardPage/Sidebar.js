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
import { Link } from "react-router-dom"; // <-- Import Link
import styles from "./Sidebar.module.css";

function Sidebar({ onToggle }) {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
    if (onToggle) {
      onToggle(!isCollapsed); // Informeer de parent component
    }
  };

  const toggleSubmenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
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
            onClick={() => toggleSubmenu("stocks")}
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
                <div className={styles.subLink}>
                  <FaExchangeAlt className={styles.icon} />
                  <span>Dividenden</span>
                </div>
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
            onClick={() => toggleSubmenu("crypto")}
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
                <div className={styles.subLink}>
                  <FaWallet className={styles.icon} />
                  <span>Wallets</span>
                </div>
              </li>
              <li className={styles.subItem}>
                <div className={styles.subLink}>
                  <FaExchangeAlt className={styles.icon} />
                  <span>Transacties</span>
                </div>
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
            onClick={() => toggleSubmenu("forex")}
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
                <div className={styles.subLink}>
                  <FaChartLine className={styles.icon} />
                  <span>Valutaparen</span>
                </div>
              </li>
              <li className={styles.subItem}>
                <div className={styles.subLink}>
                  <FaExchangeAlt className={styles.icon} />
                  <span>Trends</span>
                </div>
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
            onClick={() => toggleSubmenu("metals")}
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
                <div className={styles.subLink}>
                  <FaChartLine className={styles.icon} />
                  <span>Prijzen</span>
                </div>
              </li>
              <li className={styles.subItem}>
                <div className={styles.subLink}>
                  <FaBuilding className={styles.icon} />
                  <span>Opslaglocaties</span>
                </div>
              </li>
            </ul>
          )}
        </li>

        {/* Vastgoed */}
        <li className={styles.navItem}>
          <div className={styles.navLink}>
            <FaBuilding className={styles.icon} />
            {!isCollapsed && <span>Vastgoed</span>}
          </div>
        </li>

        {/* Rapporten */}
        <li className={styles.navItem}>
          <div className={styles.navLink}>
            <FaFileAlt className={styles.icon} />
            {!isCollapsed && <span>Rapporten</span>}
          </div>
        </li>

        {/* Waarschuwingen */}
        <li className={styles.navItem}>
          <div className={styles.navLink}>
            <FaBell className={styles.icon} />
            {!isCollapsed && <span>Waarschuwingen</span>}
          </div>
        </li>

        {/* Educatie */}
        <li className={styles.navItem}>
          <div className={styles.navLink}>
            <FaBook className={styles.icon} />
            {!isCollapsed && <span>Educatie</span>}
          </div>
        </li>

        {/* Instellingen */}
        <li className={styles.navItem}>
          <div className={styles.navLink}>
            <FaCog className={styles.icon} />
            {!isCollapsed && <span>Instellingen</span>}
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
