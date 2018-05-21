import React, { Component } from 'react';
import styled from 'styled-components';
import { Container } from './PageContainer';
import { FaPhone, FaLinkedin, FaGlobe } from 'react-icons/lib/fa';
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
                <h3></h3>
                <h3> CREDITS </h3>
                <div>Browser Icon gotten from <a href="https://dribbble.com/almigor">Aleksandar Savic</a></div>
                <div>Rick And Morty pictures made available by <a href="http://pngmart.com">Png Mart</a>.</div>
                <div>Huge thanks to <a href="https://github.com/afuh/rick-and-morty-api"> Afuh </a> for making this API available for public consumption.</div>
                <div>MASSIVE Thanks to <strong>Justin Roiland & Dan Harmon</strong> for creating this beautiful series.</div>
                <br /> <br />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ alignSelf: "center", fontSize: "large" }}>
                      <hr />  BUZZ ME ;)... Slide in my DMs or something. Just Leave a feeback and i'll be sure to reply  <hr/>
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
                    <div>
                        <FaGlobe /> : <a href="https://bamii.github.io">My Website & Portfolio</a>
                    </div>
                
                </div>
                <br/> <br/>
                <div>
                    This Web App was built with ♥ by <a href="https://bamii.github.io"> Bami </a> &copy;.
                </div>
            </Container2>
        );
    }
}

export default About;