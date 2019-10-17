import React from 'react';

import mainContentStyle from './Content.module.css';
import { Settings } from '../../Bowling/Settings/Settings';
import GameContainer from '../../Bowling/GameContainer/GameContainer';
import { GameScoringContainer } from '../../Bowling/GameScoringContainer/GameScoringContainer';
import { MatchScoringContainer } from '../../Bowling/MatchScoringContainer/MatchScoringContainer';
import { StatsContainer } from '../../Bowling/StatsContainer/StatsContainer';
const contest = {
	contestID: 0,
	contestOpponents: [],
	contestSides: [],
	contestFormat: {linage: 0, baker: 0},
	//contestFormat: {linage: 1, baker: 0},
	contestLocation: [],
	contestDate: [],
}
const roster = {
	players: [
		/*
		{
			name: '',
			gameID: []
		}
		*/
		
		{
			name: 'TJ',
			gameID: [1,2,3]
		},
		{
			name: 'Sam',
			gameID: [1,2,3]
		},
		{
			name: 'Kim',
			gameID: [1,2,3]
		}
	]
}

export const Content = props => {
	return (
		<div id="Main - Content" className={mainContentStyle.mainContent}>
			<div className="App">
				<h1 className="item1">Bowling Testing Page</h1>
				<Settings/>
				<GameContainer
					contest={ contest }
					roster={ roster }
				/>
				<GameScoringContainer/>
				<MatchScoringContainer/>
				<StatsContainer/>
				
				<div className="item2">Footer</div>
			</div>
		</div>
	)
};
