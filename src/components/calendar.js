import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import "react-big-calendar/lib/css/react-big-calendar.css";
import { menuLook } from './menu';
import { MENU_PADDING } from './menu';
import { MENU_WIDTH } from './menu';
import { MENU_MARGIN } from './menu';


const localizer = BigCalendar.momentLocalizer(moment);

const pageStyle = {
    position: 'absolute',
    right: 0,
    margin: MENU_MARGIN,
    overflowY: "scroll",
    overflowX: "hidden",
}

const diffWidth = MENU_WIDTH + 3*MENU_MARGIN + 4*MENU_PADDING;
const diffHeight = 2*MENU_MARGIN + MENU_PADDING;

export class Calendar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            width: window.innerWidth - diffWidth,
            height: window.innerHeight - diffHeight,
            events: [
                {
                    start: new Date(),
                    end: new Date(moment().add(1, "days")),
                    title: "Some title"
                }
            ]
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
        return(
            <div style={{
                width: this.state.width,
                height: this.state.height,
                ...pageStyle,
                ...menuLook,
                overflow: "hidden",
            }}> 
                <BigCalendar
                localizer={localizer}
                defaultDate={new Date()}
                defaultView="month"
                events={this.state.events}
                style={{ height: this.height }}
                />
            </div>
        )
    }
}