import { useState } from "react";
import styles from "./Report.module.css";
import icon from "./assets/Icon.png";
import searchIcon from "./assets/Search.jpg";
import bg from "./assets/BG.jpg";
import engineerIcon from "./assets/Engineer.png";
import maintainIcon from "./assets/Maintain.png";
import locationIcon from "./assets/Location.png";
import closeIcon from "./assets/Close.png";
import RepairCard from "./RepairCard";
import { useNavigate } from "react-router-dom";

// ================= DETAIL POPUP COMPONENT =================
function Detail({ item, onClose }) {
  if (!item) return null;

  const statusLabel = {
    repairing: "กำลังดำเนินการซ่อมแซม",
    success: "เสร็จสิ้น",
    pending: "รอการอนุมัติ",
  };

  const statusColor = {
    repairing: "#ef4444",
    success: "#22c55e",
    pending: "#ffa500",
  };

  return (
    <div className={styles.detailWrapper} onClick={onClose}>
      <div className={styles.detailCard} onClick={(e) => e.stopPropagation()}>

        {/* ปุ่ม Close มุมขวาบน */}
        <button className={styles.closeBtnIcon} onClick={onClose}>
          <img src={closeIcon} alt="close" />
        </button>

        {/* รูปภาพเต็มความกว้าง */}
        <div className={styles.detailImageWrapper}>
          <img src={item.image} alt={item.title} className={styles.detailImage} />
          <div
            className={styles.detailStatusBadge}
            style={{ background: statusColor[item.status] ?? "#f59e0b" }}
          >
            {statusLabel[item.status] ?? item.status}
          </div>
        </div>

        {/* เนื้อหา */}
        <div className={styles.detailBody}>
          <h3 className={styles.detailTitle}>{item.title}</h3>
          <p className={styles.detailMeta}>เลขครุภัณฑ์ : {item.assetNo ?? "Unknow"}</p>
          <p className={styles.detailMeta}>วันที่แจ้งซ่อม : {item.date}</p>

          <hr className={styles.detailDivider} />

          <div className={styles.section}>
            <p className={styles.sectionTitle}>ผู้แจ้งรายงานปัญหา</p>
            <div className={styles.row}>
              <div className={styles.iconCircle}>
                <img src={engineerIcon} alt="reporter" />
              </div>
              <div>
                <span style={{ fontSize: "16px", fontWeight: 600 }}>{item.reporterId ?? "Unknow"}</span>
                <span style={{ fontSize: "14px", color: "#888", marginLeft: "6px" }}>
                  ({item.reporterName ?? "Unknow"})
                </span>
              </div>
            </div>
          </div>

          <hr className={styles.detailDivider} />

          <div className={styles.section}>
            <p className={styles.sectionTitle}>ข้อมูลการดำเนินการ</p>
            <div className={styles.row}>
              <div className={styles.iconCircle}>
                <img src={maintainIcon} alt="status" />
              </div>
              <div>
                <span style={{ fontSize: "16px", color: statusColor[item.status] ?? "#f59e0b", fontWeight: "700" }}>
                  {statusLabel[item.status] ?? item.status}
                </span>
                <br />
                <span style={{ fontSize: "13px", color: "#888" }}>{item.updatedAt ?? "Unknow"}</span>
              </div>
            </div>
          </div>

          <hr className={styles.detailDivider} />

          <div className={styles.section}>
            <p className={styles.sectionTitle}>ที่อยู่ในการซ่อมบำรุง</p>
            <div className={styles.row}>
              <div className={styles.iconCircle}>
                <img src={locationIcon} alt="location" />
              </div>
              <span style={{ fontSize: "15px", color: "#444" }}>
                {item.location ?? "Unknow"}
              </span>
            </div>
          </div>

          <button className={styles.closeBtn} onClick={onClose}>
            ปิดหน้าต่าง
          </button>
        </div>

      </div>
    </div>
  );
}

// ================= REPORT COMPONENT =================
function Report() {
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState(null);

  const repairItems = [
    {
      image: "https://down-th.img.susercontent.com/file/775968b8ea24bad829f0ef7da0e6cbe3",
      title: "เก้าอี้ ห้อง 821",
      status: "pending",
      date: "10 ม.ค 2568",
      assetNo: "099-002-0001",
      reporterId: "67015155",
      reporterName: "อธิชนัน จันทมิตร",
      updatedAt: "05-12-2025 13:16",
      location: "ห้อง 821 ชั้น 8 ตึก ECC วิศวกรรมคอมพิวเตอร์",
    },
    {
      image: "https://www.dailynews.co.th/wp-content/uploads/2023/07/S__19194144.jpg",
      title: "เก้าอี้ ห้อง 821",
      status: "success",
      date: "10 ม.ค 2568",
      assetNo: "099-002-0002",
      reporterId: "67015167",
      reporterName: "ภาทร สมแสน",
      updatedAt: "06-12-2025 10:00",
      location: "ห้อง 821 ชั้น 8 ตึก ECC วิศวกรรมคอมพิวเตอร์",
    },
    {
      image: "https://lh5.googleusercontent.com/proxy/4tBQNdq4m4owky7IsOdMw-M53vqPTgKu7i5kuijuKag0IQgIyuafEcmgWKBbE2nidlV2Clxi8KLMI4xEO1ul5TXo8bYsT3VXGhp39CH-3YG9xLQqAk2gyUltCHSVrqZAQEIFQKiQXdImUziYmpkC5jAYnjOFQUTUCeo",
      title: "เก้าอี้ ห้อง 821",
      status: "repairing",
      date: "10 ม.ค 2568",
      assetNo: "099-002-0003",
      reporterId: "67015157",
      reporterName: "มานี มีใจ",
      updatedAt: "07-12-2025 09:30",
      location: "ห้อง 821 ชั้น 8 ตึก ECC วิศวกรรมคอมพิวเตอร์",
    },
    {
      image: "https://hilight.kapook.com/img_cms2/user/rungtip/2019/3_99.jpg",
      title: "เก้าอี้ ห้อง 821",
      status: "pending",
      date: "10 ม.ค 2568",
      // assetNo: "099-002-0004", // ทดสอบกรณีไม่มีเลขครุภัณฑ์
      reporterId: "67015158",
      reporterName: "วิชัย รักดี",
      updatedAt: "08-12-2025 14:00",
      location: "ห้อง 821 ชั้น 8 ตึก ECC วิศวกรรมคอมพิวเตอร์",
    },
    {
      image: "https://preview.redd.it/i-broke-my-chair-while-gaming-v0-z6mnqcbkiv1f1.jpeg?width=640&crop=smart&auto=webp&s=196201972d9f5f2e82f681f79d881509081a6458",
      title: "เก้าอี้ ห้อง 821",
      status: "success",
      date: "10 ม.ค 2568",
      assetNo: "099-002-0005",
      reporterId: "67015159",
      reporterName: "สุดา สวยงาม",
      updatedAt: "09-12-2025 11:00",
      location: "ห้อง 821 ชั้น 8 ตึก ECC วิศวกรรมคอมพิวเตอร์",
    },
  ];

  return (
    <div className={styles.container}>

      {/* ================= NAVBAR ================= */}
      <div className={styles.navbar}>
        <img src={icon} className={styles.logo} onClick={() => navigate("/home")} alt="icon" />

        <div className={styles.searchBox}>
          <input type="text" placeholder="Search here" />
          <img src={searchIcon} alt="search" />
        </div>

        <div className={styles.navLinks}>
          <span onClick={() => navigate("/home")}>Home</span>
          <span>List</span>
          <button className={styles.signin} onClick={() => navigate("/")}>Sign in</button>
          <button className={styles.signup} onClick={() => navigate("/register")}>Sign up</button>
        </div>
      </div>

      {/* ================= HERO ================= */}
      <div className={styles.hero} style={{ backgroundImage: `url(${bg})` }}>
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

          {/* SIDEBAR */}
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

          {/* RIGHT CONTENT */}
          <div className={styles.rightContent}>
            <h3>รายการแจ้งซ่อมทั้งหมด</h3>

            <div className={styles.grid}>
              {repairItems.map((item, index) => (
                <div key={index} onClick={() => setSelectedItem(item)} style={{ cursor: "pointer" }}>
                  <RepairCard
                    image={item.image}
                    title={item.title}
                    status={item.status}
                    date={item.date}
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ================= FOOTER ================= */}
      <div className={styles.footer}>
        <p>ระบบรายงานครุภัณฑ์เสียหายภายในภาควิชาคอมพิวเตอร์ อาคาร ECC</p>
        <span>Copyright ©2025 Buffer | Privacy | Terms | Security</span>
      </div>

      {/* ================= DETAIL MODAL ================= */}
      {selectedItem && (
        <Detail item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}

    </div>
  );
}

export default Report;