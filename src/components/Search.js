import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Link2 = styled(Link) `
	z-index: 10;
`;

const Form = styled.form`
	padding: 0 10px;
`;

class Search extends Component {
	/*
	---------------
		Search props
	---------------
		-       submitSearch -> [Function] => Function to submit the search
		-         searchName -> [String]   => String to display in the placeholder
		-         searchTerm -> [String]   => Value returned from the parent component (For visual rep on the input)
		- onChangeSearchTerm -> [Function] => Function to change the searchTerm in the parent component.
	*/

	render() {
		return (
			<Form onSubmit={this.props.submitSearch} className="input-group">
				<input
					placeholder={`Search ${this.props.searchName}`}
					className="form-control"
					value={this.props.searchTerm}
					onChange={this.props.onChangeSearchTerm} />
				<span className="input-group-btn">
						<button
							type="button"
							onClick={this.props.submitSearch}
							type="submit"
							className="btn btn-secondary">
							<Link to="/search" id="next-level" style={{ width: '100%', height: '100%', display: 'block' }}>
								Submit
							</Link>
						</button>
				</span>
			</Form>
		);
	}
}

export default Search;