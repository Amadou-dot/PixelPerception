import styles from '../styles/Footer.module.css';
export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.copyright}>
        <div className={styles.separator}></div>
        <p>
          Copyright &copy; {new Date().getFullYear()} NexaAI. All rights
          reserved.
        </p>
        <div className={styles.separator}></div>
      </div>
    </div>
  );
}
