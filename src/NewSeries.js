import React, {Component} from 'react'
import api from './Api'

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
        isLoading: false
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
        const NewSeries={
            name:this.refs.name.value,
            status:this.refs.status.value,
            genre:this.refs.genre.value,
            comments:this.refs.comments.value
        }
        console.log(NewSeries)
    }
    render(){
        return(
            <div>
               <section className="intro-section">
                   <h1>Nova Série</h1>
                   <form>
                        <div>
                            Nome:<input type="text" ref="name" className="form-control"></input>
                        </div>
                        <div>
                            Status:
                            <select ref="status" >
                                {Object
                                    .keys(statuses)
                                    .map(key => <option key={key} value={key}>{statuses[key]}</option>)
                                }
                            </select>
                        </div>
                        <div>
                            Gênero:
                            <select>
                                {this.state.genres
                                    .map(key => <option ref="genre" key={key} value={key}>{key}</option>)
                                }
                            </select>
                        </div>
                        <div>
                            Comentários<textarea ref="comments" className="form-control"></textarea>
                        </div>
                        <div>
                            <button type="button" onClick={this.saveSeries}>Salvar</button>
                        </div>
                   </form>
                </section> 
            </div>
        )
    }
}
export default NewSeries;