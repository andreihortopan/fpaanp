import React, { Component } from 'react';

const memberStyle = {
    marginBottom: 40,
}

export class Member extends Component {
    render() {
        const { list } = this.props;

        return (
            <div>
                {list.map((item) => (
                    <div
                        style={{
                            ...memberStyle,
                        }}
                        key={item.id}>
                        <h2>{item.function} {item.name}</h2>
                        <p>{item.legislation}</p>
                        <p>{item.email}</p>
                    </div>
                ))}
            </div>
        )
    }

}

export default Member;