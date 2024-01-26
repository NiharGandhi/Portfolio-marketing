import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import netflix from "../../Assets/Projects/Works/OIS_PREFECTORIAL_BODY_INTRO_VIDEO.png";
import symphony from "../../Assets/Projects/Works/THE_10_SYMPHONY.png";
import annualPrizeday from "../../Assets/Projects/Works/ANNUAL_PRIZE_DAY_POSTER.png";
import digiArt from "../../Assets/Projects/Works/ART_WORK.png";
import logos from "../../Assets/Projects/Works/LOGOS.png";
import festive from "../../Assets/Projects/Works/MERRY_CHRISTMAS_COMPANY_WISHES.png";


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
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={netflix}
              isBlog={false}
              title="Netflix Interview Video"
              description=""
              demoLink="https://www.instagram.com/p/CclNwlYK1Nx/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={symphony}
              isBlog={false}
              title="The 10th Symphony - Band Reveal"
              description=""
              demoLink="https://www.instagram.com/p/CfJ4d-Go2zm/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={annualPrizeday}
              isBlog={false}
              title="Poster"
              description=""
              demoLink="https://www.canva.com/design/DAF6-WuRxt0/QoQJ1VPRuZ9MlXvE1qbl5w/view?utm_content=DAF6-WuRxt0&utm_campaign=designshare&utm_medium=link&utm_source=editor"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={digiArt}
              isBlog={false}
              title="Digital Art"
              description=""
              demoLink="https://www.instagram.com/p/CStmcsmn3Et/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={logos}
              isBlog={false}
              title="Logo Desings"
              description=""
              demoLink="https://www.canva.com/design/DAF6-XwGUNA/AZGXBTZC0TDCcXS8tEa62Q/view?utm_content=DAF6-XwGUNA&utm_campaign=designshare&utm_medium=link&utm_source=editor"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={festive}
              isBlog={false}
              title="Festive Cards"
              description=""
              demoLink="https://www.canva.com/design/DAF3mEwMkBU/comYfDLvWo7acZ7PeULU1w/view?utm_content=DAF3mEwMkBU&utm_campaign=designshare&utm_medium=link&utm_source=editor"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
