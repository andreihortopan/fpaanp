import React, { Component } from 'react';

const memberStyle = {
    marginBottom: 60,
}

const lineStyle = {
    display: 'block',
    width: 200,
    height: 1,
    border: 0,
    margin: 0,
    borderTop: '1px solid #bcbcbc',
    padding: 0,
    //paddingTop: 20,
    paddingBottom: 20,
    clear: 'both',
    display: 'inline-block'
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
                        <div style={{
                            textAlign: 'center'
                        }}>
                            <div style={{ ...lineStyle }} />
                        </div>
                        <h2>{item.name}</h2>
                        {item.function &&
                            <p>{item.function} | {item.legislation}</p>}
                        {!item.function &&
                            <p>{item.legislation}</p>}
                        <a href={"mailto:" + item.email}><p style={{ fontSize: "0.9em", fontWeight: 600, color: "#808080" }}>{item.email}</p></a>
                    </div>
                ))}
            </div>
        )
    }

}

export default Member;