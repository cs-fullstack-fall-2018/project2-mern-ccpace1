import React, { Component } from 'react';
import './App.css';
import Header from "./Header";
import InputFields from "./InputFields";
import Posts from "./Posts";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {data: []}
    }
  render() {
      fetch('/posts')
          .then(data => data.json())
          .then(response => this.setState({data: response}));
    return (
      <div className="App">
        <Header/>
        <p className="App-intro">
            This is Cody's journal site.
        </p>
         <InputFields/>
          <Posts arr={this.state.data}/>
      </div>
    );
  }
}

export default App;
