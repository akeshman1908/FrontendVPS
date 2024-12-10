import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { useNavigate, Link } from 'react-router-dom'; // Gebruik Link voor navigatie
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faArrowUp, faArrowDown, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [value, setValue] = useState(10000); // Voor de geldwaarde
  const [percentage, setPercentage] = useState(2.5); // Percentage verandering
  const navigate = useNavigate(); // Voor navigatie na login
  const isPositive = percentage >= 0;

  // Placeholder voor logout functionaliteit
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  return (
    <header className={styles.navbar}>
      <Link to="/" className={styles.navbarBrand}>
        Portfolio<span className={styles.brandHighlight}>Tracker</span>
      </Link>

      <div className={styles.actions}>
        {/* Taalkeuze knop */}
        <button className={styles.languageButton}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_the_Netherlands.svg"
            alt="Dutch flag"
            className={styles.flagIcon}
          />
          <FontAwesomeIcon icon={faAngleDown} className={styles.arrowDown} />
        </button>

        {/* Waarde knop */}
        <button
          className={`${styles.valueButton} ${isPositive ? styles.positive : styles.negative}`}
        >
          € {value.toLocaleString()} |{" "}
          <FontAwesomeIcon
            icon={isPositive ? faArrowUp : faArrowDown}
            className={styles.icon}
          />{" "}
          {percentage.toFixed(2)}%
        </button>

        {/* Logout knop */}
        <button className={styles.logoutButton} onClick={handleLogout} title="Uitloggen">
          <FontAwesomeIcon icon={faSignOutAlt} />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
