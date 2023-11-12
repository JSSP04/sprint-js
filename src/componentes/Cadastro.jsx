import { } from 'react';
import '../assets/scss/styles.scss';
import '../assets/css/styles.css';

const Cadastro = () => {
return (
<body class="bg1">

{/* cadastro */}
<div id="Cadastro" class="cadastro">HTML
    <div class="bgt">
        
    </div>
    <div class="text2"><h2>Cadastre-se para baixar o nosso APP!</h2></div>
    <div class="text3"><h3>Disponível nas plataformas IOS e Android</h3></div>
    <div class="box2"></div>
    <div class="button1">

        {/* Button trigger modal */}
        <div class="d-grid gap-2 col-6 mx-auto p-5">
            <button type="button" class="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Cadastre-se
            </button>
        </div>

        {/* Modal */}
        <div class="modal fade " id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content">
                    <div class="modal-header" data-bs-theme="dark">
                        <h1 class="modal-title fs-5" id="staticBackdropLabel">Cadastro para o APP Safe Flood</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form class="row mb-4 p-3 justify-content-md-evenly bg-7">

                            <div class="col-md-5 my-2">
                                <label for="nome" class="form-label">Nome</label>
                                <inputHTML type="text" class="form-control" id="nome" name="nome" placeholder="Ex: João da Silva" required/>
                            </div>
                            
                            <div class="col-md-5 my-2">
                                <label for="email" class="form-label">Email</label>
                                <inputHTML type="email" class="form-control" id="email" name="email" placeholder="Ex: email@gmail.com" required/>
                            </div>
              
                            <div class="col-md-5 my-2">
                                <label for="telefone" class="form-label">Telefone</label>
                                <inputHTML type="tel" class="form-control" id="telefone" name="telefone" placeholder="Ex: 99999-9999" required/>
                            </div>
              
                            <div class="col-md-5 my-2">
                                <label for="cep" class="form-label">CEP</label>
                                <inputHTML type="text" class="form-control" id="cep" name="cep" placeholder="Ex: 11111-111" required/>
                            </div>
              
                            <div class="col-md-5 my-2">
                                <label for="cidade" class="form-label">Cidade</label>
                                <inputHTML type="text" class="form-control" id="Cidade" name="cidade" placeholder="Ex: São Paulo" required/>
                            </div>
              
                            <div class="col-md-5 my-2">
                                <label for="estado" class="form-label">Estado</label>
                                <select class="form-select" id="estado" name="estado" required>
                                  <option value="" selected disabled>Selecione o estado</option>
                                  <option value="SP">São Paulo</option>
                                  <option value="RJ">Rio de Janeiro</option>
                                  <option value="DF">Distrito Federal</option>
                                </select>
                              </div>
                
                          </form>
                    </div>
                    <div class="modal-footer ">
                        <div class="mx-auto">
                            <button type="button" class="btn btn-danger btn-lg" data-bs-dismiss="modal">Fechar</button>
                            <button type="button" class="btn btn-success btn-lg" onclick="Enviar()">Enviar</button>
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
