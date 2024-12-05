import styles from '../styles/ServiceItem.module.css';
import responsive from '../styles/Responsive.module.css';
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
    <div className={`${styles.item} ${responsive.item} ${active ? `${styles.active}` : ''}`} onClick={onClick}>
      <div className={`${styles.title} ${responsive.title}`}>
        <div className={styles.gradient}></div>
        <p>{title}</p>
      </div>
      <div className={`${styles.description} ${responsive.description}`}>
        <h5>{subtitle}</h5>
        <p>{description}</p>
      </div>
    </div>
  );
}
