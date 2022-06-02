import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import Navbar from './components/navBar';
import Home from './pages/home';
import Quote from './pages/quote';
import Calculator from './components/calculator';
import './App.css';

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
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/Calculator" element={<Calculator />} />
          <Route path="/quote" element={<Quote />} />
        </Routes>
      </div>
    );
  }
}

export default App;

//
