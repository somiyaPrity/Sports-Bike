import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Spinner, Table } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const ManageProducts = () => {
  const { isLoading } = useAuth;
  const [bikes, setBikes] = useState([]);
  useEffect(() => {
    fetch('https://boiling-beach-16570.herokuapp.com/bikes')
      .then((res) => res.json())
      .then((data) => setBikes(data));
  }, []);
  if (isLoading) {
    return <Spinner animation='grow' variant='success' />;
  }
  //   delete item
  const deleteItem = (id) => {
    const proceed = window.confirm('Are you sure, you want to delete?');
    if (proceed) {
      axios
        .delete(`https://boiling-beach-16570.herokuapp.com/bikes/${id}`)
        .then((res) => {
          console.log(res);
          if (res.data.deletedCount > 0) {
            alert('Item deleted');
            const remainingOrder = bikes.filter((order) => order._id !== id);
            setBikes(remainingOrder);
          }
        });
    }
  };
  return (
    <div>
      <Container className='mt-5'>
        <p className='all-header mb-2'>Total bike: {bikes.length}</p>

        <div>
          <Table responsive='sm md lg' striped bordered hover>
            <thead>
              <tr>
                <th>List</th>
                <th>Product Name</th>
                <th>Model</th>
                <th>Price</th>
                <th>Cancel bike</th>
              </tr>
            </thead>
            <tbody>
              {bikes.map((bike) => (
                <tr key={bike._id}>
                  <td> {bikes.indexOf(bike) + 1}</td>
                  <td>{bike.name}</td>
                  <td>{bike.model}</td>
                  <td>{bike.price}</td>
                  <td>
                    <button
                      className='delete-btn'
                      onClick={() => deleteItem(bike._id)}
                    >
                      <FontAwesomeIcon icon={faTrashAlt} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Container>
    </div>
  );
};

export default ManageProducts;
