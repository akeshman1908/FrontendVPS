import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Gebruik voor navigatie
import axios from 'axios'; // Axios voor API-aanroep
import styles from './LoginScreen.module.css';


const API_BASE_URL =
  process.env.NODE_ENV === 'production'
    ? 'http://<VPS_IP>'
    : 'http://localhost:5115'; // Backend lokaal

function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Voor navigatie na login

  const handleLogin = async (e) => {
    e.preventDefault(); // Voorkom standaard formulieractie
    setError(''); // Reset errors bij een nieuwe poging

    try {
        const response = await axios.post(`${API_BASE_URL}/api/SignIn`, {
            username,
            password,
          });

      // Verwerking van succesvolle respons (bijvoorbeeld token opslaan)
      const { token } = response.data;
      localStorage.setItem('authToken', token); // Token opslaan in localStorage
      navigate('/dashboard'); // Gebruiker doorsturen naar dashboard
    } catch (err) {
      // Error afhandeling
      setError(err.response?.data?.message || 'Inloggen mislukt. Probeer het opnieuw.');
    }
  };

  return (
    <div className={styles.background}>
      <div className={styles.overlay}>
        <div className={styles.container}>
          <h2 className={styles.title}>Inloggen</h2>
          <p className={styles.subtitle}>Welkom terug! Log in om verder te gaan.</p>
          {error && <p className={styles.error}>{error}</p>} {/* Toon foutmelding */}
          <form className={styles.form} onSubmit={handleLogin}>
            <div className={styles.inputGroup}>
              <label htmlFor="username" className={styles.label}>
                Gebruikersnaam
              </label>
              <input
                type="text"
                id="username"
                className={styles.input}
                placeholder="Voer je gebruikersnaam in"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
