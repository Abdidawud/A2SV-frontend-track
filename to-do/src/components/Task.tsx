import { MdOutlineDeleteForever } from "react-icons/md";
import { useState } from "react";
import UpdateTaskBox from "./UpdateTaskBox";
import { FaEdit } from "react-icons/fa";
import "../css/task.css";

interface probs {
  text: string;
  removeTask: (taskId: number) => void;
  EditTask: (text: string, index: number) => void;
  index: number;
}

export default function Task({ text, removeTask, EditTask, index }: probs) {
  const [Editing, setEditing] = useState(false);

  return (
    <div className="task-container">
      {Editing && (
        <UpdateTaskBox
          text={text}
          EditTask={EditTask}
          index={index}
          setIsEditing={setEditing}
        />
      )}

      <div className="task-text">{text}</div>
      <div className="icons-container">
        <div className="edit-icon" onClick={() => setEditing(!Editing)}>
          <FaEdit />
        </div>
        <div className="delete-icon" onClick={() => removeTask(index)}>
          <MdOutlineDeleteForever />
        </div>
      </div>
    </div>
  );
}
