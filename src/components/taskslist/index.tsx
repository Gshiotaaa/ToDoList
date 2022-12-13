import { Trash } from "phosphor-react";
import { CheckBox } from "../checkbox";

import "./styles.css";

interface TaskListProps {
  taskName: string;
  checked: boolean;
  remove: () => void;
  setChecked: () => void;
}

export function TaskList({
  taskName,
  checked,
  remove,
  setChecked,
}: TaskListProps) {
  return (
    <li>
      <CheckBox checked={checked} setChecked={setChecked} />
      <span className={checked ? "checkedText" : ""}>{taskName}</span>
      <Trash className="hoverTrash" size={20} onClick={remove} />
    </li>
  );
}
