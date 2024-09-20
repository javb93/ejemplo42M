function HeaderNav() {
  return (
    <nav style={{ width: "100%" }}>
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
