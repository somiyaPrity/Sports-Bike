import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Container, Table } from 'react-bootstrap';
import './UserOrder.css';

const UserOrder = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();
  const statusRed = 'pending...';
  useEffect(() => {
    fetch(`https://boiling-beach-16570.herokuapp.com/order/${user.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user.email]);

  const deleteOrder = (id) => {
    const proceed = window.confirm('Are you sure, you want to delete?');
    if (proceed) {
      axios
        .delete(`https://boiling-beach-16570.herokuapp.com/order/${id}`)
        .then((res) => {
          if (res.data.deletedCount > 0) {
            alert('Order deleted');
            const remainingOrder = orders.filter((order) => order._id !== id);
            setOrders(remainingOrder);
          }
        });
    }
  };
  return (
    <div>
      <Container className='mt-5'>
        <h1 className='all-header'>Your order history</h1>
        <p className='all-header mb-2'>Total order: {orders.length}</p>

        <div>
          <Table responsive='sm md lg' striped bordered hover>
            <thead>
              <tr>
                <th>List</th>
                <th>User Name</th>
                <th>User Email</th>
                <th>Product Name</th>
                <th>Model</th>
                <th>Price</th>
                <th>Status</th>
                <th>Cancel Order</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr>
                  <td> {orders.indexOf(order) + 1}</td>
                  <td>{order.userName}</td>
                  <td>{order.email}</td>
                  <td>{order.name}</td>
                  <td>{order.model}</td>
                  <td>{order.price}</td>
                  <td>
                    <p
                      className={
                        order.status === statusRed
                          ? 'status-red'
                          : 'status-green'
                      }
                    >
                      {order.status}
                    </p>
                  </td>
                  <td>
                    <button
                      className='delete-btn'
                      onClick={() => deleteOrder(order._id)}
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

export default UserOrder;
