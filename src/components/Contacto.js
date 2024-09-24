import {
  Avatar,
  Card,
  CardContent,
  CardMedia,
  styled,
  Typography,
} from "@mui/material";

const StyledCard = styled(Card)`
  padding: 10px;
  width: 300px;
  height: 200px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default function Contacto({ contacto }) {
  return (
    <StyledCard variant="outlined">
      <CardMedia>
        <Avatar alt={contacto.nombre} src={contacto.img} />
      </CardMedia>
      <CardContent>
        <Typography>Contacto</Typography>
        <Typography variant="h4">{contacto.nombre}</Typography>
        <Typography variant="subtitle1">{contacto.telefono}</Typography>
        <Typography variant="subtitle1">{contacto.email}</Typography>
      </CardContent>
    </StyledCard>
  );
}
