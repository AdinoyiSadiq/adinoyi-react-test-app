import React, { Component } from 'react';
import { connect } from 'react-redux';
import getArticles from '../actions/articleActions';
import Loading from '../components/shared/Loading';

export class Card extends Component {
  componentDidMount() {
    const { getArticles: getAllArticles } = this.props;
    getAllArticles();
  }

  state = {
    articleLimit: 6,
  };

  sortArticlesByLikes = (articles) => {
    const sortedArticles = articles
      .map((eachArticle) => {
        const filteredArticles = this.filterLikes(eachArticle.reactions);
        return { article: eachArticle, track: filteredArticles };
      })
      .sort((a, b) => {
        const result = b.track - a.track;
        return result;
      });
    return sortedArticles;
  };

  displayArticles = (articleLimit) => {
    const { articles } = this.props;
    const newlySortedArticles = this.sortArticlesByLikes(articles);
    const displayedArticles = newlySortedArticles.slice(0, 0 + articleLimit);
    return displayedArticles;
  };

  handleClick = () => {
    const { articleLimit } = this.state;
    if (articleLimit === 6) {
      this.setState({ articleLimit: 9 });
      this.displayCards(this.displayArticles);
      this.refs.moreArticles.innerText = 'Less Articles';
    } else {
      this.setState({ articleLimit: 6 });
      this.displayCards(this.displayArticles);
      this.refs.moreArticles.innerText = 'More Articles';
    }
  };

  filterLikes = (likes) => {
    const result = likes.filter((eachLike) => eachLike.reaction === 1);
    return result.length;
  };

  changeBackground = (image) => {
    const changeBackground = {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, .32), rgba(0, 0, 0, .32)), url(${image}`,
      backgroundSize: 'cover',
    };
    return changeBackground;
  };

  displayCards = (displayArticles) => {
    const { articleLimit } = this.state;
    return displayArticles(articleLimit).map((card) => {
      const displayedBody = card.article.body.slice(0, 120);
      const displayedTitle = card.article.title.slice(0, 30);
      return (
        <div
          onClick={this.getArticle}
          className="hero-card"
          key={card.article.id}
        >
          <div className="hero-card-details col-sm-7">
            <h6>{displayedTitle}</h6>
            <p>
              {displayedBody}
              ...
            </p>
            <div className="hero-card-author">
              {card.article.user.profile.image === null ? (
                <img
                  src="https://res.cloudinary.com/drmmqcxkc/image/upload/v1541581893/Authors%20Haven/user-placeholder.png"
                  alt="Author Profile"
                />
              ) : (
                <img
                  src={card.article.user.profile.image}
                  alt="Author Profile"
                />
              )}
              <p>
                {card.article.user.firstname} {card.article.user.lastname}
              </p>
            </div>
          </div>
          {card.article.image === null ? (
            <div className="hero-card-image col-sm-5">
              <img
                src="https://res.cloudinary.com/drmmqcxkc/image/upload/v1541426068/Authors%20Haven/icons8-heart-outline-48-grey.png"
                alt=""
              />
              <p>{this.filterLikes(card.article.reactions)}</p>
            </div>
          ) : (
            <div
              style={this.changeBackground(card.article.image)}
              className="hero-card-image col-sm-5"
            >
              <img
                src="https://res.cloudinary.com/drmmqcxkc/image/upload/v1541426068/Authors%20Haven/icons8-heart-outline-48-grey.png"
                alt=""
              />
              <p>{this.filterLikes(card.article.reactions)}</p>
            </div>
          )}
        </div>
      );
    });
  };

  render() {
    const { articles } = this.props;
    return (
      <div>
        {articles ? (
          <div className="card-wrapper">
            {this.displayCards(this.displayArticles)}
          </div>
        ) : (
          <Loading />
        )}
        <div onClick={this.handleClick} className="hero-moreArticles row">
          <p ref="moreArticles">More Articles</p>
          <img
            src="https://res.cloudinary.com/drmmqcxkc/image/upload/v1541426068/Authors%20Haven/icons8-expand-arrow-24.png"
            alt=""
          />
        </div>
      </div>
    );
  }
}

function mapStatetoProps(state) {
  return { articles: state.articles.articles.articles, error: state.articles.error.response };
}

export default connect(mapStatetoProps, { getArticles })(Card);
