import React from 'react'
import styles from '../styles/component.module.css'

function Testimonial() {
  return (
    <div className={styles.testimonial}>
      <div className={styles.testimonial__content}>
        <h2>What our customers are saying</h2>
        <p>Our customers love the products we make. Here's what they have to say about us.</p>
      </div>
      <div className={styles.testimonial__cards}>
        <div className={styles.testimonial__card}>
          <div className={styles.testimonial_card_data}>
            <h3>John Doe</h3>
            <p>"I love the products from NeuralThread. They are high quality and affordable."</p>
          </div>
        </div>
        <div className={styles.testimonial__card}>
          <div className={styles.testimonial_card_data}>
            <h3>Jane Doe</h3>
            <p>"I love the products from NeuralThread. They are high quality and affordable."</p>
          </div>
        </div>
        <div className={styles.testimonial__card}>
          <div className={styles.testimonial_card_data}>
            <h3>John Doe</h3>
            <p>"I love the products from NeuralThread. They are high quality and affordable."</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial