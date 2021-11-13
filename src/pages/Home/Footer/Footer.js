import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import footerImg from '../../../images/bg_footer.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import {
  faTwitter,
  faFacebookF,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  const bgFooter = {
    background: `url(${footerImg})`,
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: '50px',
    height: '400px',
  };
  return (
    <div style={bgFooter}>
      <div className='footerMain'>
        <Container>
          <div className='follow-us'>
            <h6>Follow Us On:</h6>

            <Link>
              <FontAwesomeIcon icon={faTwitter} />
            </Link>
            <Link>
              <FontAwesomeIcon icon={faFacebookF} />
            </Link>
            <Link>
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
          </div>
          <Row xs={2} md={4} lg={4} className='g-2'>
            <Col>
              <div className='footer-content'>
                <h6>Company</h6>
                <p>About us</p>
                <p>Privacy Policy</p>
                <p>Contact Us</p>
              </div>
            </Col>
            <Col>
              <div className='footer-content'>
                <h6>Products</h6>
                <p>Winter Bikes</p>
                <p>Mountain Bikes</p>
                <p>Carbon Wheels</p>
              </div>
            </Col>
            <Col>
              <div className='footer-content'>
                <h6>Shop</h6>
                <p>Buy Direct</p>
                <p>Our Commitment</p>
                <p>Warranty</p>
              </div>
            </Col>
            <Col>
              <div className='footer-content'>
                <h6>Address</h6>
                <p>House-0,Road-2,Block-L</p>
                <p>Banani,Dhaka-1213</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
