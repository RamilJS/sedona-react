
import { Route, Routes } from 'react-router-dom';
// import browserHistory from '../../browser-history';
import MainPage from '../../pages/main-page/main-page';
import Catalog from '../../pages/catalog/catalog';
import './app.css';


function App(): JSX.Element {

  return (
        <Routes>
          <Route
            path="/"
            element={<MainPage />} 
          />
          <Route
            path="/"
            element={<Catalog />} 
          />
        </Routes>

  )
};

export default App;
