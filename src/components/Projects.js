const Projects = () => (
  <div className="projects" id="projects">
    <h1 className="projects-title">Projects</h1>
    <div className="projects-descriptions">
      <div>
        <h1 className="projects-org-title">GMOX</h1>
        <img src="images/reactjs-logo.png" alt="reactjs-logo" />
        <p className="projects-description">
          Used React, SCSS for frontend and Node.js for backend
        </p>
      </div>
      <div>
        <h1 className="projects-org-title">SRS4</h1>
        <img src="images/java.png" alt="reactjs-logo" />
        <p className="projects-description">
          Worked on backend with core Java and Spring boot
        </p>
      </div>
      <div>
        <h1 className="projects-org-title">SOS</h1>
        <img src="images/spring-boot.png" alt="reactjs-logo" />
        <p className="projects-description">
          Spring-Cloud-Gateway is the major component
        </p>
      </div>
    </div>
  </div>
);
export default Projects;
