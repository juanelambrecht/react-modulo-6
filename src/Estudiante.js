import React, { Component } from 'react'
import "./Estudiante.css"
export default class Estudiante extends Component {

  constructor(props){
    super(props);
  }
  
    render() {

        return (
            <div>
      <p className='estilo'>
        {this.props.estudiante.nombre + " " + this.props.estudiante.apellido }</p>
      </div>
    );
  }
}
