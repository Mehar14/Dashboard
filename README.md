# 🚀 Angular + Node.js + MongoDB Anomaly Detection Dashboard

This project is a full-stack web application built with **Angular (Frontend)**, **Node.js + Express (Backend)**, and **MongoDB + SQL Server (Database)**. The application fetches anomaly data from a mock API, displays analytics using charts, and integrates a simulated Machine Learning (ML) model.

## 📌 Features
- **Frontend (Angular)**: Dashboard displaying anomalies with charts (`ng2-charts`), responsive UI with HTTP client integration.
- **Backend (Node.js + Express)**: API Endpoint (`GET /api/anomalies?startDate=YYYY-MM-DD&endDate=YYYY-MM-DD`), JWT-based authentication, connects to MongoDB and SQL Server.
- **ML Integration (Simulation)**: Calls a mock ML API (`POST /ml/predict`), stores predictions in MongoDB.

## 🛠️ Setup & Installation

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/yourusername/anomaly-detection.git
cd anomaly-detection
