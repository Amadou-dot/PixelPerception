import { useState } from 'react';
import styles from '../styles/Hero.module.css';

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const tabs = [
    { label: 'Get Started', href: '#' },
    { label: 'Discover', href: '#' },
    { label: 'API Docs', href: '#' },
    { label: 'NexaAI', href: '#' },
    { label: 'Security', href: '#' },
    { label: 'About Us', href: '#' },
  ];

  return (
    <div className={styles.promptSection}>
      <h1>AI INNOVATORS</h1>
      <div className={`${styles.promptIMG}`}>
        <img src='header.JPG' alt='' />
        <input
          className={styles.promptIMG__overlay}
          type='text'
          placeholder='Enter your prompt'
        />
        <div className={styles.tabs}>
          {tabs.map((tab, index) => (
            <a
              key={index}
              href={tab.href}
              className={activeIndex === index ? styles.active : ''}
              onClick={() => setActiveIndex(index)}>
              {tab.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
