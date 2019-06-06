import moment from 'moment'
import React, { Component } from 'react'
import BigCalendar from 'react-big-calendar'
import { Event } from './event'
import { events } from '../docs/events'
import config from '../config'
import { loadEvents } from './spreadsheet'

import { MENU_PADDING, MENU_MARGIN, MENU_WIDTH, menuLook } from './graphmenu'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import '../calendar.css'
import LoadingScreen from './loadingScreen';
import WhitePage from './whitePage';

const localizer = BigCalendar.momentLocalizer(moment)

const GRAPH_MENU_HEIGHT = 250

export class Calendar extends Component {
	constructor(props) {
		super(props)

		this.selectEvent = this.selectEvent.bind(this)

		this.state = {
			events: [],
			error: null,
			loaded: 0,
			now: new Date(),
			selectedEvent: 0,
		}
		window.gapi.load("client", this.initClient)
	}

	getNextEvent = () => {
		let i
		for (i = 0; i < events.length;) {
			if (events[i].end < this.state.now)
				i++;
			else break;
		}
		if (i == events.length)
			i--;
		this.setState({ selectedEvent: i })
	}

	selectEvent(id) {
		this.setState({ selectedEvent: id })
	}

	onLoad = (data, error) => {
		if (data) {
			const events = data.items;
			this.setState({ events, loaded: 1, selectEvent: this.getNextEvent() });
		} else {
			this.setState({ error });
		}
	};

	initClient = () => {
		window.gapi.client
			.init({
				apiKey: config.apiKey,
				discoveryDocs: config.discoveryDocs
			})
			.then(() => {
				loadEvents(this.onLoad);
			});
	};

	render() {
		if (this.state.loaded == 1) {
			return (
				<WhitePage type={0}>

					<div
						style={{
							position: "fixed",
							height: 40,
							width: 40,
							marginLeft: 32,
							marginTop: 37,
							borderRadius: 5,
							backgroundColor: "white",
							zIndex: 100,
						}}>

					</div>

					<div style={{
						height: '100%',
						display: 'flex',
						flexDirection: 'column',
					}}>
						<div style={{
							margin: MENU_MARGIN,
							marginBottom: 0,
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'space-between',
							flex: '1 0',
							height: '0px',
						}}>

							<div
								style={{
									...menuLook,
									padding: 0,
									// position: "relative",
									overflowY: 'auto',
									width: '50%',
								}}
							>
								{this.state.events[this.state.selectedEvent].image != null &&
									<img src={this.state.events[this.state.selectedEvent].image} style={{
										width: "100%",
										height: "60%",
										objectFit: "cover",
										marginTop: -10,
										// position: "absolute",
										webkitMaskImage: "-webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)))",
										maskImage: "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))",
									}} />}
								<div style={{
									backgroundColor: "white",
									paddingBottom: MENU_PADDING,
									paddingTop: MENU_PADDING,
									marginTop: (this.state.events[this.state.selectedEvent].image != null) ? -50 : 30,
								}}>
									<h1 style={{ marginLeft: 40, marginTop: -5 }}>
										{this.state.events[this.state.selectedEvent].name}
									</h1>
									<h3 style={{ marginLeft: 40, marginTop: -5 }}>
										{this.state.events[this.state.selectedEvent].displayDate}
									</h3>
									<div
										style={{
											marginLeft: 40,
											maxWidth: 600,
										}}
									>
										<p>{this.state.events[this.state.selectedEvent].description}</p>

									</div>
								</div>
							</div>

							<div
								style={{
									width: '50%',
									...menuLook,
									paddingBottom: MENU_PADDING,
									marginLeft: MENU_MARGIN,
									overflow: 'hidden',
								}}
							>
								<BigCalendar
									selected={events[this.state.selectedEvent]}
									localizer={localizer}
									defaultDate={this.state.now}
									defaultView='month'
									titleAccessor='name'
									tooltipAccessor='name'
									startAccessor='start'
									endAccessor='end'
									events={this.state.events}
									style={{ height: this.height }}
									onSelectEvent={event => this.selectEvent(event.id)}
								// formats={formats}
								/>
							</div>
						</div>

						<div
							style={{
								width: '100%',
								height: GRAPH_MENU_HEIGHT - MENU_MARGIN,
								overflowX: 'auto',
								overflowY: 'hidden',
								display: 'flex',
							}}
						>
							<Event onClick={this.selectEvent} list={this.state.events} startEvent={this.state.selectedEvent} />
						</div>
					</div >
				</WhitePage >
			)
		}
		else {
			return (
				<LoadingScreen />
			)
		}
	}
}

export default Calendar
