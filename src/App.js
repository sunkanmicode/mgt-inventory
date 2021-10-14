import { useState } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Login from "./pages/login/Login";
import Dashboard from "./pages/Dashboard.js/Dashboard";
import "./App.css";

function App() {
  const [isauthenticated, setIsAuthenticated] = useState(false);

  const isAuth =(Boolean) =>{
    setIsAuthenticated(Boolean)
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" render = {props=> !isauthenticated? ( <Login {...props} isAuth={isAuth} />):(<Redirect to='/dashboard' />)}/>
           
          <Route exact path="/dashboard" render = {props => isauthenticated? (<Dashboard {...props} isAuth={isAuth}/>):(<Redirect to= '/' />)}/>
           
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
