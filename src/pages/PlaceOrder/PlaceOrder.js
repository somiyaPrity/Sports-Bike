import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Shared/Header/Header';

const PlaceOrder = () => {
  const { bikeId } = useParams();
  const [bikes, setBikes] = useState([]);
  console.log(bikeId);
  //get bikes
  useEffect(() => {
    fetch('http://localhost:5000/bikes')
      .then((res) => res.json())
      .then((data) => setBikes(data));
  }, []);
  // find
  const currentItem = [];
  for (let item of bikes) {
    if (item._id === bikeId) {
      currentItem.push(item);
    }
  }
  console.log(currentItem);
  return (
    <div>
      <Header></Header>
      {bikeId}
    </div>
  );
};

export default PlaceOrder;
