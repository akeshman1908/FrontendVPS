import React from "react";
import styles from "./Features.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine, faShieldAlt, faSyncAlt, faChartPie } from "@fortawesome/free-solid-svg-icons";

const Features = () => {
  return (
    <div className={styles.featuresSection}>
      <h2 className={styles.title}>Key Features</h2>
      <p className={styles.subtitle}>
        Discover the powerful tools that make managing your portfolio simple and effective.
      </p>
      <div className={styles.featuresContainer}>
        <div className={styles.featureCard}>
          <FontAwesomeIcon icon={faChartLine} size="3x" className={styles.icon} />
          <h5 className={styles.featureTitle}>Real-Time Updates</h5>
          <p className={styles.featureText}>
            Stay updated with live market data and see changes as they happen.
          </p>
        </div>
        <div className={styles.featureCard}>
          <FontAwesomeIcon icon={faChartPie} size="3x" className={styles.icon} />
          <h5 className={styles.featureTitle}>Charts & Analytics</h5>
          <p className={styles.featureText}>
            Get detailed insights into your portfolio with visual graphs and analysis tools.
          </p>
        </div>
        <div className={styles.featureCard}>
          <FontAwesomeIcon icon={faSyncAlt} size="3x" className={styles.icon} />
          <h5 className={styles.featureTitle}>API Integrations</h5>
          <p className={styles.featureText}>
            Connect seamlessly with platforms like Ledger and DeGiro.
          </p>
        </div>
        <div className={styles.featureCard}>
          <FontAwesomeIcon icon={faShieldAlt} size="3x" className={styles.icon} />
          <h5 className={styles.featureTitle}>Security & Privacy</h5>
          <p className={styles.featureText}>
            Your data is encrypted and protected with the latest security measures.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
