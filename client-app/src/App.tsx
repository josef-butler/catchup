import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  state = {
    values: []
  }

  componentDidMount() {
    this.setState({
      values: [{
        id: 1,
        name: 'Value 101'
      },
      {
        id: 2,
        name: 'Value 202'
      }]
    })
  }

  render() {
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
    )
  }
}

export default App;