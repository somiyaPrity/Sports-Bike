import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import Header from '../../Shared/Header/Header';
import Bike from '../Bike/Bike';

const Bikes = () => {
  const [bikes, setBikes] = useState([]);
  useEffect(() => {
    fetch('https://boiling-beach-16570.herokuapp.com/bikes')
      .then((res) => res.json())
      .then((data) => setBikes(data));
  }, []);

  return (
    <div>
      {/* NAVBAR */}
      <Header></Header>
      {/* section header */}
      <div style={{ margin: '50px 50px' }} className='section-header'>
        <h3>
          <span style={{ color: '#94c300' }}>SPORTS BIKE</span> COLLECTIONS
        </h3>
        <div
          style={{
            backgroundColor: '#94c300',
            height: '2px',
            width: '200px',
            margin: '0 auto',
          }}
        ></div>
      </div>
      {/* bike section body */}
      <Container>
        <Row xs={1} md={3} lg={3} className='g-4'>
          {bikes.map((bike) => (
            <Bike key={bike._id} bike={bike}></Bike>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Bikes;
