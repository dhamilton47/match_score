import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Base from '../layouts/Base';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			routes: [
				{
					id: 0,
					name: "home",
					text: "Home",
					link: "/"
				},
				{
					id: 1,
					name: "match_details",
					text: "Match Details",
					link: "/match_details/"
				},
				{
					id: 2,
					name: "score_card",
					text: "Score Card",
					link: "/score_card/"
				}
			]
		}
	}

	render() {
		return (
			<Router>
				{this.state.routes.map(route => 
					<Route 
						key={route.id}
						path={route.link} 
						exact 
						render={props => <Base page={route.name} routes={this.state.routes}/>}
					/>)
				}
			</Router>
		);		
	}
}

export default App;
