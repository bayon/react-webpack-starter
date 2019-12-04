import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";

 

import Other from './other';
import Particles from './particles';
import Typing from './typing';
import Spring from './spring';

export default function SimpleRedirect() {
  return (
    <Router>
      <div>
        <ForgotButton />
        <Switch>
        <Route path="/other">
            <Other></Other>
          </Route>

          <Route path="/particles">
            <Particles></Particles>
          </Route>
       
          <Route path="/typing">
            <Typing></Typing>
          </Route>

          <Route path="/spring">
            <Spring></Spring>
          </Route>

        </Switch>
      </div>
    </Router>
  );
}
 
function ForgotButton() {
  let history = useHistory();

  return  (
    <p>
        <button
        onClick={() => history.push("/other")}
      >
        Other
      </button>
      <button
        onClick={() => history.push("/particles")}
      >
        Particle Animation
      </button>
    
      <button
        onClick={() => history.push("/typing")}
      >
        Typing
      </button>

      <button
        onClick={() => history.push("/spring")}
      >
        Spring
      </button>
    </p>
  )  
}
 