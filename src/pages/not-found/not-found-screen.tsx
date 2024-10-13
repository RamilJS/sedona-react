import {Link} from 'react-router-dom';


function NotFoundScreen(): JSX.Element {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
            
            </div>
          </div>
        </div>
      </header>
      <div >
        
        <h1 >Error 404
          <br />
          <small>Page not found</small>
        </h1>
        <p >
          <Link to="/" >Go to main page</Link>
        </p>
      </div>
    </>
  );
}

export default NotFoundScreen;
