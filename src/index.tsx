import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from './redux/store/store'
import Toggle from "./Toggle";



function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>Hello World</h1>
        <p>A simple toggle:</p>
        <Toggle />
      </div>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
