import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './App';
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from "./contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Login from "./Components/Login";
import Signup from "./Components/Signup"
import { Container } from "react-bootstrap"
import Dashboard from "./Components/Dashboard"
import PrivateRoute from "./Components/PrivateRoute"
import ForgotPassword from "./Components/ForgotPassword"
import UpdateProfile from "./Components/UpdateProfile"


ReactDOM.render(
  <Router>
  <AuthProvider>
    <Switch>
      <PrivateRoute exact path="/" component={Dashboard} />
      <PrivateRoute path="/update-profile" component={UpdateProfile} />
      <Route path="/home" component={Home} />
      <Route path="/signup" component={Signup} />
      <Route path="/login" component={Login} />
      <Route path="/forgot-password" component={ForgotPassword} />
      
    </Switch>
  </AuthProvider>
</Router>

  ,
  document.getElementById('root')
);

reportWebVitals();

