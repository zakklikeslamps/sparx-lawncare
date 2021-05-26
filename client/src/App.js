import React, { Component } from "react";
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import SignupForm from "./pages/Signup";
import "./App.css";
import Header from './components/Header';
import NavLinks from './components/Nav';
import About from './components/About';
import Footer from './components/Footer';

class App extends Component {


  render() {
    return (

      <Router>
        <div className="App">
          <Header />
          <NavLinks />
        </div>
        <div>
          <Switch>
            <Route exact path="/" component={LoginForm} />
            <Route exact path="/signup" component={SignupForm} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;