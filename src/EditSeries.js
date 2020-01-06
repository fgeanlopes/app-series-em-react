import React, {Component} from 'react'
import api from './Api'
import { Redirect } from 'react-router-dom'

//Status da series
const statuses={
    'watched' : 'Assistido',
    'watching' : 'Assistindo',
    'toWatch' : 'Assistir',
}

class EditSeries extends Component{
    
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
        api.loadSeriesById()
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
        api.saveSeries(NewSeries).then((res)=> {
            //Quando for salvo, ira fazer 
            //redirecionamento para a pagina
            //de categoria cadastrada
            this.setState({
                //OBS: refs ele esta pegando
                //do valor do formulario
                redirect:'/series/'+this.refs.genre.value
            });
        });
    }
    render(){
        return(
            <div>
               <section className="intro-section">
                { this.state.redirect && <Redirect to={this.state.redirect}/> }
                   <h1>Nova Série</h1>
                   <form>
                        <div>
                            {/* tag ref serve de referencia para o campo (indentificacao) */}
                            Nome:<input type="text" ref="name" className="form-control"></input>
                        </div>
                        <div>
                            Status:
                            <select ref="status" >
                                {/* Acessa o objeto lista todo o seu conteudo */}
                                {Object
                                    .keys(statuses)
                                    .map(key => <option key={key} value={key}>{statuses[key]}</option>)
                                }
                            </select>
                        </div>
                        <div>
                            Gênero:
                            <select ref="genre">
                                {this.state.genres
                                    .map(key => <option  key={key} value={key}>{key}</option>)
                                }
                            </select>
                        </div>
                        <div>
                            Comentários<textarea ref="comments" className="form-control"></textarea>
                        </div>
                        <div>
                            {/* Ao clicar executa a funcao saveSeries */}
                            <button type="button" onClick={this.saveSeries}>Salvar</button>
                        </div>
                   </form>
                </section> 
            </div>
        )
    }
}
export default EditSeries;