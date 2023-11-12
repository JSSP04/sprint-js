import '../assets/scss/styles.scss';
import '../assets/css/styles.css';


const Body = () => {
return (
<body class="bg1">

  {/* Menu */}
  <div class="menu" id="Menu">
    <div class="box1"></div>
    <div class="text1"><h1>Safe Flood</h1></div>
  </div>

  {/* Desafios */}
  <div id="Desafios" class="desafios">
    <div class="box3"></div>
    <div class="box4"></div>
    <div class="box5"></div>
    <section class="box6">
      <div class="text4">
        <h2>Navegue pelos Desafios das Inundações</h2>
      </div>
      <div class="text5">
        <h4>As inundações são obstáculos complexos, mas a SafeFlood simplifica a resposta a esses eventos.</h4>
      </div>
      <div class="text6">
        <h4>Explore como nossos recursos vão além do convencional, capacitando você a entender, se preparar e agir diante das inundações.</h4>
      </div>
    </section>

  </div>

  {/* Segurança */}
  <div id="Seguranca" class="seguranca">
    <div class="box7"></div>
    <div class="text7">
      <div class="part">
        <h2>Acompanhe os locais inundados com base nas chuvas</h2>
      </div>
      <div class="part">
        <h3>Segurança é mais do que um conceito para nós, é uma promessa. Através de tecnologia de ponta, oferecemos não apenas dados, mas uma linha de defesa contra as inundações.</h3>
      </div>
    </div>
  </div>

  {/* Confiança */}
  <div id="Confianca" class="confianca">
    <div class="box8"></div>
    <div class="box9">
      <div class="text8">
        <h2>Com o nosso app, você consegue ver qual local seguro está mais próximo de você!</h2>
      </div>
      <div class="text9">
        <p>Confiança é a base de tudo. Na SafeFlood, cada alerta é mais do que uma notificação; é a certeza de que você está preparado. Explore a confiança que construímos, baseada em dados precisos, informações confiáveis e um compromisso inabalável com a sua segurança</p>
      </div>
    </div>
  </div> 
</body>

);
}

export default Body;