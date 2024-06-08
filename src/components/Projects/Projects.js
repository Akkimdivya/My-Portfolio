import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import jobby from "../../Assets/Projects/jobby.png";
import todo from "../../Assets/Projects/todo.png";
import trendz from "../../Assets/Projects/trendz.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col xs={12} md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={trendz}
              isBlog={false}
              title="Trendz"
              description="Rolled out an innovative e-commerce platform patterned after Amazon and Flipkart.
Built pages for Login, Products, and Product details with React Router,
React components, form inputs, and event handlers.
Enabled secure authentication and authorization with JWT tokens and REST API calls."
              ghLink="https://github.com/Akkimdivya/trends"
              demoLink="https://newtrends001.ccbp.tech/"
            />
          </Col>

          <Col xs={12} md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={jobby}
              isBlog={false}
              title="Bits-0f-C0de"
              description="Constructed an all-in-one job searching platform, Jobby App. Built pages for Login, Home, Jobs, and Job item details with React
components, form inputs, and event handlers.
Ensured secure authentication with JWT tokens and REST API calls."
              ghLink="https://github.com/Akkimdivya/reactjobportal"
              demoLink="https://jobby8.ccbp.tech/"
            />
          </Col>

          <Col xs={12} md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="TODO Application"
              description="A task management solution, designed to make life easier. Streamlined task management through a combination of HTML, CSS, and
Bootstrap for an intuitive interface."
              ghLink="https://github.com/Akkimdivya/todoApplication"
              demoLink="https://todaytodo.ccbp.tech/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
