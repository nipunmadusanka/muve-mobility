import React from 'react';
import Career from '../../components/career/Career';
import Perks from '../../components/career/Perks';
import Works from '../../components/career/Works';
import Header from '../../components/home/Header';

function Careers() {
  return (
    <div>
      <Header
        imagePath="./7.jpg"
        text1=""
        text2="Your seat is ready, we are 
        waiting for you"
        text3="Greetings! We are looking forward to having you join us on this exciting voyage; your seat is ready."
      />
        <Career />
        <Perks />
        <Works />
    </div>
  )
}

export default Careers