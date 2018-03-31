import React, { Component } from 'react';
import styled from "styled-components";
import Navigation from './Navigation';

const Container = styled.div`
	height: 60px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 1px solid grey;
	border-radius: 7px;
	margin-bottom: 15px;
	box-shadow: 0 1px 2px grey;
	background: white;
	box-sizing: border-box;
	padding: 0 30px;

	a {
		color: green;
	}
`;


class Header extends Component {

	render() {
		return (
			<Container className=""> <a href="/"> {this.props.children} </a> <Navigation /> </Container>
		);
	}
}

export default Header;