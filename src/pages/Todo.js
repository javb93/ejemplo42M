import Addtask from "../components/Addtask";
import Tasklist from "../components/Tasklist";

const consttasks = ["Tarea 1", "Tarea 2", "Tarea 3", "Tarea 4"];

function Todo() {
  return (
    <div>
      En construccion
      <Addtask></Addtask>
      <Tasklist tareas={consttasks}></Tasklist>
    </div>
  );
}

export default Todo;
