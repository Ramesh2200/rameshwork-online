-- ============================================================================
-- DATABASE SCHEMA: Java & Python Full Stack Developer Portfolio
-- Database Engine: MySQL 8.0+
-- Description: Database schema for managing developer profile, projects,
--              skills, tech stack, and user contact messages.
-- ============================================================================

CREATE DATABASE IF NOT EXISTS fullstack_portfolio;
USE fullstack_portfolio;

-- ----------------------------------------------------------------------------
-- Table: developer_profile
-- ----------------------------------------------------------------------------
DROP TABLE IF EXISTS contact_messages;
DROP TABLE IF EXISTS project_tech_stack;
DROP TABLE IF EXISTS projects;
DROP TABLE IF EXISTS skills;
DROP TABLE IF EXISTS developer_profile;

CREATE TABLE developer_profile (
    id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(100) NOT NULL,
    title VARCHAR(150) NOT NULL,
    bio TEXT NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(20),
    location VARCHAR(100),
    github_url VARCHAR(255),
    linkedin_url VARCHAR(255),
    years_experience DECIMAL(3,1) DEFAULT 0.5,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Seed Data: Developer Profile
INSERT INTO developer_profile (full_name, title, bio, email, phone, location, github_url, linkedin_url, years_experience)
VALUES (
    'Ramesh K',
    'Java & Python Full Stack Developer',
    'Specializing in HTML, CSS, React frontends, Python (Flask/FastAPI) & Java (Spring Boot) backends with MySQL relational database architecture.',
    'ballariramesh0825@gmail.com',
    '+91 7672047896',
    'Bengaluru, Karnataka, India',
    'https://github.com/Ramesh2200',
    'https://www.linkedin.com/in/ramesh-k-71243026a/',
    0.5
);

-- ----------------------------------------------------------------------------
-- Table: skills
-- ----------------------------------------------------------------------------
CREATE TABLE skills (
    id INT AUTO_INCREMENT PRIMARY KEY,
    category VARCHAR(50) NOT NULL, -- 'Frontend', 'Backend', 'Database', 'Languages', 'Tools'
    skill_name VARCHAR(50) NOT NULL,
    proficiency_percentage INT CHECK (proficiency_percentage BETWEEN 0 AND 100),
    is_featured BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Seed Data: Skills
INSERT INTO skills (category, skill_name, proficiency_percentage, is_featured) VALUES
('Languages', 'Java', 90, TRUE),
('Languages', 'Python', 85, TRUE),
('Languages', 'JavaScript', 88, TRUE),
('Languages', 'SQL', 86, TRUE),

('Frontend', 'HTML5', 95, TRUE),
('Frontend', 'CSS3', 90, TRUE),
('Frontend', 'React.js', 92, TRUE),
('Frontend', 'Bootstrap / Tailwind', 88, FALSE),

('Backend', 'Java Spring Boot', 88, TRUE),
('Backend', 'Python FastAPI', 85, TRUE),
('Backend', 'Python Django / Flask', 80, TRUE),
('Backend', 'Node.js / Express', 82, FALSE),

('Database', 'MySQL', 90, TRUE),
('Database', 'MongoDB', 78, FALSE),

('Tools', 'Git & GitHub', 92, TRUE),
('Tools', 'Docker', 75, FALSE),
('Tools', 'Postman API Tool', 90, TRUE),
('Tools', 'VS Code & IntelliJ', 95, FALSE);

-- ----------------------------------------------------------------------------
-- Table: projects
-- ----------------------------------------------------------------------------
CREATE TABLE projects (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(150) NOT NULL,
    category VARCHAR(50) NOT NULL, -- 'Java Full Stack', 'Python Full Stack', 'React & MySQL', 'AI/ML Python'
    description TEXT NOT NULL,
    github_url VARCHAR(255),
    live_demo_url VARCHAR(255),
    image_url VARCHAR(255),
    is_featured BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Seed Data: Projects
INSERT INTO projects (title, category, description, github_url, live_demo_url, image_url, is_featured) VALUES
(
    'Smart Local Problem Management System',
    'Java & Python Full Stack',
    'A comprehensive civic problem reporting platform built with React HTML/CSS frontend, Python FastAPI backend, and MySQL database for complaint tracking and resolution analytics.',
    'https://github.com/Ramesh2200',
    '#',
    '/assets/project-civic.jpg',
    TRUE
),
(
    'AI-Powered Automated Retinoblastoma Detection System',
    'Python Full Stack',
    'Python medical imaging platform utilizing OpenCV, TensorFlow, Flask, and MySQL for early ocular cancer diagnosis and automated diagnostic report generation.',
    'https://github.com/Ramesh2200',
    '#',
    '/assets/project-retino.jpg',
    TRUE
),
(
    'Java Spring Boot Microservices E-Commerce API',
    'Java Full Stack',
    'Full-stack retail application using Java 17, Spring Boot, Hibernate ORM, MySQL relational database, and React frontend with JWT authentication.',
    'https://github.com/Ramesh2200',
    '#',
    '/assets/project-java-ecommerce.jpg',
    TRUE
),
(
    'Python MySQL Inventory & Analytics Dashboard',
    'Python & MySQL',
    'Real-time data visualization dashboard powered by Python, Flask, React, and optimized MySQL queries for inventory forecasting.',
    'https://github.com/Ramesh2200',
    '#',
    '/assets/project-python-dashboard.jpg',
    TRUE
);

-- ----------------------------------------------------------------------------
-- Table: project_tech_stack
-- ----------------------------------------------------------------------------
CREATE TABLE project_tech_stack (
    id INT AUTO_INCREMENT PRIMARY KEY,
    project_id INT NOT NULL,
    tech_name VARCHAR(50) NOT NULL,
    FOREIGN KEY (project_id) REFERENCES projects(id) ON DELETE CASCADE
);

INSERT INTO project_tech_stack (project_id, tech_name) VALUES
(1, 'React'), (1, 'HTML5/CSS3'), (1, 'Python FastAPI'), (1, 'MySQL'), (1, 'REST API'),
(2, 'Python'), (2, 'Flask'), (2, 'MySQL'), (2, 'TensorFlow'), (2, 'OpenCV'),
(3, 'Java'), (3, 'Spring Boot'), (3, 'React'), (3, 'MySQL'), (3, 'Hibernate'),
(4, 'Python'), (4, 'Flask'), (4, 'React'), (4, 'MySQL'), (4, 'Recharts');

-- ----------------------------------------------------------------------------
-- Table: contact_messages
-- ----------------------------------------------------------------------------
CREATE TABLE contact_messages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    sender_name VARCHAR(100) NOT NULL,
    sender_email VARCHAR(100) NOT NULL,
    subject VARCHAR(200) NOT NULL,
    message TEXT NOT NULL,
    is_read BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Verification Query
SELECT 'MySQL Database Schema for Java & Python Full Stack Portfolio Created Successfully!' AS status;
