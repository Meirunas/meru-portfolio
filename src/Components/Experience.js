import React from "react";

const Experience = ({ data }) => {
  if (data) {
    var languagesMessage = data.languagesMessage;
    var frameworksLibrariesMessage = data.frameworksLibrariesMessage;
    var apisDatabasesMessage = data.apisDatabasesMessage;
    var designPrototypingMessage = data.designPrototypingMessage;
    var toolingDeploymentMessage = data.toolingDeploymentMessage;
    var softMessage = data.softMessage;
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
          <h3>
            <a href={work.link}>{work.company}</a>
          </h3>
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
    var apisDatabases = data.apisDatabases.map(function (apisDatabases) {
      var className = "bar-expand " + apisDatabases.name.toLowerCase();
      return (
        <li key={apisDatabases.name}>
          <span
            style={{ width: apisDatabases.level }}
            className={className}
          ></span>
          <em>{apisDatabases.name}</em>
        </li>
      );
    });
    var designPrototyping = data.designPrototyping.map(function (
      designPrototyping
    ) {
      var className = "bar-expand " + designPrototyping.name.toLowerCase();
      return (
        <li key={designPrototyping.name}>
          <span
            style={{ width: designPrototyping.level }}
            className={className}
          ></span>
          <em>{designPrototyping.name}</em>
        </li>
      );
    });
    var toolingDeployment = data.toolingDeployment.map(function (
      toolingDeployment
    ) {
      var className = "bar-expand " + toolingDeployment.name.toLowerCase();
      return (
        <li key={toolingDeployment.name}>
          <span
            style={{ width: toolingDeployment.level }}
            className={className}
          ></span>
          <em>{toolingDeployment.name}</em>
        </li>
      );
    });

    var soft = data.soft.map(function (soft) {
      var className = "bar-expand " + soft.name.toLowerCase();
      return (
        <li key={soft.name}>
          <span style={{ width: soft.level }} className={className}></span>
          <em>{soft.name}</em>
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

          <p className="sub-title">{apisDatabasesMessage}</p>
          <div className="bars">
            <ul className="skills">{apisDatabases}</ul>
          </div>

          <p className="sub-title">{designPrototypingMessage}</p>
          <div className="bars">
            <ul className="skills">{designPrototyping}</ul>
          </div>

          <p className="sub-title">{toolingDeploymentMessage}</p>
          <div className="bars">
            <ul className="skills">{toolingDeployment}</ul>
          </div>

          <p className="sub-title">{softMessage}</p>
          <div className="bars">
            <ul className="skills">{soft}</ul>
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
