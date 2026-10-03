# 📋 Issue Reporting & Authentication Portal
### *Software Development Practicum & Modern React SPA*

[![React 19](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![React Router](https://img.shields.io/badge/React_Router-v7.13-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)](https://reactrouter.com/)
[![Vite](https://img.shields.io/badge/Vite-7.3-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

A Single Page Application (SPA) engineered with **React 19**, **React Router v7**, and **Vite** demonstrating client-side authentication routing, interactive form validation, and an issue/incident reporting management dashboard.

---

## 🌟 Key Features

- 🔐 **Authentication Flow:** Dedicated Login and Registration views with client-side credential verification and route protection.
- 📝 **Incident & Issue Reporting:** Interactive submission form supporting problem categorization, severity rating, and descriptive detail inputs.
- ⚡ **React 19 & React Router 7:** Utilizes modern declarative routing with nested layout structures and instant view switching without full-page reloads.
- 📱 **Responsive Interface:** Custom component styling ensuring seamless usability across desktop and mobile form factors.

---

## 🛠️ Tech Stack

| Technology | Role |
| :--- | :--- |
| **React 19** | Component-driven UI library & state management hooks (`useState`, `useEffect`) |
| **React Router v7** | Client-side routing, route guard navigation, and programmatic redirects |
| **Vite 7** | Next-generation frontend tooling and Hot Module Replacement (HMR) |
| **CSS3** | Modern responsive layouts and interactive transitions |

---

## 📁 Project Structure

```text
src/
├── App.jsx              # Application routing table (Routes & Route configuration)
├── main.jsx             # React DOM root mounting and BrowserRouter provider
├── Login.jsx            # User authentication sign-in screen
├── Register.jsx         # New user registration screen
├── Report.jsx           # Issue reporting and tracking dashboard
├── App.css              # Global layout and UI theme styles
└── index.css            # Base stylesheet reset
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18.0.0 or later)
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/KNIGHTKRUBPOM/SoftDev_Assignment.git

# Navigate to project directory
cd SoftDev_Assignment

# Install dependencies
npm install
```

### Development
```bash
npm run dev
```
Open your browser at `http://localhost:5173`.

### Production Build
```bash
npm run build
```

---

## 📄 License
This project is open-source under the [MIT License](LICENSE).
