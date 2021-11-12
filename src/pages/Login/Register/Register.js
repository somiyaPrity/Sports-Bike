import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import banner2 from '../../../images/banner2.jpg';

const Register = () => {
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
                  Please <span style={{ color: '#94c300' }}>Register</span>
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
                <Form.Group className='mb-3'>
                  <Form.Control
                    required
                    type='email'
                    placeholder='Enter email'
                  />
                </Form.Group>
                <Form.Group className='mb-3'>
                  <Form.Control
                    type='text'
                    required
                    placeholder='Enter your name'
                  />
                </Form.Group>
                <Form.Group className='mb-3' controlId='formBasicPassword'>
                  <Form.Control
                    type='password'
                    required
                    placeholder='Password'
                  />
                </Form.Group>

                <br />
                <p className='text-danger'></p>
                <Button
                  style={{ backgroundColor: '#94c300', fontWeight: 'bold' }}
                  variant='success'
                  type='submit'
                >
                  Register
                </Button>
              </Form>

              <div>
                <p>or</p>
                <Button
                  style={{ backgroundColor: '#94c300', fontWeight: 'bold' }}
                  variant='success'
                >
                  Sign in with <FontAwesomeIcon icon={faGooglePlusG} />
                </Button>
                <p>
                  Already have an account?
                  <Link to='/login'>Click here for login</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Register;
