import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../Shared/Header/Header';
import useAuth from '../../hooks/useAuth';
import './PlaceOrder.css';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const PlaceOrder = () => {
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm();
  const { bikeId } = useParams();
  const [bikes, setBikes] = useState([]);
  const { user } = useAuth();
  console.log(bikeId);
  //get bikes
  useEffect(() => {
    fetch('https://boiling-beach-16570.herokuapp.com/bikes')
      .then((res) => res.json())
      .then((data) => setBikes(data));
  }, []);
  // find orderded item
  const currentItem = [];
  for (let item of bikes) {
    if (item._id === bikeId) {
      currentItem.push(item);
    }
  }
  // send order to database
  const onSubmit = (data) => {
    data.userName = user.displayName;
    data.email = user.email;
    data.name = user.displayName;
    currentItem.map((item) => {
      data.name = item.name;
      data.price = item.price;
      data.model = item.model;
      data.img = item.img;
      data.status = 'pending...';
    });
    console.log(data);
    axios
      .post('https://boiling-beach-16570.herokuapp.com/order', data)
      .then(function (res) {
        if (res.data.insertedId) {
          alert('order placed');
          reset();
        }
      });
  };
  console.log(currentItem);
  return (
    <div>
      <Header></Header>
      <div>
        <Container>
          <div>
            <div style={{ margin: '50px 50px' }} className='section-header'>
              <h3>
                Place <span style={{ color: '#94c300' }}>Order</span>
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
          <Row xs={1} md={2} lg={2}>
            <Col>
              {currentItem.map((item) => (
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.model}</p>
                  <p>Price: BDT{item.price}</p>
                  <img
                    style={{ width: '100%', marginTop: '0px' }}
                    src={item.img}
                    alt=''
                  />
                </div>
              ))}
            </Col>
            <Col>
              <div className='place-order'>
                <br />
                <p>Name: {user.displayName}</p>
                <p>Email: {user.email}</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <input
                    type='text'
                    {...register('address', { required: true })}
                    placeholder='Enter your address'
                  />
                  {errors.address?.type === 'required' &&
                    '*place name is required'}
                  <br />
                  <input
                    type='number'
                    {...register('phoneNumber', { required: true })}
                    placeholder='Enter your Phone number'
                  />
                  {errors.phoneNumber?.type === 'required' &&
                    '*Phone number is required'}
                  <br />
                  <input
                    className='package-btn'
                    style={{
                      backgroundColor: '#94c300',
                      color: '#fff',
                      marginTop: '4px',
                      fontWeight: 'bold',
                    }}
                    type='submit'
                  />
                </form>

                <br />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default PlaceOrder;
