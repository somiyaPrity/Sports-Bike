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
        <Card.Body style={{textAlign:'left',padding:'0'}}>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <Card.Text style={{fontSize:'14px'}}> BDT {price}</Card.Text>
            <Rating
            readonly
            initialRating={rating}
            emptySymbol='far fa-star rating-color'
            fullSymbol='fas fa-star rating-color '
          />
          
        </div>
          <Card.Title>{name}</Card.Title>
          <Card.Text style={{fontSize:'12px'}}>{model}</Card.Text>
          
      

          <Link to={`/placeOrder/${_id}`}>
            <Button
              style={{ backgroundColor: '#94c300', fontWeight: 'bold',borderColor:'transparent', marginTop:"4px"}}
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
