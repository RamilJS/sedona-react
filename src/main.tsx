import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './compoments/app/App';
// import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
