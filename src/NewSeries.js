import React, {Component} from 'react'
import api from './Api'
import { Redirect } from 'react-router-dom'

//Status da series
const statuses={
    'watched' : 'Assistido',
    'watching' : 'Assistindo',
    'toWatch' : 'Assistir',
}

class NewSeries extends Component{
    
    //setando propriedades e status no state
    constructor(props) {
        super(props);
        this.state = {
        genres: [],
        isLoading: false,
        redirect: false
        };
        this.saveSeries = this.saveSeries.bind(this);
    }

    // trabalha para carregar informação da pagina
    componentDidMount() {
        this.setState({ isLoading: true });
        api.loadGenres().then(res => {
            this.setState({
            isLoading: false,
            genres: res.data
            });
        });
    }

    // Metodo para salvar informação da serie
    saveSeries(){
        //Ao executar, cria um objeto.
        const NewSeries={
            // Busca os refs que foram atritubiidas ao formulario
            name:this.refs.name.value,
            status:this.refs.status.value,
            genre:this.refs.genre.value,
            comments:this.refs.comments.value
        }
            // Preciso passar o NewSeries
            api.saveSeries(NewSeries).then((res)=>{
            this.setState({
                // ao salvar manda para a categoria relacionada
                redirect:'/series/'+this.refs.genre.value
            });
        });
    }
    render(){
        return(
            <div>
               <section className="nova-serie">
                { this.state.redirect && <Redirect to={this.state.redirect}/> }
                   <h1 className="titulo-seccao">Nova Série</h1>
                   <form>
                        <div className="item-form">
                            <p>Nome:</p>
                            <input type="text" ref="name" className="form-control"></input>
                        </div>
                        <div className="item-form status-genero">
                            <div className="status">
                                <p>Status:</p>
                                <select ref="status" >
                                    {/* Acessa o objeto lista todo o seu conteudo */}
                                    {Object
                                        .keys(statuses)
                                        .map(key => <option key={key} value={key}>{statuses[key]}</option>)
                                    }
                                </select>
                            </div>
                            <div className="genero">
                                <p>Gênero:</p>
                                <select ref="genre">
                                    {this.state.genres
                                        .map(key => <option  key={key} value={key}>{key}</option>)
                                    }
                                </select>
                            </div>
                        </div>
                        <div className="item-form">
                            <p>Comentários</p><textarea ref="comments" className="form-control"></textarea>
                        </div>
                        <button disabled type="button" onClick={this.saveSeries}>Desativado</button>
                   </form>
                </section> 
            </div>
        )
    }
}
export default NewSeries;