import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; // Voor API-aanroepen
import styles from './RegisterScreen.module.css';

const API_BASE_URL =
  process.env.NODE_ENV === 'production'
    ? 'http://<VPS_IP>'
    : 'http://localhost:5115'; // Backend lokaal

function RegisterScreen() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Controleer of de wachtwoorden overeenkomen
    if (formData.password !== formData.confirmPassword) {
      setError('Wachtwoorden komen niet overeen.');
      return;
    }

    try {
      const response = await axios.post(`${API_BASE_URL}/api/SignUp`, {
        username: formData.username,
        email: formData.email,
        password: formData.password,
        roleid: 2
      });

      setSuccess('Registratie succesvol! Je wordt doorgestuurd naar de loginpagina.');
      setTimeout(() => navigate('/login'), 2000); // Doorsturen na 2 seconden
    } catch (err) {
      setError(err.response?.data?.message || 'Registratie mislukt. Probeer het opnieuw.');
    }
  };

  return (
    <div className={styles.background}>
      <div className={styles.overlay}>
        <div className={styles.container}>
          <h2 className={styles.title}>Registreren</h2>
          <p className={styles.subtitle}>
            Maak een account aan om direct toegang te krijgen.
          </p>
          {error && <p className={styles.error}>{error}</p>} {/* Toon foutmelding */}
          {success && <p className={styles.success}>{success}</p>} {/* Toon succesbericht */}
          <form className={styles.form} onSubmit={handleRegister}>
            <div className={styles.inputGroup}>
              <label htmlFor="username" className={styles.label}>
                Gebruikersnaam
              </label>
              <input
                type="text"
                id="username"
                className={styles.input}
                placeholder="Voer je gebruikersnaam in"
                value={formData.username}
                onChange={handleChange}
                required
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
                value={formData.email}
                onChange={handleChange}
                required
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
                value={formData.password}
                onChange={handleChange}
                required
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
                value={formData.confirmPassword}
                onChange={handleChange}
                required
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
