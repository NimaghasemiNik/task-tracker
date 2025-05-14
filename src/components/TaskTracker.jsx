import React, { useState } from 'react';

const TaskTracker = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  // Add a new task object
  const handleAddTask = () => {
    if (!newTask.trim()) return;
    setTasks([...tasks, { name: newTask, completed: false }]);
    setNewTask('');
  };

  // Delete a task by index
  const handleDelete = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  // Toggle completed status
  const handleComplete = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">Task Tracker</h2>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Enter a task..."
          className="flex-1 border border-gray-300 rounded px-3 py-2"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button
          onClick={handleAddTask}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add
        </button>
      </div>

      <ul className="space-y-3">
        {tasks.map((task, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-gray-100 px-4 py-2 rounded"
          >
            <div className="flex items-center gap-3">
              <button
                onClick={() => handleComplete(index)}
                className={`w-5 h-5 rounded-full border-2 transition ${
                  task.completed ? 'bg-green-500 border-green-500' : 'border-gray-400'
                }`}
              >
                {task.completed && <div className="w-2.5 h-2.5 bg-white rounded-full mx-auto mt-0.5" />}
              </button>

              <span className={`${task.completed ? 'line-through text-gray-500' : ''}`}>
                {task.name}
              </span>
            </div>

            <button
              onClick={() => handleDelete(index)}
              className="bg-red-500 hover:bg-red-700 text-white font-semibold py-1 px-3 rounded-lg"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskTracker;
