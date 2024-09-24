import { useEffect, useState } from "react";
function Agenda() {
  const [contactos, setContactos] = useState([]);

  useEffect(() => {
    const getContacts = async () => {
      try {
        const response = await fetch("https://localhost:3002/lugares");
        const data = await response.json();
        setContactos(data);
      } catch (error) {
        console.log(error);
      }
    };
    getContacts();
  }, []);
  return (
    <div>
      <h1>Agenda</h1>
      <ul id="main_list">
        {contactos.map((contacto) => {
          return (
            <li key={contacto.id}>
              {contacto.name} - {contacto.email} - {contacto.phone}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default Agenda;
