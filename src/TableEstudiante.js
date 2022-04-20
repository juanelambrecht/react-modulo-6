import React, { Component } from 'react';
import "./Estudiante.css";

export default class TableEstudiante extends Component {

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);

    this.state={
        cursos: [
            {
              curso: "Matematica",
              horas: "92",
              key: "1",
            },
            {
                curso: "Matematica",
                horas: "92",
                key: "2",
            },
            {
                curso: "Matematica",
                horas: "92",
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
           {this.state.cursos.map((item) => (
         <tr>
            <td>{item.key}</td>
            <td>{item.curso}</td>
            <td>{item.horas}</td>
        </tr>
    ))}
    </tbody> 
    
</table>
        <button onClick={this.handleClick}>Inscribirse</button>
      </div>

    );
  }
}