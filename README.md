

# TaskFlow - Full-Stack Task Management App 📝

TaskFlow is a robust and intuitive full-stack task management application built with the MERN stack (MongoDB, Express.js, React, Node.js). It provides users with a secure and efficient way to organize, track, and manage their daily tasks.

<br>

Link: https://taskflow007.netlify.app/

## ✨ Key Features

-   **Secure User Authentication:** Full authentication system with user registration and login, secured by JSON Web Tokens (JWT). Passwords are encrypted using `bcrypt`.
-   **CRUD Functionality:** Users can Create, Read, Update, and Delete their own tasks.
-   **Task Status Tracking:** Easily change the status of a task (e.g., "To Do", "In Progress", "Done") with a simple dropdown.
-   **Private & Secure:** Users can only view and manage the tasks they have created.
-   **Responsive & Modern UI:** A clean and user-friendly interface built with React and styled with CSS for a great experience on any device.
-   **RESTful API:** A well-structured back-end API built with Express.js and Mongoose to handle all application logic.

---

## 🛠️ Tech Stack & Architecture

This project follows a classic client-server architecture. The React front-end is decoupled from the Node.js back-end and communicates with it through a RESTful API.

**Client-Side (Frontend):**
-   **[React.js](https://reactjs.org/):** A JavaScript library for building dynamic user interfaces.
-   **[React Router](https://reactrouter.com/):** For handling client-side routing.
-   **[Axios](https://axios-http.com/):** A promise-based HTTP client for making requests to the back-end API.
-   **[CSS Modules](https://github.com/css-modules/css-modules):** For scoped, component-level styling.

**Server-Side (Backend):**
-   **[Node.js](https://nodejs.org/):** A JavaScript runtime environment for the server.
-   **[Express.js](https://expressjs.com/):** A web application framework for Node.js, used to build the REST API.
-   **[MongoDB](https://www.mongodb.com/):** A NoSQL database used to store user and task data.
-   **[Mongoose](https://mongoosejs.com/):** An Object Data Modeling (ODM) library for MongoDB and Node.js.
-   **[JSON Web Token (JWT)](https://jwt.io/):** For implementing secure user authentication and session management.
-   **[Bcrypt](https://www.npmjs.com/package/bcrypt):** A library for hashing user passwords before storing them.
-   **[CORS](https://www.npmjs.com/package/cors):** Middleware to enable Cross-Origin Resource Sharing.

---

## 🚀 Getting Started & Local Installation

To get a local copy up and running, follow these steps.

### Prerequisites

-   [Node.js](https://nodejs.org/en/) (v14 or higher)
-   [npm](https://www.npmjs.com/)
-   [MongoDB](https://www.mongodb.com/try/download/community) installed and running locally, or a connection string from a service like MongoDB Atlas.

### 1. Backend Setup

```bash
# Clone the repository
git clone [https://github.com/VitorPio7/TaskFlow.git](https://github.com/VitorPio7/TaskFlow.git)

# Navigate to the server directory
cd TaskFlow/server

# Install server dependencies
npm install
```
Create a `.env` file inside the `server` directory and add the following configuration variables.

**.env (in /server)**
```
PORT=8000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=a_very_strong_and_secret_key
```

Now, start the back-end server:
```bash
npm start
```
The server will be running on `http://localhost:8000`.

### 2. Frontend Setup

Open a new terminal window.

```bash
# Navigate to the client directory from the root folder
cd TaskFlow/client

# Install client dependencies
npm install
```

Start the front-end development server:
```bash
npm start
```
The React application will open in your browser, typically at `http://localhost:3000`.

---

## 🔐 API Endpoints

The back-end provides the following RESTful API endpoints:

| Method | Endpoint              | Description                                  | Auth Required |
| :----- | :-------------------- | :------------------------------------------- | :-----------: |
| `POST` | `/api/users/register` | Register a new user.                         |       No      |
| `POST` | `/api/users/login`    | Log in a user and receive a JWT.             |       No      |
| `GET`  | `/api/tasks`          | Get all tasks for the logged-in user.        |      Yes      |
| `POST` | `/api/tasks`          | Create a new task.                           |      Yes      |
| `PUT`  | `/api/tasks/:id`      | Update an existing task.                     |      Yes      |
| `DELETE` | `/api/tasks/:id`      | Delete a task.                               |      Yes      |

---

## 📄 License

Distributed under the MIT License. See the `LICENSE.md` file for more information.

---

## Contact

Vitor Pio - [GitHub Profile](https://github.com/VitorPio7)
