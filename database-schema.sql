-- Faith Mundia Consulting Platform Database Schema
-- PostgreSQL Database Setup for Production Deployment

-- Create users table
CREATE TABLE IF NOT EXISTS users (
    id VARCHAR PRIMARY KEY DEFAULT gen_random_uuid(),
    username TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL
);

-- Create consultation_requests table
CREATE TABLE IF NOT EXISTS consultation_requests (
    id VARCHAR PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    organization TEXT,
    service_type TEXT NOT NULL,
    budget TEXT,
    timeline TEXT,
    description TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_consultation_requests_created_at ON consultation_requests(created_at);
CREATE INDEX IF NOT EXISTS idx_consultation_requests_service_type ON consultation_requests(service_type);
CREATE INDEX IF NOT EXISTS idx_users_username ON users(username);