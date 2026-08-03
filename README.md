# CRM360 - Customer Relationship Management System

![CRM360 Logo](https://via.placeholder.com/900x300?text=CRM360)

## 📌 Project Overview

CRM360 is a Customer Relationship Management (CRM) system designed to help businesses manage customer information, leads, tasks, and user activities in a centralized platform.

The application provides secure authentication, role-based access control, and RESTful APIs for managing CRM operations efficiently.

---

## 🚀 Features

### 🔐 Authentication & Security

* User Registration
* User Login
* JWT-based Authentication
* Password Encryption using bcrypt
* Role-Based Access Control

### 👥 User Management

* Admin, Manager, and Employee roles
* Secure user access management

### 🏢 Customer Management

* Add new customers
* View customer details
* Update customer information
* Delete customer records
* Search customers

### 📊 Lead Management

* Create and manage leads
* Track lead status
* Convert leads into customers

### ✅ Task Management

* Create tasks
* Assign tasks
* Track task completion

### 📈 Dashboard

* Customer statistics
* Lead overview
* Business activity summary

---

# 🛠️ Technology Stack

## Backend

* Node.js
* Express.js

## Database

* MongoDB Atlas

## Authentication

* JSON Web Token (JWT)
* bcrypt.js

## Tools

* Postman
* Git & GitHub
* Visual Studio Code

---

# 📂 Project Structure

```
CRM360
│
├── backend
│   │
│   ├── config
│   │   └── db.js
│   │
│   ├── controllers
│   │   ├── authController.js
│   │   ├── customerController.js
│   │   ├── leadController.js
│   │   ├── dashboardController.js
│   │   └── taskController.js
│   │
│   ├── middleware
│   │   ├── authMiddleware.js
│   │   └── roleMiddleware.js
│   │
│   ├── models
│   │   ├── User.js
│   │   ├── Customer.js
│   │   ├── Lead.js
│   │   └── Task.js
│   │
│   ├── routes
│   │   ├── authRoutes.js
│   │   ├── customerRoutes.js
│   │   ├── leadRoutes.js
│   │   ├── dashboardRoutes.js
│   │   └── taskRoutes.js
│   │
│   ├── server.js
│   ├── package.json
│   ├── package-lock.json
│   └── .env
│
└── README.md
```

---

# ⚙️ Installation & Setup

## 1. Clone Repository

```bash
git clone YOUR_REPOSITORY_URL
```

## 2. Navigate to Backend

```bash
cd CRM360/backend
```

## 3. Install Dependencies

```bash
npm install
```

## 4. Create Environment File

Create a `.env` file inside the backend folder:

```
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

## 5. Start Server

Development mode:

```bash
npm run dev
```

Server will run on:

```
http://localhost:5000
```

---

# 🔗 API Endpoints

## Authentication

### Register User

```
POST /api/auth/register
```

### Login User

```
POST /api/auth/login
```

---

## Customers

```
GET    /api/customers
POST   /api/customers
PUT    /api/customers/:id
DELETE /api/customers/:id
```

---

## Leads

```
GET    /api/leads
POST   /api/leads
PUT    /api/leads/:id
DELETE /api/leads/:id
```

---

# 🔒 Security Implementation

CRM360 implements:

* Encrypted passwords
* JWT token authentication
* Protected API routes
* Role-based permissions

---

# 🧪 Testing

API testing is performed using:

* Postman

Tested functionalities:

* User Registration
* User Login
* Authentication
* Protected Routes
* CRUD Operations

---

# 🔮 Future Enhancements

* React.js frontend dashboard
* Email notifications
* AI-based lead prediction
* Advanced analytics
* Mobile application support

---

# 👨‍💻 Developer

**Name:** Your Name

**Course:** Bachelor of Computer Applications (BCA)

**Project:** CRM360

---

# 📄 License

This project is developed for educational and internship purposes.
