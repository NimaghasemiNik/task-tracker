import React, { useState } from 'react';

const TaskTracker = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">Task Tracker</h2>
      
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          className="flex-1 border border-gray-300 rounded px-3 py-2 rounded-lg"
          placeholder="Enter a task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Add
        </button>
      </div>

      <ul className="space-y-2">
        {/* Task items will go here */}
      </ul>
    </div>
  );
};

export default TaskTracker;
