// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function App() {
//   const [tasks, setTasks] = useState([]);
//   const [newTask, setNewTask] = useState('');

//   const fetchTasks = async () => {
//     const response = await axios.get('http://localhost:5000/tasks');
//     setTasks(response.data);
//   };

//   useEffect(() => {
//     fetchTasks();
//   }, []);

//   const addTask = async () => {
//     if (!newTask) return;
//     await axios.post('http://localhost:5000/tasks', { title: newTask });
//     setNewTask('');
//     fetchTasks();
//   };

//   const deleteTask = async (id) => {
//     await axios.delete(`http://localhost:5000/tasks/${id}`);
//     fetchTasks();
//   };

//   const toggleComplete = async (id) => {
//     await axios.put(`http://localhost:5000/tasks/${id}`);
//     fetchTasks();
//   };

//   return (
//     <div className="container">
//       <h1>To-Do List</h1>
//       <div className="input-container">
//         <input
//           type="text"
//           placeholder="Add a new task..."
//           value={newTask}
//           onChange={(e) => setNewTask(e.target.value)}
//         />
//         <button onClick={addTask}>Add</button>
//       </div>
//       <ul>
//         {tasks.map(task => (
//           <li key={task._id} className={task.completed ? 'completed' : ''}>
//             {task.title}
//             <button onClick={() => toggleComplete(task._id)}>
//               {task.completed ? 'Undo' : 'Complete'}
//             </button>
//             <button onClick={() => deleteTask(task._id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const fetchTasks = async () => {
    const response = await axios.get('http://localhost:5000/tasks');
    setTasks(response.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async () => {
    if (!newTask) return;
    await axios.post('http://localhost:5000/tasks', { title: newTask });
    setNewTask('');
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await axios.delete(`http://localhost:5000/tasks/${id}`);
    fetchTasks();
  };

  const toggleComplete = async (id) => {
    await axios.put(`http://localhost:5000/tasks/${id}`);
    fetchTasks();
  };

  return (
    <div className="container">
      {/* Header Section */}
      <header>
        <h1>Task Manager</h1>
      </header>

      {/* Content Section */}
      <main>
        <div className="input-container">
          <input
            type="text"
            placeholder="Add a new task..."
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button className="add-btn" onClick={addTask}>Add Task</button>
        </div>

        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map(task => (
              <tr key={task._id} className={task.completed ? 'completed' : ''}>
                <td>{task.title}</td>
                <td>{task.completed ? 'Completed' : 'Pending'}</td>
                <td>
                  <button className="complete-btn" onClick={() => toggleComplete(task._id)}>
                    {task.completed ? 'Undo' : 'Complete'}
                  </button>
                  <button className="delete-btn" onClick={() => deleteTask(task._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>

      {/* Footer Section */}
      <footer>
        &copy; 2024 Task Manager | Developed by 
        <a href="https://www.linkedin.com/in/siddantham/" target="_blank"> Manjulatha Siddantham </a>
      </footer>

    </div>
  );
}

export default App;

