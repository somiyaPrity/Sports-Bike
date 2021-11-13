import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import './AddReview.css';
import { Container } from 'react-bootstrap';

const AddReview = () => {
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios
      .post('https://boiling-beach-16570.herokuapp.com/review', data)
      .then(function (res) {
        if (res.data.insertedId) {
          alert('Review added');
          reset();
        }
      });
  };
  return (
    <div>
      <Container>
        <div>
          <div style={{ margin: '50px 50px' }} className='section-header'>
            <h3>
              Add <span style={{ color: '#94c300' }}>Reviews</span>
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
        {/* form */}
        <div style={{ margin: '0 auto', width: '300px' }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type='text'
              {...register('name', { required: true })}
              placeholder='Enter your name'
            />
            {errors.name?.type === 'required' && (
              <span style={{ color: 'red' }} role='alert'>
                your name is required
              </span>
            )}

            {/* rating */}
            <input
              type='number'
              {...register('rating', { required: true, min: 0, max: 5 })}
              placeholder='Enter your rating'
            />
            {errors.rating?.type === 'required' && '*rating is required'}
            {errors.rating && errors.rating.type === 'max' && (
              <span style={{ color: 'red' }} role='alert'>
                Max length 5
              </span>
            )}
            {errors.rating && errors.rating.type === 'min' && (
              <span style={{ color: 'red' }} role='alert'>
                Min length 0
              </span>
            )}

            {/* img */}
            <input
              type='text'
              {...register('img', { required: true })}
              placeholder='Enter your image url'
            />
            {errors.img?.type === 'required' && (
              <span style={{ color: 'red' }} role='alert'>
                Image Url is required
              </span>
            )}
            {/* text area */}
            <textarea
              type='text'
              {...register('description', { required: true, maxLength: 200 })}
              placeholder='Say something about this product'
            />
            {errors.description && errors.description.type === 'required' && (
              <span role='alert'>This is required</span>
            )}
            {errors.description && errors.description.type === 'maxLength' && (
              <span style={{ color: 'red' }} role='alert'>
                Max length exceeded
              </span>
            )}
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
        </div>
      </Container>
    </div>
  );
};

export default AddReview;
