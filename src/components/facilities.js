import React from "react"
import bank from "./facilities/img/bank.svg"
import dummy from "./facilities/img/dummy.png"
import medical from "./facilities/img/medical.svg"
import security from "./facilities/img/security.svg"
import wifi from "./facilities/img/wifi.svg"
import woman from "./facilities/img/woman.svg"
import electric from "./facilities/img/electric.svg"
import "./facilities/css/facilities.css"
import Facilitymain from "./facilities/img/facilitymainimg"
import Ccimg from "./facilities/img/ccimg"
import Dummyimg from "./facilities/img/dummy"
import FLoatmenu from "./facilities/floatmenu"
import Floatmenu from "./facilities/floatmenu"
const ccdetail =
  "A state-of-the-art Computer Centre started its operation on 27th November 2011. It serves as the central computing facility for the students, research scholars and teachers of the institute. The Centre is well equipped with modern Computers (190 in number), air conditioned labs and stabilized uninterrupted power supply among the other facilities. The Centre has seven labs for all the students and one lab exclusively for PhD scholars of the institute. All labs are equipped with IP cameras to monitor the activities remotely. The Centre has 1 Gbps, 24x7 internet connectivity on optical fiber under National Knowledge Network, Govt. of India.The Centre also has a Virtual Class Room and Desktop VideoConferencing facility. It operates from 8:30 AM to 5:30 PM."
const libdetail =
  "The Central library of the institute owns a vast stock of over 75,000 books catering to the needs of all the relevant fields of engineering. It has a resourceful stock of over 10,000 computer related books and clearly demarcated section for every engineering branch and architecture. In addition to the engineering pertinent books, the central library is self-sufficient in a vivid category of other business and current affairs related magazines, pamphlets and journals which includes TIME and NEWSWEEK.The Central Library is fully automated and all operations are performed with the help of Libsys - Library Automation Software.The students can issue a sufficient no.of books for use throughout the semester and an additional no.of books for special reference."
const sports =
  "A healthy mind resides in a healthy body. The students are encouraged to take up sports actively. A huge ground is maintained meticulously for playing cricket and football. A Tennis court, Basketball court and Badminton court are also present. Several other sports such as Table Tennis, Athletics, Volleyball and others are also conducted. Students of the institute have taken part in various Inter-College tournaments and matches and have shown exemplary performance. They are trained by an experienced coach. An intramural Sports meet allows them to show their mettle and broaden their horizons. The institute believes that playing sports helps the students to build a spirit of teamwork and sportsmanship which will help them to lead better lives. "
const hostel =
  "Residential facilities are provided to students in three boys??? hostels and two girls??? hostel. Presently, all the girls and many of the boys are accommodated in these hostels. The hostels are guarded round the clock by able private security staffs.Patrolling is also done by state security personnel during night. There are also separate wardens for each and every hostel in order to maintain discipline. Each hostel provides a central mess facility for breakfast, lunch and dinner. Uninterrupted water and electricity supply are also provided. Hostels have got separate wi fi connections for providing internet facilities to students 24x7. Newspapers and magazines are put up in the common rooms. Cleanliness and hygiene are taken care of and maintained in every aspect. "
const wifidetail =
  "Today's world can't be imagined without internet. Wi Fi access is available in the campus and hostels for use by the students and the employees. It enables students to carry out their projects and search for relevant information. The facility is regularly checked and updated as per requirement. The internet access is provided by BSNL(1 Gbps) , PGCIL(100 Mbps) , RailTel(10 Mbps).The access is password secured and is provided 24x7 to assist and aid students in extensive research work. "
const bankdetail =
  "There is a functional extension branch of Allahabad Bank within the institute premises.It provides all modern banking facilities to cater to the needs of students and the employees in the campus.The fees transactions are also carried out here.Also, an ATM of Allahabad Bank is situated near the gate of the college campus to enable hassle free money withdrawal at any time."
const womancell =
  "As per the directives of the Chairman UGC a Women???s cell has been set up under a committee to ensure safe working environment and inspiring learning environment for the women employees and girl students of the Institute in order to enable them to discharge their academic and professional responsibilities efficiently. The committee constantly monitors the existing arrangements and suggests additional measures to be put into operation to ensure that the Institute is free of any kind of harassment. "
const lab =
  "Technical knowledge is of no worth without practical approach.Every department has laboratories which provide practical experience related to the subjects studied. The students are expected to take the lab courses for better learning. Various instruments, machines and computers are provided in the labs to facilitate the lab work. Lab assistants and Professor in-charge effectively guide the students through their practical work.Every department has an operational computer lab of its own to sharpen programming skills and to get hands - on experience with the use of the softwares required in their respective fields of concern.The labs are equipped with the latest technology and are periodically updated.<br/><br/><strong>Workshops</strong><br/> A huge workshop with all required equipments, machines and tools is spread over a large area in the college.Work related to carpentry, blacksmithy, foundry, fitting etc.is carried out.All the activities are carried out under the vigilance and guidance of experienced instructors."
const securitydetail =
  "The institute administration gives utmost attention to the security of the lives of the students and employees. Ex-servicemen security personnel provides 24x7 security cover all over the campus which includes the hostels and the staff quarters. State security personals carry out regular patrolling outside the campus during night time. The girls??? hostels are specially taken care of and are carefully guarded. Entry inside the campus is restricted for outsiders to prevent security breaches.The security of the institute, hostels and its inmates is headed by the Asst.Registrar, Mr.J P Sharma who was a defence officer.He served the Indian Air Force for more than 18 years.At present, 72 ex - serviceman were recruited by the institute on contract basis for additional security. "
const medicaldetail =
  " Two permanent doctor has a fixed chamber within the institute premises. He can be consulted by the students and employees for any health related problems on every working day free of cost.<br/><br/>Profile of the health consultants:<br/>Dr.Vikas Kumar Raj<br/>Senior Medical Officer<br/>MBBS, MD, MBA(HCA)<br/>PGD in DP & R and Family Medicine<br/>PGC in Hospital Management Dr.V K Raj<br/><br/>Dr.Santosh Kumar Sudhakar<br/>Medical Officer<br/>MBBS<br/>Ex - Resident of DR.RML Hospital<br/>New Delhi Dr.S K Sudhakar<br/><br/>The institute also maintains a 24x7 ambulance which is used for transferring patients from the institute to Patna Medical College and Hospital(PMCH) in case of any emergency."
const emudetail =
  "To provide Electric power supply to the Institute. EMU maintains all electrical equipment such as Lights, Fans, AC, etc. which are installed in NIT Patna campus. EMU is having an 11KV/415V Electrical Substation (commonly Known as POWER HOUSE), equipped with 02 Nos. 1250KVA Transformer, 02 Nos. 750 KVA Diesel Generator and Separate Electricals Panels for each feeder pillars/Buildings. <br/><br/>Land line- 0612-2371715 Extension No.-116 <br/>br/>For any type of Electrical Complaint kindly fill the form."
const Facilitiespage = () => {
  return (
    <div className="facilities">
      <Floatmenu />
      <div className="facilityrow facilityrowmain" id="home">
        <div className="col-6 imgcolstyle">
          <div className="row rowmarl3">
            <h1 data-aos="zoom-in-right">Facilities</h1>
          </div>
        </div>
        <div className="col-6 imgcolstyle">
          <Facilitymain />
        </div>
      </div>
      <div className="facilityrow facilityrow1" id="cc">
        <div className="col-6 imgcolstyle">
          <Ccimg />
        </div>
        <div className="col-6">
          <div className="row rowmarr3">
            <h1 data-aos="zoom-in-left">Computer Centre</h1>
          </div>
          <div className="row rowmarr3">
            <p data-aos="zoom-in-left">{ccdetail}</p>
          </div>
        </div>
      </div>
      <div className="facilityrow" id="lib">
        <div className="col-6">
          <div className="row rowmarl3">
            <h1 data-aos="zoom-in-right">Library</h1>
          </div>
          <div className="row rowmarl3">
            <p data-aos="zoom-in-right">{libdetail}</p>
          </div>
        </div>
        <div className="col-6 imgcolstyle">
          <Dummyimg />
        </div>
        <div className="col-6 imgcolstyle">
          <Dummyimg />
        </div>
        <div className="col-6">
          <div className="row rowmarr3">
            <p data-aos="zoom-in-left">
              <strong>E-RESOURCE SECTION</strong>
              <br />
              <br />
              It also maintains an E-Resource Section which subscribes and
              maintains a wide collection of highly acclaimed e-journals
              published by some big names like:
              <br />
              AMERICAN SOCIETY OF CIVIL ENGINEERS(ASCE)
              <br />
              AMERICAN SOCIETY OF MECHANICAL ENGINEERS(ASME)
              <br />
              IEL
              <br />
              IEEE
              <br />
              NATURE
              <br />
              ACM
              <br />
              INDIAN STANDARD
              <br />
              SPRINGER
              <br />
              ...and many more. The total collection of e-journals in the
              E-Resource Section numbers to more than 2700 of diverse
              categories. This section is mainly used for vital information
              access and research.
            </p>
          </div>
        </div>
        <div className="col-6">
          <div className="row rowmarl3">
            <p data-aos="zoom-in-right">
              <strong>Special features of Central Library</strong>
              <br />
              <br />
              Separate zones for every department.
              <br />
              Separate section for SC/ST under the name of B.R. Ambedkar
              section.
              <br />
              Separate section for e-journals called the E-Resource Section.
              <br />
              Calm milieu and spacious studying facility within the library.
              <br />
              Centrally air-conditioned.
              <br />
              Library is the member of INDEST and DELNET.
            </p>
          </div>
        </div>
        <div className="col-6 imgcolstyle">
          <Dummyimg />
        </div>
      </div>
      <div className="facilityrow facilityrow1" id="med">
        <div className="col-6 imgcolstyle">
          <Dummyimg />
        </div>
        <div className="col-6">
          <div className="row rowmarr3">
            <h1 data-aos="zoom-in-left">Medical Facilities</h1>
          </div>
          <div className="row rowmarr3">
            <p data-aos="zoom-in-left">
              Two permanent doctor has a fixed chamber within the institute
              premises. He can be consulted by the students and employees for
              any health related problems on every working day free of cost.
              <br />
              <br />
              Profile of the health consultants:
              <br />
              Dr.Vikas Kumar Raj
              <br />
              Senior Medical Officer
              <br />
              MBBS, MD, MBA(HCA)
              <br />
              PGD in DP & R and Family Medicine
              <br />
              PGC in Hospital Management Dr.V K Raj
              <br />
              <br />
              Dr.Santosh Kumar Sudhakar
              <br />
              Medical Officer
              <br />
              MBBS
              <br />
              Ex - Resident of DR.RML Hospital
              <br />
              New Delhi Dr.S K Sudhakar
              <br />
              <br />
              The institute also maintains a 24x7 ambulance which is used for
              transferring patients from the institute to Patna Medical College
              and Hospital(PMCH) in case of any emergency.
            </p>
          </div>
        </div>
      </div>
      <div className="facilityrow" id="sport">
        <div className="col-6">
          <div className="row rowmarl3">
            <h1 data-aos="zoom-in-right">Sport Facilities</h1>
          </div>
          <div className="row rowmarl3">
            <p data-aos="zoom-in-right">{sports}</p>
          </div>
        </div>
        <div className="col-6 imgcolstyle">
          <Dummyimg />
        </div>
      </div>
      <div className="facilityrow facilityrow1" id="hostel">
        <div className="col-6 imgcolstyle">
          <Dummyimg />
        </div>
        <div className="col-6">
          <div className="row rowmarr3">
            <h1 data-aos="zoom-in-left">Hostel & Mess</h1>
          </div>
          <div className="row rowmarr3">
            <p data-aos="zoom-in-left">{hostel}</p>
          </div>
        </div>
      </div>
      <div className="facilityrow" id="lab">
        <div className="col-6">
          <div className="row rowmarl3">
            <h1 data-aos="zoom-in-right">Laboratories</h1>
          </div>
          <div className="row rowmarl3">
            <p data-aos="zoom-in-right">
              Technical knowledge is of no worth without practical
              approach.Every department has laboratories which provide practical
              experience related to the subjects studied. The students are
              expected to take the lab courses for better learning. Various
              instruments, machines and computers are provided in the labs to
              facilitate the lab work. Lab assistants and Professor in-charge
              effectively guide the students through their practical work. Every
              department has an operational computer lab of its own to sharpen
              programming skills and to get hands - on experience with the use
              of the softwares required in their respective fields of concern.
              The labs are equipped with the latest technology and are
              periodically updated.
              <br />
              <br />
              <strong>Workshops</strong>
              <br /> A huge workshop with all required equipments, machines and
              tools is spread over a large area in the college.Work related to
              carpentry, blacksmithy, foundry, fitting etc.is carried out.All
              the activities are carried out under the vigilance and guidance of
              experienced instructors.
            </p>
          </div>
        </div>
        <div className="col-6 imgcolstyle">
          <Dummyimg />
        </div>
      </div>
      <div className="facilityrow facilityrow1" id="wifi">
        <div className="col-6 imgcolstyle">
          <img
            data-aos="zoom-in"
            src={wifi}
            className="img-fluid"
            loading="lazy"
          />
        </div>
        <div className="col-6">
          <div className="row rowmarr3">
            <h1 data-aos="zoom-in-left">Wifi</h1>
          </div>
          <div className="row rowmarr3">
            <p data-aos="zoom-in-left">{wifidetail}</p>
          </div>
        </div>
      </div>
      <div className="facilityrow" id="bank">
        <div className="col-6">
          <div className="row rowmarl3">
            <h1 data-aos="zoom-in-right">Bank</h1>
          </div>
          <div className="row rowmarl3">
            <p data-aos="zoom-in-right">{bankdetail}</p>
          </div>
        </div>
        <div className="col-6 imgcolstyle">
          <img
            data-aos="zoom-in"
            src={bank}
            className="img-fluid"
            loading="lazy"
          />
        </div>
      </div>
      <div className="facilityrow facilityrow1" id="security">
        <div className="col-6 imgcolstyle">
          <img
            data-aos="zoom-in"
            src={security}
            className="img-fluid"
            loading="lazy"
          />
        </div>
        <div className="col-6">
          <div className="row rowmarr3">
            <h1 data-aos="zoom-in-left">Security</h1>
          </div>
          <div className="row rowmarr3">
            <p data-aos="zoom-in-left">{securitydetail}</p>
          </div>
        </div>
      </div>
      <div className="facilityrow" id="wc">
        <div className="col-6">
          <div className="row rowmarl3">
            <h1 data-aos="zoom-in-right">Woman Cell</h1>
          </div>
          <div className="row rowmarl3">
            <p data-aos="zoom-in-right">{womancell}</p>
          </div>
        </div>
        <div className="col-6 imgcolstyle">
          <img
            data-aos="zoom-in"
            src={woman}
            className="img-fluid"
            loading="lazy"
          />
        </div>
      </div>
      <div className="facilityrow facilityrow1" id="electric">
        <div className="col-6 imgcolstyle">
          <img
            data-aos="zoom-in"
            src={electric}
            className="img-fluid"
            loading="lazy"
          />
        </div>
        <div className="col-6">
          <div className="row rowmarr3">
            <h1 data-aos="zoom-in-left">Electrical Maintainance Unit (EMU)</h1>
          </div>
          <div className="row rowmarr3">
            <p data-aos="zoom-in-left">
              To provide Electric power supply to the Institute. EMU maintains
              all electrical equipment such as Lights, Fans, AC, etc. which are
              installed in NIT Patna campus. EMU is having an 11KV/415V
              Electrical Substation (commonly Known as POWER HOUSE), equipped
              with 02 Nos. 1250KVA Transformer, 02 Nos. 750 KVA Diesel Generator
              and Separate Electricals Panels for each feeder pillars/Buildings.
              <br />
              <br />
              Land line- 0612-2371715 Extension No.-116
              <br />
              <br />
              For any type of Electrical Complaint kindly fill the form.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Facilitiespage
