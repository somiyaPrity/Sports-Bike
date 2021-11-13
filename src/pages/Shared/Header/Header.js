import { faUser, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
//import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
import './Header.css';

const Header = () => {
  const { user, logout } = useAuth();
  console.log(user);
  return (
    //   navbar
    <Navbar collapseOnSelect expand='lg' variant='dark' sticky='top'>
      <Container>
        <Navbar.Brand as={HashLink} to='/home#home'>
          SPORTS <span style={{ color: '#000' }}>BIKES</span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className='justify-content-end'>
          <Nav.Link as={HashLink} to='/home#home'>
            Home
          </Nav.Link>

          <Nav.Link as={HashLink} to='/home#products'>
            Products
          </Nav.Link>
          <Nav.Link as={HashLink} to='/home#review'>
            Review
          </Nav.Link>
          <Nav.Link as={HashLink} to='/bikes'>
            Explore
          </Nav.Link>
          {user?.email ? (
            <div className='private-btn'>
              <Navbar.Text>
                <Nav.Link as={Link} to='/userDashboard'>
                  <FontAwesomeIcon icon={faUserCircle}></FontAwesomeIcon>
                </Nav.Link>

                <Button
                  onClick={logout}
                  style={{
                    backgroundColor: '#94c300',
                    fontWeight: 'bold',
                    marginLeft: '8px',
                  }}
                  variant='success'
                >
                  Logout
                </Button>
              </Navbar.Text>
            </div>
          ) : (
            <Nav.Link as={Link} to='/login'>
              <Button
                style={{ backgroundColor: '#94c300', fontWeight: 'bold' }}
                variant='success'
              >
                Login
              </Button>
            </Nav.Link>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
