import React from "react";
import logo from "./logo.svg";
import "./App.css";
import DetailedList from "./Component/DetailedList";
import RepoList from "./Component/RepoList";
import FavouriteList from "./Component/FavouriteList";
import Home from "./Component/Home";
import { Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Redirect to="/list" />
        </Route>
        <Route exact path="/:page" component={Home} />
        {/* <Route exact path="/lists" component={RepoList} />
        <Route exact path="/details" component={DetailedList} />
        <Route exact path="/favourites" component={FavouriteList} /> */}
      </Switch>
    </div>
  );
}

export default App;
