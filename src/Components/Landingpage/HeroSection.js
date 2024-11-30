import React from 'react';
import styles from './HeroSection.module.css'; // CSS Module

function HeroSection() {
  return (
    <section className={`py-5 ${styles.hero}`}>
      <div className="container">
        <div className="row align-items-center">
          {/* Linker kolom: Tekst en Call-to-Actions */}
          <div className="col-lg-6 text-center text-lg-start">
            <h1 className={styles.title}>
              Empower Your <span className={styles.highlight}>Investments</span>
            </h1>
            <p className={`${styles.description} mt-3`}>
              Seamlessly manage your portfolio, track your progress, and achieve your financial goals.
            </p>
            <div className="mt-4">
              <a href="#signup" className={`btn btn-primary me-3 ${styles.btnPrimary}`}>
                <i className="fas fa-rocket me-2"></i> Get Started
              </a>
              <a href="#learn-more" className={`btn btn-outline-light ${styles.btnSecondary}`}>
                <i className="fas fa-info-circle me-2"></i> Learn More
              </a>
            </div>
          </div>

          {/* Rechter kolom: Afbeelding */}
          <div className="col-lg-6 text-center mt-4 mt-lg-0">
            <img
              src="https://via.placeholder.com/500x400"
              alt="Investment Dashboard"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
