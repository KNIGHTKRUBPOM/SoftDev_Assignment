import styles from "./Report.module.css";
import icon from "./assets/Icon.png";
import searchIcon from "./assets/Search.jpg";
import bg from "./assets/BG.jpg";
import RepairCard from "./RepairCard";
import { useNavigate } from "react-router-dom";

function Report() {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      
      {/* ================= NAVBAR ================= */}
      <div className={styles.navbar}>
        <img src={icon} className={styles.logo} onClick={() => navigate("/home")}alt="icon" />

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
      <div className={styles.hero}  style={{ backgroundImage: `url(${bg})` }}>
        
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
