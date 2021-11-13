import React from 'react';
import { Container, Col, Row, Button } from 'react-bootstrap';
import about from '../../../images/about.webp';

const AboutUs = () => {
  return (
    <div style={{ margin: '100px 0' }}>
      <Container>
        <Row xs={1} md={2} lg={2}>
          <Col>
            <img style={{ width: '100%' }} src={about} alt='' />
          </Col>
          <Col style={{ textAlign: 'left' }}>
            <div style={{ textAlign: 'left' }} className='section-header'>
              <h3>
                <span style={{ color: '#94c300' }}>About</span> Us
              </h3>
              <div
                style={{
                  backgroundColor: '#94c300',
                  height: '2px',
                  width: '100px',
                }}
              ></div>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              consequuntur soluta cumque, accusamus laudantium perferendis
              officia cupiditate dolore, quasi nisi facilis quas nostrum
              reprehenderit doloremque culpa ipsa? Nostrum, corporis
              reprehenderit.
            </p>
            <Button
              style={{ backgroundColor: '#94c300', fontWeight: 'bold' }}
              variant='success'
            >
              More About Us
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutUs;
