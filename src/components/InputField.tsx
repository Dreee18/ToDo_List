import { useState } from "react";
import "./InputField.css";

function InputField() {
  return (
    <>
      <form action="#" className="input_field">
        <h1>To-Do List</h1>
        <input type="text" placeholder="Enter a task" className="input_box" />
        <button className="btn_add" type="submit">
          Add
        </button>
      </form>
    </>
  );
}

export default InputField;
