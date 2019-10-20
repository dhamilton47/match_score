import React, {Component} from 'react';
import './MatchDetails.css';

class MatchDetails extends Component {
	render() {
		return (
			<>
				<div className="match_details">
					<div className="match_details_section_title">WEST ORANGE WARRIORS BOWLING</div>
					
					<form>
						Opponent: <select name="opponent" required>
							<option value="none">choose...</option>
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
							<option value="none1">choose...</option>
							<option value="aloma">Aloma</option>
							<option value="skylanes">AMF Skylanes</option>
							<option value="boardwalk">Boardwalk</option>
							<option value="bolero">Bolero</option>
						</select><br/>
						Home/Away: <select name="side" required>
							<option value="none2">choose...</option>
							<option value="home">Home</option>
							<option value="away">Away</option>
						</select><br/>
						Date: <input type="date" name="date" placeholder="Date"></input>
					</form>
				</div>
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
				</div>
				<button type="submit" className="">Submit</button>
				<div className="match_details_spacer"></div>
			</>
		);
	}
}

export default MatchDetails;