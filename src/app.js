
import React from "react";
import { hot } from 'react-hot-loader/root';

class App extends React.Component {

  render() {
     
    const { name } = this.props;
    return <p>Hello {name}</p>;
  }
}

export default hot(App);
