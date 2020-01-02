import React, {Component}  from 'react';

// Importa o arquivo criado "api" (abre a conexao local host)
// import api from "./Api";

class Home extends Component{
    //setando propriedades e status no state
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //     genres: [],
    //     isLoading: false
    //     };
    // }

    // trabalha para carregar informação da pagina
    // componentDidMount() {
    //     this.setState({ isLoading: true });
    //     api.loadGenres().then(res => {
    //         this.setState({
    //         isLoading: false,
    //         genres: res.data
    //         });
    //     });
    // }
    //busca as categorias 
    renderGenreLink(genres) {
        return (
            <span>
            &nbsp;<a href="">{genres}</a>&nbsp;
            </span>
        );
    }
    //rendezinar o componente 
    render(){
        return(
        <div>
            <section id="intro" className="intro-section">
                <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                    <h1>
                        <img src="images/logo.png" />
                    </h1>
                    <p>
                        Nunca mais esqueça uma série que você assistiu ou que alguém
                        lhe indicou.
                    </p>
                    </div>
                </div>
                </div>
            </section>
            <section>
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