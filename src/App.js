import React from 'react';
import Calculator from './components/calculator';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div clasname="App">
        <Calculator />
      </div>
    );
  }
}

export default App;
