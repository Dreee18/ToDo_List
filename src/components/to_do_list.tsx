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

  const displayTask = (task: string, index: number, completed: boolean) => {
    return (
      <li key={index} className={completed ? "completed-task" : ""}>
        <input
          type="checkbox"
          className="completed"
          checked={completed}
          onChange={() => toggleTask(index)}
        />
        
        <p>{task}</p>

        <button className="btn_remove" onClick={() => removeTask(index)}>Remove</button>
      </li>
    );
  };

  const removeTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  }

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
        {tasks.map((task, index) =>
          displayTask(task.text, index, task.completed)
        )}
      </ul>
    </>
  );
}

export default InputField;
