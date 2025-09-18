import "./Footer.css";

function Footer({ companyName, setCompanyName }) {
  return (
    <footer className="footer">
      <h1 className="footer__title">{companyName}</h1>
      <button
        onClick={() => {
          setCompanyName("ESTO LO VA A ACTUALIZAR EN AMBOS");
        }}
      >
        Click to update
      </button>
    </footer>
  );
}

export default Footer;
