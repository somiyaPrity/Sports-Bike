import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Header from '../../Shared/Header/Header';
import SixBike from '../SixBike/SixBike';

const Home = () => {
  return (
    <div id='home'>
      <Header></Header>
      <Banner></Banner>
      {/* six bikes */}
      <SixBike></SixBike>
      <Footer></Footer>
    </div>
  );
};

export default Home;
