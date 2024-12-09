import React, { useState } from 'react';
import styles from './PricingSection.module.css';

function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false);

  const handleToggle = () => {
    setIsAnnual(!isAnnual);
  };

  return (
    <section className={styles.pricingSection}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Unlock instant access to <br />
          <span className={styles.highlight}>crypto hottest opportunities</span>
        </h1>

        <div className={styles.switchContainer}>
          <span className={!isAnnual ? styles.activeLabel : ''}>Monthly</span>
          <div
            className={styles.switch}
            onClick={handleToggle}
            role="button"
            aria-label="Toggle between Monthly and Annual"
          >
            <div
              className={`${styles.switchBall} ${isAnnual ? styles.switchBallRight : ''}`}
            ></div>
          </div>
          <span className={isAnnual ? styles.activeLabel : ''}>Annually</span>
        </div>

        <p className={styles.discountText}>
          Get <span className={styles.discount}>30% off</span> on a yearly subscription
        </p>

        <div className={styles.pricingContainer}>
          <div className={styles.card}>
            <h3 className={styles.planTitle}>Pro</h3>
            <p className={styles.planDescription}>
              Designed for those investing $5K or more. Get everything you need to actively
              manage your portfolio & stay ahead.
            </p>
            <p className={styles.price}>
              <span className={styles.discountedPrice}>$0</span>
              <span className={styles.originalPrice}>
                {isAnnual ? '$49.99' : '$59.99'}
              </span>
            </p>
            <button className={styles.ctaButton}>Start 7-Day Trial</button>
            <div className={styles.paymentOptions}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg"
                alt="Visa"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/52/Mastercard.svg"
                alt="Mastercard"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Paypal_Logo.svg"
                alt="Paypal"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/e/e5/Coinbase_icon_logo.svg"
                alt="Coinbase"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Apple_logo_black.svg"
                alt="Apple Pay"
              />
            </div>
            <p className={styles.securityText}>
              For your security, all orders are processed on a secured server.
            </p>
          </div>

          <div className={styles.includedFeatures}>
            <h3>What’s included?</h3>
            <ul className={styles.featuresList}>
              <li>Join live sessions & get real-time answers from our experts.</li>
              <li>Track your investments, analyse real-time profit & loss.</li>
              <li>Track the latest Bitcoin ETF inflows and holdings.</li>
              <li>Watch our 6+ hour trading course curated by our experts.</li>
              <li>Access 300+ in-depth guides & tutorials on crypto projects.</li>
              <li>Gain access to 500+ in-depth research reports.</li>
            </ul>
            <a href="#" className={styles.benefitsLink}>
              See full benefits
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PricingSection;
