import React from "react";
import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Routes from "./routes";
import theme from "./assets/styles/themes/theme";
import GlobalStyle from "./assets/styles/global";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
      <ToastContainer autoClose={4000} />
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
