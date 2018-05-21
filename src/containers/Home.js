import React, { Component } from 'react';
import styled from 'styled-components';
import { Container } from '../containers/PageContainer';
import './assets/Home.css';

const Happy = styled.div`
  margin-top: 50px;
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }
  
  render() {
    return (
      <Container>
        
      </Container>
    );
  }
}

export default Home;
