#!/usr/bin/env python3
"""
Python REST API Backend Server
Technologies: Python 3, SQLite / MySQL Database Engine, HTTP REST Service
Features: ATS Smart Resume Analyzer, Food Order Delivery API, Skills & Contact APIs
"""

import json
import os
import re
import sqlite3
import time
from http.server import HTTPServer, BaseHTTPRequestHandler
from urllib.parse import urlparse

PORT = 8000
DB_FILE = os.path.join(os.path.dirname(__file__), "portfolio_db.sqlite")

def init_database():
    """Initialize local database with seed data for ATS Resume & Food Delivery applications."""
    conn = sqlite3.connect(DB_FILE)
    cursor = conn.cursor()
    
    # Create projects table
    cursor.execute("""
    CREATE TABLE IF NOT EXISTS projects (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT,
        category TEXT,
        description TEXT,
        tech_stack TEXT,
        features TEXT,
        github_url TEXT
    )
    """)
    
    # Create food_items table
    cursor.execute("""
    CREATE TABLE IF NOT EXISTS food_items (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        category TEXT,
        price REAL,
        rating REAL,
        description TEXT,
        image_url TEXT
    )
    """)

    # Create food_orders table
    cursor.execute("""
    CREATE TABLE IF NOT EXISTS food_orders (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        customer_name TEXT,
        customer_address TEXT,
        total_amount REAL,
        order_items TEXT,
        status TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
    """)

    # Create contact_messages table
    cursor.execute("""
    CREATE TABLE IF NOT EXISTS contact_messages (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        sender_name TEXT,
        sender_email TEXT,
        subject TEXT,
        message TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
    """)

    # Seed Projects
    cursor.execute("SELECT COUNT(*) FROM projects")
    if cursor.fetchone()[0] == 0:
        projects_data = [
            (
                "ATS Smart Resume Analyzer & Scorer",
                "Python & React Application",
                "An AI/NLP powered ATS resume scoring application built with React frontend and Python backend API. Calculates keyword match percentage, formatting suitability, and job description alignment.",
                "HTML5, CSS3, JavaScript, React, Python, NLP, REST API",
                "Resume Parsing, Keyword Density Check, Match Score Generator, Interactive PDF/Text Upload, Section Breakdown",
                "https://github.com/Ramesh2200"
            ),
            (
                "FeastFlow - Food Order & Delivery Application",
                "Full Stack Web Application",
                "A modern food ordering and delivery system featuring interactive restaurant menus, real-time cart state management, order placement backend REST API, and delivery status tracking.",
                "HTML5, CSS3, JavaScript, React, Python, SQLite/MySQL, REST API",
                "Food Menu Catalog, Category Filtering, Cart State Management, Order Checkout, Live Status Tracking",
                "https://github.com/Ramesh2200"
            )
        ]
        cursor.executemany("""
        INSERT INTO projects (title, category, description, tech_stack, features, github_url)
        VALUES (?, ?, ?, ?, ?, ?)
        """, projects_data)

    # Seed Food Items
    cursor.execute("SELECT COUNT(*) FROM food_items")
    if cursor.fetchone()[0] == 0:
        food_data = [
            ("Truffle Mushroom Burger", "Gourmet Burgers", 299.00, 4.9, "Juicy patty with wild mushrooms & truffle aioli", "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=60"),
            ("Artisanal Pepperoni Pizza", "Italian & Pizza", 449.00, 4.8, "Stone-baked crust with fresh mozzarella & hot honey drizzle", "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&auto=format&fit=crop&q=60"),
            ("Avocado & Salmon Poke Bowl", "Healthy Bowls", 389.00, 4.9, "Fresh Atlantic salmon, avocado, edamame, and sesame dressing", "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=60"),
            ("Creamy Garlic Pasta", "Italian & Pasta", 349.00, 4.7, "Fettuccine in rich garlic butter & parmesan sauce", "https://images.unsplash.com/photo-1621996346565-e3d5d6281313?w=500&auto=format&fit=crop&q=60"),
            ("Matcha & Mango Boba Smoothie", "Beverages", 149.00, 4.9, "Refreshing green tea matcha blended with mango puree", "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=500&auto=format&fit=crop&q=60")
        ]
        cursor.executemany("""
        INSERT INTO food_items (name, category, price, rating, description, image_url)
        VALUES (?, ?, ?, ?, ?, ?)
        """, food_data)

    conn.commit()
    conn.close()

start_time = time.time()

def analyze_ats_resume(resume_text, job_desc):
    """Python ATS calculation logic: analyzes keyword matches and formatting score."""
    if not resume_text or not job_desc:
        return {"score": 0, "matched": [], "missing": [], "feedback": "Please enter both resume text and target job description."}
    
    # Simple NLP Tokenizer
    resume_words = set(re.findall(r'\b[a-zA-Z]{3,}\b', resume_text.lower()))
    job_words = set(re.findall(r'\b[a-zA-Z]{3,}\b', job_desc.lower()))
    
    ignore_words = {"the", "and", "for", "with", "this", "that", "from", "have", "you", "are", "will", "your", "must", "work"}
    job_keywords = [w for w in job_words if w not in ignore_words]
    
    if not job_keywords:
        return {"score": 75, "matched": ["java", "python", "react"], "missing": [], "feedback": "Standard match detected."}
        
    matched = [w for w in job_keywords if w in resume_words]
    missing = [w for w in job_keywords if w not in resume_words][:8]
    
    match_ratio = len(matched) / len(job_keywords) if job_keywords else 0.5
    score = min(98, max(45, int(match_ratio * 100 + 20)))
    
    feedback = "High compatibility! Your resume aligns well with target keywords." if score >= 80 else "Good foundation. Add missing key technical terms to boost ATS visibility."
    
    return {
        "score": score,
        "matched_count": len(matched),
        "total_keywords": len(job_keywords),
        "matched_keywords": matched[:10],
        "missing_keywords": missing,
        "feedback": feedback
    }

class PortfolioAPIHandler(BaseHTTPRequestHandler):
    def _send_cors_headers(self):
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")

    def do_OPTIONS(self):
        self.send_response(200)
        self._send_cors_headers()
        self.end_headers()

    def do_GET(self):
        parsed = urlparse(self.path)
        path = parsed.path
        
        if path in ("/api/health", "/api/status"):
            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self._send_cors_headers()
            self.end_headers()
            res = {
                "status": "online",
                "backend": "Python 3 REST API Server",
                "projects_hosted": ["ATS Smart Resume Scorer", "FeastFlow Food Order & Delivery"],
                "skills": ["HTML", "CSS", "JavaScript", "React", "Python", "Java", "Spring Boot", "JDBC", "Hibernate", "DSA"],
                "uptime_seconds": int(time.time() - start_time)
            }
            self.wfile.write(json.dumps(res).encode("utf-8"))
            
        elif path == "/api/food-menu":
            conn = sqlite3.connect(DB_FILE)
            cursor = conn.cursor()
            cursor.execute("SELECT id, name, category, price, rating, description, image_url FROM food_items")
            rows = cursor.fetchall()
            conn.close()
            
            items = [{
                "id": r[0], "name": r[1], "category": r[2], "price": r[3],
                "rating": r[4], "description": r[5], "image_url": r[6]
            } for r in rows]
            
            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self._send_cors_headers()
            self.end_headers()
            self.wfile.write(json.dumps({"success": True, "data": items}).encode("utf-8"))
            
        elif path == "/api/projects":
            conn = sqlite3.connect(DB_FILE)
            cursor = conn.cursor()
            cursor.execute("SELECT id, title, category, description, tech_stack, features, github_url FROM projects")
            rows = cursor.fetchall()
            conn.close()
            
            projects = [{
                "id": r[0], "title": r[1], "category": r[2], "description": r[3],
                "tech_stack": r[4].split(", "), "features": r[5].split(", "), "github_url": r[6]
            } for r in rows]
            
            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self._send_cors_headers()
            self.end_headers()
            self.wfile.write(json.dumps({"success": True, "data": projects}).encode("utf-8"))

        else:
            self.send_response(404)
            self._send_cors_headers()
            self.end_headers()
            self.wfile.write(json.dumps({"error": "Endpoint not found"}).encode("utf-8"))

    def do_POST(self):
        parsed = urlparse(self.path)
        content_length = int(self.headers.get('Content-Length', 0))
        body = self.rfile.read(content_length)
        
        try:
            data = json.loads(body.decode('utf-8'))
            
            if parsed.path == "/api/ats-score":
                resume_text = data.get("resume_text", "")
                job_desc = data.get("job_description", "")
                result = analyze_ats_resume(resume_text, job_desc)
                
                self.send_response(200)
                self.send_header("Content-Type", "application/json")
                self._send_cors_headers()
                self.end_headers()
                self.wfile.write(json.dumps({"success": True, "analysis": result}).encode("utf-8"))
                
            elif parsed.path == "/api/food-order":
                name = data.get("customer_name", "Valued Customer")
                address = data.get("customer_address", "Bengaluru")
                total = data.get("total_amount", 0.0)
                items = json.dumps(data.get("order_items", []))
                
                conn = sqlite3.connect(DB_FILE)
                cursor = conn.cursor()
                cursor.execute("""
                INSERT INTO food_orders (customer_name, customer_address, total_amount, order_items, status)
                VALUES (?, ?, ?, ?, ?)
                """, (name, address, total, items, "Out for Delivery 🚀"))
                conn.commit()
                order_id = cursor.lastrowid
                conn.close()
                
                self.send_response(201)
                self.send_header("Content-Type", "application/json")
                self._send_cors_headers()
                self.end_headers()
                res = {
                    "success": True,
                    "order_id": f"ORD-{order_id:04d}",
                    "status": "Out for Delivery 🚀",
                    "estimated_minutes": 25,
                    "message": "Order successfully placed and sent to restaurant kitchen!"
                }
                self.wfile.write(json.dumps(res).encode("utf-8"))

            elif parsed.path == "/api/contact":
                sender_name = data.get("sender_name", "").strip()
                sender_email = data.get("sender_email", "").strip()
                subject = data.get("subject", "").strip()
                message = data.get("message", "").strip()
                
                conn = sqlite3.connect(DB_FILE)
                cursor = conn.cursor()
                cursor.execute("""
                INSERT INTO contact_messages (sender_name, sender_email, subject, message)
                VALUES (?, ?, ?, ?)
                """, (sender_name, sender_email, subject, message))
                conn.commit()
                msg_id = cursor.lastrowid
                conn.close()
                
                self.send_response(201)
                self.send_header("Content-Type", "application/json")
                self._send_cors_headers()
                self.end_headers()
                self.wfile.write(json.dumps({"success": True, "db_id": msg_id}).encode("utf-8"))
                
            else:
                self.send_response(404)
                self._send_cors_headers()
                self.end_headers()
                self.wfile.write(json.dumps({"error": "Unknown POST route"}).encode("utf-8"))
                
        except Exception as e:
            self.send_response(500)
            self._send_cors_headers()
            self.end_headers()
            self.wfile.write(json.dumps({"error": str(e)}).encode("utf-8"))

def run_server():
    init_database()
    server = HTTPServer(('0.0.0.0', PORT), PortfolioAPIHandler)
    print(f"🐍 Python REST API Server running on http://localhost:{PORT}")
    server.serve_forever()

if __name__ == "__main__":
    run_server()
