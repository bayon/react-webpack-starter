import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import SimpleRedirect from './simple-redirect';

var mountNode = document.getElementById("app");
//ReactDOM.render(<App name="Jack" />, mountNode);
ReactDOM.render(<SimpleRedirect />, mountNode);

/*

ReactDOM.render(
<SimpleRedirect />, 
document.getElementById('root')
);


*/