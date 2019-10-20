import React from 'react';

export const ScoreCardLinageHead = props => {
	return (<thead>
		<tr>
			<th colSpan="6">{props.school}</th>
		</tr>
		<tr>
			<th className="col_player col_header">Bowler</th>
			<th className="col_game col_header">Game 1</th>
			<th className="col_game col_header">Game 2</th>
			<th className="col_game col_header">Game 3</th>
			<th className="col_total col_header">Series</th>
			<th className="col_running_total col_header">Running Total</th>
		</tr>
	</thead>);
};
