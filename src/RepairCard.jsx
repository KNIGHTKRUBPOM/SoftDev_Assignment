import styles from "./RepairCard.module.css";
import { useNavigate } from "react-router-dom";  // 👈 เพิ่ม

function RepairCard({ image, title, status, date }) {
  const navigate = useNavigate(); // เพิ่ม

  return (
    <div
      className={styles.card}
      onClick={() => navigate("/detail")} // กดแล้วไปหน้าอื่น
    >
      <img src={image} alt="repair" className={styles.image} />

      <div className={styles.content}>
        <h4 className={styles.title}>{title}</h4>

        <p>
          สถานะแจ้งซ่อม :
          <span className={`${styles.status} ${styles[status]}`}>
            {status}
          </span>
        </p>

        <p>วันที่แจ้งซ่อม : {date}</p>
      </div>
    </div>
  );
}

export default RepairCard;
