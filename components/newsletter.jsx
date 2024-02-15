import React from 'react'
import styles from '../styles/component.module.css'

function Newsletter() {
  return (
    <>
      <div className={styles.newsletter}>
        <div className={styles.newsletter__content}>
          <h2>Subscribe to our Newsletter</h2>
          <p>Get the latest news and updates on NeuralThread delivered to your inbox.</p>
        </div>
        <form action="">
          <input type="email" placeholder="Enter your email" />
          <button type="submit">Subscribe</button>
        </form>
      </div>

      <div className={styles.footer}>
        <div className={styles.footer__content}>
          <div className={styles.footer__logo}>
            {/* <img src="./logo1.png" alt="" /> */}
            <p>NeuralThread</p>
          </div>
          <div className={styles.footer__links}>
            <a href="#">Home</a>
            <a href="#">Features</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Contact</a>
          </div>
        </div>
        <p>
          &copy; 2021 NeuralThread. All rights reserved.
        </p>
      </div>
    </>
  )
}

export default Newsletter