import React from "react"
import bulb from "./about/img/bulb.svg"
import mission from "./about/img/mission.svg"
import clock from "./about/img/clock.svg"
import map from "./about/img/map.svg"
import "./about/css/about.css"
import FLoatmenu from "./about/floatmenu"
import Floatmenu from "./about/floatmenu"

const aboutusinfo = [
  "National Institute of Technology Patna is the 18th National Institute of Technology created by the Ministry of H.R.D. Government of India after rechristening the erstwhile Bihar College of Engineering Patna on 28. 01. 2004. NIT Patna marked its humble beginning in 1886 with the establishment of pleaders survey training school which was subsequently promoted of Bihar College of Engineering Patna in 1924. This made this institute the 6th Oldest Engineering Institute of India. The graduate level curriculum was later elevated to the post graduate level in 1978. The institute is situated on the south bank of holy river Ganges behind Gandhi Ghat, one of the most important and reverential place of Patna. The Gandhi Ghat is associated with the immersion of ashes of father of the Nation Mahatma Gandhi in the river Ganges. The campus has a picturesque river view with historic building presenting a spectacle of architectural delight and natural beauty.",
  "National Institute of Technology Patna has been declared as an Institute of National Importance and has been granted a fully Autonomous Status by MHRD, Government of India. The Institute has also been declared as a Centre of Excellence of impart high level education training , research and development in science, engineering technology and humanities. It is imparting high quality education & values at UG (B.Tech), PG (M.Tech) & Ph .D programmes through its experienced faculty well versed in their respective field of engineering an technology with well equipped laboratories . At present the Institute has seven disciplines viz. Architecture, Civil Engineering, Compute Science & Engg., Electrical Engg., Electronics & Communication Engg., Information Technology and Mechanical Engg., and well established departments of physics, Mathematics and Humanities and Social Science.",
  "National Institute of Technology Patna aims at setting out very high education standards and holds long record of academic excellence. The pedagogical aspects have been formulated to suit not only the needs of the contemporary industrial requirements but also to develop human potential to its fullest extent in a range of professions. Extra curricular activities are planed through games and sports, cultural programmes and NSS activities. Cultural activities provide a platform to know about the culture of various states and regions of the country and opportunity for national integration.",
  "Ever since its rechristening, NIT Patna has been on the fast track of development and has undergone numerous facelifts because of which placement records have witnessed unprecedented growth and is touching new heights as the graph of placement is increasing remarkably.",
]

const missioninfo = [
  "To contribute to India and the World through excellence in scientific and technical education and research; to serve as a valuable resource for industry and society; and to remain a source of pride for all Indians.",
  "To generate new knowledge by engaging in cutting-edge research and to promote academic growth by offering state-of-the-art undergraduate, postgraduate and doctoral programmes",
  "To identify, based on an informed perception of Indian, regional and global needs, areas of specialization upon which the Institute can concentrate",
  "To undertake collaborative projects which offer opportunities for long term interaction with academia and industry",
  "To develop human potential to its fullest extent so that intellectually capable and imaginatively gifted leaders can emerge in a range of profession",
]

const valuesinfo = [
  "Academic integrity and accountability.",
  "Respect and tolerance for the views of every individual.",
  "Attention to issues of national relevance as well as of global concern.",
  "Breadth of understanding, including knowledge of the human sciences.",
  "Appreciation of intellectual excellence and creativity.",
  "An unfettered spirit of explorating, rationality and enterprise.",
]

const campusinfo =
  "NIT Patna is situated on the South bank of river Ganges behind Gandhi Ghat, one of the most important and sacred places of Patna . The Institute campus is 8 Km from the Patna junction railway station and 20 Km from the Jai Prakash Narayan International Airport, Patna . The entrance to the institute is from Ashok Rajpath and it is about 3Km from the famous Gandhi Maidan. The Institute is residential in nature and provides residential facilities to its students as well as teachers as per availability. Its large campus has a picturesque river view with eyecatching historic buildings presenting a spectacle of architectural and natural beauty."

const Aboutpage = () => {
  return (
    <div className="aboutsection">
      <Floatmenu />
      <div className="amainrow" id="home">
        <div className="col-6">
          <div className="row rowmarl3">
            <h1 data-aos="zoom-in-right">About Us</h1>
          </div>
          {aboutusinfo.map(elem => {
            return (
              <div className="row rowmarl3">
                <p data-aos="zoom-in-right">{elem}</p>
              </div>
            )
          })}
        </div>
        <div className="col-6 imgcolstyle">
          <img data-aos="zoom-in" src={bulb} className="img-fluid" />
        </div>
      </div>
      <div className="amainrow amainrow1" id="mission">
        <div className="col-6 imgcolstyle">
          <img data-aos="zoom-in" src={mission} className="img-fluid" />
        </div>
        <div className="col-6">
          <div className="row rowmarr3">
            <h1 data-aos="zoom-in-left">Mission & Vision</h1>
          </div>
          {missioninfo.map(elem => {
            return (
              <div className="row rowmarr3">
                <p data-aos="zoom-in-left">{elem}</p>
              </div>
            )
          })}
        </div>
      </div>
      <div className="amainrow" id="values">
        <div className="col-6">
          <div className="row rowmarl3">
            <h1 data-aos="zoom-in-right">Values</h1>
          </div>
          {valuesinfo.map(elem => {
            return (
              <div className="row rowmarl3">
                <p data-aos="zoom-in-right">{elem}</p>
              </div>
            )
          })}
        </div>
        <div className="col-6 imgcolstyle">
          <img src={clock} className="img-fluid" />
        </div>
      </div>
      <div className="amainrow amainrow1" id="campus">
        <div className="col-6 imgcolstyle">
          <a href="https://www.google.com/maps/place/National+Institute+of+Technology+Patna/@25.6207241,85.170702,17z/data=!4m5!3m4!1s0x39ed58dce6732867:0x4059f39a1ac82f06!8m2!3d25.6207241!4d85.1728907" target="_blank"><img data-aos="zoom-in" src={map} className="img-fluid" /></a>
        </div>
        <div className="col-6">
          <div className="row rowmarr3">
            <h1 data-aos="zoom-in-left">Campus</h1>
          </div>
          <div className="row rowmarr3">
            <p data-aos="zoom-in-left">{campusinfo}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Aboutpage
