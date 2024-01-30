import React from "react";

const Experience = ({ data }) => {
  if (data) {
    var languagesMessage = data.languagesMessage;
    var frameworksLibrariesMessage = data.frameworksLibrariesMessage;
    var softwareMessage = data.softwareMessage;
    var databasesMessage = data.databasesMessage;
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
          <h3><a href={work.link}>{work.company}</a></h3>
          <p className="info">
            {work.title}
            <span>&bull;</span> <em className="date">{work.years}</em>
          </p>
          <p>{work.description}</p>
        </div>
      );
    });
    var languages = data.languages.map(function (languages) {
      var className = "bar-expand " + languages.name.toLowerCase();
      return (
        <li key={languages.name}>
          <span style={{ width: languages.level }} className={className}></span>
          <em>{languages.name}</em>
        </li>
      );
    });
    var frameworksLibraries = data.frameworksLibraries.map(function (
      frameworksLibraries
    ) {
      var className = "bar-expand " + frameworksLibraries.name.toLowerCase();
      return (
        <li key={frameworksLibraries.name}>
          <span
            style={{ width: frameworksLibraries.level }}
            className={className}
          ></span>
          <em>{frameworksLibraries.name}</em>
        </li>
      );
    });
    var software = data.software.map(function (software) {
      var className = "bar-expand " + software.name.toLowerCase();
      return (
        <li key={software.name}>
          <span style={{ width: software.level }} className={className}></span>
          <em>{software.name}</em>
        </li>
      );
    });
    var databases = data.databases.map(function (databases) {
      var className = "bar-expand " + databases.name.toLowerCase();
      return (
        <li key={databases.name}>
          <span style={{ width: databases.level }} className={className}></span>
          <em>{databases.name}</em>
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
          <p className="sub-title">{languagesMessage}</p>
          <div className="bars">
            <ul className="skills">{languages}</ul>
          </div>

          <p className="sub-title">{frameworksLibrariesMessage}</p>
          <div className="bars">
            <ul className="skills">{frameworksLibraries}</ul>
          </div>

          <p className="sub-title">{softwareMessage}</p>
          <div className="bars">
            <ul className="skills">{software}</ul>
          </div>

          <p className="sub-title">{databasesMessage}</p>
          <div className="bars">
            <ul className="skills">{databases}</ul>
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
