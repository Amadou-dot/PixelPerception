import styles from '../styles/ServiceItem.module.css';
export default function ServiceItem({
  title,
  subtitle,
  description,
  active = false,
  onClick,
}: {
  title: string;
  subtitle: string;
  description: string;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <div
      className={`${styles.item} ${active ? `${styles.active}` : ''}`}
      onClick={onClick}>
      <div className={styles.title}>
        <div className={styles.gradient}></div>
        <p>{title}</p>
      </div>
      <div className={styles.description}>
        <h5>{subtitle}</h5>
        <p>{description}</p>
      </div>
    </div>
  );
}
