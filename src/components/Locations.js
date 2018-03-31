import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FaExclamationCircle } from 'react-icons/lib/fa';
import Search from './Search';
import CardList from '../containers/CardList';
import { getLocations, search } from "../actions/index";
import { Container, Nothing } from '../containers/PageContainer';
import PaginationList from '../containers/PaginationList';

class Locations extends Component {
	constructor(props) {
		super(props);

		this.state = {
			term: "",
			highlighted: 1,
		};

		this.submitSearch = this.submitSearch.bind(this);
		this.clickedPage = this.clickedPage.bind(this);
		this.onChangeSearchTerm = this.onChangeSearchTerm.bind(this);
	}

	componentWillMount() {
		window.addEventListener('keypress', (event) => {
			if (event.keyCode == 13) {
				const click = document.getElementById('next-level');
				this.submitSearch(event);
				click.click();
			}
		}, false);
	}

	componentWullUnmount() {
		window.removeEventListener('keypress', (event) => {
			if (event.keyCode == 13) {
				const click = document.getElementById('next-level');
				this.submitSearch(event);
				click.click();
			}
		}, false);
	}

	componentDidMount() {
		this.props.getLocations();
	}

	onChangeSearchTerm(event) {
		this.setState({ term: event.target.value });
	}

	submitSearch(event) {
		event.preventDefault();
		this.props.search("location", this.state.term);
	}

	clickedPage(props) {
		console.log(props);
		this.setState({ highlighted: props });
		this.props.getLocations(props);
		this.forceUpdate();
	}

	render() {
		let tempPageNumber, pageNumber;
		if (this.props.locations.length > 0) {
			tempPageNumber = Array.apply(null, { length: this.props.locations[0].info.pages }).map(Number.call, Number);
			pageNumber = tempPageNumber.map(item => item + 1)
		}
		return (
			<Container className="contanier-fluid">
				<Search
					searchName="Locations"
					searchTerm={this.state.term}
					onChangeSearchTerm={this.onChangeSearchTerm}
					submitSearch={this.submitSearch} />

				{this.props.locations.length > 0 ?
					<CardList type="location" items={this.props.locations} />
					: <Nothing> <FaExclamationCircle /> No Data </Nothing>}

				{this.props.locations.length > 0 ?
					<PaginationList
						items={pageNumber}
						highlighted={this.state.highlighted}
						clickedPage={this.clickedPage} />
					: null}
			</Container>
		);
	}
}

const mapStateToProps = ({ locations, searchResults }) => {
	return {
		locations: locations,
		searchResults: searchResults,
	};
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ getLocations, search }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Locations);
