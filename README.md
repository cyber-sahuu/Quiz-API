# SAHU Quiz API 

## 🚀 Deployment (Deploy Anywhere)

| Platform | Status | Action |
| :--- | :---: | :--- |
| **Render** | ![Render](https://img.shields.io/badge/RENDER-46E3B7?style=flat-square&logo=render&logoColor=black) | [![Deploy on Render](https://img.shields.io/badge/Deploy-Click_Here-black?style=flat-square)](https://render.com) |
| **Railway** | ![Railway](https://img.shields.io/badge/RAILWAY-0B0D0E?style=flat-square&logo=railway&logoColor=white) | [![Deploy on Railway](https://img.shields.io/badge/Deploy-Click_Here-black?style=flat-square)](https://railway.app) |
| **Vercel** | ![Vercel](https://img.shields.io/badge/VERCEL-000000?style=flat-square&logo=vercel&logoColor=white) | [![Deploy on Vercel](https://img.shields.io/badge/Deploy-Click_Here-black?style=flat-square)](https://vercel.com) |

---

A fast, lightweight, and scalable **Quiz API** built with **Node.js & Express**. It is specifically optimized to run on **Hosting** and designed for **Messenger Chat Bot systems**.

---

## 📌 Overview

This Quiz API is designed with the following goals:

- 🤖 **Chat Bot Friendly:** Easily integrates with Messenger, Telegram, or WhatsApp bots.
- 🔁 **Smart Logic:** Includes a "No-repeat" logic to prevent serving the same question twice in a session.
- ⚡ **High Performance:** Fast startup time and low latency response.
- ☁️ **Server Friendly:** optimized for free hosting services and low-resource environments.
- 📂 **No Database Setup:** Uses a lightweight JSON-based database (lowdb), so no MongoDB or SQL setup is required.

---

## 🚀 Features

- ✅ **Get Quiz:** API to fetch random quiz questions.
- ✅ **Answer Check:** Automated system to verify user answers.
- ✅ **Anti-Repeat:** Session-based duplicate question prevention.
- ✅ **Security:** Basic security using Helmet and Rate Limiting.
- ✅ **CORS:** Cross-Origin Resource Sharing enabled.

---

## 🔗 API Endpoints

Call these endpoints from your Bot or Frontend application:

### 1. Fetch Question
`GET /quiz`
- Returns a random question and options from the server.
- Provides a `sessionID` which is required to verify the answer later.

### 2. Verify Answer
`POST /quiz/answer`
- **Body:** `{ "sessionID": "...", "answer": "A" }`
- Checks if the submitted answer is correct or wrong and returns the correct answer if wrong.

---

## 🛠 Tech Stack

- **Runtime:** Node.js (>= 18.x)
- **Framework:** Express.js
- **Database:** lowdb (JSON file)
- **Utilities:** UUID (Session), Helmet (Security), CORS

---

## 📦 Installation

Run the following commands step-by-step in your terminal:

### 1️⃣ Termux / Linux Setup

```bash
pkg update && pkg upgrade -y
pkg install nodejs git -y
```

Check Node version:

```bash
node -v
```

---

### 2️⃣ Clone Project

```bash
git clone https://github.com/YOUR_USERNAME/quiz-api
cd QUIZ-API
```

---

### 3️⃣ Install Dependencies

```bash
npm install
```

---

## ▶️ Run the Server

### Option 1: Using npm
```bash
npm start
```

### Option 2: Direct Node run
```bash
node index.js
```

Server will start on the default port.
