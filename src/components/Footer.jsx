const CURRENT_YEAR = new Date().getFullYear();

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>© {CURRENT_YEAR} WebCraft Solutions - Tous droits réservés</p>
      </div>
    </footer>
  );
}

export default Footer;
