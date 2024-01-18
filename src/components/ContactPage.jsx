
import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';


const ContactPage = () => {
  return (
    <Container >
      <h1 className="my-4">Contact Us</h1>
      <Row>
        <Col  >
          <Form >
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Your Name" />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Your Email" />
            </Form.Group>

            <Form.Group controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={4} placeholder="Your Message" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Send Message
            </Button>
          </Form>
        </Col>

      
      </Row>
    </Container>
  );
};

export default ContactPage;
