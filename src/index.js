import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ThemeContextProvider from "./contexts/ThemeContext";
// import { ChakraProvider } from '@chakra-ui/react'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

ReactDOM.render(
  // <ChakraProvider>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>,
  // </ChakraProvider>,
  document.getElementById("root")
);

reportWebVitals();
