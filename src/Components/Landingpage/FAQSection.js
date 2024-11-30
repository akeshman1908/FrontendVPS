import React from 'react';
import styles from './FAQSection.module.css'; // CSS Module

function FAQSection() {
  const faqs = [
    {
      question: 'What is Portfolio Tracker?',
      answer: 'Portfolio Tracker is a platform that helps you manage and monitor your investments in one place.',
    },
    {
      question: 'Is there a free version available?',
      answer: 'Yes, we offer a Basic Plan with essential features at no cost.',
    },
    {
      question: 'Can I cancel my subscription anytime?',
      answer: 'Absolutely! You can cancel your subscription at any time without any hidden fees.',
    },
  ];

  return (
    <section className={`py-5 ${styles.faq}`}>
      <div className="container">
        <h2 className="text-center mb-5">Frequently Asked Questions</h2>
        <div className="accordion" id="faqAccordion">
          {faqs.map((faq, index) => (
            <div className="accordion-item" key={index}>
              <h2 className="accordion-header" id={`heading${index}`}>
                <button
                  className={`accordion-button ${index !== 0 ? 'collapsed' : ''}`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${index}`}
                  aria-expanded={index === 0 ? 'true' : 'false'}
                  aria-controls={`collapse${index}`}
                >
                  {faq.question}
                </button>
              </h2>
              <div
                id={`collapse${index}`}
                className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                aria-labelledby={`heading${index}`}
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
