import React, { Component } from 'react';
import styled from "styled-components";
import { NavigationContainer } from './PageContainer';
import { FaBars, FaTimesCircle } from 'react-icons/lib/fa';
import { Container, Img, Hamburger, Cancel, Modal } from './assets/styles';
import portal from './assets/portal.png';

class Header extends Component {

	constructor(props) {
		super(props);

		this.state = {
			width: window.innerWidth,
			modal: false,
			type: false,
		}
		this.navHandler = this.navHandler.bind(this);
		this.handleWindowSizeChange = this.handleWindowSizeChange.bind(this);
	}

	componentWillMount() {
		window.addEventListener('resize', this.handleWindowSizeChange);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.handleWindowSizeChange);
	}

	handleWindowSizeChange() {
		this.setState({ width: window.innerWidth });
	}

	navHandler() {
		this.state.modal ? this.setState({ modal: false, type: false }) : this.setState({ modal: true, type: true })
	}

	render() {
		return (
			<Container>
				<a href="/"> <Img src="http://res.cloudinary.com/bambam/image/upload/v1526900336/logo-2.png" alt="Rick And Morty Logo"/> </a>
				<NavigationContainer>
					{this.state.width >= 590 && 
						<div style={{ width: '100%' }}>
							<a href="/characters"> Characters </a>
							<a href="/locations"> Locations </a>
							<a href="/episodes"> Episodes </a>
							<a href="/about"> About </a>
						</div> }

					{this.state.width < 590 && !this.state.type &&
						<Hamburger onClick={this.navHandler}> <FaBars /> </Hamburger>}

					{this.state.width < 590 && this.state.type &&
						<Hamburger onClick={this.navHandler}> <FaTimesCircle /> </Hamburger>}

					{this.state.modal &&
						<Modal style={{ background: `url(${portal})`, backgroundRepeat: 'round' }}>
							{/* <Cancel onClick={this.navHandler}> <FaTimesCircle /> </Cancel> */}
							<div>
								<hr />
									<a href="/characters"> Characters </a>
									<a href="/locations"> Locations </a>
									<a href="/episodes"> Episodes </a>
									<a href="/about"> About </a>
								<hr />
							</div>
						</Modal>}
				</NavigationContainer>
			</Container>
		);
	}
}

export default Header;