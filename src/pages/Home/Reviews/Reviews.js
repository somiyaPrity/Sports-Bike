import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import Review from '../Review/Review';
const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch('https://boiling-beach-16570.herokuapp.com/review')
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  console.log(reviews);
  return (
    <div id='review'>
      <Container>
        <div style={{ margin: '50px 50px' }} className='section-header'>
          <h3>
            <span style={{ color: '#94c300' }}>CUSTOMER</span> REVIEWS
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
        <div>
          <Row xs={1} md={3} lg={3}>
            {reviews.map((review) => (
              <Review key={review._id} review={review}></Review>
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Reviews;
