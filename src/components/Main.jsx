import React, { Component } from "react";
import { Table } from 'react-bootstrap';
//Grid, Row, Col,Glyphicon,
import data from '../db.json';

class Main extends Component {

    filterInfoData(data) {
        // recebo o objeto e quero tratar da seguinte forma
        // Popular em cada lopping seus respectivos valores corretamente e fazer tratamento
        // das informações que precisam ser tratadas como replace em um pedaço de url
        // Abaixo segue a lista do que quero tratar
        // LOSE_DS_URL < ------ aqui eu quero tratar essa url
        // LOSE_CD_STATUS_CODE < ---- esse aqui vem o status que já resolvemos no próprio render com a verificação com o ternário
        // LOSE_DT_REQUEST_CHAMADA < --- quero tratar a data pra colocar em um formato melhor
        // LOSE_CD_STATUS_CODE < --- resolvi isso colocando inline a verificação, mas acho q vc sanando a minha dúvida de como
        // passo para o map() as informações tratadas posso optar em jogar para o render isso já tratado ao invés de verificar no render quem veio

        // Como você falou, tenho que chamar a função antes do .map() que renderiza no render()
        // Seria essa função que estamos dentro,porém, não estou sabendo como envio novamente para o map os dados tratados
        // entendi que tenho que usar o filter pra pegar os elementos que quero tratar, só que continuo na mesma dúvida de como enviar
        // pra dentro do map eles já tratados.
        return data.filter((i) => {
            console.log('---->', i.LOSE_DS_URL.replace("https://modelosite/api/", "").replace("http://localhost/api/", ""))
            
            return data
            // retorno o objeto para o map sem fazer nada, pois dependo de sanar as dúvidas
            // meu contato caso queira falar pelo zap ou hangout é 21 97904-4440, michelribeiro2004@gmail.com

            // agora a pergunta de ouro e vale um cerveja quando você vier ao RJ
            // manipular o state com o setState tem sido meu grande calcanhar de Aquiles, em hipotese alguma eu posso injetar um novo estado a um elemento quando
            // esse esta em looping e será populado pelo map(), certo ? 
            // A forma sempre será passar o objeto para uma função antes do map() e manipular nessa função e retornar para o map com ela já manipulada ?
            // Se for isso, acho que você matando essa dúvida, ficará claro pra mim a forma de manipular os dados do array e retornar com ele para o map() injetar.
        })
    }
 
    render() {
        return (
            <div>
                <Table striped bordered responsive hover>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Ds url</th>
                            <th>Tp resquest method</th>
                            <th>Ds nome sistema</th>
                            <th>status</th>
                            <th>NU tempo decorrido</th>
                            <th>Dt request chamada</th>
                            <th>Dt response chamada</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.filterInfoData(data).map((data, key) => {
                                return (
                                    <tr key={key}>
                                        <td>{data.LOSE_ID_LOG_SERVICO_API}</td>
                                        <td>{data.LOSE_DS_URL}</td>
                                        <td>{data.LOSE_TP_RESQUEST_METHOD}</td>
                                        <td>{data.LOSE_DS_NOME_SISTEMA}</td>
                                        <td className={data.LOSE_CD_STATUS_CODE !== '200' ? 'error': 'normal'}>
                                            <span>{data.LOSE_CD_STATUS_CODE}</span>
                                        </td>
                                        <td>{data.LOSE_NU_TEMPO_DECORRIDO}</td>
                                        <td>{data.LOSE_DT_REQUEST_CHAMADA}</td>
                                        <td>{data.LOSE_DT_RESPONSE_CHAMADA}</td>
                                    </tr>
                                ) 

                            }) 
                        }
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default Main;