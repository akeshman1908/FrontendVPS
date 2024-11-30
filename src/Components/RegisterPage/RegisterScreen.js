import React from 'react';
import { Link } from 'react-router-dom';
import styles from './RegisterScreen.module.css';

function RegisterScreen() {
  return (
    <div className={styles.background}>
      <div className={styles.overlay}>
        <div className={styles.container}>
          <h2 className={styles.title}>Registreren</h2>
          <p className={styles.subtitle}>
            Maak een account aan om direct toegang te krijgen.
          </p>
          <form className={styles.form}>
            <div className={styles.inputGroup}>
              <label htmlFor="username" className={styles.label}>
                Gebruikersnaam
              </label>
              <input
                type="text"
                id="username"
                className={styles.input}
                placeholder="Voer je gebruikersnaam in"
              />
            </div>
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
            <div className={styles.inputGroup}>
              <label htmlFor="confirmPassword" className={styles.label}>
                Bevestig Wachtwoord
              </label>
              <input
                type="password"
                id="confirmPassword"
                className={styles.input}
                placeholder="Herhaal je wachtwoord"
              />
            </div>
            <button type="submit" className={`${styles.primaryButton} btn`}>
              Registreren
            </button>
          </form>
          <p className={styles.footerText}>
            Heb je al een account?{' '}
            <Link to="/login" className={styles.link}>
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default RegisterScreen;
