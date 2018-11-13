import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import "react-big-calendar/lib/css/react-big-calendar.css";
import { menuLook } from './menu';
import { MENU_PADDING } from './menu';
import { MENU_WIDTH } from './menu';
import { MENU_MARGIN } from './menu';
import { Event } from './event'; 
import '../calendar.css';

const localizer = BigCalendar.momentLocalizer(moment);

const graphMenuHeight = 375;

const pageStyle = {
    position: 'absolute',
    right: 0,
    margin: MENU_MARGIN,
    overflowY: "scroll",
    overflowX: "hidden",
}

const diffWidth = MENU_WIDTH + MENU_MARGIN + 2*MENU_PADDING;
const diffHeight = 0;

export class Calendar extends Component {
    constructor(props) {
        super(props);

        this.selectEvent = this.selectEvent.bind(this);

        this.state = {
            width: window.innerWidth - diffWidth,
            height: window.innerHeight - diffHeight,
            selectedEvent: 0,
            events: [
                {
                    id: 0,
                    start: new Date(),
                    end: new Date(moment().add(1, "days")),
                    name: "Some event",
                    description: "Some description",
                },
                {
                    id: 1,
                    start: new Date(),
                    end: new Date(moment().add(3, "days")),
                    name: "Some event2",
                    description: "Some description2",
                },
                {
                    id: 2,
                    start: new Date(),
                    end: new Date(moment().add(5, "days")),
                    name: "Some event3",
                    description: "Some description3",
                },
                {
                    id: 3,
                    start: new Date(),
                    end: new Date(moment().add(4, "days")),
                    name: "Some event4",
                    description: "Some description4",
                },
                {
                    id: 4,
                    start: new Date(),
                    end: new Date(moment().add(6, "days")),
                    name: "Some event5",
                    description: "Some description5",
                },
                {
                    id: 5,
                    start: new Date(),
                    end: new Date(moment().add(1, "days")),
                    name: "Some event6",
                    description: "Some description6",
                },
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

    selectEvent(id) {
        this.setState({selectedEvent: id});
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
                padding: 0,
                margin: 0,
                overflow: "hidden",
            }}> 
                <div style={{
                    width: this.state.width/2 - MENU_MARGIN,
                    height: this.state.height - graphMenuHeight - MENU_MARGIN - MENU_PADDING,
                    ...menuLook,
                    paddingBottom: MENU_PADDING,
                    paddingTop: MENU_PADDING,
                    marginLeft: MENU_MARGIN,
                    marginTop: MENU_MARGIN,
                    overflow: "hidden",
                    display: "inline-block",
                    float: "left",
                }}>
                    <BigCalendar
                        localizer={localizer}
                        defaultDate={new Date()}
                        defaultView="month"
                        events={this.state.events}
                        style={{ height: this.height }}
                    />
                </div>
                
                <div style={{
                    width: this.state.width/2 - 2*MENU_MARGIN - 4*MENU_PADDING,
                    height: this.state.height - graphMenuHeight - MENU_MARGIN - MENU_PADDING,
                    ...menuLook,
                    paddingBottom: MENU_PADDING,
                    paddingTop: MENU_PADDING,
                    marginLeft: MENU_MARGIN,
                    marginTop: MENU_MARGIN,
                    overflow: "hidden",
                    display: "inline-block",
                    float: "rigth",
                }}>
                    <h1>{this.state.events[this.state.selectedEvent].name}</h1>
                    <p>{this.state.events[this.state.selectedEvent].description}</p>
                </div>

                <div style={{
                    minWidth: this.state.width,
                    height: graphMenuHeight - MENU_MARGIN - MENU_PADDING,
                    overflowX: "auto",
                    overflowY: "hidden",
                    display: "flex",
                }} class= "eventScroll">
                    <Event
                        onClick={this.selectEvent}
                        list={this.state.events}
                    />
                </div>
            </div>
        )
    }
}

export default Calendar;