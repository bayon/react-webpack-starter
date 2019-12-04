
import React from "react";
import { hot } from 'react-hot-loader/root';

class App extends React.Component {

  render() {
    console.log("react or not react.");
    const { name } = this.props;
    return <h1>Hello {name}</h1>;
  }
}

export default hot(App);
