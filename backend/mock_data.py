import random
import time
from datetime import datetime, timedelta

def generate_kpis():
    return {
        "active_threats": random.randint(0, 5),
        "threats_neutralized": random.randint(10, 50),
        "avg_response_time": round(random.uniform(1.5, 4.0), 2),
        "ai_accuracy": round(random.uniform(92.0, 99.9), 1),
        "system_uptime": 99.98,
        "protected_zone_status": "ALERT" if random.random() > 0.8 else "SECURE"
    }

def generate_threats():
    threats = []
    num_threats = random.randint(1, 4)
    for i in range(num_threats):
        threats.append({
            "id": f"T-{random.randint(1000, 9999)}",
            "type": random.choice(["DJI Mavic", "Custom FPV", "Fixed Wing"]),
            "distance": f"{random.randint(500, 2000)}m",
            "altitude": f"{random.randint(50, 200)}m",
            "speed": f"{random.randint(10, 30)}m/s",
            "classification": random.choice(["Hostile", "Unknown", "Friendly"]),
            "confidence": f"{random.randint(85, 99)}%",
            "coordinates": [28.6139 + random.uniform(-0.01, 0.01), 77.2090 + random.uniform(-0.01, 0.01)] # Near New Delhi
        })
    return threats

def generate_analytics():
    return {
        "fusion_confidence": [
            {"time": "10:00", "value": 92},
            {"time": "10:05", "value": 95},
            {"time": "10:10", "value": 88},
            {"time": "10:15", "value": 97},
            {"time": "10:20", "value": 94},
            {"time": "10:25", "value": 98},
        ],
        "threat_types": [
            {"name": "Multirotor", "value": 45},
            {"name": "Fixed Wing", "value": 30},
            {"name": "FPV", "value": 25},
        ]
    }

def generate_interceptors():
    return [
        {"id": "INT-01", "status": "Patrolling", "battery": random.randint(40, 90), "success_rate": 98},
        {"id": "INT-02", "status": "Docked", "battery": 100, "success_rate": 95},
        {"id": "INT-03", "status": "Deployed", "battery": random.randint(20, 60), "success_rate": 99}
    ]

def generate_logs():
    logs = []
    actions = ["Drone Detected", "Signal Jammed", "Interceptor Launched", "Target Neutralized", "System Scan"]
    for i in range(5):
        logs.append({
            "id": i + 1,
            "timestamp": (datetime.now() - timedelta(minutes=i*10)).strftime("%H:%M:%S"),
            "event": random.choice(actions),
            "severity": random.choice(["High", "Medium", "Low"]),
            "evidence": "Log-" + str(random.randint(100, 999))
        })
    return logs
