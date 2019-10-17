import React from 'react';
import { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import { exportAllDeclaration } from '@babel/types';
import ScoreCard from '../components/content/ScoreCard/ScoreCard';

describe('App', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<ScoreCard />, div);
		ReactDOM.unmountComponentAtNode(div);
	});
})

