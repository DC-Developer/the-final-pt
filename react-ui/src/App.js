import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import Login from './pages/Login/Login.js';
import Client from './pages/Client/Client.js';
import Register from './pages/Register/Register.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      fetching: true,
      didChildUpdate: false
    };
  }

  componentDidMount() {

    this.callApi()
    .then(res => this.setState({ message: res.message, fetching: false }))
    .catch(err => console.log(err));

  }
//I should make callApi() a seperate file and import it, since it is
//going to be used multiple times in this application
  callApi = async () => {
    const response = await fetch("/api/hello");
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    console.log("app.js callApi: ", body);

    return body;
  }


  render() {
    return (
      <Router>
        <div>
          <ul className="noStyle">
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/client">Client Page</Link>
            </li>
          </ul>

          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/client" component={Client} />

        </div>
      </Router>
    );
  }
}

export default App;
