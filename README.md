# 💼 FreelanceGo

A full-stack freelance marketplace platform built using **MERN Stack** (MongoDB, Express, React, NodeJS).

---

## 🛠 Tech Stack

- **Frontend:** React, React Router, Material UI, Styled Components, Framer Motion, Axios, Yup, Formik, Swiper
- **Backend:** Node.js, Express.js, MongoDB, Mongoose
- **Authentication:** JWT, bcryptjs
- **Payment Gateway:** Razorpay
- **Communication:** Twilio (OTP)

---

## ⚙️ How to Run This Project Locally

### 📁 Step 1: Clone the Repository

```bash
git clone https://github.com/your-username/freelancego.git
cd freelancego
🔧 Backend Setup
📂 Step 2: Navigate to the Backend Folder (if separated)
If your backend code is inside a folder like backend, use:

cd backend
If everything is in root, skip this step.

📦 Step 3: Install Backend Dependencies

npm install
🧪 Step 4: Create a .env file in the backend folder
env

PORT=5000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
TWILIO_ACCOUNT_SID=your_twilio_sid
TWILIO_AUTH_TOKEN=your_twilio_token
TWILIO_PHONE_NUMBER=your_twilio_phone
▶️ Step 5: Run Backend Server

npm start
The backend will be running at: http://localhost:5000

🌐 Frontend Setup
📂 Step 6: Navigate to the Frontend Folder

cd ../frontend
📦 Step 7: Install Frontend Dependencies

npm install
🌍 Step 8: Start React Frontend

npm start
The frontend will be available at: http://localhost:3000

✅ Make sure this line exists in frontend/package.json:

"proxy": "http://localhost:5000"
This ensures API calls from frontend redirect to backend.

🚦 Available Scripts
🔹 Backend:
npm start — Starts the backend Express server.

🔹 Frontend:
npm start — Runs the frontend React app.

npm run build — Builds the frontend for production.

npm test — Launches the test runner.

🧾 Folder Structure (Optional)

freelancego/
├── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   └── server.js
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
├── README.md
└── .env
