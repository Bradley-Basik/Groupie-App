import Main from "./Components/Main";
import store from "./redux/store";
import { Provider } from "react-redux";
import React from "react";

export default function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}
