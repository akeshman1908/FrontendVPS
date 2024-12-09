import React from "react";
import styles from "./CardCarousel.module.css";

const cards = [
  {
    id: 1,
    image: "https://via.placeholder.com/300x150?text=Market+Updates",
    title: "On-chain data shows Bitcoin rally",
    description:
      "In this update, we're going to cover the new Bitcoin price rally, what's driving it, and how overheated the market might be.",
    category: "Market Updates",
    proLabel: true,
    time: "7 min read",
    date: "Nov 13, 2024",
  },
  {
    id: 2,
    image: "https://via.placeholder.com/300x150?text=Bitcoin+News",
    title: "Post-weekend update: BTC and WIF",
    description:
      "A quick update today. As we mentioned previously, we really believe we've now moved into the beginning stages of a recovery.",
    category: "Market Updates",
    proLabel: false,
    time: "3 min read",
    date: "Nov 11, 2024",
  },
  {
    id: 3,
    image: "https://via.placeholder.com/300x150?text=Market+Stimulus",
    title: "BTC, S&P hit highs as China stimulus",
    description:
      "As the US election clears market uncertainty, BTC and ETH reach record highs, while the Fed’s next rate decisions loom.",
    category: "Market Updates",
    proLabel: false,
    time: "7 min read",
    date: "Nov 8, 2024",
  },
];

const CardCarousel = () => {
  return (
    <section className={styles.carouselSection}>
      <div className={styles.container}>
        <div className={styles.carouselHeader}>
          <h2>Recommended from Cryptonary</h2>
          <a href="#" className={styles.viewAll}>
            View All »
          </a>
        </div>
        <div className={styles.carousel}>
          {cards.map((card) => (
            <div key={card.id} className={styles.card}>
              <img src={card.image} alt={card.title} className={styles.cardImage} />
              <div className={styles.cardBody}>
                <div className={styles.cardHeader}>
                  {card.proLabel && <span className={styles.proLabel}>PRO</span>}
                  <span className={styles.category}>{card.category}</span>
                </div>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardDescription}>{card.description}</p>
                <div className={styles.cardFooter}>
                  <span>{card.time}</span> • <span>{card.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardCarousel;
