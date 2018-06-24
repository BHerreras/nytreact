import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import Alert from "../components/Alert";

class Search extends Component {
	state = {
		search: "",
		breeds: [],
		results: [],
		error: ""
	};



	render() {
		return (
			<div>
				<Container style={{ minHeight: "80%" }}>
					<h1 className="text-center">Saved Articles</h1>
					<Alert
						type="danger"
						style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}
					>
						{this.state.error}
					</Alert>

					<SearchResults results={this.state.results} />
				</Container>
			</div>
		);
	}
}

export default Search;