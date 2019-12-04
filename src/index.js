import React from "react";
import ReactDOM from "react-dom";
import App from "./app";

//document.getElementById('challenge-node')
var mountNode = document.getElementById("app");
ReactDOM.render(<App name="Jack" />, mountNode);
//ReactDOM.render(document.getElementById('app'));