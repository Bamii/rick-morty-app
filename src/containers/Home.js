import React, { Component } from 'react';
import styled from 'styled-components';
import { Container } from '../containers/PageContainer';
import HomePic from '../img/homepage.png';
import './assets/Home.css';

const Pic = styled.img`
  margin-top: 10px;
  width: auto;
  height: calc(100vh - 200px);
`;

const ContainerMod = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

class Home extends Component {  
  render() {
    return (
      <ContainerMod>
        <Pic src={HomePic} alt="Rick and Morty"/>
      </ContainerMod>
    );
  }
}

export default Home;
