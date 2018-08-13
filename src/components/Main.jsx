import React, { Component } from "react";
import { Table } from 'react-bootstrap';
//Grid, Row, Col,Glyphicon,
import data from '../db.json';

class Main extends Component {

    state = {
        data: []
    }

    componentDidMount() {
        this.setState({ data })
    }
    // console.log('---->', i.LOSE_DS_URL.replace("https://modelosite/api/", "").replace("http://localhost/api/", ""))
    // console.log(url.replace(/(http:\/\/).{0,100}(\/api\/)/g, 'api/'))
 
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
                            this.state.data.map((data, key) => {
                                return (
                                    <tr key={key}>
                                        <td>{data.LOSE_ID_LOG_SERVICO_API}</td>
                                        <td>{data.LOSE_DS_URL.replace("https://modelosite/api/", "").replace("http://localhost/api/", "")}</td>
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