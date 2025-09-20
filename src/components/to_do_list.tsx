import { useState, type ChangeEvent } from "react";
import "./to_do_list.css";

type Task = {
  text: string;
  completed: boolean;
};

function InputField() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTask.trim() === "") return;

    setTasks([...tasks, { text: newTask.trim(), completed: false }]);
    setNewTask("");
  };

  const toggleTask = (index: number) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <>
      <form className="input_field" onSubmit={handleAddTask}>
        <h1>To-Do List</h1>

        <input
          type="text"
          placeholder="Enter a task"
          className="input_box"
          value={newTask}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setNewTask(e.target.value)
          }
          required
        />

        <button className="btn_add" type="submit">
          Add
        </button>
      </form>

      <ul className="task_list">
        {tasks.map((task, index) => (
          <li key={index} className={task.completed ? "completed-task" : ""}>
            <input
              type="checkbox"
              className="completed"
              checked={task.completed}
              onChange={() => toggleTask(index)}
            />
            {task.text}
          </li>
        ))}
      </ul>
    </>
  );
}

export default InputField;
