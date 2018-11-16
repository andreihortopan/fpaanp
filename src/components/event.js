import React, { Component } from 'react';
import { menuLook } from './menu';
import { MENU_PADDING } from './menu';
import { MENU_WIDTH } from './menu';
import { MENU_MARGIN } from './menu';
import '../calendar.css';

const eventStyle = {
    width: MENU_WIDTH,
    height: 383 - 2*MENU_MARGIN - 2*MENU_PADDING - 5,
    ...menuLook,
    marginRight: MENU_MARGIN,
    marginTop: MENU_MARGIN,
    overflow: "hidden",
}

export class Event extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const{list} = this.props;

        return(
            <div style={{
                display: "flex",
                marginLeft: MENU_MARGIN,
            }}>
                {list.map((item) => (
                    <div
                        onClick = {() => this.props.onClick(item.id)}
                        style={{
                            ...eventStyle,
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

export default Event;