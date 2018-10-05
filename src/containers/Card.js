import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
	flex: initial;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	width: 200px;
	height: 300px;
	box-shadow: -4px 4px 12px 0px darkgrey;
    border-radius: 10px;
    padding: 30px;
	margin-left: 10px;
	margin-bottom: 10px;
	font-size: small;
	box-sizing: border-box;
	cursor: pointer;

	:hover {
		border: 2px solid darkseagreen;
	}
`;

const Container2 = styled(Container)`
	width: 300px;
	height: 150px;
	cursor: pointer;
`;

const ImageContainer = styled.div`
	height: 170px;
	width: 170px;
`;

const Image = styled.img`
	width: 100%;
	height: auto;
	border-radius: 50%;
`;

const Detail = styled.div`
	height: 50px;
	width: 100%;
	display: flex;
	align-items: center;
`;

const Strong = styled.strong`
	margin-right: 5px;
`;

class Card extends Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}

	render() {
		const { name, image, species, location, } = this.props.item;
		return (
			<div>
				{this.props.type === "character" &&
					<Container>
						<ImageContainer>
							<Image src={this.props.item.image} />
						</ImageContainer>
						{`Name: ${name}`} <br />
						{`Species: ${species}`} <br />
						{`Location: ${location.name}`}
					</Container>}


				{this.props.type === "location" &&
					<div>
						<Container2>
							<Detail>
								<Strong>NAME: </Strong> {` ${this.props.item.name}`}
							</Detail>
						  <Detail>
								<Strong>DIMENSION: </Strong>{` ${this.props.item.dimension}`}
							</Detail>
							<Detail>
								(Click for more details)
							</Detail>
						</Container2>
					</div>}

				{this.props.type === "episode" &&
					<Container2>
						<Detail>
							{this.props.item.episode}
						</Detail>
						<Detail>
							<Strong>NAME: </Strong> {` ${this.props.item.name}`}
						</Detail>
						<Detail>
							(Click for more details)
						</Detail>
					</Container2>}

				{this.props.type === "search" &&
					<Container>

					</Container>}
			</div>
		);
	}
}

export default Card;