import React from 'react';

export const ScoreCardLinageFoot = props => {
	return (<tfoot>
		<tr>
			<td className="col_player">Linage Total</td>
			<td className="col_game">0</td>
			<td className="col_game">0</td>
			<td className="col_game">0</td>
			<td className="col_total">0</td>
			<td className="col_running_total">0</td>
		</tr>
		{props.us ?
			<tr>
				<td className="col_player"></td>
				<td className="col_game"></td>
				<td className="col_game"></td>
				<td className="col_game">Bishop Moore</td>
				<td className="col_total">+/-</td>
				<td className="col_running_total">0</td>
			</tr>
			: null}

	</tfoot>);
};
