import React from 'react';
import { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import App from '../components/App/App';
import { exportAllDeclaration } from '@babel/types';

describe('App', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<App />, div);
		ReactDOM.unmountComponentAtNode(div);
	});

	it('should initialize state for Match Details correctly', () => {
		const wrapper = shallow(<App/>);
		expect(wrapper.state().match_table.opponent).to.eql('');
		expect(wrapper.state().match_table.location).to.eql('');
		expect(wrapper.state().match_table.side).to.eql('');
		expect(wrapper.state().match_table.date).to.eql('');
		expect(wrapper.state().match_table.linage).to.eql(0);
		expect(wrapper.state().match_table.baker).to.eql(0);
	});

	it('should initialize state for Score Card correctly', () => {
		const wrapper = shallow(<App/>);
		expect(wrapper.state().scores_table[0][0].games).to.eql([0,0,0]);
		expect(wrapper.state().scores_table[0][0].series).to.eql(0);
		expect(wrapper.state().scores_table[0][0].runningTotal).to.eql(0);

		expect(wrapper.state().scores_table[0][1].games).to.eql([0,0,0]);
		expect(wrapper.state().scores_table[0][1].series).to.eql(0);
		expect(wrapper.state().scores_table[0][1].runningTotal).to.eql(0);

		expect(wrapper.state().scores_table[0][2].games).to.eql([0,0,0]);
		expect(wrapper.state().scores_table[0][2].series).to.eql(0);
		expect(wrapper.state().scores_table[0][2].runningTotal).to.eql(0);
	
		expect(wrapper.state().scores_table[0][3].games).to.eql([0,0,0]);
		expect(wrapper.state().scores_table[0][3].series).to.eql(0);
		expect(wrapper.state().scores_table[0][3].runningTotal).to.eql(0);

		expect(wrapper.state().scores_table[0][4].games).to.eql([0,0,0]);
		expect(wrapper.state().scores_table[0][4].series).to.eql(0);
		expect(wrapper.state().scores_table[0][4].runningTotal).to.eql(0);

		expect(wrapper.state().scores_table[0][5].games).to.eql([0,0,0]);
		expect(wrapper.state().scores_table[0][5].series).to.eql(0);
		expect(wrapper.state().scores_table[0][5].runningTotal).to.eql(0);

		expect(wrapper.state().scores_table[0][6].games).to.eql([0,0,0]);
		expect(wrapper.state().scores_table[0][6].series).to.eql(0);
		expect(wrapper.state().scores_table[0][6].runningTotal).to.eql(0);

		expect(wrapper.state().scores_table[0][7].games).to.eql([0,0,0]);
		expect(wrapper.state().scores_table[0][7].series).to.eql(0);
		expect(wrapper.state().scores_table[0][7].runningTotal).to.eql(0);

		expect(wrapper.state().scores_table[0][8].games).to.eql([0,0,0]);
		expect(wrapper.state().scores_table[0][8].series).to.eql(0);
		expect(wrapper.state().scores_table[0][8].runningTotal).to.eql(0);

		expect(wrapper.state().scores_table[0][9].games).to.eql([0,0,0]);
		expect(wrapper.state().scores_table[0][9].series).to.eql(0);
		expect(wrapper.state().scores_table[0][9].runningTotal).to.eql(0);

		expect(wrapper.state().scores_table[1][0].games).to.eql([0,0,0]);
		expect(wrapper.state().scores_table[1][0].series).to.eql(0);
		expect(wrapper.state().scores_table[1][0].runningTotal).to.eql(0);

		expect(wrapper.state().scores_table[1][1].games).to.eql([0,0,0]);
		expect(wrapper.state().scores_table[1][1].series).to.eql(0);
		expect(wrapper.state().scores_table[1][1].runningTotal).to.eql(0);

		expect(wrapper.state().scores_table[1][2].games).to.eql([0,0,0]);
		expect(wrapper.state().scores_table[1][2].series).to.eql(0);
		expect(wrapper.state().scores_table[1][2].runningTotal).to.eql(0);

		expect(wrapper.state().scores_table[1][3].games).to.eql([0,0,0]);
		expect(wrapper.state().scores_table[1][3].series).to.eql(0);
		expect(wrapper.state().scores_table[1][3].runningTotal).to.eql(0);

		expect(wrapper.state().scores_table[1][4].games).to.eql([0,0,0]);
		expect(wrapper.state().scores_table[1][4].series).to.eql(0);
		expect(wrapper.state().scores_table[1][4].runningTotal).to.eql(0);

		expect(wrapper.state().scores_table[1][5].games).to.eql([0,0,0]);
		expect(wrapper.state().scores_table[1][5].series).to.eql(0);
		expect(wrapper.state().scores_table[1][5].runningTotal).to.eql(0);

		expect(wrapper.state().scores_table[1][6].games).to.eql([0,0,0]);
		expect(wrapper.state().scores_table[1][6].series).to.eql(0);
		expect(wrapper.state().scores_table[1][6].runningTotal).to.eql(0);

		expect(wrapper.state().scores_table[1][7].games).to.eql([0,0,0]);
		expect(wrapper.state().scores_table[1][7].series).to.eql(0);
		expect(wrapper.state().scores_table[1][7].runningTotal).to.eql(0);

		expect(wrapper.state().scores_table[1][8].games).to.eql([0,0,0]);
		expect(wrapper.state().scores_table[1][8].series).to.eql(0);
		expect(wrapper.state().scores_table[1][8].runningTotal).to.eql(0);

		expect(wrapper.state().scores_table[1][9].games).to.eql([0,0,0]);
		expect(wrapper.state().scores_table[1][9].series).to.eql(0);
		expect(wrapper.state().scores_table[1][9].runningTotal).to.eql(0);
	});
})

