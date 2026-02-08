Chemical Equipment Parameter Visualizer

A Hybrid Web + Desktop Application** for uploading, analyzing, and visualizing chemical equipment operating parameters using a **single Django backend** and **two frontends (Web + Desktop)**.

Project Overview

The Chemical Equipment Parameter Visualizer allows users to upload a CSV file containing chemical equipment data (such as pumps, reactors, heat exchangers, etc.). The backend processes the data, computes summary statistics, and exposes them via REST APIs.

Both:
Web Application (React + Chart.js)
Desktop Application (PyQt5 + Matplotlib)
consume the same backend APIs to ensure consistency in data, analytics, and visualization.


Tech Stack

| Layer              | Technology                    | Purpose                    |
| ------------------ | ----------------------------- | -------------------------- |
| Frontend (Web)     | React.js, Chart.js            | Data table & charts        |
| Frontend (Desktop) | PyQt5, Matplotlib             | Desktop visualization      |
| Backend            | Django, Django REST Framework | API & data processing      |
| Data Handling      | Pandas                        | CSV parsing & analytics    |
| Database           | SQLite                        | Store last 5 datasets      |
| Authentication     | DRF Token / JWT               | Secure API access          |
| Reporting          | ReportLab                     | PDF report generation      |
| Version Control    | Git & GitHub                  | Collaboration & submission |

Key Features

*  CSV upload from Web and Desktop apps
*  Automatic data analysis using Pandas
*  Interactive charts (Web & Desktop)
*  History management (last 5 uploads)
*  PDF report generation
*  Basic authentication
*  Common backend for both frontends

Sample CSV Format

```csv
Equipment Name,Type,Flowrate,Pressure,Temperature
Pump-1,Pump,120,5.2,80
Reactor-1,Reactor,300,15.0,250
HeatExchanger-1,Heat Exchanger,200,8.5,150
```

A sample file `sample_equipment_data.csv` is included in the repository for testing.

---

## 📂 Project Structure

```
Chemical-Equipment-Visualizer/
├── backend/                 # Django + DRF backend
├── web/                     # React web frontend
├── desktop/                 # PyQt5 desktop application
├── sample_equipment_data.csv
├── README.md
└── demo_video.mp4
```

---

## ⚙️ Backend Setup (Django)

### 1️⃣ Create Virtual Environment

```bash
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
```

### 2 Install Dependencies

```bash
cd backend
pip install -r requirements.txt
```

### 3️⃣ Run Migrations

```bash
python manage.py migrate
```

### 4️⃣ Create Superuser (Optional)

```bash
python manage.py createsuperuser
```

### 5️⃣ Start Server

```bash
python manage.py runserver
```

Backend runs at:

```
http://127.0.0.1:8000/
```

---

## 🌐 Web Frontend Setup (React)

```bash
cd web
npm install
npm start
```

Web app runs at:

```
http://localhost:3000/
```

---

## 🖥️ Desktop Application Setup (PyQt5)

### 1️⃣ Install Desktop Dependencies

```bash
cd desktop
pip install -r requirements.txt
```

### 2️⃣ Run Desktop App

```bash
python main.py

## 🔗 API Endpoints

| Endpoint        | Method | Description              |
| --------------- | ------ | ------------------------ |
| `/api/login/`   | POST   | User authentication      |
| `/api/upload/`  | POST   | Upload CSV file          |
| `/api/summary/` | GET    | Latest dataset summary   |
| `/api/history/` | GET    | Last 5 uploaded datasets |
| `/api/report/`  | GET    | Download PDF report      |

## 📊 Summary Statistics Generated

* Total number of equipment
* Average flowrate
* Average pressure
* Average temperature
* Equipment type distribution

## 📄 PDF Report Includes

* Dataset name & timestamp
* Summary statistics
* Equipment type distribution chart

## 🎥 Demo Video

A **2–3 minute demo video** is included demonstrating:
1. Web app workflow
2. Desktop app workflow
3. CSV upload & visualization
4. PDF report generation


## 🚀 Optional Deployment
The web application can be deployed using:
* Render
* Railway
* AWS EC2
* Vercel (Frontend only)

## 🧪 Testing

* Tested with provided sample CSV
* Verified API access from both Web & Desktop clients
* Validated history limit (max 5 datasets)

## 👤 Author
**Prasad**
Chemical Equipment Parameter Visualizer Project
