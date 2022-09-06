import React from 'react';

class Rating extends React.Component {
  render() {
    // eslint-disable-next-line react/prop-types, no-unused-vars
    // const { info: { title, subtitle, storyline, rating, imagePath } } = this.props;
    return (
      // eslint-disable-next-line react/destructuring-assignment, react/prop-types
      <p className="rating">{ this.props.rating }</p>
    );
  }
}

export default Rating;