import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Bonjour à tous, je suis <span className="purple">Sapey-triomphe Hugo </span>
            <br /> Etudiant en 3eme année en Master d'informatique à l'école Epitech Lyon.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}


export default AboutCard;
