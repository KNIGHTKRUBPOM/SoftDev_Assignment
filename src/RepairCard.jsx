import styles from "./RepairCard.module.css";

function RepairCard({ image, title, status, date }) {
  return (
    <div className={styles.card}>
      <img src={image} alt="repair" className={styles.image} />

      <div className={styles.content}>
        <h4 className={styles.title}>{title}</h4>
        สถานะแจ้งซ้อม :
        <span className={`${styles.status} ${styles[status]}`}>
          {status}
        </span>

        <p>วันที่แจ้งซ่อม : {date}</p>
      </div>
    </div>
  );
}

export default RepairCard;
