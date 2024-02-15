import { useRef, useEffect } from 'react';
import styles from '../styles/component.module.css'

function Navbar() {
  const useref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      // fix the navbar to the top of the screen when the user scrolls past the hero section change class name
      if (useref.current) {
        useref.current.classList.add(styles.navbar__fixed);
        if (window.scrollY > 100) {
          useref.current.classList.add(styles.navbar__fixed);
        } else {
          useref.current.classList.remove(styles.navbar__fixed);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.navbar} ref={useref}>
      <div className={styles.navbar__logo}>
        <img src="./logo1.png" alt="" />
        <p>NeuralThread</p>
      </div>
      <div className={styles.navbar__links}>
        <a href="#">Home</a>
        <a href="#">Features</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
      </div>
    </div>
  )
}

export default Navbar;
