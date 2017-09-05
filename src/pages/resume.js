import React from "react";
import { Div, H1, Ul } from "glamorous";

import Spacer from "../components/spacer";

const Resume = () => (
  <Div maxWidth="900px">
    <H1 marginTop="0">Resume</H1>
    <style>
      {`
        .job-time {
          float: right;
          font-size: 0.7em;
          font-weight: 400;
          line-height: 1.5;
        }
      `}
    </style>
    <h2>Why you should care</h2>
    I perpetually seek out new ways to be better at what I do. I delight in the
    low-level details of how complex (or better yet, unexpectedly simple)
    software systems work. I take pride in helping others to grow and in being
    spurred on to growth by them. I strive to build elegant useful products that
    put users first. I'm smart and I get things done.
    <Div display="flex">
      <Div flex="1 0 0%">
        <h2> Programming languages </h2>
        <Ul paddingLeft="20px" marginBottom="0">
          <li> JavaScript (very competent) </li>
          <li>C# (bit rusty)</li>
          <li>
            ClojureScript, Java, Python, Ruby, and C++ (all cursory familiarity
            only)
          </li>
        </Ul>
      </Div>
      <Spacer width={20} />
      <Div flex="1 0 0%">
        <h2>Technologies</h2>
        <Ul paddingLeft="20px" marginBottom="0">
          <li>Node.js, Hapi, Webpack, Browserify</li>
          <li>Mocha, Jasmine, Chai, ESLint, Gulp</li>
          <li>Stylus, Less, SASS</li>
          <li>Docker, Nginx, AWS</li>
        </Ul>
      </Div>
    </Div>
    <h2 style={{ clear: "both" }}>Experience</h2>
    <h3>
      Blossor <div className="job-time">(Mar 2014—Dec 2014)</div>
    </h3>
    I was the sole front-end developer for Blossor.com, a real estate search
    portal. I architected and implemented an isomorphic JavaScript application
    using Node.js, hapi, React, and Fluxxor.
    <ul>
      <li>Ran trainings on JavaScript and Git.</li>
      <li>
        Coordinated with leadership and graphic design departments on feature
        designs.
      </li>
      <li>
        Set up continuous integration with Circle CI and AWS using Docker.
      </li>
    </ul>
    <h3>
      Faithlife <div className="job-time">(Jun 2010—Mar 2014)</div>
    </h3>
    I worked on a variety of projects and teams using ASP.NET MVC, C#,
    JavaScript, and Sencha Touch for Faithlife, a worldwide leader in electronic
    tools and resources for Bible study. I led a team of 3-4 developers from Nov
    2012 - Aug 2013 working on the Faithlife social network.
    <ul>
      <li>
        Oversaw the development and deployment of Biblia.com (a single-page web
        app written in C# and JS) as it went from from 450,000 monthly users to
        more than 990,000.
      </li>
      <li>
        Spearheaded changing my team’s version control workflow to emphasize
        code review.
      </li>
      <li>
        Improved documentation of coding guidelines for the web development
        teams.
      </li>
      <li>
        Architected and wrote a “Proclaim Remote” Sencha Touch app in JS for iOS
        and Android that allowed users to control a presentation from their
        phone.
      </li>
    </ul>
    <h2>Education</h2>
    <div>
      <b>Bachelor of Science</b> in Computer Science, WWU
      <i>3.96 GPA — June 2010</i>
    </div>
    <div>
      <b>Associate of Science</b>, SPSCC
      <i>4.00 GPA — June 2007</i>
    </div>
    <div>
      <b>High school diploma</b>, New Market Skills Center
      <i>4.00 GPA — June 2007</i>
    </div>
    <ul>
      <li>National Merit Scholar</li>
      <li>Placed 3rd at national SkillsUSA computer networking competition</li>
    </ul>
    <h2>Contact</h2>
    <a href="mailto:thomas.beirne@gmail.com">thomas.beirne@gmail.com</a>
  </Div>
);

export default Resume;
