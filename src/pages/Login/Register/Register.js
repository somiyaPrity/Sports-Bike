import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import banner2 from '../../../images/banner2.jpg';
import useAuth from '../../../hooks/useAuth';
import { useHistory } from 'react-router-dom';
import { CircularProgress } from '@mui/material';

const Register = () => {
  const { user, isLoading, registerUser, authError } = useAuth();
  const history = useHistory();
  // email and password set
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');

  //   email and password receive from input field
  const handleEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };
  const handleName = (e) => {
    const userName = e.target.value;
    if (userName === '') {
      alert('name field cannot be empty');
    } else {
      setUserName(userName);
    }
  };
  const handlePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  // user form submit
  const handleRegisterUser = (e) => {
    registerUser(email, password, userName, history);
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
                    onBlur={handleEmail}
                    required
                    type='email'
                    placeholder='Enter email'
                  />
                </Form.Group>
                <Form.Group className='mb-3'>
                  <Form.Control
                    onBlur={handleName}
                    type='text'
                    required
                    placeholder='Enter your name'
                  />
                </Form.Group>
                <Form.Group className='mb-3' controlId='formBasicPassword'>
                  <Form.Control
                    onBlur={handlePassword}
                    type='password'
                    required
                    placeholder='Password'
                  />
                </Form.Group>

                <br />
                <p className='text-danger'>{authError}</p>
                <Button
                  style={{ backgroundColor: '#94c300', fontWeight: 'bold' }}
                  variant='success'
                  type='submit'
                  onClick={handleRegisterUser}
                >
                  Register
                </Button>
              </Form>

              <div>
                <p>
                  Already have an account?
                  <Link to='/login'>Click here for login</Link>
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

export default Register;
