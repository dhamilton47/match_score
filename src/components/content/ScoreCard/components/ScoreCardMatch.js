import React from 'react';
export const ScoreCardMatch = props => {
	return (<div className="score_card_match">
		<table>
			<thead>
				<tr>
					<th className="col_player col_header"></th>
					<th className="col_team col_header">West Orange Warriors</th>
					<th className="col_team col_header">Bishop Moore Hornets</th>
					<th className="col_total col_header">+/-</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td className="col_player">Match Total</td>
					<td className="col_baker_score">0</td>
					<td className="col_baker_score">0</td>
					<td className="col_total">0</td>
				</tr>
			</tbody>
		</table>
	</div>);
};
