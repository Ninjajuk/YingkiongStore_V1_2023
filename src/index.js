import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { SnackbarProvider } from 'notistack'
import { RouterProvider } from "react-router-dom";
import router from '../src/routes/Routes'
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <SnackbarProvider maxSnack={3}>
        <App />
      </SnackbarProvider>
    </RouterProvider>
  </React.StrictMode>
);


