import React from 'react';
import { Link } from 'react-router-dom';

const LandingPageBody = () => (
  <section className="hero-body-background">
    <div className="hero-body">
      <div className="hero-body-details">
        <div className="hero-body-title row">
          <h2 className="col-lg-9">
            THE COMPLETE DIGITAL TOOL FOR AUTHORS WILLING TO SHARE
          </h2>
          <div className="hero-bookImage-wrapper ">
            <img src="https://res.cloudinary.com/drmmqcxkc/image/upload/v1541426068/Authors%20Haven/icons8-literature-48.png" alt="" />
          </div>
        </div>
        <p>
          Lorem ipsum anothere olor sit amet consectetur, adipisicing elit.
          Cupiditate just tosint fugiat nesciunt doloribus veniam, dolor
          ratione sunt marecusandae, molestiae fugit reicivero labore
          quibusdam longLorem ipsum dolor sit amet cons pisici elit.
          Cupiditatesint is the fugiat nesciunt doloribus veniam, dolor
          ratione sunt reclorem usandae, molestiae fugit reiciendis vero labe
          quibusdam world odit sequi aperiam sit ipsum ipsa! odit sequi ap sit
          ipsum ipsa!
        </p>
        <hr />
        <Link className="hero-signup" to="/auth/signup">
          <p>Writer? We can’t wait to meet you &rarr;</p>
        </Link>
      </div>
    </div>
    <div className="hero-body-vector-blue" />
  </section>
);

export default LandingPageBody;
