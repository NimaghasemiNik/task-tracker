import { useState } from "react"

const TaskTracker = () => {
    const [tasks, setTasks] = useState([])
    const [newTask, setNewTask] = useState("")

  return (
    <div className="max-w-md mx-auto bg-white mt-10 p-6 shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">Task Tracker</h2>
      <div className="flex gap-2 mb-4">
        <input 
        type="text"
        className="flex-1 border bg-gray-300 rounded px-3 py-2"
        placeholder="请输入任务..."
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        />
        <button
        className="bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700">
            加入任务
        </button>
    <div>
        <ul></ul>
    </div>
      </div>
    </div>
  )
}

export default TaskTracker
