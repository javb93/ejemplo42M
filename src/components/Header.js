function Header({ mensaje }) {
  const random = Math.random();
  return (
    <div>
      SOY UN HEADER RANDOM
      <p>{random}</p>
      <p>{mensaje}</p>
    </div>
  );
}
export default Header;
