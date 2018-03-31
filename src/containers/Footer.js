import React, { Component } from 'react';
import styled from "styled-components";

const Container = styled.div`
	height: 60px;
	display: flex;
	justify-content: center;
	align-items: center;
	border: 1px solid grey;
	border-radius: 7px;
	margin-top: 15px;
	box-shadow: 0 -1px 2px grey;
	background: white;
`;

class Footer extends Component {
    constructor(props){
        super(props);
        this.state = {
             
        }
    }
    render() {
        return (
            <Container> Bami 2018 &copy; </Container>
        );
    }
}

export default Footer;