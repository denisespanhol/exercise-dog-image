import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Dogs extends Component {
  render() {
    const { dogs, loading, renderDogImg } = this.props;
    const loadingElement = <span>Loading...</span>;
    return (
      <section>
        { loading ? loadingElement : <img src={ dogs } alt="Random Dog" /> }
        { renderDogImg() }
      </section>
    );
  }
}

Dogs.propTypes = {
  dogs: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  renderDogImg: PropTypes.func.isRequired,
};

export default Dogs;
