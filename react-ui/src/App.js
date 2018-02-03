import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import Login from './pages/Login/Login.js';
import Client from './pages/Client/Client.js';
import Register from './pages/Register/Register.js';
import ClientModal from './components/ClientModal';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      fetching: true
    };
  }

  componentDidMount() {
    // fetch('/api/hello')
    //   .then(response => {
    //     if (!response.ok) {
    //       throw new Error(`status ${response.status}`);
    //     }
    //     return response.json();
    //   })
    //   .then(json => {
    //     this.setState({
    //       message: json.message,
    //       fetching: false
    //     });
    //   })
    //   .catch(e => {
    //     this.setState({
    //       message: `API call failed: ${e}`,
    //       fetching: false
    //     });
    //   })
    this.callApi()
    .then(res => this.setState({ message: res.message, fetching: false }))
    .catch(err => console.log(err));

  }

  callApi = async () => {
    const response = await fetch("/api/hello");
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    console.log("react server: ", body);

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
          
          {/* {this.state.message} */}

          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/client" component={Client} />

        </div>
      </Router>
    );
  }
}

export default App;
