import React, {Component}from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Route, Switch} from "react-router-dom";

import MenuItem from "./components/search/menuItem.js";
import ItemPage from "./components/item-page/ItemPage.jsx";
import Error from "./components/item-page/error.js";
import Navigation from "./components/item-page/navigation.js";
import Home from "./home.jsx";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
        
          <Navigation />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/item" component={ItemPage} />
            <Route component={Error} />
          </Switch>

        </div>
      </BrowserRouter>
    );
  }
};


ReactDOM.render(<App />, document.getElementById("App"));
