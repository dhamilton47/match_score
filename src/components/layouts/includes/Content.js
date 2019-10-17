import React from 'react';

import mainContentStyle from './Content.module.css';
import Home from '../../content/Home';
import MatchDetails from '../../content/MatchDetails/MatchDetails';
import ScoreCard from '../../content/ScoreCard/ScoreCard';

export const Content = props => {
	return (
		<div id="Main - Content" className={mainContentStyle.mainContent}>
			{props.page === 'home' ? <Home/> : null}
			{props.page === 'match_details' ? <MatchDetails/> : null}
			{props.page === 'score_card' ? <ScoreCard/> : null}
		</div>
	)
};
