import React from "react"
import Table from "../../table"
import Courseelect from "./Chem IMSc Electives"
import Course from "./Chem IMSc CourseStructure"
import main from "../img/book.svg"

const Csesyllabus = props => {
  return (
    <>
      <div style={{ marginTop: `10vh`, marginBottom: `15vh` }}>
        <div className="dmainrow dmainrowmain">
          <div className="col-6">
            <div className="row rowmarl3">
              <h1 data-aos="zoom-in-right">Syllabus</h1>
            </div>
            <div className="row rowmarl3">
              <h1 data-aos="zoom-in-right"> -Chemistry</h1>
            </div>
          </div>
          <div className="col-6 imgcolstyle">
            <img
              data-aos="zoom-in"
              src={main}
              className="img-fluid"
              loading="lazy"
            />
          </div>
        </div>
        <div className="dmainrow">
          <h1 className="rowmarl3" data-aos="zoom-in-right">
            IMSc Course Structure
          </h1>
        </div>
        <Table>
          <tr className="syllabus-table-head">
            <th>Semester</th>
            <th>Course Code</th>
            <th>Course Title</th>
            <th>L</th>
            <th>T</th>
            <th>P</th>
            <th>Credits</th>
          </tr>
          {Course.map(elem => (
            <tr className="syllabus-table-row">
              <td>{elem.semester}</td>
              <td>{elem.course_code}</td>
              <td>{elem.course_title}</td>
              <td>{elem.l}</td>
              <td>{elem.t}</td>
              <td>{elem.p}</td>
              <td>{elem.credit}</td>
            </tr>
          ))}
        </Table>
        <div className="dmainrow">
          <h1 className="rowmarl3" data-aos="zoom-in-right">
            IMSc Electives
          </h1>
        </div>
        <Table>
          <tr className="syllabus-table-head">
            <th>Course Code</th>
            <th>Course Title</th>
            <th>L</th>
            <th>T</th>
            <th>P</th>
            <th>Credits</th>
          </tr>
          {Courseelect.map(elem => (
            <tr className="syllabus-table-row">
              <td>{elem.course_code}</td>
              <td>{elem.course_title}</td>
              <td>{elem.l}</td>
              <td>{elem.t}</td>
              <td>{elem.p}</td>
              <td>{elem.credits}</td>
            </tr>
          ))}
        </Table>
      </div>
    </>
  )
}
export default Csesyllabus
