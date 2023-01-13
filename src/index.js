import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { App } from 'components/App';
import { theme } from 'theme/theme';
import { store } from './redux/contacts/store';
import { Provider } from 'react-redux';
// import * as mockAPI from './components/service/mockAPI';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);

// mockAPI.postContact({
//   name: 'newName',
//   phone: 'newNumber',
// });
