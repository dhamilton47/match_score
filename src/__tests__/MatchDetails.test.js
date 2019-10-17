import React from 'react';
import { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import { exportAllDeclaration } from '@babel/types';
import MatchDetails from '../components/content/MatchDetails/MatchDetails';

describe('App', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<MatchDetails />, div);
		ReactDOM.unmountComponentAtNode(div);
	});
})

