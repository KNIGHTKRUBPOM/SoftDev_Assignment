import "./Login.css";
import bg from "./assets/BG.jpg";
import mailIcon from "./assets/Mail.png";
import eyeIcon from "./assets/Eyes.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { supabase } from "./supabaseClient"; // 👈 เพิ่ม

function LoginPage() {
  const navigate = useNavigate();

  // ✅ state รับค่า input
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // ✅ ฟังก์ชัน login
  const handleLogin = async () => {
    // 🔹 1. Login กับ Supabase
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert("Login failed: " + error.message);
      return;
    }

    // 🔹 2. เอา token
    const token = data.session.access_token;
    console.log("TOKEN:", token);

    // 🔹 (แนะนำ) เก็บไว้ใช้ต่อ
    localStorage.setItem("token", token);

    // 🔹 3. ส่งไป Backend.asp
    const res = await fetch("http://localhost/backend.asp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token }),
    });

    const result = await res.json();

    if (result.success) {
      navigate("/report"); // ✅ เปลี่ยนไปหน้า Report
    } else {
      alert("Backend auth failed");
    }
  };

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
          <input
            type="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)} // ✅ เพิ่ม
          />
          <img src={mailIcon} className="icon" />
        </div>

        <div className="input-box">
          <input
            type="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)} // ✅ เพิ่ม
          />
          <img src={eyeIcon} className="icon" />
        </div>

        <button className="forgot">Forgot your password?</button>

        {/* ⭐ LOGIN BUTTON */}
        <button className="login-btn" onClick={handleLogin}>
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
