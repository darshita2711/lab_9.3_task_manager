import './App.css'
import TaskItem from "./components/TaskItem/TaskItem";
import type { Task, TaskStatus } from "./types";
function App() {
   const task: Task = {
    id: "1",
    title: "Learn React",
    description: "Practice React components and props.",
    status: "pending",
    priority: "high",
    dueDate: "2026-11-02",
  };

  function handleStatusChange(
    taskId: string,
    newStatus: TaskStatus
  ) {
    console.log("Status changed:", taskId, newStatus);
  }

  function handleDelete(taskId: string) {
    console.log("Delete task:", taskId);
  }

  return (

     <div>
      <h1>Task Manager</h1>

      <TaskItem
        task={task}
        onStatusChange={handleStatusChange}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App
