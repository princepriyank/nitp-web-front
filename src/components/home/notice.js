import React from "react"
import "./css/notice.scss"
import downimg from "./img/download.svg"
const Notice = props => {
  return (
    <>
      <div className="noticecard">
        <p className="noticecarddetail">{props.detail}</p>
        <div id="notdate">
          <div>
            {props.attachments.map(elem => {
              return (
                <>
                  <img id="notdownimg" src={downimg} alt="c" />
                  <a className="notdown" href={elem.url} target="blank">
                    {elem.caption}
                  </a>
                </>
              )
            })}
          </div>
          <div>
            <p className="notet">{props.time}</p>
          </div>
        </div>
      </div>
    </>
  )
}
export default Notice
