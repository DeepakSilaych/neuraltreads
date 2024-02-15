import React from 'react'
import styles from '../styles/HeroSection.module.css'

function Details() {
  return (
    <div className={styles.details}>
      <video src="./videos/home.mp4" autoPlay loop muted />
      <div className={styles.details__content}>
        <h2>Details</h2>
        <p>
          We are a dynamic platform founded by passionate alumni from the prestigious Indian Institute of Technology Bombay, dedicated to empowering the Apparel and Fashion Industry to thrive and expand their businesses. With a deep understanding of both technology and the intricacies of the fashion world, we offer a comprehensive suite of solutions tailored to the specific needs of this vibrant industry.
          <br />
          <br />
          Our platform serves as a catalyst for growth, providing innovative tools and resources that enable businesses to streamline their operations, reach new markets, and connect with customers in meaningful ways. Whether you're a budding designer, a seasoned manufacturer, or a retailer looking to stay ahead of the curve, we're here to support you every step of the way.

        </p>
      </div>
    </div>
  )
}

export default Details