import { useThemeStore } from "../utils/themeStore";
function HeaderNav() {
  const toggleTheme = useThemeStore((state) => state.toggleTheme);
  return (
    <nav style={{ width: "100%" }}>
      <button onClick={toggleTheme}>Cambiar Tema</button>
      <img alt="icono" src="logo192.png" />
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <li>
          <a href="/">Tareas</a>
        </li>
        <li>
          <a href="/Contactos">Contactos</a>
        </li>
        <li>
          <a href="/Agenda">Agenda</a>
        </li>
      </ul>
    </nav>
  );
}
export default HeaderNav;
