import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiGoogleAnalytics,
} from "react-icons/di";
import {
  SiAdobeillustrator,
  SiAdobeaftereffects,
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiAdobelightroom,
  SiCanva,
  SiGimp,
  SiAudacity,
  SiObsstudio,
  SiTrello,
  SiAsana,
  SiWix,
  SiPexels,
  SiShutterstock,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobephotoshop />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobepremierepro />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobeillustrator />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobeaftereffects />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobelightroom />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCanva />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGimp />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAudacity />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiObsstudio />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTrello />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAsana />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWix />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPexels />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiShutterstock />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGoogleAnalytics />
      </Col>
    </Row>
  );
}

export default Techstack;
