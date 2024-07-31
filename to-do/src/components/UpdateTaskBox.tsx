import { FaSave } from "react-icons/fa";
import { useState } from "react";
import "../css/update-task.css";

interface probs {
  text: string;
  EditTask: (text: string, index: number) => void;
  index: number;
  setIsEditing: (isEditing: boolean) => void;
}

export default function UpdateTaskBox({
  text,
  EditTask,
  index,
  setIsEditing,
}: probs) {
  const [editText, setEditText] = useState(text);

  return (
    <div className="update-input">
      <input
        type="text"
        defaultValue={text}
        onChange={(e) => setEditText(e.target.value)}
      />
      <FaSave
        style={{ cursor: "pointer", color: "green" }}
        onClick={() => {
          setIsEditing(false);
          EditTask(editText, index);
        }}
      />
    </div>
  );
}
