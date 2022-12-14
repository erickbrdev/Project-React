// import { render } from "enzyme";
import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class CardGames extends React.Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const { info: { title, subtitle, rating, storyline, imagePath } } = this.props;
    return (
      // eslint-disable-next-line arrow-body-style
      <div className="movie-card">
        <img className="movie-card-image" src={ imagePath } alt="" />
        <div className="movie-card-body">
          <h4 className="movie-card-title">{ title }</h4>
          <h5 className="movie-card-subtitle">{ subtitle }</h5>
          <p className="movie-card-storyline">{ storyline }</p>
        </div>
        <div className="movie-card-ratting">
          <Rating rating={ rating } />
        </div>
      </div>
    );
  }
}

CardGames.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
  }.isRequired;
  
  export default CardGames;