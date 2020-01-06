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
        redirect: false,
        series:{},
        };
        this.saveSeries = this.saveSeries.bind(this);
    }

    // trabalha para carregar informação da pagina
    componentDidMount() {
        this.setState({ isLoading: true });
        api.loadSeriesById(this.props.match.params.id).then((res)=>{
            //Pega o data e coloca no res
            this.setState({series: res.data})

            // Define o dado para o resf
            this.refs.name.value = this.state.series.name
            this.refs.genre.value=  this.state.series.genre
            this.refs.comments.value=  this.state.series.comments
            this.refs.status.value= this.state.series.status
        })
            
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
            // Pega id por paramentro para salvar o novo conteudo
            id: this.props.match.params.id,
            
            // Busca os refs que foram atritubiidas ao formulario
            name:this.refs.name.value,
            status:this.refs.status.value,
            genre:this.refs.genre.value,
            comments:this.refs.comments.value
        }
        api.updateSeries(NewSeries).then((res)=> {
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
               <section className="nova-serie">
                { this.state.redirect && <Redirect to={this.state.redirect}/> }
                    <h1 className="titulo-seccao">Editar Serie</h1>
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
                        <button type="button" onClick={this.saveSeries}>Salvar</button>
                   </form>
                </section> 
            </div>
        )
    }
}
export default EditSeries;