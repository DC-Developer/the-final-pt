import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
 
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
    .then(res => this.setState({message: res.message, fetching: false}))
    .catch(err => console.log(err));

  }

  callApi = async () => {
    const response = await fetch("/api/hello");
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  }

  render() {
    return (
      <div className="btn btn-primary btn-lg">
        {this.state.message}
      </div>
    );
  }
}

export default App;
