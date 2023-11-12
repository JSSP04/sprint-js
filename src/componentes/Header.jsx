import {} from 'react';
import '../assets/scss/styles.scss';
import '../assets/css/styles.css';

const Header = () => {
  return (

    <header className='bg-1'>
      <nav className="navbar navbar-expand-md navbar-dark p-4" id="Navbar">
          <div className="container-fluid">
              <a className="navbar-brand font-bold" href="#">
                  Safe Flood
              </a>

              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ms-auto header-menu">
                      <li className="nav-item">
                          <a className="nav-link" href="#Solucao">Solução</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="#Inundacoes">Inundações</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="#Seguranca">Segurança</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="#Confianca">Confiança</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="#Cadastro">Cadastro</a>
                      </li>
                  </ul>
              </div>
          </div>
      </nav>
    </header>

  )
}

export default Header;