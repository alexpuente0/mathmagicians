import './navBar.css';
import { Link } from 'react-router-dom';

const navBar = () => (
  <div className="header">
    <Link id="logo" to="/home">
      Math Magicians
    </Link>
    <ul className="nav">
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li>
        <Link to="/calculator">Calculator</Link>
      </li>
      <li>
        <Link to="/quote">Quote</Link>
      </li>
    </ul>
  </div>
);

export default navBar;
