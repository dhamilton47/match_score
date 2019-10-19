import React, {Component} from 'react';
import'./Home.css';

class Home extends Component {
	render() {
		return (
			<div className="home">
				<div className="banner">
					<h1><strong>MATCH</strong></h1>
					<h1>SCORE</h1>
					<br/>
					<p>A High School Bowling Match Scoring App</p>					
				</div>
			</div>
		);
	}
}

export default Home;