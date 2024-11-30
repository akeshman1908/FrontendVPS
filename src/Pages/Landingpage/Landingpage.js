import React from 'react';
import Navbar from '../../Components/Landingpage/Navbar';
import HeroSection from '../../Components/Landingpage/HeroSection';
import Features from '../../Components/Landingpage/Features'
import TestimonialsSection from '../../Components/Landingpage/TestimonialsSection';
import PricingSection from '../../Components/Landingpage/PricingSection';
import FAQSection from '../../Components/Landingpage/FAQSection';
import CallToAction from '../../Components/Landingpage/CallToAction';
import Footer from '../../Components/Landingpage/Footer';
import PromotionSection from '../../Components/Landingpage/PromotionSection';

function Landingpage() {
  return (
    <>
      <Navbar />
        <HeroSection />
        <PromotionSection />
        <Features />
        <TestimonialsSection />
        {/* <PricingSection /> */}
        <CallToAction />

        <FAQSection />
      <Footer />
    </>
  );
}

export default Landingpage;
