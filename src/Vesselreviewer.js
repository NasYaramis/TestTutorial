import React, { Component } from 'react';
import './VesselReviewer.css';
import {ZeroPad} from './Lib.js';
import Banner from './Banner';
import DBControl from './DBControl';
import VesselList from './VesselList';
import VesselDetail from './VesselDetail';
import VesselSize from './VesselSize';

class VesselReviewer extends Component {
	state = {
		Last_Update: "(no update yet)",
		SelectedVessel: false
	};

	Set_Selected_Vessel = ( iVessel ) => {
		this.setState ({ SelectedVessel: iVessel });
	};

	Get_Selected_Vessel = () => {
		return ( this.state.SelectedVessel );
	};

	Set_Last_Update = () => {
		let D = new Date();
		this.setState ({ Last_Update: ZeroPad ( D.getHours (), 2 ) + ":" + ZeroPad ( D.getMinutes (), 2 )});
	};

	Get_Last_Update = () => {
		return ( this.state.Last_Update);
	};

	render (){ return (
		<div className="AIS_App">
			<div id="Banner">
				<Banner Get_Last_Update={this.Get_Last_Update} />
			</div>
			<div id="Panels">
				<div id="Panel_Left">
					<div id="DB_Control">
						<DBControl Set_Last_Update={this.Set_Last_Update} />
					</div>
					<div id="VesselList">
						<VesselList Set_Selected_Vessel={this.Set_Selected_Vessel} />
					</div>
				</div>
				<div id="Panel_Middle">
					<VesselDetail Get_Selected_Vessel={this.Get_Selected_Vessel} />
				</div>
				<div id="Panel_Right">
					<VesselSize Get_Selected_Vessel={this.Get_Selected_Vessel} />
				</div>
			</div>
		</div>
	)}
}

export default VesselReviewer;