import { FormEvent, useEffect, useState } from "react";
import logotipo from "../assets/logoToDoList.svg";
import { TaskList } from "../components/taskslist";
import { VoidList } from "../components/voidlist/voidList";
import "./styles.css";

interface NewTask {
  id: string;
  task: string;
  checked: boolean;
}

export function ToDoList() {
  const [task, setTask] = useState("");

  const [taskList, setTaskList] = useState<NewTask[]>(
    JSON.parse(localStorage.getItem("@react-toDoList:tasks-state-1.0.0") || "")
  );

  function handleNewTask(event: FormEvent) {
    event.preventDefault();

    const newTask = {
      id: new Date().toISOString(),
      task: task,
      checked: false,
    };

    setTaskList([...taskList, newTask]);
  }

  function handleCheckedTask(id: string) {
    const newTaskList = taskList.map((taskItem) => {
      if (taskItem.id === id) {
        return {
          id: taskItem.id,
          task: taskItem.task,
          checked: taskItem.checked ? false : true,
        };
      }
      return taskItem;
    });
    setTaskList(newTaskList);
  }

  function handleRemoveTask(id: string) {
    setTaskList(taskList.filter((taskItem) => taskItem.id !== id));
  }

  useEffect(() => {
    const stateJSON = JSON.stringify(taskList);

    localStorage.setItem("@react-toDoList:tasks-state-1.0.0", stateJSON);
  }, [taskList]);

  return (
    <>
      <header>
        <img src={logotipo} alt="" />
      </header>

      <div className="container">
        <form onSubmit={handleNewTask}>
          <input
            type="text"
            placeholder="Adicione uma nova tarefa"
            onChange={(e) => setTask(e.target.value)}
            required
          />
          <button type="submit">Criar</button>
        </form>

        <div className="infoTask">
          <div className="statusTask">
            <span>Tarefas Criadas</span>
            {<span>{taskList.length}</span>}
          </div>
          <div className="statusTask purple">
            <span>Concluidas</span>
            <span>{taskList.filter((a) => a.checked === true).length}</span>
          </div>
        </div>
        {taskList.length ? (
          <ul>
            {taskList.map((taskItem) => {
              return (
                <TaskList
                  taskName={taskItem.task}
                  key={taskItem.id}
                  checked={taskItem.checked}
                  remove={() => handleRemoveTask(taskItem.id)}
                  setChecked={() => handleCheckedTask(taskItem.id)}
                />
              );
            })}
          </ul>
        ) : (
          <VoidList />
        )}
      </div>
    </>
  );
}
