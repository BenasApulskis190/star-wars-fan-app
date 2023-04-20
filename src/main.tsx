import React from 'react';
import { Provider } from 'react-redux';
import { CssBaseline, ThemeProvider, Typography } from '@mui/material';
import ReactDOM from 'react-dom/client';
import App from './App';
import './i18n';
import { store } from './app/store';
import theme from './theme';
import ErrorBoundary from './ErrorBoundary';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ErrorBoundary
          fallback={
            <Typography variant="h4" color="error" align="center">
              Something went wrong. Application cant recover reload the page
            </Typography>
          }
        >
          <App />
        </ErrorBoundary>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
