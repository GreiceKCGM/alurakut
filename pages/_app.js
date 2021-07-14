/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { AlurakutStyles } from '../src/lib/CommonsAluraKut/resetStyles';

const GlobalStyle = createGlobalStyle`

  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
  }
  body {
   
    font-family:sans-serif;
    background-color: #D9E6F6;
  }

  #__next {
    display:flex;
    min-height: 100vh;
    flex-direction:column;
  }
  img {
    max-width: 100%;
    height: auto;
    display: block;
  }
  ${AlurakutStyles}
`;

const theme = {
  colors: {
    primary: '#0070f3',
  },
};

// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
