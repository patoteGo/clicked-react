import React from 'react';
import './App.css';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      num: 1
    }
    this.handleclick = this.handleclick.bind(this);
  }



  handleclick(){
    
    this.setState({
      num: Math.floor(Math.random() * 10) + 1 
    }) 
  }
  render(){
    return (
      <div className="App">
          <h2>Number is {this.state.num}</h2>
          {this.state.num === 7 && <h3>You WIN</h3>}
          <button onClick={this.handleclick} className={this.state.num === 7 ? 'hide' : ''}>CLICK winner</button>
      </div>
    )
  }
  
}

export default App;
