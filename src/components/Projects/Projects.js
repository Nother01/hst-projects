import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import bitsOfCode from "../../Assets/Projects/blog.png";

import assetLampeTorche from "../../Assets/Projects/assetLampeTorche.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Projet <strong className="purple"> open source</strong>
        </h1>
        <p style={{ color: "white" }}>
          Voici quelques projets personnel.
          <br />
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={assetLampeTorche}
              isBlog={false}
              title="LampeTorche2"
              description="Ce projet permet de télécharger des titres d'une playlist Spotify depuis YouTube au format MP3. Conçu en JS avec l'API Spotify et YouTube."
              ghLink="https://github.com/Nother01/LampeTorche2"
              demoLink="https://google.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Coming Soon"
              description="Litpon haec peregrinos oriens in egressus caeli oriens ter limitibus egressus Vadomarium et oriens et egressus Valentiam in perferret petit."
              ghLink="https://google.com"
              demoLink="https://google.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Coming Soon"
              description="Litpon haec peregrinos oriens in egressus caeli oriens ter limitibus egressus Vadomarium et oriens et egressus Valentiam in perferret petit."
              ghLink="https://google.com"
              demoLink="https://google.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Coming Soon"
              description="Litpon haec peregrinos oriens in egressus caeli oriens ter limitibus egressus Vadomarium et oriens et egressus Valentiam in perferret petit."
              ghLink="https://google.com"
              demoLink="https://google.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Coming Soon"
              description="Litpon haec peregrinos oriens in egressus caeli oriens ter limitibus egressus Vadomarium et oriens et egressus Valentiam in perferret petit."
              ghLink="https://google.com"
              demoLink="https://google.com"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
