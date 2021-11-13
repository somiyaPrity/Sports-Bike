import React from 'react';
import { useForm } from 'react-hook-form';
import { Container } from 'react-bootstrap';
import './AddProduct.css';
import axios from 'axios';

const AddProduct = () => {
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios
      .post('https://boiling-beach-16570.herokuapp.com/bikes', data)
      .then(function (res) {
        if (res.data.insertedId) {
          alert('item added');
          reset();
        }
      });
  };
  return (
    <div>
      <Container className='mt-5'>
        <h1 className='all-header'>Add more packages</h1>

        <div className='add-package'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type='text'
              {...register('name', { required: true })}
              placeholder='Enter Product name'
            />
            {errors.name?.type === 'required' && '* name is required'}
            <input
              type='text'
              {...register('model', { required: true })}
              placeholder='Enter Model number'
            />
            {errors.model?.type === 'required' && '*model number is required'}
            <input
              type='number'
              {...register('price', { required: true })}
              placeholder='Enter product Price'
            />
            {errors.price?.type === 'required' && '*price is required'}
            <input
              {...register('rating', { required: true })}
              placeholder='Enter rating'
            />
            {errors.rating?.type === 'required' && '*rating is required'}
            <input
              {...register('img', { required: true })}
              placeholder='Enter img url'
            />
            {errors.img?.type === 'required' && '*Img is required'}
            <input className='package-btn' type='submit' />
          </form>
        </div>
      </Container>
    </div>
  );
};

export default AddProduct;
