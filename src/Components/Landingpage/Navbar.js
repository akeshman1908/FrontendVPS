import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faSearch, faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <header className={styles.navbarContainer}>
        <div className={styles.navbar}>
          {/* Logo */}
          <a href="/" className={styles.navbarBrand}>
            Portfolio<span className={styles.brandHighlight}>Tracker</span>
          </a>

          {/* Mobile Start Trial button */}
          <button className={styles.startTrialMobile}>Start Trial</button>
          
          {/* Desktop navigatie */}
          <nav className={styles.navLinks}>
            <div className={styles.dropdown}>
              <a href="#" className={styles.navLink}>Research</a>
              <FontAwesomeIcon icon={faAngleDown} className={styles.arrowDown} />
            </div>
            <div className={styles.dropdown}>
              <a href="#" className={styles.navLink}>Analysis</a>
              <FontAwesomeIcon icon={faAngleDown} className={styles.arrowDown} />
            </div>
            <div className={styles.dropdown}>
              <a href="#" className={styles.navLink}>Tools</a>
              <FontAwesomeIcon icon={faAngleDown} className={styles.arrowDown} />
            </div>
            <a href="#" className={styles.navLink}>
              <FontAwesomeIcon icon={faSearch} className={styles.searchIcon} />
              Search
            </a>
          </nav>

          <div className={styles.navButtons}>
            <button className={styles.languageButton}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_the_Netherlands.svg"
                alt="Dutch flag"
                className={styles.flagIcon}
              />
              <FontAwesomeIcon icon={faAngleDown} className={styles.arrowDown} />
            </button>
            <a href="/subscription" className={styles.startTrial}>Start Trial</a>
            <a href="/login" className={styles.login}>Log in</a>
          </div>

          {/* Hamburger menu button voor mobile */}
          <button className={styles.hamburgerMenu} onClick={toggleSidebar}>
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </header>

      {/* Sidebar overlay en sidebar content voor mobile */}
      <div 
        className={`${styles.sidebarOverlay} ${isSidebarOpen ? styles.open : ''}`} 
        onClick={toggleSidebar}
      ></div>
      <div className={`${styles.sidebar} ${isSidebarOpen ? styles.open : ''}`}>
        <nav className={styles.sidebarNavLinks}>
          <a href="#" className={styles.sidebarNavLink}>Research</a>
          <a href="#" className={styles.sidebarNavLink}>Analysis</a>
          <a href="#" className={styles.sidebarNavLink}>Tools</a>
          <a href="#" className={styles.sidebarNavLink}>Search</a>
        </nav>
        <div className={styles.sidebarButtons}>
          <button className={styles.languageButton}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_the_Netherlands.svg"
              alt="Dutch flag"
              className={styles.flagIcon}
            />
            <FontAwesomeIcon icon={faAngleDown} className={styles.arrowDown} />
          </button>
          <a href="/login" className={styles.login}>Log in</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
