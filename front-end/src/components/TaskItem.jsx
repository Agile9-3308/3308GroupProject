import { useState } from "react"

import { updateTask, deleteTask } from "../api/api"

function TaskItem({ task, liveTasks, setLiveTasks }) {

    const [complete, setComplete] = useState(task.complete)

    const toggleTask = (taskId) => {
        const taskData = {complete: !complete}
        updateTask(taskId, taskData)
        .then(res => {
            console.log(res.data)
            setComplete(!complete)
            const taskIndex = liveTasks.findIndex((task) => {
                return task.id === taskId
            })
            const newTasks = liveTasks
            newTasks[taskIndex].complete = !complete
            setLiveTasks([...newTasks])
        })
        .catch(err => console.error(err))
    }

    const handleDeleteTask = (taskId) => {
        deleteTask(taskId)
        .then(res => {
            console.log(res.data)
            const newTasks = liveTasks.filter((task) => {
                return task.id !== taskId
            })
            setLiveTasks(newTasks)
        })
        .catch(err => console.err(err))
    }

    return (
        <li key={task.id} className="flex items-center gap-2 group">
            <div
            className={`w-4 h-4 rounded border flex items-center justify-center cursor-pointer transition-colors flex-shrink-0 ${complete
                ? "bg-indigo-500 border-indigo-500"
                : "border-gray-300 hover:border-indigo-400"
                }`}
            onClick={() => toggleTask(task.id)}
            >
            {task.done && (
                <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 10 10">
                <path
                    d="M1.5 5l2.5 2.5 4.5-5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                </svg>
            )}
            </div>
            <span
            className={`text-sm flex-1 cursor-pointer ${task.done ?         "line-through text-gray-400" : "text-gray-700"
                }`}
            onClick={() => toggleTask(task.id)}
            >
            {task.title}
            </span>
            <button
            onClick={() => handleDeleteTask(task.id)}
            className="text-gray-200 hover:text-red-400 transition-colors opacity-0 group-hover:opacity-100 text-base leading-none flex-shrink-0"
            title="Delete task"
            >
            ×
            </button>
        </li>
    )
}

export default TaskItem