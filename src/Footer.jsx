import {} from 'react';
import '../assets/scss/styles.scss';
import '../assets/css/styles.css';

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