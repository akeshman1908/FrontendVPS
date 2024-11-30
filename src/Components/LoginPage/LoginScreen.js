import React from 'react';
import { Link } from 'react-router-dom'; // Import Link voor navigatie
import styles from './LoginScreen.module.css';

function LoginScreen() {
  return (
    <div className={styles.background}>
      <div className={styles.overlay}>
        <div className={styles.container}>
          <h2 className={styles.title}>Inloggen</h2>
          <p className={styles.subtitle}>
            Welkom terug! Log in om verder te gaan.
          </p>
          <form className={styles.form}>
            <div className={styles.inputGroup}>
              <label htmlFor="email" className={styles.label}>
                E-mailadres
              </label>
              <input
                type="email"
                id="email"
                className={styles.input}
                placeholder="Voer je e-mailadres in"
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="password" className={styles.label}>
                Wachtwoord
              </label>
              <input
                type="password"
                id="password"
                className={styles.input}
                placeholder="Voer je wachtwoord in"
              />
            </div>
            <button type="submit" className={`${styles.primaryButton} btn`}>
              Inloggen
            </button>
          </form>
          <p className={styles.footerText}>
            Nog geen account?{' '}
            <Link to="/subscription" className={styles.link}>
              Registreer hier
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
