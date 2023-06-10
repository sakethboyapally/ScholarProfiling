import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider, CSSReset, extendTheme } from '@chakra-ui/react';
import App from './App';
import reportWebVitals from './reportWebVitals';

const theme = extendTheme({
  colors: {
    cyan: {
      500: "#93CBFF",
    },
    orange: {
      500: "#FDA172",
    },
    teal: {
      500: "#33B860",
    },
    indigo: {
      500: "#6792FF",
    },
  },
  fonts: {
    heading: `'Quicksand', sans-serif`,
    body: `'Quicksand', sans-serif`,
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <CSSReset />
        <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
