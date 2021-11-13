import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Header from '../../Shared/Header/Header';
import SixBike from '../SixBike/SixBike';
import Reviews from '../Reviews/Reviews';
import AboutUs from '../AboutUs/AboutUs';

const Home = () => {
  return (
    <div id='home'>
      <Header></Header>
      <Banner></Banner>
      {/* six bikes */}
      <AboutUs></AboutUs>
      <SixBike></SixBike>
      <Reviews></Reviews>
      <Footer></Footer>
    </div>
  );
};

export default Home;
