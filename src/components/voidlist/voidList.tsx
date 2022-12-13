import { Notepad } from "phosphor-react";
import "./styles.css";

export function VoidList() {
  return (
    <div className="voidList">
      <Notepad size={100} />
      <h3>Você ainda não tem tarefas cadastradas</h3>
      <span>Crie tarefas e organize seus itens a fazer</span>
    </div>
  );
}
