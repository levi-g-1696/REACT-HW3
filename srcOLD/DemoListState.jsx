import React, { Component } from 'react';

export default class DemoListState extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [2,3,1]
    };
  }

  //Clear All
  onClearArray = () => {
    this.setState({ list: [] });
  };

  //Add Item
    onAddItem = () => {
   let newNum =  Math.floor(Math.random() * 10);
    this.setState({ list: [...this.state.list,newNum] });
  };

  //Remove Last Item
  onRemoveLast = () => {
    this.setState({ list: [...this.state.list.slice(0,-1)] });
  };

  render() {
    return (
 
      <div>
        <br></br>
         <button type="button" onClick={this.onClearArray}>Clear Array</button>&nbsp;
         <button type="button" onClick={this.onAddItem}>Add Item</button>&nbsp;
         <button type="button" onClick={this.onRemoveLast}>RemovevLast</button>&nbsp;
  
         <br></br>
        <hr></hr>
        <ul>  
          {this.state.list.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>

      
      </div>
    );
  }
}
