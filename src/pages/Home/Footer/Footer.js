import React from 'react';
import { Container } from 'react-bootstrap';
import footerImg from '../../../images/bg_footer.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
          <div className='footer'>
            <div className='footer-address'>
              <h6>Address</h6>
              <p>House-0,Road-2,Block-L</p>
              <p>Banani,Dhaka-1213</p>
            </div>
            <div className='follow-us'>
              <h6>Follow Us On:</h6>
              {/* footer icon */}
              <div className='footer-icon'>
                <FontAwesomeIcon icon={faTwitter} />
                <FontAwesomeIcon icon={faFacebookF} />
                <FontAwesomeIcon icon={faInstagram} />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
