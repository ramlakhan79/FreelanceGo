# 🧑‍💻 FreelanceGo - MERN Web App

FreelanceGo is a MERN (MongoDB, Express, React, Node.js) stack web application that connects freelancers with clients. It supports features like authentication, job postings, payments (via Razorpay), real-time alerts, and more.

---

## 🚀 How to Run FreelanceGo Project Locally (Step-by-Step)

### 🪰 Prerequisites

Before you begin, make sure you have these installed:

- [Node.js & npm](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community) or MongoDB Atlas
- [Git](https://git-scm.com/)
- [VS Code](https://code.visualstudio.com/)

---

## 📅 Step 1: Clone the Repository

```bash
git clone https://github.com/ramlakhan79/freelancego.git
cd freelancego
```

---

## 🛠️ Step 2: Set Up the Backend

1. Navigate to the backend folder (server):

```bash
cd server
```

2. Install backend dependencies:

```bash
npm install
```

3. Create a `.env` file inside the server folder and add:

```bash
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

- Replace `your_mongodb_connection_string` with your local MongoDB or Atlas URI.
- Replace `your_jwt_secret` with a strong secret key.

4. Start the backend server:

```bash
npm start
```

✅ Backend runs at: http://localhost:5000

---

## 💻 Step 3: Set Up the Frontend

1. Open a new terminal/tab.
2. Navigate to the client folder:

```bash
cd client
```

3. Install frontend dependencies:

```bash
npm install
```

4. Start the React development server:

```bash
npm start
```

✅ Frontend runs at: http://localhost:3000

---

## ✅ Step 4: Access the Application

- Frontend: [http://localhost:3000](http://localhost:3000)
- Backend API: [http://localhost:5000/api](http://localhost:5000/api)

---

## 📁 Google Drive Link

Access documentation and reports:

👉 [Google Drive - Project Docs](https://drive.google.com/drive/u/0/folders/14dyfvlVutqysNWqoi-9tnf1DdbcYvhwt)

**Includes:**

✅ Project Report (PDF)  
✅ Project Presentation (PPT)


