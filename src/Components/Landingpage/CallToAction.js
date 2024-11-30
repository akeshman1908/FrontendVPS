import React from 'react';
import styles from './CallToAction.module.css'; // CSS Module

function CallToAction() {
  return (
    <section className={`py-5 text-center ${styles.cta}`}>
      <div className="container">
        <h2 className={styles.title}>Ready to Take Control of Your Investments?</h2>
        <p className={`${styles.description} mt-3`}>
          Join thousands of investors who trust Portfolio Tracker to manage their portfolios.
        </p>
        <div className="mt-4">
          <a href="#signup" className={`btn btn-primary me-3 ${styles.btnPrimary}`}>
            <i className="fas fa-user-plus me-2"></i> Get Started Now
          </a>
          <a href="#learn-more" className={`btn btn-outline-light ${styles.btnSecondary}`}>
            <i className="fas fa-info-circle me-2"></i> Learn More
          </a>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
