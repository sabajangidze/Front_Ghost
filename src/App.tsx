import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";

import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <div className="App font-mrgvlovani">
      <Provider store={store}>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
      </Provider>
    </div>
  );
}

export default App;
