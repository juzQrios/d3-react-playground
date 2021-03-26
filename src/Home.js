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
            <Link to="/bar-chart">Bar Chart</Link>
          </li>
        </ul>
      </nav>
    </article>
  );
};

export default Home;
