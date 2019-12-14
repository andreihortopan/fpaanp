import React, { Component } from 'react'
import WhitePage from './whitePage';

export class NetworkActivity extends Component {
    render() {

        return (
            <WhitePage type={1}>
                <h1>ACTIVITĂȚI REȚEA</h1>
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
            </WhitePage>
        )
    }
}

export default NetworkActivity
