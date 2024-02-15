import React, { useRef, useEffect } from 'react';
import styles from '../styles/designs.module.css';

function Designs() {
  const imgRef = useRef(null);
  const imgRef2 = useRef(null);
  const imgRef3 = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (imgRef.current) { 
        const parallaxFactor = 0.008; 
        imgRef.current.style.transform = `rotate(${window.scrollY * parallaxFactor - 10}deg)`;
      }
    };

    const handleScroll2 = () => {
      if (imgRef2.current) {
        const parallaxFactor = -0.013;
        imgRef2.current.style.transform = `rotate(${window.scrollY * parallaxFactor + 15}deg)`;
      }
    };

    const handleScroll3 = () => {
      if (imgRef3.current) {
        const parallaxFactor = 0.01;
        imgRef3.current.style.transform = `rotate(${window.scrollY * parallaxFactor - 30}deg)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleScroll2);
    window.addEventListener('scroll', handleScroll3);

    return () => window.removeEventListener('scroll', handleScroll, handleScroll2, handleScroll3);
  }, []);

  return (
    <div className={styles.designs}>
      <div className={styles.designs__content}>
        <div className={styles.designdata}>
          <h2>AI-powered Pattern Generation</h2>
          <p>
            Effortlessly create unique and optimized patterns in seconds. Ditch repetitive tasks and explore design possibilities like never before.
          </p>
          <p>
            Reduce errors and save time by leveraging our intelligent algorithms. Focus on creativity while NeuralThread handles the technical aspects.
          </p>
          <p>
            See your design come to life instantly with real-time pattern visualization. Experiment with different variations and find the perfect fit.
          </p>
        </div>

        <img ref={imgRef} src="./img/stage1" alt="" />
      </div>

      <div className={styles.designs__content}>
        <img ref={imgRef2} src="./img/stage2" alt="" />
        <div className={styles.designdata}>
          <h2>Virtual Fabric Simulation</h2>
          <p>
            Say goodbye to costly physical samples and embrace sustainable fabric exploration. Visualize textures, draping, and behavior in a virtual environment.          </p>
          <p>
            Make informed decisions about materials and minimize waste. Reduce production lead times and ensure consistent quality across collections.          </p>
          <p>
            Experiment with different fabrics and color combinations without limitations. Unlock boundless creativity and optimize your design choices.          </p>
        </div>
      </div>

      <div className={styles.designs__content}>
        <div className={styles.designdata}>
          <h2>AI-powered Pattern Generation</h2>
          <p>
            Effortlessly create unique and optimized patterns in seconds. Ditch repetitive tasks and explore design possibilities like never before.
          </p>
          <p>
            Reduce errors and save time by leveraging our intelligent algorithms. Focus on creativity while NeuralThread handles the technical aspects.
          </p>
          <p>
            See your design come to life instantly with real-time pattern visualization. Experiment with different variations and find the perfect fit.
          </p>
        </div>

        <img src="./img/stage3" alt="" ref={imgRef3} />
      </div>
    </div>
  );
}

export default Designs;
