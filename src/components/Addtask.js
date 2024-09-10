import React, { useState } from "react";
function Addtask({ setTareas }) {
  const [tarea, setTarea] = useState("");
  const [isInvalid, setIsInvalid] = useState(true);

  function addTask() {
    if (!isInvalid) {
      setTareas((tareas) => {
        return [...tareas, tarea];
      });
      setTarea("");
      setIsInvalid(true);
    }
  }
  return (
    <div>
      <input
        type="text"
        value={tarea}
        onChange={(event) => {
          if (tarea.length < 10) {
            setIsInvalid(true);
          } else {
            setIsInvalid(false);
          }

          setTarea(event.target.value);
        }}
      ></input>
      {isInvalid && <p>La tarea debe tener al menos 10 caracteres</p>}
      <button onClick={addTask}>Agregar Tarea</button>
    </div>
  );
}
export default Addtask;
