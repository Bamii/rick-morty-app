import React, { Component } from 'react';
import { Container } from './PageContainer';
import styled from 'styled-components';

const Container2 = styled(Container)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1, h3 {
        text-align: center;
    }

    img {
        height: 200px;
        width: 200px;
    }
`;

class NotFound extends Component {
    constructor(props){
        super(props);
        this.state = {
             
        }
    }
    render() {
        return (
            <Container2>
                <img src="http://res.cloudinary.com/bambam/image/upload/v1526900432/404.png" alt="Rick"/>
            </Container2>
        );
    }
}

export default NotFound;