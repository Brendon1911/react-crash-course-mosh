import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  };
  
  handleIncrement = product => {
    console.log(product);
    this.setState({ count: this.state.count + 1 });
  }
  
  render () {
    let product = {
        id: 1
      };
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={ () => this.handleIncrement(product)} 
          className="btn btn-secondary btn-sm">
          Increment
        </button>
      </div>
    );
  }
  
  formatCount () {
    if (this.state.count === 0) {
      return "Zero";
    }
    return this.state.count;
  }
  
  getBadgeClasses () {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }
  
}

export default Counter;