import styles from '../styles/Video.module.css';
import responsive from '../styles/Responsive.module.css';
export default function Video() {
  return (
    <div className={`${styles.videoSection} ${responsive.videoSection}`} id='discover'>
      <div className={`${styles.header} ${responsive.header}`}>
        <p>
          Discover our AI tools - from natural language processing to computer
          vision - that revolutionize your work!
        </p>
        <h3>
          Why choose <span>NexaAI</span>
        </h3>
      </div>
      <div className={`${styles.video} ${responsive.video}`}>
        <img src='footer.JPG' alt='' />
        <button className={`${styles.play} ${responsive.play}`}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='#a3e635'>
            <path d='M19.376 12.4161L8.77735 19.4818C8.54759 19.635 8.23715 19.5729 8.08397 19.3432C8.02922 19.261 8 19.1645 8 19.0658V4.93433C8 4.65818 8.22386 4.43433 8.5 4.43433C8.59871 4.43433 8.69522 4.46355 8.77735 4.5183L19.376 11.584C19.6057 11.7372 19.6678 12.0477 19.5146 12.2774C19.478 12.3323 19.4309 12.3795 19.376 12.4161Z'></path>
          </svg>
        </button>
      </div>
    </div>
  );
}
