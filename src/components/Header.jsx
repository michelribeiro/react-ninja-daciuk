import React, { Component } from "react";
import { PageHeader,Image } from 'react-bootstrap';


class Header extends Component {

    render() {

        return (
            <PageHeader>
                <Image src={`https://dummyimage.com/120x120/cccccc/000766&text=logo`} alt="imagem header" circle />
            </PageHeader>
        )
    }
    
}

export default Header;