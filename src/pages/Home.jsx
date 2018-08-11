import React, { Component } from "react";

import Header from '../components/Header'
import Main from '../components/Main'

class Home extends Component {

    
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