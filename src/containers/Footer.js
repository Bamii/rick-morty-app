import React, { Component } from 'react';
import styled from "styled-components";

const Container = styled.div`
	height: 80px;
	display: flex;
	justify-content: space-between;
    align-items: center;
    margin-top: 15px;
    background: white;
    padding: 0 30px;
    box-shadow: 0 -1px 20px #eaedf2;

    @media (max-width: 360px) {
        height: 100px;
        flex-direction: column;
        justify-content: space-around;
        padding-top: 10px;
    }
`;

const Social = styled.div`
    display: flex;
    flex-wrap: wrap;

    a {
        text-decoration: none;
    }

    i {
        justify-self: flex-end;
        height: 40px;
        width: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: x-large;
        color: grey;

        :hover {
            color: black;
            cursor: pointer;
        }
    }
`;

class Footer extends Component {
    constructor(props){
        super(props);
        this.state = {
             
        }
    }
    render() {
        return (
            <Container>
                <div>Bami 2018 &copy;</div>
                <Social>
                    <a href="https://twitter.com/bbamii_"><i className="fab fa-twitter"></i></a>
                    <a href="http://www.linkedin.com/in/bbamii"><i className="fab fa-linkedin-in"></i></a>
                    <a href="mailto:bbamii@outlook.com"><i className="fas fa-at"></i></a>
                    <a href="https://bamii.github.io"><i className="fas fa-globe"></i></a>
                </Social>
            </Container>
        );
    }
}

export default Footer;