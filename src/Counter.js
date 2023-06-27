import React, { Component } from 'react';

export default class Counter extends Component {
  constructor(props) {
    console.log('Constructor');
    super(props);

    this.state = {
      counter: 0
    }

    this.incrementCounter = this.incrementCounter.bind(this);
  }

  // Called after render
  componentDidMount() {
    console.log('Component Did Mount');
    console.log('_____________');
  }

  incrementCounter(e) {
    e.preventDefault();

    this.setState({
      counter: this.state.counter + 1
    })
  }
  render() {
    console.log('Render');
    const { counter } = this.state; 

    return (
      <div>
        <div>{counter}</div>
        <button onClick={this.incrementCounter}>Increment Counter</button>
      </div>
    )
  }

  componentDidUpdate(prevProps, prevState, snapshop) {
    console.log('Component Did Update');
  }

  componentWillUnmount() {
    console.log('Component will UnMount');
  }
}