import React from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoListProps {
  tasks: Task[];
  onEditTask: (task: Task) => void;
  onDeleteTask: (id: number) => void;
  onToggleComplete: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({
  tasks,
  onEditTask,
  onDeleteTask,
  onToggleComplete,
}) => {
  return (
    <ul className="list-group">
      {tasks.map((task) => (
        <li
          key={task.id}
          className={`list-group-item d-flex justify-content-between align-items-center ${
            task.completed ? "list-group-item-success" : ""
          }`}
        >
          <span
            onClick={() => onToggleComplete(task.id)}
            style={{
              textDecoration: task.completed ? "line-through" : "none",
              cursor: "pointer",
            }}
          >
            {task.text}
          </span>
          <div>
            <button
              className="btn btn-info btn-sm me-2"
              onClick={() => onEditTask(task)}
            >
              <FaEdit />
            </button>
            <button
              className="btn btn-danger btn-sm"
              onClick={() => onDeleteTask(task.id)}
            >
              <FaTrashAlt />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
