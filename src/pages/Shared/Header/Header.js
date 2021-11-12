import { faUser } from '@fortawesome/free-solid-svg-icons';
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
          <Nav.Link as={HashLink} to='/bikes'>
            Explore
          </Nav.Link>
          {user?.email ? (
            <div className='private-btn'>
              <Nav.Link as={Link} to='/myOrder'>
                My Order
              </Nav.Link>
              <Navbar.Text>
                <Nav.Link as={Link} to='/userDashboard'>
                  <FontAwesomeIcon icon={faUser} />
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

          {/* {user?.email ? (
                <div className='private-btn'>
                  <Nav.Link as={Link} to='/myOrder'>
                    My Order
                  </Nav.Link>
                  <Nav.Link as={Link} to='/manageOrder'>
                    Manage Order
                  </Nav.Link>
                  <Nav.Link as={Link} to='/addPackages'>
                    Add Packages
                  </Nav.Link>
                  <Navbar.Text>
                    <button onClick={logOut} className='package-btn'>
                      Logout
                    </button>
                    <FontAwesomeIcon icon={faUser} />
                    <a href='#login'>{user?.displayName}</a>
                  </Navbar.Text>
                </div>
              ) : (
                <Nav.Link as={Link} to='/login'>
                  <button className='package-btn'>Login</button>
                </Nav.Link>
              )} */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
// https://demo.wpthemego.com/themes/sw_sportbike/?page_id=35&header_style=default&footer_style=default
