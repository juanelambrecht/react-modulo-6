import React, { Component } from 'react';
import "./Estudiante.css";

export default class listarEstudiantes extends Component {

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    
    this.state={
        estudiantes: [
            {
              nombre: "juan",
              key: "1",
            },
            {
                nombre: "pedro",
                key: "2",
            },
            {
                nombre: "carlos",
              key: "3",
            }
          ]
    }
  }

  handleClick(){
      this.setState((state)=>({


      }));
  }
  
    render() {

        return (
            <div>
                
                <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Curso</th>
                    <th>Hora</th>

                </tr>


            </thead>
            <tbody>
           {this.state.estudiantes.map((item) => (
         <tr>
            <td>{item.key}</td>
            <td>{item.nombre}</td>
        </tr>
    ))}
    </tbody> 
    
</table>;
        <button onClick={this.handleClick}>Inscribirse</button>
      </div>

    );
  }
}