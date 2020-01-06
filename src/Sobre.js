import React, {Componet, Component} from 'react'

class Sobre extends Component{
    render(){
        return(
            <div className="sobre">
                <description>
                    Projeto desenvolvido com base nas aulas do <a href="https://devpleno.com/seriereactjs-aulas/" target="_blank"><span>mini curso</span></a> do <a href="https://devpleno.com/" target
                    ="_blank"> <span>Dev Pleno.</span></a><br/><br/>Neste mini curso, trabalhamos com:  
                    
                    <ul className="lista-sobre">
                        <li>Importação de componentes do react.</li>
                        <li>Rotas para alterar entre os conteúdo de home, sobre e series</li>
                        <li>Redirecionamento ao salvar conteúdo</li>
                        <li>Trabalhamos métodos para adicionar, remover e editar conteúdo</li>
                        <li>Fizemos uso de api, buscando informação em banco de dados local</li>
                    </ul>

                    Meu nome é <span>Gean Lopes.</span> <br></br><br></br> Contato: <a href="https://www.linkedin.com/in/geanlopes/"><span>Linkedin</span></a>

                </description>
            </div>
        )
    }
}

export default Sobre