import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value
  };
  
  handleIncrement = product => {
    this.setState({ count: this.state.value + 1 });
  }
  
  render () {
    
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={ () => this.handleIncrement} 
          className="btn btn-secondary btn-sm">
          Increment
        </button>
      </div>
    );
  }
  
  formatCount () {
    if (this.state.value === 0) {
      return "Zero";
    }
    return this.state.value;
  }
  
  getBadgeClasses () {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }
  
}

export default Counter;