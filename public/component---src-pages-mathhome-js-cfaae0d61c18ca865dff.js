(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{PFAz:function(e,t,a){"use strict";var s=a("nKUr"),i=(a("q1tI"),a("wVjY"),a("tbj1")),n=a.n(i);t.a=function(e){return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("div",{className:"depnoticecard",children:[Object(s.jsx)("p",{className:"depcarddetail",children:e.detail}),Object(s.jsxs)("div",{id:"depnotdate",children:[Object(s.jsx)("div",{children:Object(s.jsx)("p",{className:"dept",children:e.time})}),Object(s.jsx)("div",{children:e.attachments.map((function(e){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("img",{id:"depdownimg",src:n.a,alt:"c"}),Object(s.jsx)("a",{className:"depdown",href:e.url,target:"blank",children:e.caption})]})}))})]})]})})}},fwpl:function(e,t,a){"use strict";a.r(t);var s=a("nKUr"),i=a("q1tI"),n=a.n(i),c=a("xVFz"),r=a("vrFN"),o=a("dI71"),d=a("VOqC"),l=a.n(d),m=a("yWb0"),h=a.n(m),j=a("Ed9y"),b=a.n(j),u=a("fA/B"),g=a.n(u),p=a("fuX5"),x=a.n(p),O=(a("vhkn"),a("s9OA")),f=a("PFAz"),v=a("vDqi"),w=a.n(v),N=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={notices:[]},a}Object(o.a)(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this;w.a.get("http://beta.nitp.ac.in:3000/api/notice").then((function(t){var a=t.data;e.setState({notices:a})})).catch((function(e){console.log(e)}))},a.render=function(){return Object(s.jsxs)("div",{className:"depsection",children:[Object(s.jsx)(O.a,{}),Object(s.jsxs)("div",{className:"dmainrow dmainrowmain",children:[Object(s.jsxs)("div",{className:"col-6",children:[Object(s.jsx)("div",{className:"row rowmarl3",children:Object(s.jsx)("h1",{"data-aos":"zoom-in-right",children:"Mathematics Department"})}),Object(s.jsx)("div",{className:"row rowmarl3",children:Object(s.jsx)("h2",{"data-aos":"zoom-in-right",children:"“The computer was born to solve problems that did not exist before.”"})}),Object(s.jsx)("div",{className:"row rowmarl3",children:Object(s.jsx)("h2",{"data-aos":"zoom-in-right",id:"aut",children:"— Bill Gates"})})]}),Object(s.jsx)("div",{className:"col-6 imgcolstyle",children:Object(s.jsx)("img",{"data-aos":"zoom-in",src:l.a,className:"img-fluid",loading:"lazy"})})]}),Object(s.jsx)("div",{className:"dmainrow",id:"about",children:Object(s.jsxs)("div",{className:"depabout",children:[Object(s.jsx)("div",{className:"row",children:Object(s.jsx)("h1",{"data-aos":"zoom-in",children:"About"})}),Object(s.jsx)("div",{className:"row",children:Object(s.jsx)("p",{"data-aos":"zoom-in",children:"The Department of Mathematics was established in 1924 and department offer several courses that support other engineering departments. Recently a new program Integrated M. Sc. in Mathematics is started and running successfully from the academic year 2015-2016. Current faculty strength of the department is nine and they are experienced in teaching and research in several branches of Mathematics. Department of Mathematics is one of the backbone of the Institution as it is an essential department for engineering courses up to Ph.D level."})})]})})," ",Object(s.jsxs)("div",{className:"dmainrow",id:"happening",children:[Object(s.jsxs)("div",{className:"col-6",children:[Object(s.jsx)("div",{className:"row rowmarl3",children:Object(s.jsx)("h1",{"data-aos":"zoom-in-right",children:"Happenings"})}),Object(s.jsx)("div",{className:"row rowmarl3",children:Object(s.jsx)("div",{id:"depnoticewrap",children:this.state.notices.map((function(e){var t=(new Date).getTime(),a=Math.round((t-e.timestamp)/36e5);if(a>24?a=Math.round(a/24)+" days ago":a<1?a="Just now":a+=a<2?" hour ago":" hours ago",""!=e.title)return Object(s.jsx)(f.a,{detail:e.title,time:a,attachments:e.attachments})}))})})]}),Object(s.jsx)("div",{className:"col-6 imgcolstyle",children:Object(s.jsx)("img",{"data-aos":"zoom-in",src:h.a,className:"img-fluid",loading:"lazy"})})]}),Object(s.jsxs)("div",{className:"dmainrow dmainrow1",id:"mission",children:[Object(s.jsx)("div",{className:"col-6 imgcolstyle",children:Object(s.jsx)("img",{"data-aos":"zoom-in",src:b.a,className:"img-fluid",loading:"lazy"})}),Object(s.jsxs)("div",{className:"col-6",children:[Object(s.jsx)("div",{className:"row rowmarr3",children:Object(s.jsx)("h1",{"data-aos":"zoom-in-left",children:"Mission"})}),Object(s.jsx)("div",{className:"row rowmarr3",children:Object(s.jsxs)("p",{"data-aos":"zoom-in-left",children:["The Department of Mathematics will offer courses and programs of study that will ensure that the student learner will be able to contribute to today's society. The students will obtain abilities to critically assess numerical and graphical information; learn to formulate strategies for solving problems; and acknowledge the importance of being intellectually curious throughout their adult lives. The Department, through its faculty, will continue to contribute to the body of knowledge of the discipline, whether in traditional research, applied research, or research in the teaching of mathematics.",Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),"The main mission of the Department of Mathematics is to offer high quality instruction in mathematics, statistics and the applied sciences to all students that it serves. The department strives to teach the main ideas and methods of mathematics and to build up the students reasoning and analytical skills. The department maintains programs and teaching practices that match those at most Undergraduate/Postgraduate programs at Institute. As the department offers core courses and in addition support other engineering degree programs, our mission is to make sure that these courses are taught at a high standard and meet the needs of those programs. For its majors, the department mission is to provide students with a number of degree programs and a wide spectrum of courses, and to offer them a rigorous training that enables them to pursue graduate degrees or work in jobs that require a high degree of mathematical skills."]})})]})]}),Object(s.jsxs)("div",{className:"dmainrow",id:"vision",children:[Object(s.jsxs)("div",{className:"col-6",children:[Object(s.jsx)("div",{className:"row rowmarl3",children:Object(s.jsx)("h1",{"data-aos":"zoom-in-right",children:"Vision"})}),Object(s.jsx)("div",{className:"row rowmarl3",children:Object(s.jsx)("p",{"data-aos":"zoom-in-right",children:"The vision of the Department is to achieve excellence in undergraduate and postgraduate education and research through a synergic combination and thereby lead to development of new knowledge."})})]}),Object(s.jsx)("div",{className:"col-6 imgcolstyle",children:Object(s.jsx)("img",{"data-aos":"zoom-in",src:x.a,className:"img-fluid",loading:"lazy"})})]}),Object(s.jsxs)("div",{className:"dmainrow dmainrow1",id:"contact",children:[Object(s.jsx)("div",{className:"col-6 imgcolstyle",children:Object(s.jsx)("img",{"data-aos":"zoom-in",src:g.a,className:"img-fluid",loading:"lazy"})}),Object(s.jsxs)("div",{className:"col-6",children:[Object(s.jsx)("div",{className:"row rowmarr3",children:Object(s.jsx)("h1",{"data-aos":"zoom-in-left",children:"Contact"})}),Object(s.jsx)("div",{className:"row rowmarr3",children:Object(s.jsxs)("p",{"data-aos":"zoom-in-left",children:["Department of Mathematics,",Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),"National Institute Of Technology Patna,",Object(s.jsx)("br",{}),"Ashok Rajpath, Patna - 800005.",Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),"Email: head.ma@nitp.ac.in",Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),"Extn: +91-612-(2371715/2715/2371929/",Object(s.jsx)("br",{}),"2370419/2370843/2371930) * 117"]})})]})]})]})},t}(n.a.Component);t.default=function(){return Object(s.jsxs)(c.a,{children:[Object(s.jsx)(r.a,{title:"Mathematics"}),Object(s.jsx)(N,{})]})}},tbj1:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOCIgaGVpZ2h0PSI5IiB2aWV3Qm94PSIwIDAgOCA5IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPg0KPHBhdGggZD0iTTQgMVY2LjVNNCA2LjVMMiA0LjVNNCA2LjVMNiA0LjUiIHN0cm9rZT0iI0U0N0Y0MCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+DQo8bGluZSB4MT0iMC41IiB5MT0iOC41IiB4Mj0iNy41IiB5Mj0iOC41IiBzdHJva2U9IiNFNDdGNDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPg0KPC9zdmc+DQo="},wVjY:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-mathhome-js-cfaae0d61c18ca865dff.js.map