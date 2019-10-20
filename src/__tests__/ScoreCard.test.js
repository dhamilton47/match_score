import React from 'react';
import { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import { exportAllDeclaration } from '@babel/types';
import ScoreCard from '../components/content/ScoreCard/ScoreCard';
import { ScoreCardLinage } from '../components/content/ScoreCard/components/ScoreCardLinage';
import { ScoreCardBaker } from '../components/content/ScoreCard/components/ScoreCardBaker';
import { ScoreCardMatch } from '../components/content/ScoreCard/components/ScoreCardMatch';

describe('ScoreCard', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<ScoreCard />, div);
		ReactDOM.unmountComponentAtNode(div);
    });

	it('should render the Score Card page', () => {
        const wrapper = shallow(<ScoreCard/>);
        expect(wrapper.containsAllMatchingElements([
			<ScoreCardLinage/>,
			<ScoreCardBaker/>,
			<ScoreCardMatch/>
		])).to.equal(true);
	});

/*
	it('should allow data entry in a clean linage game input', () => {
		const wrapper = shallow(<ScoreCard/>);
		expect(1).to.equal(0);
	});

	it('should ask for confirmation of data entry in a dirty linage game input', () => {
		const wrapper = shallow(<ScoreCard/>);
		expect(1).to.equal(0);
	});

	it('should allow data entry in a clean baker game input', () => {
		const wrapper = shallow(<ScoreCard/>);
		expect(1).to.equal(0);
	});

	it('should ask for confirmation of data entry in a dirty baker game input', () => {
		const wrapper = shallow(<ScoreCard/>);
		expect(1).to.equal(0);
	});

	it('should update a player\'s series total after data entry a linage game input', () => {
		const wrapper = shallow(<ScoreCard/>);
		expect(1).to.equal(0);
	});

	it('should update a team\'s running total after data entry a linage game input', () => {
		const wrapper = shallow(<ScoreCard/>);
		expect(1).to.equal(0);
	});

	it('should update the +/- after data entry a linage game input', () => {
		const wrapper = shallow(<ScoreCard/>);
		expect(1).to.equal(0); // in the linage section
		expect(1).to.equal(0); // in the match total section
	});

	it('should update the +/- after data entry a baker game input', () => {
		const wrapper = shallow(<ScoreCard/>);
		expect(1).to.equal(0); // in the baker section
		expect(1).to.equal(0); // in the match total section
	});

	it('should update a team\'s total after data entry a baker game input', () => {
		const wrapper = shallow(<ScoreCard/>);
		expect(1).to.equal(0); // in the baker section
		expect(1).to.equal(0); // in the match total section
	});

	/*

	Bowler column <select> tests
	it('should allow data entry in a clean game input', () => {
		const wrapper = shallow(<ScoreCard/>);
		expect(1).to.equal(0);
	});
	*/
})
