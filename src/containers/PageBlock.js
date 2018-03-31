import React, { Component } from 'react';
import styled from 'styled-components';

const Block = styled.div`
    width: 25px;
    height: 25px;
    border: 1px solid grey;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
		margin-right: 10px;
		
		:hover {
			cursor: pointer;
		}
`;

class PageBlock extends Component {
	render() {
		return (
			<Block
				style={this.props.highlighted == this.props.current ? { background: 'black', color: 'white' } : null}
				onClick={this.props.clickedPage.bind(null, this.props.current)}>
				{this.props.item}
			</Block>
		);
	}
}

export default PageBlock;