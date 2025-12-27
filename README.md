# KAVACH – AI-Powered Counter-UAS Command & Control System

![KAVACH Dashboard Preview](assets/dashboard-preview.png)

## Overview
**KAVACH** is a futuristic, mission-critical web dashboard designed for the command and control of Counter-Unmanned Aircraft Systems (C-UAS). It provides real-time situational awareness, threat monitoring, and interceptor drone management through a high-performance, dark-mode interface tailored for defense operations.

This system integrates AI-driven analytics, live map visualization, and operational KPIs to ensure rapid response to aerial threats.

## 🚀 Key Features

### 1. Mission Overview KPIs
*   **Real-time Metrics**: Active Threats, Neutralized Count, Response Time, and System Uptime.
*   **Zone Status**: Visual indicators for "SECURE" or "ALERT" protected zone states.

### 2. Live Threat Monitoring
*   **Drone Detection**: Real-time list of detected threats with classification (e.g., DJI Mavic, Fixed Wing).
*   **Threat Intelligence**: Indicators for signal type, distance, and AI confidence scores.

### 3. AI Analytics & Sensor Fusion
*   **Fusion Confidence**: Time-series visualization of multi-sensor data accuracy.
*   **Threat Classification**: Distribution charts showing the types of aerial threats detected.

### 4. Interactive Airspace Map
*   **Live Visualization**: Leaflet-based map showing the protected zone radius.
*   **Dynamic Markers**: Real-time tracking of hostile and unidentified drones.

### 5. Interceptor Response Panel
*   **Squadron Status**: Monitoring of interceptor drones (Docked, Patrolling, Deployed).
*   **Resource Management**: Battery levels and mission success rates.

### 6. Incident & Forensic Logs
*   **Audit Trail**: Detailed timeline of system events, detections, and neutralization actions.
*   **Severity Coding**: Color-coded logs for high, medium, and low-priority events.

## 🛠️ Tech Stack

*   **Frontend**: React, Vite, Tailwind CSS
*   **Backend**: Python, Flask (Mock Data API)
*   **Visualization**: Recharts (Analytics), React-Leaflet (Maps), Lucas-React (Icons)
*   **Design**: Custom "Dark Military" theme with Neon accents

## 📦 Installation & Setup

### Prerequisites
*   Node.js (v18+)
*   Python (v3.8+)

### 1. Clone the Repository
```bash
git clone https://github.com/Chandrkant07/Kavach_dashboard.git
cd Kavach_dashboard
```

### 2. Backend Setup
The backend serves mock operational data.
```bash
# Install dependencies
pip install flask flask-cors

# Run the server
python backend/app.py
```
*Server runs on `http://localhost:5000`*

### 3. Frontend Setup
```bash
# Install dependencies
npm install

# Start development server
npm run dev
```
*Dashboard accessible at `http://localhost:5173`*

## 🎨 Design Philosophy
The UI follows a **"Dark Command Center"** aesthetic:
*   **Background**: Deep Space Black (`#0a0a0f`)
*   **Accents**: Neon Green (Success), Neon Red (Alert), Cyan (Info)
*   **Typography**: Monospace fonts for data, Sans-serif for headers
*   **UX**: High-contrast, minimized distraction, and data-density optimized.

---
*Developed for Next-Gen Defense Applications.*
