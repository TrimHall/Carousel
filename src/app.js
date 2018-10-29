import React from 'react';
import ReactDOM from 'react-dom';

// Carousel components
import Carousel from './components/CarouselWrapper';

// Styling
import './scss/reset.css';
import './scss/style.css';

class App extends React.Component {
  render() {
    return (
      <Carousel />
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
