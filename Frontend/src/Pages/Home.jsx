import React from 'react';
import HomeLanding from '../Components/LandingPages/HomeLanding';
import AboutLanding from '../Components/LandingPages/AboutLanding';
import Footer from '../Components/Footer/Footer';
import ComplaintDetials from '../Components/ComplaintPoster/ComplaintDetials';

const Home = () => {
  return (
    <>
      {/* home page animation landing page */}
      <HomeLanding />
      <ComplaintDetials />
      <AboutLanding />
      <Footer />
    </>
  );
};

export default Home;
