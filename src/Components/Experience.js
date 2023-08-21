import React from "react";

const Experience = ({ data }) => {
  if (data) {
    var skillMessageProgramming = data.skillMessageProgramming;
    var skillMessageIT = data.skillMessageIT;
    var education = data.education.map(function (education) {
      return (
        <div key={education.school}>
          <h3>{education.school}</h3>
          <p className="info">
            {education.degree} <span>&bull;</span>
            <em className="date">{education.graduated}</em>
          </p>
          <p>{education.description}</p>
        </div>
      );
    });
    var work = data.work.map(function (work) {
      return (
        <div key={work.company}>
          <h3>{work.company}</h3>
          <p className="info">
            {work.title}
            <span>&bull;</span> <em className="date">{work.years}</em>
          </p>
          <p>{work.description}</p>
        </div>
      );
    });
    var skillsProgramming = data.skillsProgramming.map(function (
      skillsProgramming
    ) {
      var className = "bar-expand " + skillsProgramming.name.toLowerCase();
      return (
        <li key={skillsProgramming.name}>
          <span
            style={{ width: skillsProgramming.level }}
            className={className}
          ></span>
          <em>{skillsProgramming.name}</em>
        </li>
      );
    });
    var skillsIT = data.skillsIT.map(function (skillsIT) {
      var className = "bar-expand " + skillsIT.name.toLowerCase();
      return (
        <li key={skillsIT.name}>
          <span style={{ width: skillsIT.level }} className={className}></span>
          <em>{skillsIT.name}</em>
        </li>
      );
    });
  }

  return (
    <section id="experience">
      <div className="row skill">
        <div className="three columns header-col">
          <h1>
            <span>Skills</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <p className="sub-title">{skillMessageProgramming}</p>

          <div className="bars">
            <ul className="skills">{skillsProgramming}</ul>
          </div>
        </div>

        <div className="nine columns main-col">
          <p className="sub-title">{skillMessageIT}</p>

          <div className="bars">
            <ul className="skills">{skillsIT}</ul>
          </div>
        </div>
      </div>

      <div className="row education">
        <div className="three columns header-col">
          <h1>
            <span>Education</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">{education}</div>
          </div>
        </div>
      </div>

      <div className="row work">
        <div className="three columns header-col">
          <h1>
            <span>Work</span>
          </h1>
        </div>

        <div className="nine columns main-col">{work}</div>
      </div>
    </section>
  );
};

export default Experience;
