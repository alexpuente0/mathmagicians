import React from 'react';
import './home.css';

const Home = () => (
  <div className="home">
    <h2 className="home__title">Welcome to our page!</h2>
    <p className="home__text">
      Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry standard dummy text ever
      since the 1500s, when an unknown printer took a galley of type and
      scrambled it to make a type specimen book.
    </p>

    <p className="home__footer">
      This Project was made as a Single Page App using React.
    </p>
  </div>
);

export default Home;
