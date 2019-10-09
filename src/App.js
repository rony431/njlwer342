import React, { Component } from 'react';

/// Modifica el componente para que se puedan agregar tareas

class App extends Component {
  constructor() {
    super(); 
    this.state = {
      list: ['Sacar la ropa','Hacer la cama','Leer un rato'],
      value: ''
    }
  }
  handleValue = (e) => { 
    return this.setState ({value: e.target.value}) };

  keyPressed = (e) =>{
    e.preventDefault();
    if (this.state.value) {
      this.state.list[this.state.list.length] = this.state.value
      return this.setState ({list: this.state.list, value: ""})

    }
  } ;
  render() {
    return (
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          <ul className="todo" >
          {this.state.list.map((list, key) =>
          <li>{list}</li>
           )}
          
          </ul>
           <form onSubmit ={this.keyPressed}>
             <input type="text" onChange = {this.handleValue} value = {this.state.value} id="new-task" placeholder="Ingresa una tarea y oprime Enter" />
           </form>
        </div>
      </div>
    )
  }
}


export default App;
