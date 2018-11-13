import React from 'react';
import Card from '../../containers/ArticleCard';

const ExploreSection = () => (
  <section className="hero-lowerbody">
    <div className="hero-lowerbody-details">
      <div className="hero-lowerbody-title">
        <div className="hero-bookImage-wrapper ">
          <img src="https://res.cloudinary.com/drmmqcxkc/image/upload/v1541426068/Authors%20Haven/icons8-heart-outline-48.png" alt="" />
        </div>
        <h2>HERE’S OUR BEST PICK FOR AUGUST</h2>
      </div>
      <p>
        We have buillt a community of talentrd authors who love to write lorem
        ips Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Cupiditate Lorem ipsum dolor sit amet consectetur, adipisicing Lorem
        ipsum dolor sit amet consectetur, adipisicing elit. Cupiditatelit.
        Cupiditate
      </p>
    </div>
    <div className="hero-lowerbody-articles">
      <Card />
    </div>
  </section>
);

export default ExploreSection;
