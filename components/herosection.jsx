import React from 'react';
import styles from '../styles/HeroSection.module.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heading}>
        <img src="https://see.fontimg.com/api/renderfont4/X361d/eyJyIjoiZnMiLCJoIjo3MiwidyI6MTAwMCwiZnMiOjcyLCJmZ2MiOiIjMDAwMDAwIiwiYmdjIjoiIzM1M0Q0QiIsInQiOjF9/UmV2b2x1dGlvbml6ZQ/bemirs-demo-version-regular.png" alt="" />
        <img src="https://see.fontimg.com/api/renderfont4/X361d/eyJyIjoiZnMiLCJoIjo3MiwidyI6MTAwMCwiZnMiOjcyLCJmZ2MiOiIjMDAwMDAwIiwiYmdjIjoiIzM1M0Q0QiIsInQiOjF9/QXBwYXJlbA/bemirs-demo-version-regular.png" alt="" />
        <img src="https://see.fontimg.com/api/renderfont4/X361d/eyJyIjoiZnMiLCJoIjo3MiwidyI6MTAwMCwiZnMiOjcyLCJmZ2MiOiIjMDAwMDAwIiwiYmdjIjoiIzM1M0Q0QiIsInQiOjF9/RGVzaWdu/bemirs-demo-version-regular.png" alt="" />
      </div>
      <div className={styles.logo}>
        <img src="./logo1.png" alt="" />
      </div>
    </section>
  );
};

export default HeroSection;
