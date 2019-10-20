import React from 'react';

export const ScoreGame = props => {
	return (<td className="col_game">
		<input className="input_game" type="text" name={props.game} placeholder="0" />
	</td>);
};
