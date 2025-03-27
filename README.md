# Task-Manager
Task Manager is a web app built with React, Node.js, Express, and MongoDB for task management. It allows users to add, mark as complete, and delete tasks. Featuring a clean UI and responsive design, it offers an efficient way to manage daily tasks with ease.

## Technologies Used

### Frontend:
- **HTML** - For structuring the application.
- **CSS** - For styling and creating a responsive design.
- **JavaScript** - For adding interactivity and managing dynamic content.
- **Bootstrap** - For UI components and responsive layout.
- **React** - For building the frontend user interface.

### Backend:
- **Node.js** - For server-side development.
- **Express.js** - For creating API endpoints.
- **MongoDB** - For database storage.
- **Mongoose** - For database modeling and querying.

### Additional Tools:
- **Git** and **GitHub** - For version control.
- **dotenv** - For managing environment variables.

---

## Features

- **Add Task:** Easily add new tasks using a clean input field.
- **Complete Task:** Mark tasks as completed with a single click.
- **Delete Task:** Remove tasks from the list permanently.
- **Task Status Management:** Clearly view pending and completed tasks.
- **Responsive UI:** Works smoothly on both desktop and mobile devices.
- **Real-Time Updates:** UI updates instantly without reloading the page.

---
## How to Use

Add a Task: Enter the task name in the input field and click the Add Task button.

Complete a Task: Click the Complete button to mark the task as done.

Delete a Task: Click the Delete button to remove a task permanently.

View Status: Completed tasks are marked as Completed while pending tasks remain under Pending.

API Endpoints

Base URL: http://localhost:5173

GET /tasks - Retrieve all tasks.

POST /tasks - Create a new task.

PUT /tasks/:id - Mark a task as complete.

DELETE /tasks/:id - Delete a task by ID.

Troubleshooting

Ensure MongoDB is running and the correct URI is provided in .env.

Restart the servers if changes are made using npm start.

Check logs for detailed error messages using console.log.


## Contact

Developed by Manjulatha Siddantham. Feel free to reach out via GitHub or email: manjulathasiddantham55@gmail.com for any inquiries.

Happy Task Managing! 🎉
