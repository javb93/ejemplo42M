import { StyledTask } from "./Styled";

function Tasklist({ tareas }) {
  return (
    <ul>
      {tareas.map((tarea) => {
        return <StyledTask tarea={tarea}></StyledTask>;
      })}
    </ul>
  );
}

export default Tasklist;

// MAP , FILTER, REDUCE
//   GITHUB: JAVB93
