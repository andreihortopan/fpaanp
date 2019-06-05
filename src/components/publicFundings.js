import React, { Component } from 'react'
import { Amendment } from './amendment'
import { laws } from '../docs/laws'
import WhitePage from './whitePage';

export class PublicFundings extends Component {
	constructor(props) {
		super(props)

		this.state = {
			laws: laws,
		}
	}

	render() {
		return (
			<WhitePage>
				<h1>FINANȚĂRI PUBLICE</h1>
				<div
					style={{
						marginLeft: 40,
						maxWidth: 700,
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
				<h1 style={{ marginTop: 0 }}>
					Proiectul de lege - PLx 575/2018 (L393/2018)
          			</h1>
				<div style={{ maxWidth: 800, textAlign: 'center' }}>
					<Amendment list={this.state.laws} />
				</div>
			</WhitePage>
		)
	}
}

export default PublicFundings
