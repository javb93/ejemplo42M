import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useThemeStore } from "../utils/themeStore";
function Addtask({ setTareas }) {
  const [tarea, setTarea] = useState("");
  const [isInvalid, setIsInvalid] = useState(true);
  const theme = useThemeStore((state) => state.theme);

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
        style={{
          marginLeft: "20px",
          backgroundColor: theme === "light" ? "white" : "black",
          color: theme === "light" ? "black" : "white",
        }}
        onClick={addTask}
      >
        Agregar Tarea
      </Button>
    </div>
  );
}
export default Addtask;
