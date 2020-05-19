import React, { Component } from "react";
import Counter from "./Counter";
import { Provider } from "react-redux";

import store from "./store";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        {/* <Example /> */}
        <Counter />
      </Provider>
    );
  }
}
export default App;
