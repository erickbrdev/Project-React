import React from 'react';
// eslint-disable-next-line import/no-cycle
import CardGames from './CardGames';
import games from '../data';

class GamesList extends React.Component {
  render() {
    // eslint-disable-next-line react/prop-types, no-unused-vars
    // const { info: { title, subtitle, storyline, rating, imagePath } } = this.props;
    return (
      <div className="movie-list">
        {
          // eslint-disable-next-line arrow-body-style
          games.map((movie, index) => {
            return (
              <CardGames
                key={ index }
                info={ movie }
              />
            );
          })
        }
      </div>
    );
  }
}

export default GamesList;