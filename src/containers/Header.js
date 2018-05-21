import React, { Component } from 'react';
import styled from "styled-components";
import Navigation from './Navigation';

const Container = styled.div`
	height: 90px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 15px;
	box-shadow: 0 1px 20px #dbdde0;
	background: white;
	box-sizing: border-box;
	padding: 0 30px;

	a {
		color: green;
	}
`;

const Img = styled.img`
	height: 70px;
	width: auto;
`;

class Header extends Component {

	render() {
		return (
			<Container> <a href="/"> <Img src="http://res.cloudinary.com/bambam/image/upload/v1526900336/logo-2.png" alt=""/> </a> <Navigation /> </Container>
		);
	}
}

export default Header;