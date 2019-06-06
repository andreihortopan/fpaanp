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
			<WhitePage type={1}>
				<h1>
					Cadrul general al finanțării activităților non-profit
				</h1>

				<a
					style={{ color: '#008ECE' }}
					href='http://legislatie.just.ro/Public/DetaliiDocument/66812'
					target='_blank'
					rel='noopener noreferrer'
				>
					<p>
						Lege nr. 350/2005 privind regimul finanțărilor nerambursabile din fonduri publice alocate pentru activități nonprofit de interes general
					</p>
				</a>
				
				<h1>
					Proiecte și programe culturale
				</h1>

				<a
					style={{ color: '#008ECE' }}
					href='http://legislatie.just.ro/Public/DetaliiDocument/15449'
					target='_blank'
					rel='noopener noreferrer'
				>
					<p>
						Ordonanța nr. 51/1998 privind îmbunătățirea sistemului de finanțare a programelor, proiectelor și acțiunilor culturale
					</p>
				</a>

				<a
					style={{ color: '#008ECE' }}
					href='http://legislatie.just.ro/Public/DetaliiDocument/63852'
					target='_blank'
					rel='noopener noreferrer'
				>
					<p>
						H.G. nr. 802/2005 privind organizarea şi funcţionarea Administraţiei Fondului Cultural Naţional
					</p>
				</a>

				<a
					style={{ color: '#008ECE' }}
					href='http://legislatie.just.ro/Public/DetaliiDocument/128118'
					target='_blank'
					rel='noopener noreferrer'
				>
					<p>
						Ordinul nr. 2.231/2011 - Norme metodologice privind organizarea şi funcţionarea comisiilor, procedura de selecţie a programelor, proiectelor şi acţiunilor culturale în vederea acordării de finanţări nerambursabile din Fondul Cultural Naţional
					</p>
				</a>

				<a
					style={{ color: '#008ECE' }}
					href='http://legislatie.just.ro/Public/DetaliiDocument/76795'
					target='_blank'
					rel='noopener noreferrer'
				>
					<p>
						Legea nr. 186/2003 privind susţinerea şi promovarea culturii scrise
					</p>
				</a>

				<h1>
					Activități privind protecția mediului
				</h1>

				<a
					style={{ color: '#008ECE' }}
					href='http://legislatie.just.ro/Public/DetaliiDocument/67529'
					target='_blank'
					rel='noopener noreferrer'
				>
					<p>
						OUG nr. 196/2005 privind Fondul pentru mediu
					</p>
				</a>

				<a
					style={{ color: '#008ECE' }}
					href='http://legislatie.just.ro/Public/DetaliiDocument/67706'
					target='_blank'
					rel='noopener noreferrer'
				>
					<p>
						H.G. nr. 1/2006 - Regulament de organizare şi funcţionare a Administraţiei Fondului pentru Mediu
					</p>
				</a>

				<a
					style={{ color: '#008ECE' }}
					href='http://legislatie.just.ro/Public/DetaliiDocument/183961'
					target='_blank'
					rel='noopener noreferrer'
				>
					<p>
						Ordinul nr. 2.153/2016 - Ghidul de finanţare a Programului vizând educaţia şi conştientizarea publicului privind protecţia mediului
					</p>
				</a>

				<h1>
					Servicii sociale
				</h1>
				<a
					style={{ color: '#008ECE' }}
					href='http://legislatie.just.ro/Public/DetaliiDocument/14145'
					target='_blank'
					rel='noopener noreferrer'
				>
					<p>
						Lege nr. 34/1998 privind acordarea unor subvenţii asociaţiilor şi fundaţiilor române cu personalitate juridică, care înfiinţează şi administrează unităţi de asistenţa socială
					</p>
				</a>

				<a
					style={{ color: '#008ECE' }}
					href='http://legislatie.just.ro/Public/DetaliiDocument/32420'
					target='_blank'
					rel='noopener noreferrer'
				>
					<p>
						H.G. nr. 1.153/2001 - Normele metodologice de aplicare a Legii nr. 34/1998 privind acordarea unor subvenții asociațiilor și fundațiilor române cu personalitate juridică, care înființează și administrează unități de asistența socială
					</p>
				</a>

				<h1>
					Activității destinate românilor de pretutindeni
				</h1>
				<a
					style={{ color: '#008ECE' }}
					href='http://legislatie.just.ro/Public/DetaliiDocument/73602'
					target='_blank'
					rel='noopener noreferrer'
				>
					<p>
						Legea nr. 321/2006 privind regimul finanțărilor nerambursabile pentru programele, proiectele sau acțiunile privind sprijinirea activității românilor de pretutindeni și a organizațiilor reprezentative ale acestora
					</p>
				</a>

				<h1>
					Activităţi de cooperare internațională pentru dezvoltare
				</h1>

				<a
					style={{ color: '#008ECE' }}
					href='http://legislatie.just.ro/Public/DetaliiDocument/183528'
					target='_blank'
					rel='noopener noreferrer'
				>
					<p>
						Legea nr. 213/2016 privind cooperarea internațională pentru dezvoltare și asistență umanitară
					</p>
				</a>

				<a
					style={{ color: '#008ECE' }}
					href='http://legislatie.just.ro/Public/DetaliiDocument/185217'
					target='_blank'
					rel='noopener noreferrer'
				>
					<p>
						H.G. nr. 1.006/2016 privind organizarea şi funcţionarea Agenţiei de Cooperare Internaţională pentru Dezvoltare
					</p>
				</a>

				<a
					style={{ color: '#008ECE' }}
					href='http://legislatie.just.ro/Public/DetaliiDocumentAfis/193906'
					target='_blank'
					rel='noopener noreferrer'
				>
					<p>
						H.G. 690/2017 - Norme metodologice privind realizarea activităţilor de cooperare internaţională pentru dezvoltare şi asistenţă umanitară
					</p>
				</a>

				<h1>
					Proiecte și programe sportive
				</h1>

				<a
					style={{ color: '#008ECE' }}
					href='http://legislatie.just.ro/Public/DetaliiDocument/22262'
					target='_blank'
					rel='noopener noreferrer'
				>
					<p>
						Legea nr. 69/2000 a educației fizice și sportului
					</p>
				</a>

				<a
					style={{ color: '#008ECE' }}
					href='http://legislatie.just.ro/Public/DetaliiDocument/205036'
					target='_blank'
					rel='noopener noreferrer'
				>
					<p>
						Ordinul nr. 664/2018 privind finanţarea din fonduri publice a proiectelor şi programelor sportive
					</p>
				</a>

				<h1>
					Proiecte de tineret
				</h1>

				<a
					style={{ color: '#008ECE' }}
					href='http://legislatie.just.ro/Public/DetaliiDocument/73834'
					target='_blank'
					rel='noopener noreferrer'
				>
					<p>
						Lege nr. 350/2006 a tinerilor
					</p>
				</a>

				<a
					style={{ color: '#008ECE' }}
					href='http://legislatie.just.ro/Public/DetaliiDocument/197930'
					target='_blank'
					rel='noopener noreferrer'
				>
					<p>
						Ordin nr. 121/2018 -  Metodologia pentru Concursul național/local de proiecte de tineret și Concursul național de proiecte studențești
					</p>
				</a>

			</WhitePage>
		)
	}
}

export default PublicFundings
