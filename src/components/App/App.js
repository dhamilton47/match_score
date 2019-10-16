import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Base from '../layouts/Base';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			routes: {
				home: {
					text: "Home",
					link: "/"
				},
				match_details: {
					text: "Match Details",
					link: "/match_details/"
				},
				score_card: {
					text: "Score Card",
					link: "/score_card/"
				}
			}
		}
	}

	render() {
		return (
			<Router>
				<Route path="/" exact render={props => <Base page={"home"} routes={this.state.routes}/>}/>
				<Route path="/match_details/" render={props => <Base page={"match_details"} routes={this.state.routes}/>}/>
				<Route path="/score_card/" render={props => <Base page={"score_card"} routes={this.state.routes}/>}/>
			</Router>
		);		
	}
}

export default App;
