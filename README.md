# Job Tracker API

A backend-focused application with a simple HTML/CSS interface that helps users organize, monitor, and manage job applications throughout the job search process.

## Motivation

I built this application out of my own job search process. As a software engineering student tracking applications in spreadsheets, I saw an opportunity to solve a real problem for myself while applying and strengthening my backend development skills. This project is both a practical tool I use in my own job search and a hands-on way to deepen my understanding of REST API design, database architecture, and Express middleware.

## Tech Stack

- **Backend:** Node.js, Express.js, TypeScript
- **Database:** MySQL (via `mysql2`)
- **Testing:** Postman
- **Frontend:** HTML/CSS

## Development Process

### 1. Foundational CRUD Operations

- Configured an Express server with TypeScript (`server.ts`)
- Defined routes for full CRUD functionality (`GET`, `POST`, `PATCH`, `DELETE`)
- Tested endpoints in Postman before connecting a database, to confirm route logic in isolation
- Designed and created the MySQL database schema
- Connected MySQL to the Express server using `mysql2`
- Wrote parameterized SQL queries and wired them into each route
- Re-tested all endpoints in Postman, verifying that requests correctly created, read, updated, and deleted data in MySQL

### 2. Organizing into routers and controllers**

Once the routes work, I plan to refactor everything out of one big file and split it into routers and controllers, so the routing logic and the actual business logic weren't tangled together.

### . Adding features**

From there I plan to start layering in things that make it feel like a real API instead of a class exercise:
- `express.json()` middleware to parse incoming request bodies
- global error-handling middleware so I wasn't repeating the same error response in every route
- Express Validator for input validation
- pagination on the list endpoint
- sorting on the list endpoint


## Getting Started
This is how everyone use this project
```bash
# Clone the repository
git clone https://github.com/deeba-raine/job-tracker-api.git

# Install dependencies
cd job-tracker-api
npm install

# Set up environment variables
# Create a .env file with your MySQL credentials (see .env.example)

# Run the development server
npx ts-node server.ts
```

