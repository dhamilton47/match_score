import React, {Component} from 'react';
import Game from "../Game/Game";

class GameContainer extends Component {
	render() {
		return (
			<div className="game">
				Game Panel
				{this.props.roster.players.map(player => <Game key={player.name} gameId={player.gameId} player={player.name}/>)}
			</div>
		);
	}
}

export default GameContainer;