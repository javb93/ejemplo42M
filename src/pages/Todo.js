import Addtask from "../components/Addtask";
import Tasklist from "../components/Tasklist";
import { useState } from "react";

function Todo() {
  const [tareas, setTareas] = useState([]);
  return (
    <div>
      En construccion
      <Addtask setTareas={setTareas} tareas={tareas}></Addtask>
      <Tasklist tareas={tareas}></Tasklist>
    </div>
  );
}

export default Todo;
