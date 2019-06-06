import React, { Component } from 'react';
import WhitePage from './whitePage';

export class About extends Component {
    render() {
        return (
            <WhitePage type={1}>
                <h1>DESPRE PLATFORMĂ</h1>
                <br />

                <p>Această platformă reprezintă o resursă pentru toți cei interesați de finanțarea activităților non-profit din fonduri publice. Platforma conține informații despre legislația aplicabilă, rețeaua de experți în domeniul finanțării activităților non-profit și date centralizate privind finanțările publice acordate la nivel național (ministere sau alte instituții centrale) și la nivel local (consilii județene și consilii ale locale). Informațiile sunt obținute prin cereri de informații publice formulate în baza Legii 544/2001 și prin colectarea de date de pe paginile de internet ale instituțiilor finanțatoare. Primele date au fost solicitate pentru perioada 2013 – 2017, urmând să actualizăm anual datele cu privire la finanțările acordate.</p>
                <br />

                <p><i>Notă: CLNR nu își asumă responsabilitatea pentru acuratețea datelor, acestea fiind furnizate de către instituțiile publice. Pentru situațiile în care nu există date, fie nu au fost acordate finanțări, fie nu au fost oferite informații despre acestea.</i></p>
                <br />

                <p><b>Scopul platformei</b> este de a transparentiza procesul de acordare a finanțărilor publice de la bugetul de stat sau de la bugetele locale pentru activități nonprofit de interes general și de a crește gradul de încredere al cetățenilor și liderilor de opinie în societatea civilă. Acesta este un instrument gratuit, accesibil oricărui utilizator și poate genera rapoarte, hărți și sinteze pe baza informațiilor selectate din baza de date.</p>
                <br />

                <p>Platforma conține o hartă interactivă cu informații esențiale despre autoritățile publice finanțatoare, beneficiarii finanțărilor, domeniile și valoarea contractelor de finanțare. Această platformă a fost realizată în cadrul proiectului ”Îmbunătățirea cadrului juridic privind finanțarea publică a organizațiilor neguvernamentale”, cod SMIS11409/SIPOCA193 finanțat cu sprijinul Fondului Social European prin Programul Operațional Capacitate Administrativă. Mai multe date despre proiect se pot afla pe pagina Centrului pentru Legislație Nonprofit.</p>
                <br />

            </WhitePage>
        )
    }
}

export default About;