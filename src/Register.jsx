import styles from "./Register.module.css";
import mailIcon from "./assets/Mail.png";
import eyeIcon from "./assets/Eyes.png";
import bgImage from "./assets/BG.jpg";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* LEFT */}
      <div className={styles.left}>
        <h1 className={styles.title}>Sign up</h1>

        <div className={styles.inputBox}>
          <input type="text" placeholder="Enter your email" />
          <img src={mailIcon} />
        </div>

        <div className={styles.inputBox}>
          <input type="password" placeholder="Create a password" />
          <img src={eyeIcon} />
        </div>

        <div className={styles.inputBox}>
          <input type="password" placeholder="Confirm your password" />
          <img src={eyeIcon} />
        </div>

        <button className={styles.button} onClick={() => navigate("/")} >Sign up</button>

        <p className={styles.loginText}>
          Already have an account?{" "}
          <span onClick={() => navigate("/")}>Login</span>
        </p>

      </div>

      {/* RIGHT */}
      <div className={styles.right}>
        <div className={styles.text}>
          <h1>Hello, Friend!</h1>
          <h2>Create an account</h2>
          <div className={styles.line}></div>
        </div>
      </div>
    </div>
  );
}

export default Register;
