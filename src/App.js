//Puxa apenas os "components" do react
import React, { Component } from "react";

// import para trabalhar com rotas
// Route ==> Não sei ao certo, Rotas em geral
// Route ==> Não sei ao certo tbm
// Link ==> Para trabalgar com links "a href"
import {
  BrowserRouter as Router, Route, Link
} from 'react-router-dom'

//Puxa informação da home, arquivo home.js
import Home from "./Home";
import Series from "./Series";
import NewSeries from "./NewSeries";
import EditSeries from "./EditSeries";
import Sobre from "./Sobre";

//funcional-staless compoment

//Componente da tela que ira rendenizar
class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <nav className="barra-de-navegacao">
          <div className="container">
              <a className="navbar-brand page-scroll">
              <Link to="/"><img src="/images/logo.png" height="50" /></Link>
              </a>
              <ul className="itens-barra-de-navegacao">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/new">Nova Serie</Link>
                </li>
                <li>
                  <Link to="/sobre">Sobre</Link>
                </li>
              </ul>
            {/* Mostra apenas o conteudo exato */}
          </div>
        </nav>
        <main className="container">
        <Route exact path='/' component = {Home}/>
            <Route path='/series-edit/:id' component = {EditSeries}/>
            <Route path='/series/:genre' component = {Series}/>
            <Route exact path='/new' component = {NewSeries}/>
            <Route exact path='/sobre' component = {Sobre}/>
        </main>
      </div>
    </Router>
    );
  }
}

//Deixa o conteudo disponivel para outras funções
export default App;