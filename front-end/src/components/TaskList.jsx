import { useState, useContext, useEffect } from "react"

import { createTask } from "../api/api"

import TaskItem from "./TaskItem";

import { GlobalContext } from "../App";

function TaskList({ liveTasks, setLiveTasks, sprint }) {

    const { currentUser } = useContext(GlobalContext)

    const [taskItemComponents, setTaskItemComponents] = useState([])

    const [newTaskInput, setNewTaskInput] = useState("");
    const initTask = {
      title: "Test sdsdsdsdsdwdede!!!!!!!!",
      description: "Description added",
      due_at: new Date,
      value: 5,
      user_id: currentUser.id,
      sprint_id: sprint.id,
    }

    function handleAddTask() {
        initTask.title = newTaskInput
        createTask(initTask)
        .then(res => {
            console.log(res.data)
            setLiveTasks([...liveTasks, res.data])
            setNewTaskInput("")
        })
        .catch(err => console.error(err))
    }

    useEffect(() => {
        setTaskItemComponents(liveTasks.map((task) => {
            return <TaskItem key={task.id} task={task} liveTasks={liveTasks} setLiveTasks={setLiveTasks} />
        }))
    }, [liveTasks])

    return (
        <div className="mt-3 space-y-3">
          {liveTasks.length > 0 ? (
            <ul className="space-y-1.5">
                {taskItemComponents}
            </ul>
          ) : (
            <p className="text-xs text-gray-400 italic">No tasks yet.</p>
          )}

          <div className="flex gap-2 pt-1">
            <input
              className="flex-1 border border-gray-200 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-400"
              placeholder="New task..."
              value={newTaskInput}
              onChange={(e) => setNewTaskInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleAddTask()}
            />
            <button
              onClick={handleAddTask}
              className="px-2 py-1 text-xs border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-gray-600"
            >
              + Add
            </button>
          </div>
        </div>
    )
}

export default TaskList