import React from 'react';

export const ScoreRunningTotal = props => {
	let total = 0;
	for (let i = 0; i < props.series.length; i += 1) {
		total += props.series[i];
	}
	return (<td className="col_running_total">{total}</td>);
};
