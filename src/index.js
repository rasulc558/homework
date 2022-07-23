import React from "react";
import reactdom from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import App from "./app";
import App2 from "./app2";

reactdom.render(<App />, document.querySelector("#root"));
// reactdom.render(<Navbar/>, document.querySelector('#root'))
