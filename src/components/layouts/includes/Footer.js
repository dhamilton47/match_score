import React from "react";
import { ListLinkNonLI } from "./ListLink";
import { ListSeparatorNonLI } from "./ListSeparator";
import footerStyle from './Footer.module.css';


export const Footer = props => {
	let list = [];
	for(let i = 0; i < props.routes.length; i+=1) {
		list.push(<ListLinkNonLI key={props.routes[i].id} location={props.routes[i]}/>);
		if(i !== props.routes.length - 1) {
			list.push(<ListSeparatorNonLI key={i + 100000}/>);
		}
	}
	
	return (
		<footer id="Footer">
			<ul className={footerStyle.base}>
				{list.map(item => <li key={item.key}>{item}</li>)}
			</ul>
		</footer>
	);
};