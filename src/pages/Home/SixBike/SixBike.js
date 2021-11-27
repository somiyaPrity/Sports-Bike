import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Bike from '../Bike/Bike';

const SixBike = () => {
  const [bikes, setBikes] = useState([]);
  const sixBikes = bikes.slice(0, 6);

  useEffect(() => {
    fetch('https://boiling-beach-16570.herokuapp.com/bikes')
      .then((res) => res.json())
      .then((data) => setBikes(data));
  }, []);
  return (
    <div id='products'>
      <div>
        <div style={{ margin: '50px 50px' }} className='section-header'>
          <h3>
            <span style={{ color: '#94c300' }}>SPORTS</span> BIKE
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
      {/* all product */}
      <div className='mb-5'>
        <Container>
          <Row xs={1} md={3} lg={3} className='g-4'>
            {sixBikes.map((bike) => (
              <Bike key={bike._id} bike={bike}></Bike>
            ))}
          </Row>
        </Container>
      </div>

      <Link to='/bikes'>
        <Button
          style={{ backgroundColor: '#94c300', fontWeight: 'bold' ,borderColor:'transparent'}}
          variant='success'
        >
          <span style={{ marginRight: '6px' }}>Show More</span>
          <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
        </Button>
      </Link>
    </div>
  );
};

export default SixBike;
