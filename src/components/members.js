import React, { Component } from 'react'
import { Member } from './member'
import config from '../config'
import { loadMembers } from './spreadsheet'
import LoadingScreen from './loadingScreen';
import WhitePage from './whitePage';

export class Members extends Component {
	constructor(props) {
		super(props)

		this.state = {
			members: [],
			error: null,
			loaded: 0,
		}
		window.gapi.load("client", this.initClient)
	}

	onLoad = (data, error) => {
		if (data) {
			const members = data.items;
			this.setState({ members, loaded: 1 });
		} else {
			this.setState({ error });
		}
	};

	initClient = () => {
		window.gapi.client
			.init({
				apiKey: config.apiKey,
				discoveryDocs: config.discoveryDocs
			})
			.then(() => {
				loadMembers(this.onLoad);
			});
	};

	render() {
		if (this.state.loaded == 1) {
			return (
				<WhitePage type={1}>
					<h1>MEMBRI</h1>
					<p>
						Rețeaua de experți constituită la nivelul Centrului pentru Legislație
						Nonprofit are în componență experți din domenii precum: educație,
						social, sănătate, cultură care au fost implicați în inițiative de
						modificare a politicilor publice. Această rețea va fi platforma de
						dezbateri cu privire la cadrul general de finanțare publică a
						activităților nonprofit. În cadrul acestei activități vor fi
						organizate trei întâlniri, două conferințe naționale și patru
						dezbateri regionale, dar vor participa și la evenimente internaționale
						organizate de către European Center for Not-for-profit law pentru a
						identifica modele de bune practică în finanțarea publică din alte
						țări, legislația specifică și comunitatea de specialiști de la nivel
						european cu expertiză în acest domeniu.
            		</p>
					<br />
					<Member list={this.state.members} />
				</WhitePage>
			)
		}
		else {
			return (
				<LoadingScreen />
			)
		}
	}
}

export default Members
