import React, { Component } from 'react';
import styled from 'styled-components';
import { Container } from './PageContainer';
import { FaPhone, FaLinkedin } from 'react-icons/lib/fa';
import { MdEmail } from 'react-icons/lib/md';

const Container2 = styled(Container) `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%; 
`;

class About extends Component {
    render() {
        return (
            <Container2>
                <div>This Web App was built with ♥ by <a href="https://bamii.github.io"> Bami </a> &copy;.</div>
                <div>Huge thanks to <a href="https://github.com/afuh/rick-and-morty-api"> Afuh </a> for making this API available for public consumption.</div>
                <br /> <br />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ textDecoration: "underline", alignSelf: "center" }}>
                        Contact me
                    </div>
                    <div>
                        <FaPhone /> :  +2347063716585 
                    </div>
                    <div>
                        <MdEmail /> : <a href="mailto:bbamii@outlook.com">bbamii@outlook.com</a>
                    </div> 
                    <div>
                        <FaLinkedin /> : <a href="http://www.linkedin.com/in/bbamii">My Profile</a>
                    </div>
                
                </div>
                <br/> <br/>
                <div>
                    Cheers! ♥
                </div>
            </Container2>
        );
    }
}

export default About;