import React, { Component } from 'react';
import Collabsible from 'react-collapsible';
import '../collapsible.css'

const membruStyle = {
    marginBottom: 20,
}



export class Amendment extends Component {
    render() {
        const { list } = this.props;

        return (
            <div>
                {list.map((item) => (
                    <div
                        style={{
                            ...membruStyle,
                        }}
                        key={item.id}>
                        <Collabsible trigger={item.title}>
                            <h3>{item.article}</h3>
                            <h3>Amendamente CLNR:</h3>
                            <p>{item.amendment}</p>
                            <h3>Motivare:</h3>
                            <p>{item.motivation}</p>
                        </Collabsible>
                    </div>
                ))}
            </div>
        )
    }

}

export default Amendment;