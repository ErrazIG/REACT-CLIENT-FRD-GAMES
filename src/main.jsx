import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'


import { routes } from './routes.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Use Recoil (Stockage du Token) [npm i recoil]
import { RecoilRoot } from 'recoil';

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  </React.StrictMode>,
);