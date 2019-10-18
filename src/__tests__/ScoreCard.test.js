import React from 'react';
import { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import { exportAllDeclaration } from '@babel/types';
import ScoreCard from '../components/content/ScoreCard/ScoreCard';

describe('ScoreCard', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<ScoreCard />, div);
		ReactDOM.unmountComponentAtNode(div);
	});
    
    it('should render the Score Card page', () => {
        const wrapper = shallow(<ScoreCard/>);
        expect(wrapper.containsAllMatchingElements([
			<div className="score_card">
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
							<td className="col_player">GrandTotal</td>
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
							<td className="col_player">GrandTotal</td>
							<td className="col_game">0</td>
							<td className="col_game">0</td>
							<td className="col_game">0</td>
							<td className="col_total">0</td>
							<td className="col_running_total">0</td>
						</tr>
					</tfoot>
				</table>			
			</div>
		])).to.equal(true);
    });})

