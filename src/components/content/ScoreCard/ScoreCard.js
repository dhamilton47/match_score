import React, {Component} from 'react';
import './ScoreCard.css';

class ScoreCard extends Component {
	render() {
		return (
			<>
				<div className="score_card_linage">
					<table className="summary_table">
						<thead>
							<tr>
								<th colSpan="6">WEST ORANGE WARRIORS</th>
							</tr>
							<tr>
								<th className="col_player col_header">Bowler</th>
								<th className="col_game col_header">Game 1</th>
								<th className="col_game col_header">Game 2</th>
								<th className="col_game col_header">Game 3</th>
								<th className="col_total col_header">Series</th>
								<th className="col_running_total col_header">Running Total</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td className="col_player">Kimberly Hamilton</td>
								<td className="col_game"><input className="input_game" type="text" name="linagePlayer1UsGame1" placeholder="0"></input></td>
								<td className="col_game"><input className="input_game" type="text" name="linagePlayer1UsGame2" placeholder="0"></input></td>
								<td className="col_game"><input className="input_game" type="text" name="linagePlayer1UsGame3" placeholder="0"></input></td>
								<td className="col_total">0</td>
								<td className="col_running_total">0</td>
							</tr>
							<tr>
								<td className="col_player">Kimberly Hamilton</td>
								<td className="col_game"><input className="input_game" type="text" name="game1" placeholder="0"></input></td>
								<td className="col_game"><input className="input_game" type="text" name="game2" placeholder="0"></input></td>
								<td className="col_game"><input className="input_game" type="text" name="game3" placeholder="0"></input></td>
								<td className="col_total">0</td>
								<td className="col_running_total">0</td>
							</tr>
							<tr>
								<td className="col_player">Kimberly Hamilton</td>
								<td className="col_game"><input className="input_game" type="text" name="game1" placeholder="0"></input></td>
								<td className="col_game"><input className="input_game" type="text" name="game2" placeholder="0"></input></td>
								<td className="col_game"><input className="input_game" type="text" name="game3" placeholder="0"></input></td>
								<td className="col_total">0</td>
								<td className="col_running_total">0</td>
							</tr>
							<tr>
								<td className="col_player">Kimberly Hamilton</td>
								<td className="col_game"><input className="input_game" type="text" name="game1" placeholder="0"></input></td>
								<td className="col_game"><input className="input_game" type="text" name="game2" placeholder="0"></input></td>
								<td className="col_game"><input className="input_game" type="text" name="game3" placeholder="0"></input></td>
								<td className="col_total">0</td>
								<td className="col_running_total">0</td>
							</tr>
							<tr>
								<td className="col_player">Kimberly Hamilton</td>
								<td className="col_game"><input className="input_game" type="text" name="game1" placeholder="0"></input></td>
								<td className="col_game"><input className="input_game" type="text" name="game2" placeholder="0"></input></td>
								<td className="col_game"><input className="input_game" type="text" name="game3" placeholder="0"></input></td>
								<td className="col_total">0</td>
								<td className="col_running_total">0</td>
							</tr>
							<tr>
								<td className="col_player"></td>
								<td className="col_game"><input className="input_game" type="text" name="game1" placeholder="0"></input></td>
								<td className="col_game"><input className="input_game" type="text" name="game2" placeholder="0"></input></td>
								<td className="col_game"><input className="input_game" type="text" name="game3" placeholder="0"/></td>
								<td className="col_total">0</td>
								<td className="col_running_total">0</td>
							</tr>
							<tr>
								<td className="col_player"></td>
								<td className="col_game"><input className="input_game" type="text" name="game1" placeholder="0"></input></td>
								<td className="col_game"><input className="input_game" type="text" name="game2" placeholder="0"></input></td>
								<td className="col_game"><input className="input_game" type="text" name="game3" placeholder="0"></input></td>
								<td className="col_total">0</td>
								<td className="col_running_total">0</td>
							</tr>
							<tr>
								<td className="col_player"></td>
								<td className="col_game"><input className="input_game" type="text" name="game1" placeholder="0"></input></td>
								<td className="col_game"><input className="input_game" type="text" name="game2" placeholder="0"></input></td>
								<td className="col_game"><input className="input_game" type="text" name="game3" placeholder="0"></input></td>
								<td className="col_total">0</td>
								<td className="col_running_total">0</td>
							</tr>
							<tr>
								<td className="col_player"></td>
								<td className="col_game"><input className="input_game" type="text" name="game1" placeholder="0"></input></td>
								<td className="col_game"><input className="input_game" type="text" name="game2" placeholder="0"></input></td>
								<td className="col_game"><input className="input_game" type="text" name="game3" placeholder="0"></input></td>
								<td className="col_total">0</td>
								<td className="col_running_total">0</td>
							</tr>
							<tr>
								<td className="col_player"></td>
								<td className="col_game"><input className="input_game" type="text" name="game1" placeholder="0"></input></td>
								<td className="col_game"><input className="input_game" type="text" name="game2" placeholder="0"></input></td>
								<td className="col_game"><input className="input_game" type="text" name="game3" placeholder="0"></input></td>
								<td className="col_total">0</td>
								<td className="col_running_total">0</td>
							</tr>
						</tbody>
						<tfoot>
							<tr>
								<td className="col_player">Linage Total</td>
								<td className="col_game">0</td>
								<td className="col_game">0</td>
								<td className="col_game">0</td>
								<td className="col_total">0</td>
								<td className="col_running_total">0</td>
							</tr>
							<tr>
								<td className="col_player"></td>
								<td className="col_game"></td>
								<td className="col_game"></td>
								<td className="col_game">Bishop Moore</td>
								<td className="col_total">+/-</td>
								<td className="col_running_total">0</td>
							</tr>
						</tfoot>
					</table>
					<table className="summary_table">
						<thead>
							<tr>
								<th colSpan="6">BISHOP MOORE HORNETS</th>
							</tr>
							<tr>
								<th className="col_player col_header">Bowler</th>
								<th className="col_game col_header">Game 1</th>
								<th className="col_game col_header">Game 2</th>
								<th className="col_game col_header">Game 3</th>
								<th className="col_total col_header">Series</th>
								<th className="col_running_total col_header">Running Total</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td className="col_player">Player 1</td>
								<td className="col_game"><input className="input_game" type="text" name="game1" placeholder="0"></input></td>
								<td className="col_game"><input className="input_game" type="text" name="game2" placeholder="0"></input></td>
								<td className="col_game"><input className="input_game" type="text" name="game3" placeholder="0"></input></td>
								<td className="col_total">0</td>
								<td className="col_running_total">0</td>
							</tr>
							<tr>
								<td className="col_player">Player 2</td>
								<td className="col_game"><input className="input_game" type="text" name="game1" placeholder="0"></input></td>
								<td className="col_game"><input className="input_game" type="text" name="game2" placeholder="0"></input></td>
								<td className="col_game"><input className="input_game" type="text" name="game3" placeholder="0"></input></td>
								<td className="col_total">0</td>
								<td className="col_running_total">0</td>
							</tr>
							<tr>
								<td className="col_player">Player 3</td>
								<td className="col_game"><input className="input_game" type="text" name="game1" placeholder="0"></input></td>
								<td className="col_game"><input className="input_game" type="text" name="game2" placeholder="0"></input></td>
								<td className="col_game"><input className="input_game" type="text" name="game3" placeholder="0"></input></td>
								<td className="col_total">0</td>
								<td className="col_running_total">0</td>
							</tr>
							<tr>
								<td className="col_player">Player 4</td>
								<td className="col_game"><input className="input_game" type="text" name="game1" placeholder="0"></input></td>
								<td className="col_game"><input className="input_game" type="text" name="game2" placeholder="0"></input></td>
								<td className="col_game"><input className="input_game" type="text" name="game3" placeholder="0"></input></td>
								<td className="col_total">0</td>
								<td className="col_running_total">0</td>
							</tr>
							<tr>
								<td className="col_player">Player 5</td>
								<td className="col_game"><input className="input_game" type="text" name="game1" placeholder="0"></input></td>
								<td className="col_game"><input className="input_game" type="text" name="game2" placeholder="0"></input></td>
								<td className="col_game"><input className="input_game" type="text" name="game3" placeholder="0"></input></td>
								<td className="col_total">0</td>
								<td className="col_running_total">0</td>
							</tr>
							<tr>
								<td className="col_player"></td>
								<td className="col_game"><input className="input_game" type="text" name="game1" placeholder="0"></input></td>
								<td className="col_game"><input className="input_game" type="text" name="game2" placeholder="0"></input></td>
								<td className="col_game"><input className="input_game" type="text" name="game3" placeholder="0"></input></td>
								<td className="col_total">0</td>
								<td className="col_running_total">0</td>
							</tr>
							<tr>
								<td className="col_player"></td>
								<td className="col_game"><input className="input_game" type="text" name="game1" placeholder="0"></input></td>
								<td className="col_game"><input className="input_game" type="text" name="game2" placeholder="0"></input></td>
								<td className="col_game"><input className="input_game" type="text" name="game3" placeholder="0"></input></td>
								<td className="col_total">0</td>
								<td className="col_running_total">0</td>
							</tr>
							<tr>
								<td className="col_player"></td>
								<td className="col_game"><input className="input_game" type="text" name="game1" placeholder="0"></input></td>
								<td className="col_game"><input className="input_game" type="text" name="game2" placeholder="0"></input></td>
								<td className="col_game"><input className="input_game" type="text" name="game3" placeholder="0"></input></td>
								<td className="col_total">0</td>
								<td className="col_running_total">0</td>
							</tr>
							<tr>
								<td className="col_player"></td>
								<td className="col_game"><input className="input_game" type="text" name="game1" placeholder="0"></input></td>
								<td className="col_game"><input className="input_game" type="text" name="game2" placeholder="0"></input></td>
								<td className="col_game"><input className="input_game" type="text" name="game3" placeholder="0"></input></td>
								<td className="col_total">0</td>
								<td className="col_running_total">0</td>
							</tr>
							<tr>
								<td className="col_player"></td>
								<td className="col_game"><input className="input_game" type="text" name="game1" placeholder="0"></input></td>
								<td className="col_game"><input className="input_game" type="text" name="game2" placeholder="0"></input></td>
								<td className="col_game"><input className="input_game" type="text" name="game3" placeholder="0"></input></td>
								<td className="col_total">0</td>
								<td className="col_running_total">0</td>
							</tr>
						</tbody>
						<tfoot>
							<tr>
								<td className="col_player">Linage Total</td>
								<td className="col_game">0</td>
								<td className="col_game">0</td>
								<td className="col_game">0</td>
								<td className="col_total">0</td>
								<td className="col_running_total">0</td>
							</tr>
						</tfoot>
					</table>			
				</div>
				<div className="score_card_baker">
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
				</div>
				<div className="score_card_match">
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
				</div>
			</>
		);
	}
}

export default ScoreCard;