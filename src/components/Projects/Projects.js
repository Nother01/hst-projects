import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mes récents <strong className="purple">Projets </strong>
        </h1>
        <p style={{ color: "white" }}>
          Voici quelque projet sur lequel j'ai travaillé.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Coming Soon"
              description="Cum imaginem suos Eubuli post laniatu calcibus commeatuum addictum lacrimosum discerpsit calcibus sui furoris discerpsit sibi imperiali quod miserando famis famis cum pugnis clari cuiusdam quod quisque inter exitio suos furoris iudicio quod furoris furoris furoris."
              ghLink="https://google.com"
              demoLink="https://google.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Coming Soon"
              description="Tepore confines perferret tepore arma Caesaris moturus reges in vastabantur quorum vastabantur septies confines arma terrae Gundomadum vastabantur arma oriens in in egressus caeli ter oriens ter limitibus Vadomarium et oriens et egressus Valentiam in perferret petit."
              ghLink="https://google.com"
              demoLink="https://google.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Coming Soon"
              description="Tabernas similis et similis harum alias digressurus si lecturos ea monstranda ad haec peregrinos propria alias posse existimo nusquam gererentur Romae mirari existimo peregrinos perstringam gererentur alias haec lecturos si causas et propria si et vilitates oratio lecturos causas gererentur."
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
