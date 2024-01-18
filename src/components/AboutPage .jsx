
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const AboutPage = () => {
  return (
    <Container>
      <h1 className="my-4">About Us</h1>
      <Row>
        <Col md={6}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla justo vel elit cursus,
            id consectetur arcu cursus. Proin suscipit cursus quam, ac tincidunt mi volutpat vel.
          </p>
          <p>
            Duis ullamcorper risus eget mauris convallis, id consequat velit tincidunt. Ut vel justo
            nec lectus congue congue vitae nec mauris. Nunc vitae fringilla quam.
          </p>
        </Col>
        <Col md={6}>
          <img
            src="https://cdn.pixabay.com/photo/2019/06/18/10/46/platting-4282016_640.jpg"
            alt="About Us"
            className="img-fluid rounded"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default AboutPage;
