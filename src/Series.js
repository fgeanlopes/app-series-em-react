import React, {Component} from 'react'
import api from './Api'

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
    }


    // trabalha para carregar informação da pagina
    componentDidMount() {
        this.setState({ isLoading: true });

        // Ele acessa a url e busca a categoria no banco
        api.loadSeriesByGenre(this.props.match.params.genre).then(res => {
            this.setState({
            isLoading: false,
            //objetivo retornado do banco
            series: res.data
            });
        });
    }

    //Rendenizar os cards de series.
    //'series' é objeto passado do banco
    renderSeries(series){
        return(
            <div className="item  col-xs-4 col-lg-4">
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
                                <a className="btn btn-success" href="">Gerenciar</a>
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
                    { !this.state.isLoading && this.state.series.map(this.renderSeries)}
                </div>
            </section>
        )
    }
}

export default Series;