import React, { Component } from "react";
import API from "../utils/API";
import Card from "../components/Card";
import Alert from "../components/Alert";

class Results extends Component {
	state = {
		image: "",
		match: false,
		matchCount: 0
	};



	render() {
		return (
			<div>
				<h1 className="text-center">Make New Friends</h1>
				<h3 className="text-center">
					Thumbs up on any pups you'd like to meet!
        </h3>
				<Card image={this.state.image} handleBtnClick={this.handleBtnClick} />
				<h1 className="text-center">
					Made friends with {this.state.matchCount} pups so far!
        </h1>
				<Alert style={{ opacity: this.state.match ? 1 : 0 }} type="success">
					Yay! That Pup Liked You Too!!!
        </Alert>
			</div>
		);
	}
}
export default Results;