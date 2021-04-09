import {Link} from 'react-router-dom';
import './PageTemplate.css';
import BrowseMenu from './BrowseMenu';

const PageTemplate = (props) => {
  return (
    <article className="PageTemplate">
      <nav>
        <Link to="/">{'< Back'}</Link>
        {/* <BrowseMenu /> */}
      </nav>
      <header className="page-title">
        <h2>{props.title}</h2>
      </header>
      <main className="page-body">
        {props.children}
      </main>
    </article>
  );
}

export default PageTemplate;
