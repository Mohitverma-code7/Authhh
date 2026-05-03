Here is your **complete production-ready `README.md` (clean, polished, GitHub-ready)** 👇
Just copy-paste directly.

---

```md
# ⚡ AUTHH — Full Stack Authentication System

AUTHH is a modern full-stack authentication system built using **React (Vite)** for the frontend and **Node.js + Express** for the backend.

It demonstrates real-world authentication flow including **register, login, logout, and current user session management**, using a proxy backend architecture that communicates with an external authentication API.

---

## 🚀 Live Demo

- 🌐 Frontend:  https://authhh-pi.vercel.app/


---



## ✨ Features

- 🔐 User Registration (username, email, password, role)
- 🔑 Secure Login system
- 👤 Get current logged-in user
- 🚪 Logout functionality
- 🧠 Global authentication state (React Context API)
- ⚡ Axios-based API layer
- 🌐 CORS configured for frontend-backend communication
- 🛡️ Helmet security middleware (CSP enabled)
- 🎨 Neo-Brutalism UI design
- 🔄 Proxy backend architecture

---

## 🧱 Tech Stack

### Frontend
- React (Vite)
- Context API
- Axios
- Tailwind CSS (Neo-Brutalism UI)

### Backend
- Node.js
- Express.js
- Axios (API proxy)
- Helmet
- CORS

### External API
- https://api.freeapi.app

---

## 🏗️ Project Architecture

```

React Frontend
↓
Express Backend (Proxy Server)
↓
FreeAPI Authentication Service
↓
Response sent back to frontend

````

---

## ⚙️ Installation & Setup

### 1. Clone Repository

```bash
git clone https://github.com/your-username/authh.git
cd authh
````

---

## 🖥️ Backend Setup

```bash
cd backend
npm install
```

### Run backend

```bash
node server.js
```

Backend runs at:

```
http://localhost:3000
```

---

## 🌐 Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at:

```
http://localhost:5173
```

---

## 🔐 API Endpoints

| Method | Endpoint            | Description        |
| ------ | ------------------- | ------------------ |
| POST   | /users/register     | Register new user  |
| POST   | /users/login        | Login user         |
| GET    | /users/current-user | Get logged-in user |
| POST   | /users/logout       | Logout user        |

---

## 🔧 Environment Variables

Backend `.env` (optional):

```env
PORT=3000
```

---

## 🎨 UI Design (Neo-Brutalism)

This project uses a bold Neo-Brutalism design system:

* Thick black borders
* Sharp shadows
* Bright solid colors
* Minimal but aggressive layout
* Modern SaaS feel

---

## 🔥 What I Learned

* Authentication flow in real-world apps
* Cookie-based session handling
* Proxy backend architecture
* CORS & security setup
* React Context API state management
* Deployment (Vercel + Render)

---

## 🚀 Deployment Guide

### Frontend (Vercel)

* Push frontend to GitHub
* Import repo in Vercel
* Build command:

```
npm run build
```

* Output directory:

```
dist
```

---

### Backend (Render)

* Create Web Service
* Start command:

```
node server.js
```

---

## 🐛 Common Issues

### ❌ CORS Error

Fix in backend:

```js
cors({
  origin: true,
  credentials: true
})
```

---

### ❌ Cookies not working

Frontend must use:

```js
withCredentials: true
```

---

## 📁 Project Structure

```
authh/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   └── api/
│
├── backend/
│   ├── server.js
│
└── README.md
```

---

## 👨‍💻 Author

Made with ⚡ by **Mohit Kumar**

---

## 📜 License

This project is open-source and free to use.

```

---

If you want next upgrade, I can also:
- 🔥 make it “viral GitHub README” (badges, GIFs, animated headers)
- 🚀 turn it into portfolio project description
- 🧠 fix your Render + Vercel deployment cleanly
- 💀 or make your UI look like Stripe-level SaaS

Just tell me 👍
```
