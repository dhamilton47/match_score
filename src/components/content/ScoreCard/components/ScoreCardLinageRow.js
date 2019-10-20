import React from 'react';
import { ScoreSeries } from './ScoreSeries';
import { ScoreGame } from './ScoreGame';
import { ScoreRunningTotal } from './ScoreRunningTotal';
import { PlayerUs } from "./PlayerUs";
import { PlayerThem } from "./PlayerThem";

export const ScoreCardLinageRowUs = props => {
	let { playerName, games, runningTotal} = props.player;

	
	return (
		<tr>
			<PlayerUs player={ playerName } />
			<ScoreGame name={"linagePlayer1UsGame1"} value={ games[0] } />
			<ScoreGame name={"linagePlayer1UsGame1"} value={ games[1] } />
			<ScoreGame name={"linagePlayer1UsGame1"} value={ games[2] } />
			<ScoreSeries games={ games } />
			<ScoreRunningTotal series={ runningTotal } />
		</tr>
	);
	
};

export const ScoreCardLinageRowThem = props => {
	let { playerName, games, runningTotal} = props.player;

	return (<tr>
		<PlayerThem player={ playerName } />
		<ScoreGame name={"linagePlayer1UsGame1"} value={ games[0] } />
		<ScoreGame name={"linagePlayer1UsGame1"} value={ games[1] } />
		<ScoreGame name={"linagePlayer1UsGame1"} value={ games[2] } />
		<ScoreSeries games={ games } />
		<ScoreRunningTotal series={ runningTotal } />
	</tr>);
};
