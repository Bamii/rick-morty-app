import React, { Component } from 'react';
import styled from 'styled-components';
import { Container } from "./PageContainer";
import PageBlock from './PageBlock';

const Container2 = styled(Container) `
	min-height: 60px;
	width: 80vw;
	flex-wrap: wrap;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
`;

class PaginationList extends Component {
	render() {
		return (
			<Container2>
				{this.props.items.map((item) => {
					return (
						<div>
							<PageBlock
								highlighted={this.props.highlighted}
								key={this.props.items.indexOf(item)}
								item={item}
								current={this.props.items.indexOf(item) + 1}
								clickedPage={this.props.clickedPage}/>
						</div>
					);
				})}
			</Container2>
		);
	}
}

export default PaginationList;