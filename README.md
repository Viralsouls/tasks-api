[![Vercel](https://vercelbadge.vercel.app/api/Viralsouls/tasks-api)](https://vercel.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![GitHub repo size](https://img.shields.io/github/repo-size/Viralsouls/tasks-api?color=blue&label=Repo%20Size)](https://github.com/Viralsouls/tasks-api)
[![Last commit](https://img.shields.io/github/last-commit/Viralsouls/tasks-api?color=green)](https://github.com/Viralsouls/tasks-api/commits/main)
![Visitors](https://visitor-badge.glitch.me/badge?page_id=Viralsouls.tasks-api&left_color=blue&right_color=green)


# Task API

A simple task management API built with **Node.js**, **Express**, and **PostgreSQL**, using **Neon** for cloud database hosting.

## Features

- 🟢 List all tasks
- ➕ Add a new task
- ✅ Mark task as completed
- 🗑️ Delete a task

## Tech Stack

- Backend: Node.js, Express
- Database: PostgreSQL (hosted on Neon)
- Deployment: Local (Vercel-ready)

## 🌐 Live API

**Base URL:**  
https://tasks-steel-six.vercel.app

## Endpoints

| Method | Endpoint            | Description            |
|--------|---------------------|------------------------|
| GET    | `/api/tasks`        | Get all tasks          |
| POST   | `/api/tasks`        | Add a new task         |
| PUT    | `/api/tasks/:id`    | Update task completion |
| DELETE | `/api/tasks/:id`    | Delete a task          |

## Setup

1. Clone the repo  
2. Install dependencies  
   ```bash
   npm install
3. Create .env file
    DATABASE_URL=your_neon_postgres_connection_string
4. Run the server
    npm run dev

Author
GitHub: Viralsouls
