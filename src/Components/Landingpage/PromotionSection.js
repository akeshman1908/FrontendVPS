import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./PromotionSection.module.css";

const PromotionSection = () => {
  return (
    <div className={styles.promotionSection}>
      <div className="container text-center py-5">
        <h1 className={styles.title}>Transform Your Investment Journey</h1>
        <p className={styles.subtitle}>
          Join thousands of investors using <span className={styles.highlight}>Snowball Analytics</span> to streamline their portfolio management and achieve financial success.
        </p>
        <button className="btn btn-primary btn-lg mt-3">Get Started Today</button>
      </div>
    </div>
  );
};

export default PromotionSection;
