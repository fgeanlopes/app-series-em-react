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

//funcional-staless compoment
const About = () => <section className="intro-section"><h1>Sobre</h1></section>

//Componente da tela que ira rendenizar
class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <nav
          className="navbar navbar-default navbar-fixed-top"
          role="navigation"
        >
          <div className="container">
            <div className="navbar-header page-scroll">
              <a className="navbar-brand page-scroll" href="#page-top">
                <img src="images/logo.png" height="30" />
              </a>
            </div>
            <div className="collapse navbar-collapse navbar-ex1-collapse">
              <ul className="nav navbar-nav">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/new">Nova Serie</Link>
                </li>
                <li>
                  <Link to="/about">Sobre</Link>
                </li>
              </ul>
            </div>
            {/* Mostra apenas o conteudo exato */}
            <Route exact path='/' component = {Home}/>
            <Route path='/series/:genre' component = {Series}/>
            <Route exact path='/about' component = {About}/>
            <Route exact path='/new' component = {NewSeries}/>
          </div>
        </nav>
      </div>
    </Router>
    );
  }
}

//Deixa o conteudo disponivel para outras funções
export default App;