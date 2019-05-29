import React, { Component } from 'react'
import { Member } from './member'
import { MENU_PADDING, MENU_MARGIN, MENU_WIDTH, menuLook } from './graphmenu'
import config from '../config'
import { loadMembers } from './spreadsheet'

const pageStyle = {
	position: 'absolute',
	right: 0,
	margin: MENU_MARGIN,
	overflowY: 'scroll',
	overflowX: 'hidden'
}

const diffWidth = 2 * MENU_MARGIN + 2 * MENU_PADDING
const diffHeight = 2 * MENU_MARGIN + MENU_PADDING

export class Members extends Component {
	constructor(props) {
		super(props)

		this.state = {
			width: window.innerWidth - diffWidth,
			height: window.innerHeight - diffHeight,
			members: [],
			error: null,
		}
		window.gapi.load("client", this.initClient)
		console.log(this.state.members);
	}

	handleResize = e => {
		this.setState(prevState => {
			return {
				width: window.innerWidth - diffWidth,
				height: window.innerHeight - diffHeight
			}
		})
	}

	onLoad = (data, error) => {
		if (data) {
			const members = data.items;
			this.setState({ members });
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

	componentDidMount() {
		window.addEventListener('resize', this.handleResize)
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.handleResize)
	}

	render() {
		return (
			<div
				style={{
					width: this.state.width,
					height: this.state.height,
					...pageStyle,
					...menuLook
				}}
			>
				<h1 style={{ marginLeft: 40, marginTop: 0 }}>MEMBRI</h1>
				<div style={{
					marginLeft: 40,
					maxWidth: 600
				}}>
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
					<Member list={this.state.members} />
				</div>
			</div>
		)
	}
}

export default Members
