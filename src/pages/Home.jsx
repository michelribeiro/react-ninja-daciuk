import React, { Component } from "react";

import Header from '../components/Header'
import Main from '../components/Main'

class Home extends Component {

    constructor(props) {
        super(props)
    }
    
    componentDidMount() {}

    render() {
        return (
            <div>
                <Header />
                <Main />
            </div>
        )
    }
    
}

export default Home;