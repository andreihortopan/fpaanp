import React, { Component } from 'react';
import { Member } from './member';
import { MENU_PADDING, MENU_MARGIN, MENU_WIDTH, menuLook } from './graphmenu';

const pageStyle = {
    position: 'absolute',
    right: 0,
    margin: MENU_MARGIN,
    overflowY: "scroll",
    overflowX: "hidden",
}

const diffWidth = 2 * MENU_MARGIN + 2 * MENU_PADDING;
const diffHeight = 2 * MENU_MARGIN + MENU_PADDING;

export class About extends Component {
    constructor(props) {
        super(props);

        this.state = {
            width: window.innerWidth - diffWidth,
            height: window.innerHeight - diffHeight,
        }
    }

    handleResize = e => {
        this.setState(prevState => {
            return {
                width: window.innerWidth - diffWidth,
                height: window.innerHeight - diffHeight,
            };
        });
    }

    componentDidMount() {
        window.addEventListener("resize", this.handleResize);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.handleResize);
    }

    render() {
        return (
            <div style={{
                width: this.state.width,
                height: this.state.height,
                ...pageStyle,
                ...menuLook,
            }}>
                <h1 style={{ marginLeft: 40, marginTop: 0 }}>DESPRE PROIECT</h1>
                <div style={{
                    marginLeft: 40,
                    maxWidth: 600
                }}>
                    <p>Rețeaua de experți constituită la nivelul Centrului pentru Legislație Nonprofit are în componență experți din domenii precum: educație, social, sănătate, cultură care au fost implicați în inițiative de modificare a politicilor publice. Această rețea va fi platforma de dezbateri cu privire la cadrul general de finanțare publică a activităților nonprofit. În cadrul acestei activități vor fi organizate trei întâlniri, două conferințe naționale și patru dezbateri regionale, dar vor participa și la evenimente internaționale organizate de către European Center for Not-for-profit law pentru a identifica modele de bune practică în finanțarea publică din alte țări, legislația specifică și comunitatea de specialiști de la nivel european cu expertiză în acest domeniu.</p>
                    <p>Scopul platformei este de a transparentiza procesul de acordare a finanțărilor publice de la bugetul de stat sau de la bugetele locale pentru activități nonprofit de interes general și de a crește gradul de încredere al cetățenilor și liderilor de opinie în societatea civilă. Acesta este un instrument gratuit, accesibil oricărui utilizator și poate genera rapoarte, hărți și sinteze prin analiza diverselor informații selectate din baza de date. </p>
                    <p>Platforma reprezintă rezultatul unei cercetări exhaustive a informațiilor despre beneficiarii finanțărilor publice: ONG-uri, culte religioase, sindicate, patronate și alte organizații nonprofit, precum și despre autoritățile publice finanțatoare. Pentru colectarea datelor existente pe platformă, echipa CLNR a solicitat informații de interes publice în baza Legii 544/2001 tuturor autorităților publice centrale și locale care au finanțat proiecte în ultimii 5 ani în baza Legii 30/2005.</p>
                    <p>Platforma online conține o hartă interactivă cu informații esențiale despre autoritățile publice finanțatoare, beneficiarii finanțărilor, domeniile și contractele de finanțare. De asemenea, conține anunțuri privind diverse inițiative legislative relevante pentru acest domeniu.</p>
                    <p>Platforma Finanțarea publică a ONG-urilor face parte din proiectul ”Îmbunătățirea cadrului juridic privind finanțarea publică a organizațiilor neguvernamentale”, cod SMIS11409/SIPOCA193 finanțat cu sprijinul Fondului Social European prin Programul Operațional Capacitate Administrativă.  </p>
                    <p>Obiectivele proiectului vizează capacitarea ONG-urilor și a partenerilor sociali de a se implica în formularea și promovarea de propuneri alternative la politicile publice inițiate de Guvern prin: </p>
                    <ul>
                        <li>Instrumente de monitorizare și evaluare a mecanismelor privind finanțarea din fonduri publice a activităților nonprofit</li>
                        <li>Crearea unei rețele naționale de experți privind finanțarea publică pentru activități nonprofit</li>
                        <li>Cursuri de formare dedicate reprezentanților organizațiilor nonprofit: ”Ciclul de elaborare a politicilor publice”, ”Derularea unei campanii de advocacy” și „Bugetarea participativă”</li>
                        <li>Un raport de evaluare participativă a implementării mecanismelor de finanțare publică pentru activități nonprofit </li>
                        <li>O politica publică alternativă privind finanțarea publica a activităților nonprofit. </li>
                    </ul>
                    <h3>Alte instrumente</h3>
                    <p>Sprijinul acordat de către echipa CLNR reprezentanților societății civile continuă cu un al doilea instrument online, Issue monitoring - primul serviciu de monitorizare legislativă destinat organizațiilor neguvernamentale din România și profesioniștilor din domeniul de advocacy. Platforma este un instrument online modern care permite organizațiilor non-profit să fie la curent cu toate propunerile legislative din 3 domenii - reglementare ONG,  Finanțare ONG și Transparență – propuse și adoptate de către reprezentanții Guvernului și Parlamentului României.</p>
                    <p>Această platformă este dedicată organizațiilor non-profit active în România care vor să fie conectate la procesul decizional, să anticipeze schimbările și să influențeze deciziile legislative. Echipa CLNR urmărește instituțiile statului, de la cum lucrează membrii Comisiilor permanente din Parlament, până la dezbaterile din plenul Senatului sau al Camerei Deputaților; de la discuțiile și dezbaterile din ministere până la ședința de Guvern și până la publicarea actelor în Monitorul Oficial. Ori de câte ori apar schimbări și propuneri legislative de interes, abonații primesc în scurt timp o alertă cu detalii, iar o dată pe săptămână se trimit rapoarte cu ce s-a întâmplat în săptămâna anterioară. </p>
                    <p>Mai multe detalii pe:<br />
                        <a style={{ color: '#008ECE' }} href="https://www.clnr.ro/project/poca/" target="_blank">clnr.ro</a>
                        <br />
                        <a style={{ color: '#008ECE' }} href="http://issuemonitoring.ro/" target="_blank">issuemonitoring.ro</a></p>
                </div>
            </div >
        )
    }
}

export default About;