import React from "react";
import { Container, Card, Button, Form } from "react-bootstrap";


function Contact(){
    return (
      <Container>
        <Card>
          <Card.Body>
            <Form>
              <Form.Group >
                <Form.Label>Name</Form.Label>
                <Form.Control placeholder='Enter Name' />
                <Form.Text className='text-muted'>
                  We'll never share your name with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId='email'>
                <Form.Label>Email</Form.Label>
                <Form.Control type='email' placeholder='email' />
              </Form.Group>
              <Form.Group controlId='formBasicCheckbox'></Form.Group>
              <Button variant='primary' type='submit'>
                Submit
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    );
}

export default Contact;