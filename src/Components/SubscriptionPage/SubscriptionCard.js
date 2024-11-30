import React from 'react';
import styles from './SubscriptionCard.module.css';
import { useNavigate } from 'react-router-dom';

function SubscriptionCard() {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate('/register'); // Navigeren naar de /register route
  };

  return (
    <div className={styles.background}>
      <div className={styles.overlay}>
        <div className={styles.container}>
          <h2 className={styles.title}>Visueel inzicht binnen 2 minuten</h2>
          <p className={styles.subtitle}>
            Binnen 7 dagen niet tevreden? Dan kun je <span className={styles.cancel}>kosteloos annuleren</span>
          </p>
          <div className={styles.subscriptionOptions}>
            {/* Jaarabonnement */}
            <div className={`${styles.card} ${styles.highlighted}`}>
              <div className={styles.tag}>Meest gekozen</div>
              <h3 className={styles.plan}>Jaarabonnement</h3>
              <p className={styles.discount}>2 maanden korting</p>
              <h4 className={styles.price}>
                €6,25 <span className={styles.perMonth}>/ maand</span>
              </h4>
              <p className={styles.billingCycle}>Jaarlijks afgeschreven € 75</p>
              <button
                className={`${styles.primaryButton} btn btn-dark`}
                onClick={handleRegisterClick}
              >
                <i className="fas fa-check-circle"></i> Probeer 7 dagen gratis
              </button>
              <ul className={styles.features}>
                <li><i className="fas fa-chart-line"></i> Visueel portfolio inzicht</li>
                <li><i className="fas fa-coins"></i> Voor aandelen, ETF's, obligaties, etc.</li>
                <li><i className="fas fa-users"></i> Community</li>
                <li><i className="fas fa-headset"></i> 1-1 support</li>
              </ul>
            </div>
            {/* Maandabonnement */}
            <div className={styles.card}>
              <h3 className={styles.plan}>Maandabonnement</h3>
              <h4 className={styles.price}>
                €7,50 <span className={styles.perMonth}>/ maand</span>
              </h4>
              <button
                className={`${styles.secondaryButton} btn btn-outline-dark`}
                onClick={handleRegisterClick}
              >
                <i className="fas fa-check-circle"></i> Probeer 7 dagen gratis
              </button>
              <ul className={styles.features}>
                <li><i className="fas fa-chart-line"></i> Visueel portfolio inzicht</li>
                <li><i className="fas fa-coins"></i> Voor aandelen, ETF's, obligaties, etc.</li>
                <li><i className="fas fa-users"></i> Community</li>
                <li><i className="fas fa-headset"></i> 1-1 support</li>
              </ul>
            </div>
          </div>
          <p className={styles.startDate}>
            <i className="fas fa-calendar-alt"></i> Abonnement start op 7 december 2024
          </p>
          <div className={styles.paymentMethods}>
            <i className="fab fa-cc-visa fa-2x"></i>
            <i className="fab fa-cc-mastercard fa-2x"></i>
            <i className="fab fa-cc-paypal fa-2x"></i>
            <i className="fas fa-money-check-alt fa-2x"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubscriptionCard;
