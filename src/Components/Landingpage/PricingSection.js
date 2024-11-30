import React from 'react';
import styles from './PricingSection.module.css'; // CSS Module

function PricingSection() {
  const plans = [
    {
      title: 'Basic Plan',
      price: '$9.99/month',
      features: ['Portfolio Tracking', 'Basic Analytics', 'Community Access'],
      button: 'Get Started',
    },
    {
      title: 'Pro Plan',
      price: '$19.99/month',
      features: ['Advanced Analytics', 'Wallet Integration', 'Priority Support'],
      button: 'Upgrade Now',
    },
    {
      title: 'Enterprise Plan',
      price: 'Contact Us',
      features: ['Custom Solutions', 'Dedicated Support', 'Unlimited Access'],
      button: 'Contact Sales',
    },
  ];

  return (
    <section className={`py-5 ${styles.pricing}`}>
      <div className="container">
        <h2 className="text-center mb-5">Choose Your Plan</h2>
        <div className="row">
          {plans.map((plan, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className={`${styles.card} p-4 text-center`}>
                <h3 className={styles.title}>{plan.title}</h3>
                <p className={styles.price}>{plan.price}</p>
                <ul className={`list-unstyled ${styles.features}`}>
                  {plan.features.map((feature, i) => (
                    <li key={i} className="mb-2">
                      <i className="fas fa-check-circle me-2 text-success"></i> {feature}
                    </li>
                  ))}
                </ul>
                <button className="btn btn-primary mt-3">{plan.button}</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PricingSection;
