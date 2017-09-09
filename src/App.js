import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form.js';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      email : '',
      phone : '',
      name : '',
      address : '',
      occupation: '',
      count : 0
    }
  }

  handleForm(name , email , phone , address , occupation){
    this.setState({name : name , email: email , phone : phone , address : address , occupation : occupation , count:1});
  }

  render() {
    return (
      <div className="App">
        <Form/>
      </div>
    );
  }
}

export default App;
