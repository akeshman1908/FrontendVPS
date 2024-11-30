import React from 'react';
import styles from './TestimonialsSection.module.css'; // CSS Module

function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "This platform completely changed the way I manage my investments. Highly recommended!",
      name: "Sarah Johnson",
      role: "Investor",
      avatar: "https://via.placeholder.com/100",
    },
    {
      quote:
        "A must-have for anyone serious about tracking their portfolio. Great features and easy to use!",
      name: "James Carter",
      role: "Trader",
      avatar: "https://via.placeholder.com/100",
    },
    {
      quote: "The community support and analytics are top-notch. Five stars!",
      name: "Emily Davis",
      role: "Financial Analyst",
      avatar: "https://via.placeholder.com/100",
    },
  ];

  return (
    <section className={`py-5 ${styles.testimonials}`}>
      <div className="container">
        <h2 className="text-center mb-5">What Our Users Say</h2>
        <div className="row">
          {testimonials.map((testimonial, index) => (
            <div className="col-md-4 text-center mb-4" key={index}>
              <div className={`${styles.card} p-4`}>
                <img
                  src={testimonial.avatar}
                  alt={`${testimonial.name}'s avatar`}
                  className={`${styles.avatar} mb-3`}
                />
                <p className={`${styles.quote} mb-3`}>"{testimonial.quote}"</p>
                <h5 className={styles.name}>{testimonial.name}</h5>
                <p className={styles.role}>{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
