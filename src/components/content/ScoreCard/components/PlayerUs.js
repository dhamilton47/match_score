import React from 'react';
//import { roster } from '../ScoreCard';

export const roster = [
	[0, ""],
	[1, "Kimberly Hamilton"],
	[2, "Adrianna Correa"],
	[3, "Madelin Zubricky"]
];


export const PlayerUs = props => {
	return (<td className="col_player">
		<select name={props.player} required>
			{roster.map(item => <option key={item[0]} value={item[0]}>{item[1]}</option>)}
		</select>
	</td>);
};
