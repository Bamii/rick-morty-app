import React, { Component } from 'react';
import styled from 'styled-components';
import { Container } from '../containers/PageContainer';
import './assets/Home.css';

const Container2 = styled(Container) `
  margin-top: 40px;
`;

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
      <Container2>
        <h2>Welcome to a Rick and Morty fanpage. Wubba lubba dub-dub!</h2> <br /> <br />
        This site is... <br/>
        (Ad-libs) <br/>
        Explore the site (...burps) using the (..burps) navigation bar on top! <br/>
        Wubba lubba dub-dub!!!!!!

        <Happy>
          <h3>HAPPY VIEWING!!!</h3>
        </Happy>
      </Container2>
    );
  }
}

export default Home;
