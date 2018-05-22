import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FaExclamationCircle } from 'react-icons/lib/fa';
import Search from './Search';
import CardList from '../containers/CardList';
import { getCharacters, search } from "../actions";
import { Container, Nothing } from '../containers/PageContainer';
import PaginationList from '../containers/PaginationList';

class Characters extends Component {
	constructor(props) {
		super(props);

		this.state = {
			term: "",
			highlighted: 1,
			items: null,
			width: window.innerWidth,
		};

		this.submitSearch = this.submitSearch.bind(this);
		this.clickedPage = this.clickedPage.bind(this);
		this.handleWindowSizeChange = this.handleWindowSizeChange.bind(this);
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
		window.addEventListener('resize', this.handleWindowSizeChange);
	}

	componentWillUnmount() {
		window.removeEventListener('keypress', (event) => {
			if (event.keyCode == 13) {
				const click = document.getElementById('next-level');
				this.submitSearch(event);
				click.click();
			}
		}, false);
		window.removeEventListener('resize', this.handleWindowSizeChange);
	}

	handleWindowSizeChange() {
		this.setState({ width: window.innerWidth });
	}

	componentDidMount() {
		this.props.getCharacters();
	}

	onChangeSearchTerm(event) {
		this.setState({ term: event.target.value });
	}

	submitSearch(event) {
		event.preventDefault();
		this.props.search("character", this.state.term);
	}

	clickedPage(props) {
		this.setState({ highlighted: props });
		this.props.getCharacters(props);
		this.forceUpdate();
	}

	render() {
		let tempPageNumber, pageNumber;
		if (this.props.characters.length > 0) {
			tempPageNumber = Array.apply(null, { length: this.props.characters[0].info.pages }).map(Number.call, Number);
			pageNumber = tempPageNumber.map(item => item + 1)
		}
		return (
			<Container className="contanier-fluid">
				<Search
					searchName="Characters"
					searchTerm={this.state.term}
					onChangeSearchTerm={this.onChangeSearchTerm}
					submitSearch={this.submitSearch} />

				{this.props.characters.length > 0 ?
					<CardList type="character" items={this.props.characters} />
					: <Nothing> <FaExclamationCircle /> No Data </Nothing>}

				{this.props.characters.length > 0 ?
					<PaginationList
						items={pageNumber}
						width={this.state.width}
						highlighted={this.state.highlighted}
						clickedPage={this.clickedPage} />
					: null}

			</Container>
		);
	}
}

const mapStateToProps = ({ characters, searchResults }) => {
	return {
		characters: characters,
		searchResults: searchResults,
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ getCharacters, search }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Characters);
