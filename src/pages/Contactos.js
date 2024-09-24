import Grid from "@mui/material/Grid2";
import Contacto from "../components/Contacto";

const contacto = [
  {
    nombre: "Juan",
    img: "https://www.w3schools.com/howto/img_avatar.png",
    telefono: "123456789",
    email: "test",
  },
  {
    nombre: "Pedro",
    img: "https://www.w3schools.com/howto/img_avatar.png",
    telefono: "123456789",
    email: "test",
  },
  {
    nombre: "Maria",
    img: "https://www.w3schools.com/howto/img_avatar.png",
    telefono: "123456789",
    email: "test",
  },
  {
    nombre: "Ana",
    img: "https://www.w3schools.com/howto/img_avatar.png",
    telefono: "123456789",
    email: "test",
  },
  {
    nombre: "Jose",
    img: "https://www.w3schools.com/howto/img_avatar.png",
    telefono: "123456789",
    email: "test",
  },
  {
    nombre: "Carlos",
    img: "https://www.w3schools.com/howto/img_avatar.png",
    telefono: "123456789",
    email: "test",
  },
  {
    nombre: "Luis",
    img: "https://www.w3schools.com/howto/img_avatar.png",
    telefono: "123456789",
    email: "test",
  },
  {
    nombre: "Rosa",
    img: "https://www.w3schools.com/howto/img_avatar.png",
    telefono: "123456789",
    email: "test",
  },
];
function Contactos() {
  return (
    <Grid
      container
      direction={{ xs: "column", sm: "row" }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {contacto.map((contacto, index) => (
        <Grid key={index} size={{ xs: 2, sm: 4, md: 4 }}>
          <Contacto contacto={contacto}></Contacto>
        </Grid>
      ))}
    </Grid>
  );
}
export default Contactos;
