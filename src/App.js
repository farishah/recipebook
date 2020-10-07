import React from "react";
import AddRecipe from "./pages/AddRecipe";
import RecipesPage from "./pages/RecipesPage";


import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";


function App() {
  return (
    <div>
      <Router>
        <main>
          <Switch>
            <Route path="/" exact component={RecipesPage} />
            <Route path= "/add" exact component={AddRecipe} />
            <Redirect to="/" />
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;