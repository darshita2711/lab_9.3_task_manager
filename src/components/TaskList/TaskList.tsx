
import { useState } from "react";
import type {
  Task,
  TaskFilterProps,
  TaskListProps,
  TaskPriority,
  TaskStatus,
} from "../../types";
import TaskItem from "../TaskItem/TaskItem";
import TaskFilter from "../TaskFilter/TaskFilter";

function TaskList({
  tasks: initialTasks,
  onStatusChange,
  onDelete,
}: TaskListProps) {
  const [filters, setFilters] = useState<{
    status?: TaskStatus;
    priority?: TaskPriority;
  }>({});

  function handleFilterChange(
    newFilters: Parameters<TaskFilterProps["onFilterChange"]>[0]
  ) {
    setFilters((currentFilters) => ({
      ...currentFilters,
      ...newFilters,
    }));
  }

  const filteredTasks = initialTasks.filter((task) => {
    const matchesStatus =
      !filters.status || task.status === filters.status;

    const matchesPriority =
      !filters.priority || task.priority === filters.priority;

    return matchesStatus && matchesPriority;
  });

  return (
    <section>
      <TaskFilter onFilterChange={handleFilterChange} />

      <p className="task-count">
        Showing {filteredTasks.length} of {initialTasks.length} tasks
      </p>

      {filteredTasks.length === 0 ? (
        <p className="empty-message">
          No tasks found. Try changing your filters.
        </p>
      ) : (
        <div className="task-list">
          {filteredTasks.map((task: Task) => (
            <TaskItem
              key={task.id}
              task={task}
              onStatusChange={onStatusChange}
              onDelete={onDelete}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default TaskList;
