import React, { useState } from "react";
import TodoList from "./components/ToDolist";
import { FaPlus } from "react-icons/fa";

const App: React.FC = () => {
  const [tasks, setTasks] = useState<
    { id: number; text: string; completed: boolean }[]
  >([]);
  const [taskText, setTaskText] = useState("");
  const [editTaskId, setEditTaskId] = useState<number | null>(null);

  const handleAddTask = () => {
    if (taskText.trim() === "") return;
    if (editTaskId !== null) {
      setTasks(
        tasks.map((task) =>
          task.id === editTaskId ? { ...task, text: taskText } : task
        )
      );
      setEditTaskId(null);
    } else {
      setTasks([
        ...tasks,
        { id: Date.now(), text: taskText, completed: false },
      ]);
    }
    setTaskText("");
  };

  const handleDeleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleEditTask = (task: {
    id: number;
    text: string;
    completed: boolean;
  }) => {
    setTaskText(task.text);
    setEditTaskId(task.id);
  };

  const handleToggleComplete = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4 text-center">To-Do List</h1>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          placeholder="Enter task"
        />
        <button className="btn btn-primary" onClick={handleAddTask}>
          <FaPlus />
        </button>
      </div>
      <TodoList
        tasks={tasks}
        onEditTask={handleEditTask}
        onDeleteTask={handleDeleteTask}
        onToggleComplete={handleToggleComplete}
      />
    </div>
  );
};

export default App;
