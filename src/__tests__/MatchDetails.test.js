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
    
    it('should render the Match Details page', () => {
        const wrapper = shallow(<MatchDetails/>);
        expect(wrapper.containsAllMatchingElements([
            <div className="match_details">
                <div className="match_details_section_title">WEST ORANGE WARRIORS BOWLING</div>
                
                <form>
                    Opponent: <select name="opponent" required>
                        <option value="apopka">Apopka Blue Darters</option>
                        <option value="bishop">Bishop Moore Hornets</option>
                        <option value="christian">Circle Christian Centurions</option>
                        <option value="edgewater">Edgewater Eagles</option>
                        <option value="evans">Evans Trojans</option>
                        <option value="jones">Jones Tigers</option>
                        <option value="timbercreek">Timber Creek Wolves</option>
                        <option value="wekiva">Wekiva Mustangs</option>
                        <option value="windermere">Windermere Badgers</option>
                    </select><br/>
                    Location: <select name="location" required>
                        <option value="aloma">Aloma</option>
                        <option value="skylanes">AMF Skylanes</option>
                        <option value="boardwalk">Boardwalk</option>
                        <option value="bolero">Bolero</option>
                    </select><br/>
                    Home/Away: <select name="side" required>
                        <option value="home">Home</option>
                        <option value="away">Away</option>
                    </select><br/>
                    Date: <input type="date" name="date" placeholder="Date"></input>
                </form>
            </div>,
            <div className="match_details">	
                <div className="match_details_section_title">Match Format</div>

                <form>
                    Number of Linage Games: <select name="linage" required>
                        <option value="linage0">0</option>
                        <option value="linage1">1</option>
                        <option value="linage2">2</option>
                        <option value="linage3">3</option>
                        <option value="linage4">4</option>
                    </select><br/>
                    Number of Baker Games: <select name="baker" required>
                        <option value="baker0">0</option>
                        <option value="baker1">1</option>
                        <option value="baker2">2</option>
                        <option value="baker3">3</option>
                        <option value="baker4">4</option>
                        <option value="baker5">5</option>
                    </select>
                </form>
            </div>,
            <button type="submit" className="match_details">Submit</button>
		])).to.equal(true);
    });

    it('should initialize state for MatchDetails correctly', () => {
		const wrapper = shallow(<MatchDetails/>);
		expect(1).to.equal(0);
	});

	it('should allow data entry in a clean opponent input', () => {
		const wrapper = shallow(<MatchDetails/>);
		expect(1).to.equal(0);
	});

	it('should ask for confirmation of data entry in a dirty opponent input', () => {
		const wrapper = shallow(<MatchDetails/>);
		expect(1).to.equal(0);
	});

	it('should allow data entry in a clean opponent input', () => {
		const wrapper = shallow(<MatchDetails/>);
		expect(1).to.equal(0);
	});

	it('should ask for confirmation of data entry in a dirty opponent input', () => {
		const wrapper = shallow(<MatchDetails/>);
		expect(1).to.equal(0);
	});

    it('should allow data entry in a clean location input', () => {
		const wrapper = shallow(<MatchDetails/>);
		expect(1).to.equal(0);
	});

	it('should ask for confirmation of data entry in a dirty location input', () => {
		const wrapper = shallow(<MatchDetails/>);
		expect(1).to.equal(0);
	});

    it('should allow data entry in a clean homeAway input', () => {
		const wrapper = shallow(<MatchDetails/>);
		expect(1).to.equal(0);
	});

	it('should ask for confirmation of data entry in a dirty homeAway input', () => {
		const wrapper = shallow(<MatchDetails/>);
		expect(1).to.equal(0);
	});

    it('should allow data entry in a clean date input', () => {
		const wrapper = shallow(<MatchDetails/>);
		expect(1).to.equal(0);
	});

	it('should ask for confirmation of data entry in a dirty date input', () => {
		const wrapper = shallow(<MatchDetails/>);
		expect(1).to.equal(0);
	});

    it('should allow data entry in a clean number of linage games input', () => {
		const wrapper = shallow(<MatchDetails/>);
		expect(1).to.equal(0);
	});

	it('should ask for confirmation of data entry in a dirty number of linage games input', () => {
		const wrapper = shallow(<MatchDetails/>);
		expect(1).to.equal(0);
	});

    it('should allow data entry in a clean number of baker games input', () => {
		const wrapper = shallow(<MatchDetails/>);
		expect(1).to.equal(0);
	});

	it('should ask for confirmation of data entry in a dirty number of baker games input', () => {
		const wrapper = shallow(<MatchDetails/>);
		expect(1).to.equal(0);
	});

	it('should validate all entries prior to submitting', () => {
		const wrapper = shallow(<MatchDetails/>);
		expect(1).to.equal(0);
    });
    
    it('should create the appropriate template on the Score Card page on submit', () => {
		const wrapper = shallow(<MatchDetails/>);
		expect(1).to.equal(0);
	});

})

