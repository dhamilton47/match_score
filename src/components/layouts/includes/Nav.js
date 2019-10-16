import React from 'react'
import navStyle from "./Nav.module.css";
import {ListLink} from "./ListLink";

export const Nav = props => {
	return (
		<header id="Nav" className={navStyle.nav}>
			<ul className={navStyle.base}>
				{props.routes.map(route => <ListLink key={route.id} location={route}/>)}
			</ul>
		</header>
	);
};