import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

function About() {
  return (
    <Container>
      <div>
        <h1>About Me</h1>
        <Row>
          <Col xs={4}>
            {' '}
            <img
              src='https://i.imgur.com/H3p4bWG.png'
              alt='Trenton Creamer'
              class='img-fluid'
            ></img>{' '}
          </Col>
          <Col xs={8} className='ml-50'>
            Welcome to my portfolio page. My name is Trenton Creamer, and I am a
            business and finance professional turned coder. I am excited to see
            what opportunities lie ahead.A few interesting facts
            about myself are that I lived in worked in China for over 3 1/2
            years; I can speak mandarin Chinese. When I am not working or
            learning something new, I enjoy rock climbing. A few interesting
            facts about myself are that I lived in worked in China for over 3
            1/2 years; I can speak mandarin Chinese. When I am not working or
            learning something new, I enjoy rock climbing.
          </Col>
        </Row>
        <Row>
          <Col xs={4}>
            <ul>
              <li>
                <strong>Email:</strong>
                <a href='mailto:trentoncreamer@yahoo.com'>
                  trentoncreamer@yahoo.com
                </a>
              </li>
              <li>
                <strong>Github:</strong>
                <a href='https://github.com/trcream'> Github</a>
              </li>
              <li>
                <strong>LinkedIn:</strong>
                <a href='https://www.linkedin.com/in/trenton-creamer/'>
                  LinkedIn
                </a>
              </li>
              <li>
                <strong>Phone:</strong> 206-778-6888
              </li>
            </ul>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default About;
