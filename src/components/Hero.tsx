import { useState } from 'react';
import styles from '../styles/Hero.module.css';
import responsive from '../styles/Responsive.module.css';

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
    <div className={`${styles.promptSection} ${responsive.promptSection}`}>
      <h1>AI INNOVATORS</h1>
      <div className={`${styles.promptIMG} ${responsive.promptIMG}`}>
        <img src='header.JPG' alt='' />
        <input
          className={`${styles.promptIMG__overlay} ${responsive.promptIMG__overlay}`}
          type='text'
          placeholder='Enter your prompt'
        />
        <div className={`${styles.tabs} ${responsive.tabs}`}>
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
