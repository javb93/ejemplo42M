import Task from "./Task";

function Tasklist({ tareas }) {
  return (
    <ul>
      {tareas.map((tarea) => {
        return <Task tarea={tarea}></Task>;
      })}
    </ul>
  );
}

export default Tasklist;

// MAP , FILTER, REDUCE
//   GITHUB: JAVB93
