import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

const About = () => (
  <div>
    <Hero backgroundImage="./images/nyt.gif">
      <h1>NY Times React App</h1>
      <h2>Full MERN Stack Article Saver</h2>
    </Hero>
    <Container style={{ marginTop: 30 }}>
      <Row>
        <Col size="md-12">
          <h1>Search for articles and save them!</h1>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquet diam tortor, id
            consequat mauris ullamcorper eu. Orci varius natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus. TL, DR. LUL
          </p>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquet diam tortor, id
            consequat mauris ullamcorper eu. Orci varius natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus. TL, DR. LULZ!S
          </p>
        </Col>
      </Row>
    </Container>
  </div>
);

export default About;