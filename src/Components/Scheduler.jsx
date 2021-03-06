import React, {Component} from 'react';
import {DayPilot, DayPilotScheduler} from "daypilot-pro-react";
import Zoom from "./Zoom";
import EventModal from "./eventModal";
import {GetRooms} from "../Services/roomService.js";
import {GetEvents} from "../Services/eventService.js";

class Scheduler extends Component {

    constructor(props) {
        super(props);

        this.state = {
            modalShow: false,
            selectedEventId: 0,
            startDate: "2019-04-01",
            days: 30,
            scale: "Day",
            timeHeaders: [

                { groupBy: "Month"},
                { groupBy: "Day", format: "d"}

            ],
            cellWidthSpec: "Auto",
            eventHeight:30,
            cellWidth: 50,
            resources: GetRooms(),
            events: GetEvents()
        };
    }

    zoomChange(args) {
        switch (args.level) {
            case "month":
                this.setState({
                    startDate: DayPilot.Date.today().firstDayOfMonth(),
                    days: DayPilot.Date.today().daysInMonth(),
                    scale: "Day"
                });
                break;
            case "week":
                this.setState({
                    startDate: DayPilot.Date.today().firstDayOfWeek(),
                    days: 7,
                    scale: "Day"
                });
                break;
            default:
                throw new Error("Invalid zoom level");
        }
    }

    cellWidthChange(ev) {
        var checked = ev.target.checked;
        this.setState({
            cellWidthSpec: checked ? "Auto" : "Fixed"
        });
    }

    modalClose() {
        this.setState({
            modalShow: false
        });
    }

    eventClicked(args) {
        this.setState({
            modalShow: true,
            selectedEventId : args.e.data.id
        });
    }

    render() {
        var {...config} = this.state;
        return (
            <div>
                <Zoom onChange={args => this.zoomChange(args)} />
                <div className="space"><label><input type="checkbox" checked={this.state.cellWidthSpec === "Auto"} onChange={ev => this.cellWidthChange(ev)} /> Auto width</label></div>
                <DayPilotScheduler
                    {...config}
                    onEventMoved={args => {
                        console.log("Event moved: ", args.e.data.id, args.newStart, args.newEnd, args.newResource);
                        this.scheduler.message("Event moved: " + args.e.data.text);
                    }}
                    onEventClicked={args => this.eventClicked(args)}
                    ref={component => { this.scheduler = component && component.control; }}
                />
                {   
                    this.state.selectedEventId
                    ? <EventModal show={this.state.modalShow} selectedeventid = {this.state.selectedEventId} onHide={() => this.modalClose()}/>
                    : <div/>
                }
            </div>
        );
    }
}

export default Scheduler;