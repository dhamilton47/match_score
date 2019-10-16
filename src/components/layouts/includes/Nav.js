import React from 'react'
import navStyle from "./Nav.module.css";
import {ListLink} from "./ListLink";

export const Nav = props => {
	return (
		<header id="Nav" className={navStyle.nav}>
			<ul className={navStyle.base}>
				<ListLink location={props.routes.home}/>
				<ListLink location={props.routes.match_details}/>
				<ListLink location={props.routes.score_card}/>
			</ul>
		</header>
	);
};