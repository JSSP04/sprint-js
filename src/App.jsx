import { } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from './componentes/Header'
import Footer from './Footer'
import Body from './componentes/Body'
import Cadastro from './componentes/Cadastro';


function App() {

  return (

    <div>
      <Header />
      <Body />
      <Cadastro />
      <Footer />
    </div>

  )
  
}

export default App
