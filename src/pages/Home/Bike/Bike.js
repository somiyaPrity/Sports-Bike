import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import './Bike.css';

const Bike = (props) => {
  const { _id, name, img, model, rating, price } = props.bike;
  return (
    <Col>
      <Card>
        <Card.Img variant='top' className='img-fluid' src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{model}</Card.Text>
          <Rating
            readonly
            initialRating={rating}
            emptySymbol='far fa-star rating-color'
            fullSymbol='fas fa-star rating-color '
          />
          <Card.Text>Price: BDT {price}</Card.Text>

          <br />

          <Link to={`/placeOrder/${_id}`}>
            <Button
              style={{ backgroundColor: '#94c300', fontWeight: 'bold' }}
              variant='success'
            >
              Buy Now
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Bike;
