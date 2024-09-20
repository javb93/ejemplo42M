import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
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
      <TextField
        error={isInvalid}
        helperText="La tarea debe tener al menos 10 caracteres"
        id="outlined-basic"
        label="tarea"
        variant="outlined"
        value={tarea}
        onChange={(event) => {
          if (tarea.length < 10) {
            setIsInvalid(true);
          } else {
            setIsInvalid(false);
          }

          setTarea(event.target.value);
        }}
      />

      <Button
        variant="contained"
        color="primary"
        style={{ marginLeft: "20px" }}
        onClick={addTask}
      >
        Agregar Tarea
      </Button>
    </div>
  );
}
export default Addtask;
