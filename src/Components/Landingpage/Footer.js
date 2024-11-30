import React from 'react';
import styles from './Footer.module.css'; // CSS Module

function Footer() {
  return (
    <footer className={`${styles.footer} py-4`}>
      <div className="container">
        <div className="row">
          {/* Over ons sectie */}
          <div className="col-md-4 mb-3">
            <h5 className={styles.footerTitle}>About Us</h5>
            <p className={styles.footerText}>
              Portfolio Tracker is your go-to platform for managing investments. Track stocks,
              crypto, and more with ease.
            </p>
          </div>

          {/* Links sectie */}
          <div className="col-md-4 mb-3">
            <h5 className={styles.footerTitle}>Quick Links</h5>
            <ul className={styles.footerLinks}>
              <li>
                <a href="#features" className={styles.footerLink}>
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className={styles.footerLink}>
                  Pricing
                </a>
              </li>
              <li>
                <a href="#testimonials" className={styles.footerLink}>
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#faq" className={styles.footerLink}>
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact sectie */}
          <div className="col-md-4 mb-3">
            <h5 className={styles.footerTitle}>Contact Us</h5>
            <p className={styles.footerText}>
              <i className="fas fa-envelope me-2"></i> support@portfoliotracker.com
            </p>
            <p className={styles.footerText}>
              <i className="fas fa-phone me-2"></i> +1 (555) 123-4567
            </p>
            <div className={styles.socialIcons}>
              <a href="#!" className="me-3">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#!" className="me-3">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#!" className="me-3">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#!">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-4">
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Portfolio Tracker. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
