import React from "react";
import { Row, Col, Card, Button, Form, Container } from "react-bootstrap";

function Portfolio(){
    return (
      <Container>
        <h1>Portfolio</h1>
        <Row>
          <Col xs={9}>
            <Row>
              <Col xs={6}>
                <Row>
                  <a
                    href='https://billyhao12.github.io/Weather-Event-Planner/'
                    target='_blank'
                  >
                    <img
                      src={require('../../assets/images/events.png')}
                      width='150'
                    />
                  </a>
                </Row>
                <Row>Weather Event Planner</Row>
                <Row>
                  <b>
                    <a href='https://github.com/billyhao12/Weather-Event-Planner'>
                      Github
                    </a>
                  </b>
                </Row>
              </Col>
              <Col xs={6}>
                <Row>
                  <a
                    href='https://uwproject2bootcamp.herokuapp.com/'
                    target='_blank'
                  >
                    <img
                      src={require('../../assets/images/MedHandoff150.png')}
                      width='150'
                    />
                  </a>
                </Row>
                <Row>Med Handoff</Row>
                <Row>
                  <b>
                    <a href='https://github.com/chrisjm093/med-handoff'>
                      Github
                    </a>
                  </b>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col xs={6}>
                <Row>
                  <a
                    href='https://trcream.github.io/Scheduler/'
                    target='_blank'
                  >
                    <img
                      src={require('../../assets/images/calendar.png')}
                      width='150'
                    />
                  </a>
                </Row>
                <Row>Day Planner</Row>
                <Row>
                  <b>
                    <a href='https://github.com/trcream/Scheduler'>Github</a>
                  </b>
                </Row>
              </Col>
              <Col xs={6}>
                <Row>
                  <a
                    href='https://trcream.github.io/Weather-Dashboard/'
                    target='_blank'
                  >
                    <img
                      src={require('../../assets/images/weather.png')}
                      width='150'
                    />
                  </a>
                </Row>
                <Row>Weather Dashboard</Row>
                <Row>
                  <b>
                    <a href='https://github.com/trcream/Weather-Dashboard'>
                      Github
                    </a>
                  </b>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col xs={6}>
                <Row>
                  <a
                    href='https://trcream.github.io/Homework-04/'
                    target='_blank'
                  >
                    <img
                      src={require('../../assets/images/quiz.PNG')}
                      width='150'
                    />
                  </a>
                </Row>
                <Row>Code Quiz</Row>
                <Row>
                  <b>
                    <a href='https://github.com/trcream/Homework-04'>Github</a>
                  </b>
                </Row>
              </Col>
              <Col xs={6}>
                <Row>
                  <a
                    href='https://trcream.github.io/homework-03/'
                    target='_blank'
                  >
                    <img
                      src={require('../../assets/images/codebreaker.jpg')}
                      width='150'
                    />
                  </a>
                </Row>
                <Row>Password Generator</Row>
                <Row>
                  <b>
                    <a href='https://github.com/trcream/homework-03'>Github</a>
                  </b>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
}

export default Portfolio;