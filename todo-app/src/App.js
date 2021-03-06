import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

let api = axios.create({
  baseURL: 'http://localhost:6913'
});

export default class App extends Component {
  state = {
    items: [],
    newItem: ''
  }

  async componentDidMount() {
    let res = await api.get('/items');
    this.setState({
      items: res.data.items
    });
  }

  handleItemChange = (event) => {
    this.setState({
      newItem: event.target.value
    });
  }

  addItem = async (event) => {
    event.preventDefault();

    let res = await api.post('/items', { item: this.state.newItem });

    this.setState({
      items: res.data.items,
      newItem: ''
    });
  }

  deleteItem = async (index) => {
    let res = await api.delete(`/items/${index}`);

    this.setState({
      items: res.data.items
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
          {this.state.items.map((item, index) => {
            return (
              <div className="TodoItem" key={item} onClick={() => this.deleteItem(index)}>
                <p>{item}</p>
              </div>
            )
          })}

          <form>
            <input type="text" placeholder="New Item" onChange={this.handleItemChange} value={this.state.newItem} />
            <button onClick={this.addItem}>Add</button>
          </form>
        </div>
      </div>
    );
  }
};