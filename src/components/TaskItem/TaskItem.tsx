
import type { TaskItemProps, TaskStatus } from "../../types";

function TaskItem({
  task,
  onStatusChange,
  onDelete,
}: TaskItemProps) {

    // Convert status values into readable labels
  const statusLabel: Record<TaskStatus, string> = {
    pending: "Pending",
    "in-progress": "In Progress",
    completed: "Completed",
  };

  return (
    <article className={`task-card status-${task.status}`}>
      <div className="task-header">
        <h3>{task.title}</h3>

        <span className={`priority priority-${task.priority}`}>
          {task.priority} priority
        </span>
      </div>

      <p>{task.description}</p>

      <div className="task-details">
        <span className={`status-badge status-${task.status}`}>
          {statusLabel[task.status]}
        </span>

        <span>Due: {task.dueDate}</span>
      </div>


    {/* When the selection changes, notify the parent component */}
      <div className="task-actions">
        <label>
          Change status:
          <select
            value={task.status}
            onChange={(event) =>
              onStatusChange(
                task.id,
                event.target.value as TaskStatus
              )
            }
          >
            <option value="pending">Pending</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </label>

        <button
          className="delete-button"
          onClick={() => onDelete(task.id)}
        >
          Delete
        </button>
      </div>
    </article>
  );
}

export default TaskItem;