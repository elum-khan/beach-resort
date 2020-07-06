import React from "react";

import "./App.css";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";

import { BrowserRouter as Router, Link } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/rooms" exact component={Rooms} />
          <Route path="/rooms/:slug" exact component={SingleRoom} />

          <Route component={Error} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
