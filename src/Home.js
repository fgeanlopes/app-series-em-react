import React, {Component}  from 'react';

import {Link} from 'react-router-dom'
import api from './Api';

// Importa o arquivo criado "api" (abre a conexao local host)
// import api from "./Api";

class Home extends Component{
    //setando propriedades e status no state
    constructor(props) {
        super(props);
        this.state = {
        genres: [],
        isLoading: false
        };
    }

    // trabalha para carregar informação da pagina
    componentDidMount() {

        // é true enquanto carrefa;
        this.setState({ isLoading: true });

        //Esta vindo da Api.js
        api.loadGenres().then(res => {
            this.setState({
            genres: res.data,
            //Quando acaba de carregar, seta false
            isLoading: false,
            });
        });
    }
    //busca as categorias 
    renderGenreLink(genre) {
        return (
            //Gera link de categoria usando genre passado por parametro, 
            //vindo do banco
            <span key={genre}>
                <Link to={`/series/${genre}`}>{genre}</Link>
            </span>
        );
    }
    //rendezinar o componente 
    render(){
        return(
        <div className="home">
            <section>
                <img className="banner-home" src="/images/logo.png" />
                <p>Nunca mais esqueça uma série que você assistiu ou que alguém lhe indicou.</p>
            </section>

            <section className='categorias'>
                Escolha a categoria
                {this.state.isLoading && (
                    <span className="carregando">Aguarde carregando</span>
                )}
                {!this.state.isLoading && (
                    <div>{this.state.genres.map(this.renderGenreLink)}</div>
                )}
            </section>
        </div>
        )
    }
}

//exportar para enviar para chamar no app.js
export default Home;