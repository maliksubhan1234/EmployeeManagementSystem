# Employee Management System API 

A lightweight, production-ready RESTful API built with **Node.js**, **Express.js**, and **Mongoose (MongoDB)**. This project demonstrates a clean MVC-style architecture, schema-level data validation, and optimized single-query database operations.

Having recently transitioned back to Mongoose after working extensively with Prisma, this project highlights clean syntax handling, robust error boundaries, and efficient CRUD implementation without redundant database hits.

---

##  Tech Stack & Concepts Covered
- **Backend Framework:** Node.js with Express.js (ES6 Modules)
- **Database ODM:** MongoDB via Mongoose
- **Data Sanitization:** Built-in schema constraints (`trim`, `lowercase`, `unique`)
- **Query Optimization:** Atomic operations using `findOneAndUpdate` with `{ new: true }` to cut down server round-trips.

---

##  How the Project is Organized

Instead of stuffing everything into a single file, I’ve broken the app down into a clean, modular structure. This keeps the codebase highly scalable and super easy to debug:

* **`index.js`** — The main entry point of our app. It kicks off the server and handles the global middleware pipeline (like parsing incoming JSON via `express.json()`).
* **`config/db.js`** — This is where the magic pipeline starts; it manages our connection to the MongoDB database using Mongoose.
* **`models/employeeSchema.js`** — Houses our Mongoose schema. It acts as the strict blueprint for our data, handling automatic formatting (like trimming spaces and lowercase casting).
* **`controllers/employee.controller.js`** — The brain of our operations. It contains all the optimized CRUD logic, handling incoming requests and deciding what goes into the database.
* **`routes/`** — Divided cleanly into an index router and feature-specific routes (`employee.route.js`) to keep the routing mesh isolated and clean.

*Other essential root files include `.env` for managing sensitive environment variables seamlessly, and `.gitignore` to keep our node modules away from GitHub.*

---

##  API Endpoints Base URL: `/api/v0/employee`

| Method | Endpoint | Description | Status Code |
| :--- | :--- | :--- | :--- |
| **POST** | `/create-employee` | Creates a new employee with unique email | `201` Created |
| **GET** | `/get-employee/:id` | Fetches a specific employee by id | `200` OK |
| **PUT** | `/update-employee/:id` | Updates employee details dynamically | `200` OK |
| **DELETE**| `/delete-employee/:id` | Removes an employee from the database | `200` OK |

### Key API Features Implemented:
- **No Redundant Queries:** The `PUT` method uses atomic Mongoose functions to fetch and update in a single database hit rather than splitting it into multiple async operations.
- **Fail-Safe Middleware:** Integrated proper body parsing middlewares ensuring payload reliability across all inbound data vectors.
- **Explicit Status Codes:** Clear REST alignment utilizing standard HTTP status codes (`400` for bad data/conflicts, `404` for missing instances, and `500` for deep server tracking).

---

##  Getting Started

### 1. Prerequisites
Make sure you have [Node.js](https://nodejs.org/) and [MongoDB](https://www.mongodb.com/try/download/community) installed locally.

### 2. Installation
Clone the repository and install the required dependencies:
```bash
npm install
3. Environment Setup
Create a .env file in the root directory and add your configurations:

Code snippet
PORT=3000
4. Run the Server
Start the development server:

Bash
npm run dev
node index.js