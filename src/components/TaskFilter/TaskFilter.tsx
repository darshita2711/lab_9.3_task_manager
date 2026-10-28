
import type {
  TaskFilterProps,
  TaskPriority,
  TaskStatus,
} from "../../types";

function TaskFilter({ onFilterChange }: TaskFilterProps) {
  function handleStatusChange(value: string) {
    onFilterChange({
      status: value ? (value as TaskStatus) : undefined,
    });
  }

  function handlePriorityChange(value: string) {
    onFilterChange({
      priority: value ? (value as TaskPriority) : undefined,
    });
  }

  return (
    <section className="filter-panel">
      <label>
        Status
        <select
          defaultValue=""
          onChange={(event) =>
            handleStatusChange(event.target.value)
          }
        >
          <option value="">All Statuses</option>
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </label>

      <label>
        Priority
        <select
          defaultValue=""
          onChange={(event) =>
            handlePriorityChange(event.target.value)
          }
        >
          <option value="">All Priorities</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </label>
    </section>
  );
}

export default TaskFilter;
