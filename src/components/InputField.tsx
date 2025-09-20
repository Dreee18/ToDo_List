import { useState } from "react";

function InputField() {
  return (
    <>
      <form action="#" className="frm_container">
        <label htmlFor="new_item">New Item</label>
        <input type="text" id="new_item"/>

        <button id="btn_add">
          Add
        </button>
      </form>
    </>
  );
}

export default InputField;
