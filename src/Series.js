import React, {Component} from 'react'
import api from './Api'
import {Link} from 'react-router-dom'

//Traduzir os termos de status
const statuses={
    'watched' : 'Assistido',
    'watching' : 'Assistindo',
    'toWatch' : 'Assistir',
}

class Series extends Component{

    //Definindo o estado inicial
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            series: [],
        };
        this.renderSeries = this.renderSeries.bind(this);
        this.loadData = this.loadData.bind(this);
    }


    // trabalha para carregar informação da pagina
    componentDidMount() {
       this.loadData()
    }

    // Carrega json de series do banco
    loadData(){
        this.setState({ isLoading: true });
        // Ele acessa a url e busca o parametro
        api.loadSeriesByGenre(this.props.match.params.genre).then(res => {
            this.setState({
            isLoading: false,
            //objetivo retornado do banco
            series: res.data
            });
        });
    }

    //Metodo para deletar serie
    deleteSeries(id){
        api.deleteSeries(id).then((res)=> this.loadData());
    }

    //Rendenizar os cards de series.
    //'series' é objeto passado do banco
    renderSeries(series){
        return(
            <div key={series.id} className="item  col-xs-4 col-lg-4">
                <div className="thumbnail">
                    <img className="group list-group-image" src="http://placehold.it/400x250/000/fff" alt=""/>
                    <div className="caption">
                        <h4 className="group inner list-group-item-heading">
                            {series.name}
                            </h4>
                        <div className="row">
                            <div className="col-xs-12 col-md-6">
                                <p className="lead">
                                    {series.genre} / {statuses[series.status]}
                                </p>
                            </div>
                            <div className="col-xs-12 col-md-6">
                                <Link className="btn btn-success" to={'/series-edit/'+series.id}>Editar</Link>
                                <a className="btn btn-success" onClick={()=> this.deleteSeries(series.id)}>Excluir</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    render(){
        return (
            <section id="intro" className="intro-section">
                <h1>Series {this.props.match.params.genre}</h1>
                {/* Series vem do array definido acima */}
                <div id="series" className="row list-group">
                    {/* Carregando */}
                    {this.state.isLoading && 
                     <p className="carregando">Carrega aguarde...</p>
                    }
                    {/* se não houver series cadastrada */}
                    {!this.state.series.length === 0 && 
                     <p className="alert alert-info">Não há series cadastrada nesta categoria</p>
                    }
                    {/* se houver e finalizar o carregando ok */}
                    {!this.state.isLoading &&
                     this.state.series.map(this.renderSeries)
                    }
                </div>
            </section>
        )
    }
}

export default Series;