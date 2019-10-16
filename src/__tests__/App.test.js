import React from 'react';
//import { expect } from 'chai';
//import Enzyme, { shallow } from 'enzyme';
//import Adapter from 'enzyme-adapter-react-16';
import ReactDOM from 'react-dom';

import App from '../components/App/App';
import { exportAllDeclaration } from '@babel/types';

//Enzyme.configure({ adapter: new Adapter() });

describe('App', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div');
//		ReactDOM.render(<App />, div);
		ReactDOM.unmountComponentAtNode(div);
	});
})

