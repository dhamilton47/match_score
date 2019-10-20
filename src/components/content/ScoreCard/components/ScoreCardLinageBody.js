import React from 'react';
import { ScoreCardLinageRowUs, ScoreCardLinageRowThem } from './ScoreCardLinageRow';

export const ScoreCardLinageBodyUs = props => {
	return (
		<tbody>
			{props.scores.map(item => <ScoreCardLinageRowUs key={ item.id } player={ item }/>)}
		</tbody>
	);
};

export const ScoreCardLinageBodyThem = props => {
	return (
		<tbody>
			{props.scores.map(item => <ScoreCardLinageRowThem key={ item.id } player={ item }/>)}
		</tbody>
	);
};
