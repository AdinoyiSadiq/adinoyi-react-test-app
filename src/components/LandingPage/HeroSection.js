import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../shared/Header';
import Button from '../shared/Button';

const Hero = (props) => {
  const { auth } = props;
  return (
    <section className="hero-section">
      <div className="hero-section-overlay">
        <Header parentComponent="landingpage" />
        <h2>Write it out beautifully</h2>
        <div className="hero-section-description">
          <p>
            Or type it, its just as fine. Here, we help get your articles across
          </p>
          <p>to a pool of eager readers. We know there are no limits to your</p>
          <p>imagination. We can’t wait to meet you.</p>
        </div>
        {auth
          ? (
            <div className="hero-section-buttons">
              <Link to="/articles/create"><Button className="btn hero-section-greenbutton" type="button" title="CREATE ARTICLES" /></Link>
              <Link to="/articles/home"><Button className="btn hero-section-whitebutton" type="button" title="READ ARTICLES" /></Link>
            </div>
          )
          : (
            <div className="hero-section-buttons">
              <Link to="/auth/signin"><Button className="btn hero-section-greenbutton" type="button" title="CREATE ARTICLES" /></Link>
              <Link to="/auth/signin"><Button className="btn hero-section-whitebutton" type="button" title="READ ARTICLES" /></Link>
            </div>
          )
        }
      </div>
      <div className="hero-body-vector-white" />
      <div>
        <div className="big-hero-card row">
          <div className="hero-card-details col-sm-4">
            <h6>Why a willing kid</h6>
            <h6>would win an adult</h6>
            <h6>in a fist fight.</h6>
            <p>
              This is my unique story <br /> of how a savage kid from
              <br /> the west devotedly kicked
              <br /> a white glass.....
            </p>
            <div className="row hero-card-author">
              <img
                src="https://res.cloudinary.com/drmmqcxkc/image/upload/v1541426069/Authors%20Haven/john.jpg"
                alt="Author Profile"
              />
              <p className="col-sm-8">John Adewale</p>
            </div>
          </div>
          <div className="hero-card-image col-sm-6" />
        </div>
      </div>
    </section>
  );
};

function mapStatetoProps(state) {
  return { auth: state.auth.authenticated };
}

export default connect(mapStatetoProps, null)(Hero);
