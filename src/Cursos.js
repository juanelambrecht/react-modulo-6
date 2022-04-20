import React, { Component } from 'react';
import "./Estudiante.css";

export default class Cursos extends Component {

  constructor(props){
    super(props);
    this.listarCursos = this.listarCursos.bind(this);
    this.listarCursosDeX = this.listarCursosDeX.bind(this);
    this.limpiar = this.limpiar.bind(this);
    
    this.state={
        cursos: []
    }
  }
    listarCursos(){
        fetch("http://localhost:12/estudiantes")
        .then((resp) => resp.json())
        .then((json) => {
            this.setState({
                cursos: json.personas,
                resultado: json.result,
            });
        });
}

    limpiar(){
    this.setState((state)=>({
        cursos: [],

    }));
}

    listarCursosDeX(){
        fetch("http://localhost:12/estudiantes?apellido=Garcia")
        .then((resp) => resp.json())
        .then((json) => {
            this.setState({
                cursos: json.personas,
                resultado: json.result,
            });
        });
}
    render() {

        return (
            <div>
                <table>
            <thead>
                <tr>
                    <th>Nombre  </th>
                    <th>Apellido   </th>
                    <th>Curso    </th>
                  

                </tr>


            </thead>
            <tbody>
           {this.state.cursos.map((item,index) => (
         <tr>
            <td>{item.nombre}</td>
            <td>{item.apellido}</td>
            <td>{item.cursos && item.cursos[0].curso}</td>
        </tr>
    ))}
    </tbody> 
    
</table>
        <button onClick={this.limpiar}>Limpiar</button>
        <button onClick={this.listarCursos}>Listar Cursos</button>
        <button onClick={this.listarCursosDeX}>Listar Cursos De X Alumno</button>
      </div>

    );
  }
}