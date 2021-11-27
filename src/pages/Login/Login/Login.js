import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import banner2 from '../../../images/banner2.jpg';
import './Login.css';
import useAuth from '../../../hooks/useAuth';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import { CircularProgress } from '@mui/material';

const Login = () => {
  const { user, signIn, isLoading, authError } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const location = useLocation();
  const history = useHistory();

  //   email and password receive from input field
  const handleEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };
  const handlePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  // login function
  const handleLogIn = (e) => {
    signIn(email, password, location, history);
    e.preventDefault();
  };
  // style
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
                  <Form.Control
                    type='email'
                    onBlur={handleEmail}
                    placeholder='Enter email'
                  />
                </Form.Group>
                <Form.Group className='mb-3' controlId='formBasicPassword'>
                  <Form.Control
                    type='password'
                    onBlur={handlePassword}
                    placeholder='Password'
                  />
                </Form.Group>
                <p className='text-danger'></p>
                <Button
                  onClick={handleLogIn}
                  type='submit'
                  style={{ backgroundColor: '#94c300', fontWeight: 'bold',borderColor:'transparent' }}
                  variant='success'
                >
                  Login
                </Button>
              </Form>
              <div>
                <p>
                  New User? <Link to='/register'>Register Here</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        {isLoading && <CircularProgress />}
      </Container>
    </div>
  );
};

export default Login;
