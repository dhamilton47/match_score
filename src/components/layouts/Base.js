import React, { Component } from 'react';
import { Content } from "./includes/Content";
import { Footer } from "./includes/Footer";
import { Nav } from "./includes/Nav";

class Base extends Component {
	render() {
		return (
			<div>
				<Nav routes={ this.props.routes }/>
				<Content page={ this.props.page } match={ this.props.match } scores={ this.props.scores }/>
				<Footer routes={ this.props.routes }/>
			</div>
		)
	}
}

export default Base;