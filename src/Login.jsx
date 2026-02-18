import "./Login.css";
import bg from "./assets/BG.jpg";
import mailIcon from "./assets/Mail.png";
import eyeIcon from "./assets/Eyes.png";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();
  
  return (
    <div
      className="container"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* LEFT */}
      <div className="overlay">
        <p>We happy to help</p>
        <h1>WELCOME</h1>
        <div className="line"></div>
      </div>

      {/* RIGHT */}
      <div className="right">
        <h2>Login</h2>

        <div className="input-box">
          <input type="email" placeholder="Enter your email" />
          <img src={mailIcon} className="icon" />
        </div>

        <div className="input-box">
          <input type="password" placeholder="Enter your password" />
          <img src={eyeIcon} className="icon"/>
        </div>

        <button className="forgot">Forgot your password?</button>

        {/* ⭐ ปุ่มเปลี่ยนหน้า */}
        <button className="login-btn" onClick={() => navigate("/home")}>
          Login
        </button>

        <p className="register" onClick={() => navigate("/register")}>
          Don't have an account? <span>Register</span>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;