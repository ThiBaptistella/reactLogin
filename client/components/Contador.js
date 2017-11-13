import React from 'react';

export default class Contador extends React.Component{
  constructor(){
    super();
      this.state = {
        contador: 0
      };
    }

    increment(){
      this.setState({
        contador:  this.state.contador + 1
      });
    }
    decrement(){
      this.setState({
        contador: this.state.contador - 1
      });
    }

  render(){
    return(
      <div>
        <div>
          <h1>{this.state.contador}</h1>
        </div>
        <div>
          <button onClick={this.decrement.bind(this)}>less</button>
          <button onClick={this.increment.bind(this)}>more</button>
        </div>
      </div>
    );
  }

}
