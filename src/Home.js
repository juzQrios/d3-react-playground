import { Link } from "react-router-dom";
import './Home.css'

const Home = (props) => {
  return (
    <article className="Home">
      <header className="Home-title">
        <h2>Browse</h2>
      </header>
      <nav className="navbar">
        <ul>
          {/* <li>
            <Link to="/">Home</Link>
          </li> */}
          <li>
            <Link to="/bar">Bar Charts</Link>
            <ul>
              <li>
                <Link to="/bar/1">Bar 1</Link>
              </li>
              <li>
                <Link to="/bar/2">Bar 2</Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </article>
  );
};

export default Home;
