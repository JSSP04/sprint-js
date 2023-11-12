import {} from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Safe Flood. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;