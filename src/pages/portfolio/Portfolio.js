import React from 'react';
import Header from '../../components/home/Header';
import Project from '../../components/portfolio/Project';

function Portfolio() {
  return (
    <div>
        <Header
        imagePath="./8.jpg"
        text1=""
        text2="Portfolio"
        text3="We have a vivid portfolio consisting of websites, mobile applications, 
        stand-alone desktop apps and much more."
      />
      <Project />
    </div>
  )
}

export default Portfolio