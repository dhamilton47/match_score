import React from 'react';
import { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import { exportAllDeclaration } from '@babel/types';
import Home from '../components/content/Home';

describe('App', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<Home />, div);
		ReactDOM.unmountComponentAtNode(div);
    });
    
    it('should render the Home page', () => {
        const wrapper = shallow(<Home/>);
        expect(wrapper.containsAllMatchingElements([
            <div className="home">
                <div>
                    <h1><strong>MATCH</strong></h1>
                    <h1>SCORE</h1>
                    <br/>
                    <p>A High School Bowling Match Scoring App</p>
                </div>
            </div>
		])).to.equal(true);
    });
})

