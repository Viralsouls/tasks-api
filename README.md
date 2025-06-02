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