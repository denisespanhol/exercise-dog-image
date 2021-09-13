import React, { Component } from 'react';
import Dogs from './Dogs';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      dogs: [],
    };

    this.renderDogImg = this.renderDogImg.bind(this);
    this.fetchDog = this.fetchDog.bind(this);
  }

  componentDidMount() {
    this.fetchDog();
  }

  async fetchDog() {
    this.setState(
      { loading: true },
      async () => {
        fetch('https://dog.ceo/api/breeds/image/random')
          .then((response) => response.json())
          .then((data) => {
            this.setState({ dogs: data.message, loading: false });
          });
      },
    );
  }

  renderDogImg() {
    return (
      <div>
        <button type="button" onClick={ this.fetchDog }>
          Mais um doguinho!
        </button>
      </div>
    );
  }

  render() {
    const { dogs, loading } = this.state;
    return (
      <section>
        <Dogs dogs={ dogs } loading={ loading } renderDogImg={ this.renderDogImg } />
      </section>
    );
  }
}

export default App;
