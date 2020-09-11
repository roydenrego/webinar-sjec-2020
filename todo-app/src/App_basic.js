import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends Component {
  state = {
    items: ["Learn React Basics", "Explore redux", "Learn Nodejs"],
    newItem: ''
  }

  handleItemChange = (event) => {
    this.setState({
      newItem: event.target.value
    });
  }

  handleOnClick = (event) => {
    event.preventDefault();

    let items = this.state.items;
    items.push(this.state.newItem);

    this.setState({
      items
    });
  }

  render() {
    return (
      <div className="App">
        <header>
          <img src={logo} className="App-logo" alt="logo" />
          <h1>React ToDo</h1>
        </header>

        <div className="TodoContainer">
          {this.state.items.map(item => {
            return (
              <div className="TodoItem">
                <p>{item}</p>
              </div>
            )
          })}

          <form>
            <input type="text" placeholder="New Item" onChange={this.handleItemChange} value={this.state.newItem} />
            <button onClick={this.handleOnClick}>Add</button>
          </form>
        </div>
      </div>
    );
  }
};