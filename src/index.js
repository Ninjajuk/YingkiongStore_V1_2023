import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import { SnackbarProvider } from 'notistack'

import {store} from './redux/store'
import router from '../src/routes/Routes'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>

      {/* <SnackbarProvider maxSnack={3}> */}
        <App/>
      {/* </SnackbarProvider> */}
      {/* <ToastContainer /> */}

    </Provider>
  </React.StrictMode>
);


