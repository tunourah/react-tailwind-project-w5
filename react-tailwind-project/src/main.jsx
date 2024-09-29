import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom'; 
import Router from './router/Router';
import './index.css';

const rootElement = document.getElementById('root');

createRoot(rootElement).render(
  <StrictMode>
    <RouterProvider router={Router} />  
  </StrictMode>
);
