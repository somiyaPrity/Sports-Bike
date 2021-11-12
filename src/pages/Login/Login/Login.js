import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import { Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import banner2 from '../../../images/banner2.jpg';
import './Login.css';
const Login = () => {
  const bgFooter = {
    background: `url(${banner2})`,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    backgroundBlendMode: 'darken, luminosity',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: '100vh',
  };
  return (
    <div style={bgFooter}>
      <Container>
        <div className='form-main-div'>
          <div>
            <div>
              <div style={{ margin: '50px 50px' }} className='section-header'>
                <h3>
                  Please <span style={{ color: '#94c300' }}>Login</span>
                </h3>
                <div
                  style={{
                    backgroundColor: '#94c300',
                    height: '2px',
                    width: '100px',
                    margin: '0 auto',
                  }}
                ></div>
              </div>
            </div>
            <div className='form-div'>
              <Form>
                <Form.Group className='mb-3' controlId='formBasicEmail'>
                  <Form.Control type='email' placeholder='Enter email' />
                </Form.Group>
                <Form.Group className='mb-3' controlId='formBasicPassword'>
                  <Form.Control type='password' placeholder='Password' />
                </Form.Group>
                <p className='text-danger'>error</p>
                <Button
                  type='submit'
                  style={{ backgroundColor: '#94c300', fontWeight: 'bold' }}
                  variant='success'
                >
                  Login
                </Button>
              </Form>
              <div>
                <p>or</p>
                <Button
                  style={{ backgroundColor: '#94c300', fontWeight: 'bold' }}
                  variant='success'
                >
                  Login with <FontAwesomeIcon icon={faGooglePlusG} />
                </Button>
                <p>
                  New User? <Link to='/register'>Register Here</Link>
                </p>
                <button className='forget-btn'>Forget Password?</button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Login;
