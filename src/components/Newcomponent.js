//Seccion de imports

import { useState } from "react";

//Seccion global, declaracion de variables,funciones, metodos,etc
const users = {
  name: "pedro",
  age: 21,
};

//Declaracion de la funcion de mi componente
function Newcomponent() {
  // Scope de la funcion del componente, declarar variables, funciones,
  //HOOKS- Son funciones especificas de react, para trabajar con estado y eventos
  const [counter, setCounter] = useState(0);

  console.log("Cargando Newcomponent");
  function upCounter() {
    setCounter(counter + 1);
    console.log("Incrementando " + counter);
  }

  // Retorno base de la funcion, debe ser JSX para que React detecte y pueda trabajar como componente
  // Para regresar JSX, necesitamos abrir parentesis (o solo tener un elemento)
  // Dentro de JSX podemos utilizar expresiones por medio de llaves {}
  return (
    <div>
      <p>{users.name}</p>
      <span>{counter}</span>
      <button onClick={upCounter}>Incrementa</button>
    </div>
  );
}
//Declaracion de exportacion, comunmente una por archivo si se tiene un componente, en el caso de librerias
// Se utilizaran las necesarias
export default Newcomponent;
