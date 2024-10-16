
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import ScrollToTop from '../../utils/scroll-to-top';
// import browserHistory from '../../browser-history';
import MainPage from '../../pages/main-page/main-page';
import Catalog from '../../pages/catalog/catalog';
import NotFoundScreen from '../../pages/not-found/not-found-screen';


function App(): JSX.Element {

  return (
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
          <Route
            path="/"
            element={<MainPage />} 
          />
          <Route
            path="/catalog"
            element={<Catalog />} 
          />
          <Route
            path="/*"
            element={<NotFoundScreen />} 
          />
        </Routes>
    </BrowserRouter>
  )
};

export default App;
