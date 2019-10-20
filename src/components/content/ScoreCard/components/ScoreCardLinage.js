import React from 'react';
import { ScoreCardLinageBodyUs, ScoreCardLinageBodyThem } from './ScoreCardLinageBody';
import { ScoreCardLinageHead } from './ScoreCardLinageHead';
import { ScoreCardLinageFoot } from './ScoreCardLinageFoot';

export const ScoreCardLinage = props => {
	return (
		<div className="score_card_linage">
			<table className="summary_table">
				<ScoreCardLinageHead school={ "WEST ORANGE WARRIORS" }/>
				<ScoreCardLinageBodyUs scores={ props.scores[0] }/>
				<ScoreCardLinageFoot us={ true }/>

			</table>
			<table className="summary_table">
				<ScoreCardLinageHead school={ "BISHOP MOORE HORNETS" }/>
				<ScoreCardLinageBodyThem scores={ props.scores[1] }/>
				<ScoreCardLinageFoot us={ false }/>
			</table>
		</div>
	);
};
