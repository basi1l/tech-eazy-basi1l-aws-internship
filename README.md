# 📦 Parcel Tracking System – TechEazy AWS Internship Assignment

A full-stack web application to create, track, and manage parcel deliveries, developed as part of the TechEazy AWS Internship Developer Assignment. Built using Spring Boot for the backend and React.js for the frontend.

---

## 🚀 Features

- 🔧 Add a parcel with details like tracking number, customer name, address, size, and weight
- 📄 View a list of all submitted parcels in a dynamic table
- 🗑️ Delete parcels instantly
- 🔗 Real-time connection between frontend (React) and backend (Spring Boot)
- 🌐 CORS enabled for cross-origin API communication
- 🧪 Fully testable via Postman collection

---

## 🛠️ Tech Stack

| Layer     | Technology            |
|-----------|------------------------|
| Frontend  | React.js, Axios        |
| Backend   | Spring Boot (Java 17+), Maven |
| Communication | REST API (JSON over HTTP) |
| Deployment | Localhost (Ports 3000 & 8080) |

---

## 📁 Project Structure

tech_eazy_basi1l_aws_internship/
├── backend/ # Spring Boot app
│ ├── src/
│ ├── pom.xml
│ └── ...
├── frontend/ # React.js app
│ ├── src/
│ ├── public/
│ ├── package.json
│ └── ...
├── resources/ # Postman collection (optional)
│ └── postman_collection.json
├── assets/ # Screenshots
│ ├── form.png
│ ├── table.png
│ └── postman.png
└── README.md


---

## 💻 How to Run the Project

### 🌀 Backend (Spring Boot)

1. Open terminal in backend directory: cd backend


2. Run the server: ./mvnw spring-boot:run
  
3. The backend will start on: http://localhost:8080  cd frontend
4.  Install dependencies: npm install
5.  start the React development server:npm start
6.  Access the app at: http://localhost:3000

---

## 🔗 API Endpoints

| Method | Endpoint              | Description         |
|--------|-----------------------|---------------------|
| GET    | /parcels              | Fetch all parcels   |
| POST   | /parcels              | Create new parcel   |
| GET    | /parcels/{id}         | Get single parcel   |
| PUT    | /parcels/{id}         | Update parcel       |
| DELETE | /parcels/{id}         | Delete parcel       |

---

## 📸 Screenshots

### 🧾 Add Parcel Form
![Parcel Form](assets/form.png)

### 📋 Parcel List Table
![Parcel Table](assets/table.png)

### 🧪 Postman Testing
![Postman](assets/postman.png)

---

## 📤 Submission

- GitHub Repo: https://github.com/basi1l/tech-eazy-basi1l-aws-internship
- Pull Request: [Insert your PR link if applicable]
- Submitted via Google Form as instructed

---

## 🙋 Author

- 👨‍💻 Basil Binu
- 🧑‍💻 GitHub: [basi1l](https://github.com/basi1l)






