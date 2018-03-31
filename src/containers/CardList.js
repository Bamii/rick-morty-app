import React, { Component } from 'react';
import Card from './Card';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`;

const Season = styled.div`
	width: 100%;
	height: 30px;
	border-bottom: 1px solid grey;
	font-size: large;
	margin: 20px 0;
`;

class CardList extends Component {
	render() {

		const array2 = this.props.items;
		const array3 = this.props.items[0].results;
		let season1, season2, season3;
		if(this.props.type === "episode"){
			season1 = array2.filter((item) => {
				return item.episode.charAt(2) == 1;
			})

			season2 = array2.filter((item) => {
				return item.episode.charAt(2) == 2;
			})

			season3 = array2.filter((item) => {
				return item.episode.charAt(2) == 3;
			})
			console.log(array2);
			console.log(season3);
		}

		return (
			<div>
				{this.props.type === "episode" ?
					<Container>
						<Season> Season 1 </Season>
						{season1.map((item) => {
							return <Card type={this.props.type} key={season1.indexOf(item)} item={item}> </Card> 
						})}

						<Season> Season 2 </Season>
						{season2.map((item) => {
							return <Card type={this.props.type} key={season2.indexOf(item)} item={item}> </Card> 
						})}

						<Season> Season 3 </Season>
						{season3.map((item) => {
							return <Card type={this.props.type} key={season3.indexOf(item)} item={item}> </Card> 
						})}
					</Container>
				: 
					<Container>
						{array3.map((item) => {
							return <Card type={this.props.type} key={array3.indexOf(item)} item={item}> </Card>
						})}
					</Container>}
			</div>
			
		);
	}
}

export default CardList;