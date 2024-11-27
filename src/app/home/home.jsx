import React from 'react';
import IntroSwiper from './intro';
import News from './news';

const Home = () => {
  return (
    <div>
      {/* swiper */}
      <IntroSwiper />

      {/* news */}
      <News />
    </div>
  );
};

export default Home;
