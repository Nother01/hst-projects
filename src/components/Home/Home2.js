import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              PERMETTEZ-MOI DE ME <span className="purple">PRÉSENTER</span>
            </h1>
            <p className="home-about-body">
              J'ai développé une passion pour la programmation et acquit de solides expériences dans plusieurs langages, tels que le <i><b className="purple">C/C++, Go, Haskell</b></i> ainsi que <i><b className="purple">Javascript</b></i> avec <i><b className="purple"> Node.js</b></i> et <i><b className="purple"> React.js</b></i>.
              <br />
              Mon domaine d'intérêt couvre le développement <i><b className="purple">web</b></i> à la création de <i><b className="purple">software complexe</b></i>.
              <br />
              <br />
              J'adore rencontrer de nouvelles problématiques dans le but d'acquérir de<br />
              <b className="purple">nouvelle connaissance</b> et d'explorer <b className="purple">les possibilités</b> que la programmation nous offre.
              <br />
              <br />
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>MES RESEAUX</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Nother01"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/hugo-sapey-triomphe-8009021a2/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
