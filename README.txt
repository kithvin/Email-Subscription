✉️ Email Subscription

 Email Subscription is a clean, minimal, and responsive newsletter subscription platform built using React.js, Tailwind CSS, and Express.js. Designed for modern web teams or product landing pages, it enables seamless email capture with real-time admin notifications using Gmail. From stylish frontend interaction to a solid backend with MongoDB integration, Email Subscription makes it easy to engage your audience and grow your newsletter list.

*****************************************************************************************************************************
✨ Features

•📨 Email Subscription Form
Responsive React form with live toast feedback and graceful error handling.

•🎨 Stylish UI with Tailwind CSS
Clean, modern, and fully responsive layout with local background image support.

•🛡️ Backend with Email Alerts
Emails are stored in MongoDB, and an admin notification is sent using Nodemailer.

•⚙️ Fully Environment Configurable
Easily control SMTP credentials and Mongo URI using. env.

*****************************************************************************************************************************

🛠️ Technology Stack

    Layer	                     Tech
•Frontend	             React.js, Tailwind CSS, Axios, Hot Toast
•Backend	Express.js,   Mongoose, Nodemailer, CORS
•Database	             MongoDB (local or Atlas)
•Styling	              Tailwind CSS

*****************************************************************************************************************************

🚀 How to Run Subscribify

📦 Prerequisites
•Node.js (v18+ recommended)
•MongoDB (local or cloud)
•Gmail with App Password (for Nodemailer)

📁 Clone the Repository
git clone https://github.com/your-username/subscribify.git
cd subscribify

🔧 Backend Setup (/Backend)
1.Navigate to the Backend Folder:cd Backend
2.Create .env File

MONGO_URI=mongodb://localhost:27017/subscribifyDB
ADMIN_EMAIL=yourgmail@gmail.com
ADMIN_PASS=your_gmail_app_password

3.Install Dependencies
    npm install

4.Start the Server
    npm run server

🌐 Frontend Setup
1.Install Frontend Dependencies
   npm install

2.Run the Frontend
   npm run dev

📸 Tailwind Initialization

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init

*****************************************************************************************************************************

🌐 Deployment
* The project is live and accessible at: ()  
