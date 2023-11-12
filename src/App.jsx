import { } from 'react'
import './assets/scss/styles.scss';
import './assets/css/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from './componentes/Header'
import Footer from './Footer'
import Body from './componentes/Body'

function App() {

  return (

    <div>
      <Header />
      <Body />
      <Footer />
    </div>

  )
  
}

export default App
