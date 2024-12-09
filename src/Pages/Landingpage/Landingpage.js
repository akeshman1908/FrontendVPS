import React from 'react';
import Navbar from '../../Components/Landingpage/Navbar';
import HeroSection from '../../Components/Landingpage/HeroSection';
import Features from '../../Components/Landingpage/Features';
import TestimonialsSection from '../../Components/Landingpage/TestimonialsSection';
import PricingSection from '../../Components/Landingpage/PricingSection';
// import FAQSection from '../../Components/Landingpage/FAQSection';
// import CallToAction from '../../Components/Landingpage/CallToAction';
import Footer from '../../Components/Landingpage/Footer';
// import PromotionSection from '../../Components/Landingpage/PromotionSection';

import styles from './Landingpage.module.css';
import CardCarousel from '../../Components/Landingpage/CardCarousel';

function LandingPage() {
  return (
    <div className={styles.landingPage}>
      <Navbar />
      <HeroSection />
      {/* <PromotionSection /> */}
      <Features />
      {/* <TestimonialsSection /> */}
      <PricingSection />
      {/* <CallToAction /> */}
      {/* <FAQSection /> */}
      <CardCarousel />
      <Footer />
    </div>
  );
}

export default LandingPage;
