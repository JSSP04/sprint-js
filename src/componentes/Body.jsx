import './Body.css';
import Img1 from '../../assets/img/Logo/logo_01.png'
import Img2 from '../../assets/img/mapa-chuva.jfif'
import Img3 from '../../assets/img/localizacao3d.png'

const Body = () => {
return (
<body className="container-fluid bg-1">
<main className="container-fluid">
    <section className="row d-flex align-items-center p-4 vh-90" id="home">
      <figure className="col-md-8 mx-auto d-flex justify-content-center">
        <img src={Img1} alt="Logo da Safe Flood" className="img-fluid img-logo"/>
      </figure>

      <article className="col-md-8 mx-auto d-flex justify-content-center">
        <h1 className="text-center font-logo">Safe Flood</h1>
      </article>
    </section>

    <section className="row bg-2 p-5 vh-100" id="Solucao">
      <div className="text-center d-flex align-items-center mx-auto bg-3">
        <div className="card-body row align-items-center">
          <h2 className="card-text fs-1 fw-bold">Como iremos ajudá-lo?</h2>
          <p className="card-text fs-3">Proteja-se contra enchentes com monitoramento em tempo real, alertas personalizados e mapas interativos. Mantenha-se seguro em São Paulo.</p>
        </div>
      </div>
    </section>

    <section className="row p-5 vh-100 bg-4" id="Inundacoes">
      <div className="row text-center d-flex align-items-center mx-auto bg-5">
        <article className="col-md-8 mx-auto">
          <h2 className="text-center fs-1 fw-bold">Acompanhe os locais inundados com base nas chuvas</h2>
        </article>
    
        <figure className="col-md-10 mx-auto">
          <img src={Img2} alt="imagem mapa com chuvas" className="img-fluid img1 rounded"/>
        </figure>
      </div>
    </section>

    <section className="row p-5 vh-100 bg-6" id="Seguranca">
      <div className="text-center d-flex align-items-center mx-auto bg-7">
        <article className="col-md-8 mx-auto">
          <h2 className=" text-center fs-1 fw-bold">Acompanhe os locais inundados com base nas chuvas</h2>
        </article>
      </div>
    </section>

    <section className="row bg-8 p-5 vh-100" id="Confianca">
      <div className="text-center d-flex align-items-center mx-auto bg-3">
        <div className="card-body row align-items-center">
          <h2 className="card-text fs-1 fw-bold">Localização e segurança</h2>
          <p className="card-text fs-3">Com o nosso app, você consegue ver qual local seguro está mais próximo de você!</p>
        </div>
      </div>
    </section>

    <section className="row p-4 vh-100 bg-9" id="Cadastro">
      <div className="row text-center p-4 d-flex align-items-center mx-auto bg-5">
        <article className="col-md-8 mx-auto d-flex justify-content-center">
          <div className="card-body row align-items-center p-3">
            <h2 className="card-text fs-1 fw-bold">A SafeFlood garantindo confiança para você!</h2>
            <p className="card-text fs-3">Garantimos confiança nas informações enviadas, baseadas em dispositivos de captação de água instalados em pontos estratégicos na cidade</p>
          </div>
        </article>
    
        <figure className="col-md-8 mx-auto d-flex justify-content-center">
          <img src={Img3} alt="imagem mapa com chuvas" className="img-fluid img1 rounded"/>
        </figure>
      </div>
    </section>


    
</main>
</body>

);
}

export default Body;