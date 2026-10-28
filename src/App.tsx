import { useState } from "react";
import './App.css'
import type { Task, TaskStatus } from "./types";
import TaskList from "./components/TaskList/TaskList";

function App() {
  // Store all tasks in state
  const [tasks, setTasks] = useState<Task[]>([

  {
    id: "1",
    title: "Learn React",
    description: "Practice components, props, and state.",
    status: "pending",
    priority: "low",
    dueDate: "2026-11-02",
  },
  {
    id: "2",
    title: "Complete TypeScript Lab",
    description: "Finish the Task Management application.",
    status: "in-progress",
    priority: "medium",
    dueDate: "2026-11-04",
  },
  {
    id: "3",
    title: "Push Project to GitHub",
    description: "Upload the project and prepare the README.",
    status: "completed",
    priority: "high",
    dueDate: "2026-11-06",
  },
  {
    id: "4",
    title: "Practice JavaScript",
    description: "Review arrays, functions, and events.",
    status: "pending",
    priority: "high",
    dueDate: "2026-11-08",
  },
]);

 // Update the status of the selected task
  function handleStatusChange(
    taskId: string,
    newStatus: TaskStatus
  ) {
      setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  }

  function handleDelete(taskId: string) {
   setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  }

  return (
     <div className="app-container">
      <h1>Task Manager</h1>
      
      {/* Render the TaskList component and pass the full list and handlers */}
      <TaskList
        tasks={tasks}
        onStatusChange={handleStatusChange}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App
