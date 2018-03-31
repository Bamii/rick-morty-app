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
                <img src="./assets/not_found.png" alt="Rick"/>
                <h2>Oops! Seems like you've hit a dead end</h2>
                <h4>Try using the navigation bar at the top of the page.</h4>
            </Container2>
        );
    }
}

export default NotFound;