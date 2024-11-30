import React from 'react';
import styles from './Navbar.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaChevronDown } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  const handleTryNowClick = () => {
    navigate('/subscription'); // Navigeren naar de /subscription route
  };

  return (
    <nav className={`navbar navbar-expand-lg ${styles.navbar}`}>
      <div className="container">
        <Link className={`navbar-brand ${styles.logo}`} to="/">
          Portfoliotracker
        </Link>
        <div className="collapse navbar-collapse justify-content-end">
          <ul className="navbar-nav align-items-center">
            <li className="nav-item">
              <Link className={`nav-link ${styles.loginLink}`} to="/login">
                Log in
              </Link>
            </li>
            <li className="nav-item">
              <button className={`btn ${styles.flagButton}`}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_the_Netherlands.svg"
                  alt="Nederlandse vlag"
                  className={styles.flagImage}
                />
                <FaChevronDown className={styles.chevronIcon} />
              </button>
            </li>
            <li className="nav-item">
              <button className={`btn ${styles.tryButton}`} onClick={handleTryNowClick}>
                Gratis proberen
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
