import React from "react"
import float from "../global/img/float.svg"
import "../global/css/float.css"
const Floatmenu = () => (
  <>
    <div className="float">
      <div id="float-menu">
        <div className="float-card">
          <a href="#home">
            <h3>About Us</h3>
          </a>
        </div>
        <div className="float-card">
          <a href="#mission">
            <h3>Mission & Vision</h3>
          </a>
        </div>
        <div className="float-card">
          <a href="#values">
            <h3>Values</h3>
          </a>
        </div>
        <div className="float-card">
          <a href="#campus">
            <h3>Campus</h3>
          </a>
        </div>
      </div>
      <img
        src={float}
        id="floatimg"
        alt=""
        onMouseOver={function () {
          var x = document.querySelector("#float-menu")
          var y = document.querySelector("#floatimg")
          if (x.style.display === "none") {
            x.style.display = "block"
            y.style.transform = "rotate(180deg)"
            y.style.transition = "0.5s"
            x.style.transition = "1.2s"
          } else {
            x.style.display = "none"
            y.style.transform = "rotate(0deg)"
            x.style.transition = "1.2s"
            y.style.transition = "0.5s"
          }
        }}
      />
    </div>
  </>
)
export default Floatmenu
