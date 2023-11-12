import {} from 'react';
import '../assets/scss/styles.scss';
import '../assets/css/styles.css';

const Header = () => {
return (

<body class="bg1">

    {/* Navegação */}
    <nav class="navbar navbar-expand-md navbar-dark p-4 header border-bottom border-light" id="Navbar">
        <div class="container-fluid">
            <a class="navbar-brand font-bold" href="#Menu">
                <img src="./assets/img/logo-SF-branco.png" alt="Logo" width="20" height="30" class="d-inline-block align-text-top"/>
                Safe Flood
            </a>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto header-menu">
                    <li class="nav-item">
                        <a class="nav-link" href="#Desafios">Desafios</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#Seguranca">Segurança</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#Confianca">Confiança</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#Cadastro">Cadastro</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</body>

);
}

export default Header;