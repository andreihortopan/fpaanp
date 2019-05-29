import React, { Component } from 'react'
import { Amendment } from './amendment'
import { MENU_PADDING, MENU_MARGIN, MENU_WIDTH, menuLook } from './graphmenu'
import { laws } from '../docs/laws'

const pageStyle = {
	position: 'absolute',
	right: 0,
	margin: MENU_MARGIN,
	overflowY: 'scroll',
	overflowX: 'hidden',
}

const diffWidth = 2 * MENU_MARGIN + 2 * MENU_PADDING
const diffHeight = 2 * MENU_MARGIN + MENU_PADDING

export class PublicFundings extends Component {
	constructor(props) {
		super(props)

		this.state = {
			width: window.innerWidth - diffWidth,
			height: window.innerHeight - diffHeight,
			laws: laws
		}
	}

	handleResize = e => {
		this.setState(prevState => {
			return {
				width: window.innerWidth - diffWidth,
				height: window.innerHeight - diffHeight
			}
		})
	}

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
					...menuLook,
				}}
			>
				<div style={{
					display: 'block',
					marginLeft: 'auto',
					marginRight: 'auto',
					width: 600
				}}>

					<h1 style={{ marginLeft: 40, marginTop: 0 }}>FINANȚĂRI PUBLICE</h1>
					<div
						style={{
							marginLeft: 40,
							maxWidth: 600,
						}}
					>
						<a
							style={{ color: '#008ECE' }}
							href='http://www.mmuncii.ro/j33/images/Documente/Legislatie/Assistenta-sociala-2018/Legea_350_2005_la_18012018.pdf'
							target='_blank'
							rel='noopener noreferrer'
						>
							<p>
								Legea 350/2005 în 2 decembrie 2005 privind regimul finanţărilor
								nerambursabile din fonduri publice alocate pentru activităţi
              nonprofit de interes general{' '}
							</p>
						</a>
						<a
							style={{ color: '#008ECE' }}
							href='http://www.mmuncii.ro/j33/images/Documente/Legislatie/Assistenta-sociala-2018/Legea_34_1998_la_18012018.pdf'
							target='_blank'
							rel='noopener noreferrer'
						>
							<p>
								Legea 34/1998 din 20 ianuarie 1998 privind acordarea unor
								subvenţii asociaţiilor şi fundaţiilor române cu personalitate
								juridică, care înfiinţează şi administrează unităţi de asistenţă
								socială
            				</p>
						</a>
					</div>
					<h1 style={{ marginLeft: 40, marginTop: 0 }}>
						Proiectul de lege - PLx 575/2018 (L393/2018)
          			</h1>
					<div style={{ marginLeft: 40, maxWidth: 600, textAlign: 'center' }}>
						<Amendment list={this.state.laws} />
					</div>
				</div>
			</div>

		)
	}
}

export default PublicFundings
