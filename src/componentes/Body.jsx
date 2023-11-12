import '../assets/scss/styles.scss';
import '../assets/css/styles.css';

function Enviar() {
  // Captura dos valores dos campos
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const telefone = document.getElementById('telefone').value;
  const cep = document.getElementById('cep').value;
  const cidade = document.getElementById('cidade').value;
  const estado = document.getElementById('estado').value;

  const dados = {
    nome,
    email,
    telefone,
    cep,
    cidade,
    estado
  };

  localStorage.setItem('formularioData', JSON.stringify(dados));

  alert('Dados salvos com sucesso!');

  document.getElementById('nome').value = '';
  document.getElementById('email').value = '';
  document.getElementById('telefone').value = '';
  document.getElementById('cep').value = '';
  document.getElementById('cidade').value = '';
  document.getElementById('estado').value = '';
}


function Body () {
return (
<body className="bg1">

  <div className="menu" id="Menu">
    <div className="box1"></div>
    <div className="text1"><h1>Safe Flood</h1></div>
  </div>

  <div id="Desafios" className="desafios">
    <div className="box3"></div>
    <div className="box4"></div>
    <div className="box5"></div>
    <section className="box6">
      <div className="text4">
        <h2>Navegue pelos Desafios das Inundações</h2>
      </div>
      <div className="text5">
        <h4>As inundações são obstáculos complexos, mas a SafeFlood simplifica a resposta a esses eventos.</h4>
      </div>
      <div className="text6">
        <h4>Explore como nossos recursos vão além do convencional, capacitando você a entender, se preparar e agir diante das inundações.</h4>
      </div>
    </section>

  </div>

  <div id="Seguranca" className="seguranca">
    <div className="box7"></div>
    <div className="text7">
      <div className="part">
        <h2>Acompanhe os locais inundados com base nas chuvas</h2>
      </div>
      <div className="part">
        <h3>Segurança é mais do que um conceito para nós, é uma promessa. Através de tecnologia de ponta, oferecemos não apenas dados, mas uma linha de defesa contra as inundações.</h3>
      </div>
    </div>
  </div>

  <div id="Confianca" className="confianca">
    <div className="box8"></div>
    <div className="box9">
      <div className="text8">
        <h2>Com o nosso app, você consegue ver qual local seguro está mais próximo de você!</h2>
      </div>
      <div className="text9">
        <p>Confiança é a base de tudo. Na SafeFlood, cada alerta é mais do que uma notificação; é a certeza de que você está preparado. Explore a confiança que construímos, baseada em dados precisos, informações confiáveis e um compromisso inabalável com a sua segurança</p>
      </div>
    </div>
  </div>
  <div id="Cadastro" className="cadastro">
        <div className="bgt">
            
        </div>
        <div className="text2"><h2>Cadastre-se para baixar o nosso APP!</h2></div>
        <div className="text3"><h3>Disponível nas plataformas IOS e Android</h3></div>
        <div className="box2"></div>
        <div className="button1">

            <div className="d-grid gap-2 col-6 mx-auto p-5">
                <button type="button" className="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    Cadastre-se
                </button>
            </div>

            <div className="modal fade " id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <div className="modal-header" data-bs-theme="dark">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Cadastro para o APP Safe Flood</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className="row mb-4 p-3 justify-content-md-evenly bg-7">
                                <div className="col-md-5 my-2">
                                    <label htmlFor="nome" className="form-label">Nome</label>
                                    <input type="text" className="form-control" id="nome" name="nome" placeholder="Ex: João da Silva" required/>
                                </div>
                                
                                <div className="col-md-5 my-2">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="email" name="email" placeholder="Ex: email@gmail.com" required/>
                                </div>
                            
                                <div className="col-md-5 my-2">
                                    <label htmlFor="telefone" className="form-label">Telefone</label>
                                    <input type="tel" className="form-control" id="telefone" name="telefone" placeholder="Ex: 99999-9999" required/>
                                </div>
                            
                                <div className="col-md-5 my-2">
                                    <label htmlFor="cep" className="form-label">CEP</label>
                                    <input type="text" className="form-control" id="cep" name="cep" placeholder="Ex: 11111-111" required/>
                                </div>
                            
                                <div className="col-md-5 my-2">
                                    <label htmlFor="cidade" className="form-label">Cidade</label>
                                    <input type="text" className="form-control" id="cidade" name="cidade" placeholder="Ex: São Paulo" required/>
                                </div>
                            
                                <div className="col-md-5 my-2">
                                    <label htmlFor="estado" className="form-label">Estado</label>
                                    <select className="form-select" id="estado" name="estado" required>
                                        <option value="" disabled>Selecione o estado</option>
                                        <option value="SP">São Paulo</option>
                                        <option value="RJ">Rio de Janeiro</option>
                                        <option value="DF">Distrito Federal</option>
                                    </select>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer ">
                            <div className="mx-auto">
                                <button type="button" className="btn btn-danger btn-lg" data-bs-dismiss="modal">Fechar</button>
                                <button type="button" className="btn btn-success btn-lg" onClick={Enviar}>Enviar</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</body>

);
}

export default Body;