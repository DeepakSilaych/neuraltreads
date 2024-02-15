import React from 'react'
import styles from '../styles/index.module.css'
import HeroSection from '@/components/herosection'
import Navbar from '@/components/navbar'
import Designs from '@/components/designs'
import Newsletter from '@/components/newsletter'
import Testimonial from '@/components/testimonial'
import Details from '@/components/details'

function index() {
  return (
    <div className={styles.main}>
      <Navbar />
      <HeroSection />
      <Details />
      <Designs />
      <Testimonial />
      <Newsletter />
    </div>
  )
}

export default index