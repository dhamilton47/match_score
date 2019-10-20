import React from 'react';

export const ScoreSeries = props => {
	return (<td className="col_total">{props.games[0] + props.games[1] + props.games[2]}</td>);
};
