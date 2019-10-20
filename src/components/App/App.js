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
					name: 'home',
					text: 'Home',
					link: '/'
				},
				{
					id: 1,
					name: 'match_details',
					text: 'Match Details',
					link: '/match_details/'
				},
				{
					id: 2,
					name: 'score_card',
					text: 'Score Card',
					link: '/score_card/'
				}
			],
			match_table: {
				opponent: '',
				location: '',
				side: '',
				date: '',
				linage: 0,
				baker: 0
			},
			scores_table: [
				[
					{
						id: 'player1Us',
						playerName: '',
						games: [0, 0, 0],
						series: 0,
						runningTotal: 0
					},
					{
						id: 'player2Us',
						playerName: '',
						games: [0, 0, 0],
						series: 0,
						runningTotal: 0
					},
					{
						id: 'player3Us',
						playerName: '',
						games: [0, 0, 0],
						series: 0,
						runningTotal: 0
					},
					{
						id: 'player4Us',
						playerName: '',
						games: [0, 0, 0],
						series: 0,
						runningTotal: 0
					},	
					{
						id: 'player5Us',
						playerName: '',
						games: [0, 0, 0],
						series: 0,
						runningTotal: 0
					},
					{
						id: 'player6Us',
						playerName: '',
						games: [0, 0, 0],
						series: 0,
						runningTotal: 0
					},
					{
						id: 'player7Us',
						playerName: '',
						games: [0, 0, 0],
						series: 0,
						runningTotal: 0
					},
					{
						id: 'player8Us',
						playerName: '',
						games: [0, 0, 0],
						series: 0,
						runningTotal: 0
					},
					{
						id: 'player9Us',
						playerName: '',
						games: [0, 0, 0],
						series: 0,
						runningTotal: 0
					},
					{
						id: 'player10Us',
						playerName: '',
						games: [0, 0, 0],
						series: 0,
						runningTotal: 0
					},
				],
				[
					{
						id: 'player1Them',
						playerName: 'Player 1',
						games: [0, 0, 0],
						series: 0,
						runningTotal: 0
					},
					{
						id: 'player2Them',
						playerName: 'Player 2',
						games: [0, 0, 0],
						series: 0,
						runningTotal: 0
					},
					{
						id: 'player3Them',
						playerName: 'Player 3',
						games: [0, 0, 0],
						series: 0,
						runningTotal: 0
					},
					{
						id: 'player4Them',
						playerName: 'Player 4',
						games: [0, 0, 0],
						series: 0,
						runningTotal: 0
					},
					{
						id: 'player5Them',
						playerName: 'Player 5',
						games: [0, 0, 0],
						series: 0,
						runningTotal: 0
					},
					{
						id: 'player6Them',
						playerName: 'Player 6',
						games: [0, 0, 0],
						series: 0,
						runningTotal: 0
					},
					{
						id: 'player7Them',
						playerName: 'Player 7',
						games: [0, 0, 0],
						series: 0,
						runningTotal: 0
					},
					{
						id: 'player8Them',
						playerName: 'Player 8',
						games: [0, 0, 0],
						series: 0,
						runningTotal: 0
					},
					{
						id: 'player9Them',
						playerName: 'Player 9',
						games: [0, 0, 0],
						series: 0,
						runningTotal: 0
					},
					{
						id: 'player10Them',
						playerName: 'Player 10',
						games: [0, 0, 0],
						series: 0,
						runningTotal: 0
					}
				]
			]
		}
	}

	render() {
		return (
			<Router>
				{this.state.routes.map(route => 
					<Route 
						key={ route.id }
						path={ route.link } 
						exact 
						render={props => <Base 
											page={ route.name }
											routes={ this.state.routes }
											match={ this.state.match_table }
											scores={ this.state.scores_table }
										 />}
					/>)
				}
			</Router>
		);		
	}
}

export default App;
