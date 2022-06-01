import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/navBar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Outlet />
      </div>
    );
  }
}

export default App;
