import styles from '../styles/Showcase.module.css';
export default function Showcase() {
  return (
    <div className={styles.showcase} id='nexaai'>
      <h3>
        Unleash the potential of AI with <span>NexaAI</span>
      </h3>
      <div className={styles.textSection}>
        <p>
          Dive into the dynamic realm of Artificial Intelligence with NexaAI.
          Whether you're a seasoned expert, a passionate enthusiast, or a
          business eager to incorporate AI, NexaAI provides the essential tools
          and resources to take your projects to unparalleled heights. Our
          platform offers cutting-edge AI solutions, comprehensive learning
          materials, and a vibrant community of like-minded individuals. Join us
          and transform your ideas into reality with the power of AI, driving
          innovation and success in every endeavor.
        </p>
        <div className={styles.images}>
          <img src='src\assets\img-1.JPG' alt='' />
          <img src='src\assets\img-2.JPG' alt='' />
          <img src='src\assets\img-3.JPG' alt='' />
        </div>
      </div>
      <div className={styles.imageSection}>
        <img src='src\assets\img-4.JPG' alt='' />
        <img src='src\assets\img-5.JPG' alt='' />
        <img src='src\assets\img-6.JPG' alt='' />
      </div>
    </div>
  );
}
