import React from "react";
import styles from "./HeroSection.module.css";
import heroImage from "../../Images/LandingPage/hero.png"; // Adjust the path if necessary

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      {/* Hero Content binnen de container */}
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          How everyday investors find <br />
          <span className={styles.highlight}>winning crypto opportunities</span>
        </h1>
        <div className={styles.textContainer}>
          <p className={styles.heroSubtitle}>
            Over 230,000+ people rely on Cryptonary's research and analysis to find
            data-backed crypto investment opportunities with a high chance of
            succeeding.
          </p>
          <button className={styles.ctaButton}>Start 7-Day Trial</button>
          <p className={styles.trustText}>
            97% of our users rate us Excellent on Trustpilot
          </p>
        </div>
        <div className={styles.heroImageContainer}>
          <img src={heroImage} alt="Hero Visual" className={styles.heroImage} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
