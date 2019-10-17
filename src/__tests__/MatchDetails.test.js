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
    
    it('should render the team name', () => {
        const wrapper = shallow(<MatchDetails/>);
        expect(wrapper.containsAllMatchingElements([
            <div>
                <div>WEST ORANGE WARRIORS BOWLING</div>
                <form>
                    Opponent: <input type="text" name="opponent" placeholder="Bishop Moore"></input><br/>
                    Location: <input type="text" name="location" placeholder="Aloma Bowl"></input><br/>
                    Home/Away: <input type="text" name="status" placeholder="Home"></input><br/>
                    Date: <input type="text" name="date" placeholder="Date"></input>
                </form>
            </div>,
            <div className="match_details">	
                <div>Match Format</div>
                <form>
                    Number of Linage Games: <input type="text" name="linage" placeholder="2"></input><br/>
                    Number of Baker Games: <input type="text" name="baker" placeholder="3"></input>
                </form>
            </div>		
		])).to.equal(true);
    });
})

