import { useState } from 'react';
import '../assets/scss/styles.scss';
import '../assets/css/styles.css';

const Cadastro = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    cep: '',
    cidade: '',
    estado: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateCEP = (cep) => {
    if (cep.length !== 9) {
      return false; // O CEP deve ter exatamente 9 caracteres (incluindo o hífen)
    }
  
    const parteNumerica = cep.substring(0, 5) + cep.substring(6, 9); // Remover o hífen
    for (let i = 0; i < parteNumerica.length; i++) {
      if (isNaN(parseInt(parteNumerica[i]))) {
        return false; // Se qualquer caractere não for um número, ele é inválido
      }
    }
  
    return true;
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateCEP(formData.cep)) {
      alert('CEP inválido. Use o formato 11111-111.');
      return;
    }
  
    localStorage.setItem('formData', JSON.stringify(formData));
  
    setFormData({
      nome: '',
      email: '',
      telefone: '',
      cep: '',
      cidade: '',
      estado: '',
    });
  
    alert('Cadastro realizado com sucesso!');
  };

  return (
    <body className="container-fluid bg-1">
      <main className="container-fluid">
        <section className="row d-flex align-items-center p-4 vh-100">
          <div id="form" className="row text-center p-4 d-flex align-items-center mx-auto justify-content-center">
            <h2>Cadastre-se por aqui e use o nosso app!</h2>
            <h3>Disponível nas plataformas IOS e Android</h3>
            <figure className="col-md-8 mx-auto d-flex justify-content-center">
              <img src={Img4} alt="ícone do app" className="img-fluid img2 rounded" />
            </figure>

            <form className="row mb-4 p-3 justify-content-md-evenly bg-7" onSubmit={handleSubmit}>
              <div className="col-md-5 my-2">
                <label htmlFor="nome" className="form-label">
                  Nome
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="nome"
                  name="nome"
                  placeholder="Ex: João da Silva"
                  required
                  value={formData.nome}
                  onChange={handleInputChange}
                />
              </div>

              <div className="col-md-5 my-2">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Ex: email@gmail.com"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>

              <div className="col-md-5 my-2">
                <label htmlFor="telefone" className="form-label">
                  Telefone
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="telefone"
                  name="telefone"
                  placeholder="Ex: 99999-9999"
                  required
                  value={formData.telefone}
                  onChange={handleInputChange}
                />
              </div>

              {/* Add similar input fields for other form fields */}

              <div className="col-md-5 my-2">
                <label htmlFor="cep" className="form-label">
                  CEP
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="cep"
                  name="cep"
                  placeholder="Ex: 11111-111"
                  required
                  value={formData.cep}
                  onChange={handleInputChange}
                />
              </div>

              <div className="col-md-5 my-2">
                <label htmlFor="cidade" className="form-label">
                  Cidade
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="Cidade"
                  name="cidade"
                  placeholder="Ex: São Paulo"
                  required
                  value={formData.cidade}
                  onChange={handleInputChange}
                />
              </div>

              <div className="col-md-5 my-2">
                <label htmlFor="estado" className="form-label">
                  Estado
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="estado"
                  name="estado"
                  placeholder="Ex: São Paulo"
                  required
                  value={formData.estado}
                  onChange={handleInputChange}
                />
              </div>

              <button type="submit" className="btn btn-outline-dark col-md-4">
                Criar conta
              </button>
            </form>
          </div>
        </section>
      </main>
    </body>
  );
};

export default Cadastro;
