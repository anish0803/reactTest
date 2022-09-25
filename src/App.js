import React, { Component } from 'react'
import "./App.css"
import ListItems from './Listitems';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      items:[],
      currentItem:{
        text:'',
        key:''
      }
    }
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);

 
  }

  handleInput(e){
    this.setState({
      currentItem:{
        text: e.target.value,
        key: Date.now()
      }
    })
  }
 
  addItem(e){
    e.preventDefault();
    const newItem = this.state.currentItem;
    if(newItem.text !==""){
      const items = [...this.state.items, newItem];
    this.setState({
      items: items,
      currentItem:{
        text:'',
        key:''
      }
    })
    }
  }

  
  render() {
    return (
      <div className="App">
      <header>
        <form id="to-do-form" onSubmit={this.addItem}>
          <input type="text" placeholder="Enter text here"
          value={this.state.currentItem.text}
          onChange={this.handleInput}
          ></input>
          <button type="submit">Add</button>
        </form>
        
        
      </header>
      <ListItems items = {this.state.items} />
    </div>
    )
  }
}
