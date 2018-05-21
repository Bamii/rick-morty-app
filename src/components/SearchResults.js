import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Search from './Search';
import { search } from "../actions";
import CardList from '../containers/CardList';
import { Container } from '../containers/PageContainer';
import PaginationList from '../containers/PaginationList';

class SearchResults extends Component {
	constructor(props) {
		super(props);
		this.state = {
			highlighted: 1,
			type: "",
			term: null,
		}
		this.clickedPage = this.clickedPage.bind(this);
		this.setTheState = this.setTheState.bind(this);
	}

	stripName(name) {
		const one = name;
		const two = name.substring(name.lastIndexOf('=') + 1);
		
		if(this.state.term == null) {
			this.setState({ term: two });
		}
		return two;
	}

	clickedPage(props, term) {
		this.setState({ highlighted: props });
		this.props.search(null, null, this.props.searchResults[0].info.next);
	}

	setTheState(type, term) {
		this.setState({ type: type, term: term });
	}

	render() {
		let tempPageNumber, pageNumber, searchTerm;
		if(this.props.searchResults.length > 0 && !!this.props.searchResults[0].results[0].dimension) {
			tempPageNumber = Array.apply(null, {length: this.props.searchResults[0].info.pages}).map(Number.call, Number);
			pageNumber = tempPageNumber.map(item =>  item + 1 );
			searchTerm = this.stripName(this.props.searchResults[0].info.next);
		} else if (this.props.searchResults.length > 0 && this.props.searchResults[0].results[0].gender) {
			tempPageNumber = Array.apply(null, {length: this.props.searchResults[0].info.pages}).map(Number.call, Number);
			pageNumber = tempPageNumber.map(item =>  item + 1 );
			searchTerm = this.stripName(this.props.searchResults[0].info.next);
		}

		return (
			<Container>
				{/* TODO::
					<Search
					searchName="Locations"
					searchTerm={this.state.term}
					onChangeSearchTerm={this.onChangeSearchTerm}
					submitSearch={this.submitSearch} /> */}
				{this.props.searchResults.length === 0 && this.state.term !== null &&
					<div style={{ width: '100%', height: 60, display: 'flex', justifyContent: 'center' }}>
						<i className="fa fa-circle-o-notch fa-spin" style={{ fontSize: '35px' }}></i>
					</div>}

				{this.props.searchResults.length === 0 && this.state.term === null &&
					<div> 
						{/* TODO:: Style this div*/}
						Go to <a href="/characters"> Characters </a>,
						<a href="/locations"> Locations </a> or
						<a href="/episodes"> Episodes </a> to search something</div>}

				{/* I can do better than this... this is just a solution for now */}
				{this.props.searchResults.length > 0 && <h1> {`Search results for: "${searchTerm}"`}</h1>}

				{this.props.searchResults.length > 0 && this.props.searchResults[0].results[0].gender ?
					<div>
						<CardList type="character" items={this.props.searchResults} />
						{this.props.searchResults.length > 0 ?
							<PaginationList
								items={pageNumber}
								highlighted={this.state.highlighted}
								clickedPage={this.clickedPage}/>
							: null}
					</div>
					: null}

				{this.props.searchResults.length > 0 && this.props.searchResults[0].results[0].air_date ?
					<div>
						<CardList type="episode" items={this.props.searchResults} />
					</div>
					: null}

				{this.props.searchResults.length > 0 && this.props.searchResults[0].results[0].dimension ?
					<div>
						<CardList type="location" items={this.props.searchResults} />
						{this.props.searchResults.length > 0 ?
							<PaginationList
								items={pageNumber}
								highlighted={this.state.highlighted}
								clickedPage={this.clickedPage}/>
							: null}
					</div>
					: null}
			</Container>
		);
	}
}

const mapStateToProps = ({ searchResults }) => {
	return { searchResults };
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ search }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);