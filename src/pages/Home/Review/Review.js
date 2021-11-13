import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';

const Review = (props) => {
  const { name, rating, description, img } = props.review;
  return (
    <div>
      <Col>
        <Card>
          <Card.Img variant='top' src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              <Rating
                readonly
                initialRating={rating}
                emptySymbol='far fa-star rating-color'
                fullSymbol='fas fa-star rating-color '
              />
              <p style={{ textAlign: 'center' }}>{description}</p>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Review;
