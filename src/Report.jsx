import styles from "./Report.module.css";
import icon from "./assets/Icon.png";
import searchIcon from "./assets/Search.jpg";
import bg from "./assets/BG.jpg";
import RepairCard from "./RepairCard";
import chair from "./assets/BG.jpg"; 
import { useNavigate } from "react-router-dom";

function Report() {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      
      {/* ================= NAVBAR ================= */}
      <div className={styles.navbar}>
        <img src={icon} className={styles.logo} alt="icon" />

        <div className={styles.searchBox}>
          <input type="text" placeholder="Search here" />
          <img src={searchIcon} alt="search" />
        </div>

        <div className={styles.navLinks}>
          <span>Home</span>
          <span>List</span>
          <button className={styles.signin} onClick={() => navigate("/")}>
            Sign in
          </button>
          <button className={styles.signup} onClick={() => navigate("/register")}>
            Sign up
          </button>
        </div>
      </div>

      {/* ================= HERO ================= */}
      <div
        className={styles.hero}
        style={{ backgroundImage: `url(${bg})` }}
      >
        <h1>
          ระบบรายงานครุภัณฑ์เสียหายภายใน
          <br />
          ภาควิชาคอมพิวเตอร์ อาคาร ECC
        </h1>

        <button className={styles.reportBtn}>Report</button>
      </div>

      {/* ================= LIST SECTION ================= */}
      <div className={styles.listSection}>
        
        <div className={styles.content}>
          
          {/* 🔹 SIDEBAR */}
          <div className={styles.sidebar}>
            <h4>Sort by</h4>

            <p>สถานะ</p>
            <label><input type="checkbox" /> รอซ่อม</label>
            <label><input type="checkbox" /> กำลังดำเนินการ</label>
            <label><input type="checkbox" /> เสร็จสิ้น</label>

            <p>เรียง</p>
            <label><input type="checkbox" /> เก่า - ใหม่</label>
            <label><input type="checkbox" /> ใหม่ - เก่า</label>
          </div>

          {/* 🔹 RIGHT */}
          <div className={styles.rightContent}>
            <h3>รายการแจ้งซ่อมทั้งหมด</h3>

            <div className={styles.grid}>
              <RepairCard image={chair} title="เก้าอี้ ห้อง 821" status="pending" date="10 ม.ค 2568" />
              <RepairCard image={chair} title="เก้าอี้ ห้อง 821" status="success" date="10 ม.ค 2568" />
              <RepairCard image={chair} title="เก้าอี้ ห้อง 821" status="repairing" date="10 ม.ค 2568" />
              <RepairCard image={chair} title="เก้าอี้ ห้อง 821" status="pending" date="10 ม.ค 2568" />
              <RepairCard image={chair} title="เก้าอี้ ห้อง 821" status="success" date="10 ม.ค 2568" />
            </div>
          </div>

        </div>
      </div>

      {/* ================= FOOTER ================= */}
      <div className={styles.footer}>
        <p>ระบบรายงานครุภัณฑ์เสียหายภายในภาควิชาคอมพิวเตอร์ อาคาร ECC</p>
        <span>Copyright ©2025 Buffer | Privacy | Terms | Security</span>
      </div>

    </div>
  );
}

export default Report;
