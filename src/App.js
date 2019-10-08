import React, { Component } from 'react';

/// Modifica el componente para que se puedan agregar tareas

class App extends Component {
  constructor() {
    super();
    this.state = {
      list: ['Sacar la ropa', 'Hacer la cama', 'Leer un rato'],
      value: ''
    }
  }
  handleValue = (e) => { 
    return this.setState ({value: e.target.value}) };

  keyPressed = (e) =>{
    if (e.key === "Enter") {
      e.preventDefault();
      this.state.list[this.state.list.length] = this.state.value
      e.target.value = '';
      this.state.value = '';
      return   this.setState ({list: this.state.list})
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
           <form>
             <input type="text" onChange = {this.handleValue} onKeyPress={this.keyPressed} id="new-task" placeholder="Ingresa una tarea y oprime Enter" />
           </form>
        </div>
      </div>
    )
  }
}


export default App;
