import React, { Component } from 'react';

const membruStyle = {
    marginBottom: 40,
}

export class Member extends Component {
    render() {
        const{list} = this.props;

        return(
            <div>
                {list.map((item) => (
                    <div 
                        style={{
                            ...membruStyle,
                        }}
                        key={item.id}>
                    <h2>{item.name}</h2>
                    <p>{item.description}</p>
                    </div>
                ))}
            </div>
        )
    }

}

export default Member;