import React from "react";
import "./styles/color.css";
import "./styles/font.css";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from "context/AuthProvider";
import "./styles/index.css";
import "./styles/tailwind.css";
import "./styles/modal.css";
import "./styles/login.css"
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root"),
);
