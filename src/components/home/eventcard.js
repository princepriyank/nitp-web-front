import React from "react"
import "./css/eventcard.scss"
import eventclock from "./img/eventclock.svg"
import eventlocation from "./img/eventlocation.svg"

const Eventcard = props => {
  return (
    <div className="eventcardwrap">
      <div className="eventdtdiv">
        <div id="eventmonth">
          <p>{props.month}</p>
        </div>
        <div id="eventdate">
          <p>{props.date}</p>
        </div>
      </div>
      <div className="eventcarddetailsection">
        <p className="eventcarddetail">
          {props.detail}
          {/* ...<a href="#">read more</a> */}
        </p>
        <div id="eventdtp">
          <div>
            <img src={eventclock} alt="c" />
            <p className="efp">{props.time}</p>
          </div>
          <div>
            <img src={eventlocation} alt="c" />
            <p className="efp">{props.location}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Eventcard
