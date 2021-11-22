import React from "react";
import ReactDom from "react-dom";

//Components
import App from "./components/App";

//Bootstarp CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

ReactDom.render(<App />, document.querySelector("#root"));
