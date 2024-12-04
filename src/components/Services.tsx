import { useState } from 'react';
import styles from '../styles/Services.module.css';
import ServiceItem from './ServiceItem';

export default function Services() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className={styles.services} id='services'>
      <div className={styles.header}>
        <h3>Our Services</h3>
        <p>
          At NexaAI, we strive to make AI accessible and beneficial for
          everyone. Our mission is to democratize AI technology, ensuring that
          its powerful tools and capabilities are available to all. Join us on
          our journey to create a smarter, more interconnected world.
        </p>
      </div>
      <div className={styles.serviceItems}>
        <ServiceItem
          active={activeIndex === 0}
          title='AI Innovation'
          subtitle='Innovation'
          description='Tap into a powerful suite of AI tools to enhance efficiency and streamline your processes.'
          onClick={() => setActiveIndex(0)}
        />
        <ServiceItem
          active={activeIndex === null ? true : activeIndex === 1}
          title='AI Expertise'
          subtitle='Expertise'
          description='Get personalized guidance and innovative solutions from our AI experts to elevate your projects.'
          onClick={() => setActiveIndex(1)}
        />
        <ServiceItem
          active={activeIndex === 2}
          title='AI Learning'
          subtitle='Learning'
          description='Explore a wide range of AI resources, from beginner guides to advanced courses, tailored for everyone.'
          onClick={() => setActiveIndex(2)}
        />
        <ServiceItem
          active={activeIndex === 3}
          title='AI Network'
          subtitle='Network'
          description='Join a community of AI enthusiasts and professionals to share knowledge and collaborate.'
          onClick={() => setActiveIndex(3)}
        />
      </div>
    </div>
  );
}