import { } from 'react';
import '../assets/scss/styles.scss';
import '../assets/css/styles.css';

function Cadastro () {
return (
<body className="bg1">

<div id="Cadastro" className="cadastro">HTML
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
                                <inputHTML type="text" className="form-control" id="nome" name="nome" placeholder="Ex: João da Silva" required/>
                            </div>
                            
                            <div className="col-md-5 my-2">
                                <label htmlFor="email" className="form-label">Email</label>
                                <inputHTML type="email" className="form-control" id="email" name="email" placeholder="Ex: email@gmail.com" required/>
                            </div>
              
                            <div className="col-md-5 my-2">
                                <label htmlFor="telefone" className="form-label">Telefone</label>
                                <inputHTML type="tel" className="form-control" id="telefone" name="telefone" placeholder="Ex: 99999-9999" required/>
                            </div>
              
                            <div className="col-md-5 my-2">
                                <label htmlFor="cep" className="form-label">CEP</label>
                                <inputHTML type="text" className="form-control" id="cep" name="cep" placeholder="Ex: 11111-111" required/>
                            </div>
              
                            <div className="col-md-5 my-2">
                                <label htmlFor="cidade" className="form-label">Cidade</label>
                                <inputHTML type="text" className="form-control" id="Cidade" name="cidade" placeholder="Ex: São Paulo" required/>
                            </div>
              
                            <div className="col-md-5 my-2">
                                <label htmlFor="estado" className="form-label">Estado</label>
                                <select className="form-select" id="estado" name="estado" required>
                                  <option value="" selected disabled>Selecione o estado</option>
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
                            <button type="button" className="btn btn-success btn-lg" onClick="Enviar()">Enviar</button>
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

export default Cadastro;
