import React from 'react';
export const ScoreCardBaker = props => {
	return (<div className="score_card_baker">
		<table>
			<thead>
				<tr>
					<th className="col_player col_header">Baker</th>
					<th className="col_team col_header">West Orange Warriors</th>
					<th className="col_team col_header">Bishop Moore Hornets</th>
					<th className="col_total col_header">+/-</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td className="col_player">Game 1</td>
					<td className="col_baker_score"><input className="input_game" type="text" name="bakerGame1Us" placeholder="0"></input></td>
					<td className="col_baker_score"><input className="input_game" type="text" name="bakerGame1Them" placeholder="0"></input></td>
					<td className="col_total">0</td>
				</tr>
				<tr>
					<td className="col_player">Game 2</td>
					<td className="col_baker_score"><input className="input_game" type="text" name="bakerGame2Us" placeholder="0"></input></td>
					<td className="col_baker_score"><input className="input_game" type="text" name="bakerGame2Them" placeholder="0"></input></td>
					<td className="col_total">0</td>
				</tr>
				<tr>
					<td className="col_player">Game 3</td>
					<td className="col_baker_score"><input className="input_game" type="text" name="bakerGame3Us" placeholder="0"></input></td>
					<td className="col_baker_score"><input className="input_game" type="text" name="bakerGame3Them" placeholder="0"></input></td>
					<td className="col_total">0</td>
				</tr>
				<tr>
					<td className="col_player">Game 4</td>
					<td className="col_baker_score"><input className="input_game" type="text" name="bakerGame4Us" placeholder="0"></input></td>
					<td className="col_baker_score"><input className="input_game" type="text" name="bakerGame4Them" placeholder="0"></input></td>
					<td className="col_total">0</td>
				</tr>
				<tr>
					<td className="col_player">Game 5</td>
					<td className="col_baker_score"><input className="input_game" type="text" name="bakerGame5Us" placeholder="0"></input></td>
					<td className="col_baker_score"><input className="input_game" type="text" name="bakerGame5Them" placeholder="0"></input></td>
					<td className="col_total">0</td>
				</tr>
			</tbody>
			<tfoot>
				<tr>
					<td className="col_player">Baker Total</td>
					<td className="col_baker_score">0</td>
					<td className="col_baker_score">0</td>
					<td className="col_total">0</td>
				</tr>
			</tfoot>
		</table>
	</div>);
};
