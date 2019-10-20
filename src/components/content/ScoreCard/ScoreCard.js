import React, {Component} from 'react';
import './ScoreCard.css';
import { ScoreCardLinage } from './components/ScoreCardLinage';
import { ScoreCardBaker } from './components/ScoreCardBaker';
import { ScoreCardMatch } from './components/ScoreCardMatch';

class ScoreCard extends Component {
	render() {
		return (
			<>
				<ScoreCardLinage scores={ this.props.scores }/>
				<ScoreCardBaker/>
				<ScoreCardMatch/>
			</>
		);
	}
}

export default ScoreCard;