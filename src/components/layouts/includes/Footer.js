import React from "react";
import { ListLink } from "./ListLink";
import { ListSeparator } from "./ListSeparator";
import footerStyle from './Footer.module.css';


export const Footer = props => {
	return (
		<footer id="Footer">
			<ul className={footerStyle.base}>
				<ListLink location={props.routes.home}/>
				<ListSeparator/>
				<ListLink location={props.routes.match_details}/>
				<ListSeparator/>
				<ListLink location={props.routes.score_card}/>
			</ul>
		</footer>
	);
};