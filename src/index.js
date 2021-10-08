import React from "react";
import ReactDOM from "react-dom";
import { Router } from 'react-router-dom';

import "mdb-ui-kit";
import "./index.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import history from './utils/history';

import ThemeProvider from "./themes";
import { ThemeContextProvider } from "./context/ThemeContext";

import App from "./routes";
import reportWebVitals from "./reportWebVitals";
import { Container } from "./components";

ReactDOM.render(
  <React.StrictMode>
    <Router basename={process.env.PUBLIC_URL} history={history}>
      <ThemeContextProvider>
        <ThemeProvider>
          <Container>
            <App />
          </Container>
        </ThemeProvider>
      </ThemeContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
