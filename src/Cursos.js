import React, { Component } from "react";
import "./Estudiante.css";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default class Cursos extends Component {
  constructor(props) {
    super(props);
    this.listarCursos = this.listarCursos.bind(this);
    //  this.listarCursosDeX = this.listarCursosDeX.bind(this);
    this.limpiar = this.limpiar.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      form: {
        nombre: "",
        apellido: "",
        curso: "",
      },
      resultado: "",
      cursos: [],
    };

    fetch("http://localhost:1234/estudiantes")
      .then((resp) => resp.json())
      .then((json) => {
        this.setState({
          cursos: json.personas,
          resultado: json.result,
        });
      });
  }

  handleChange(e) {
    let nombre = e.target.name;
    let valor = e.target.value;

    this.setState((state) => ({
      form: {
        ...state.form,
        [nombre]: valor,
      },
    }));
  }

  listarCursos() {
    fetch("http://localhost:1234/estudiantes")
      .then((resp) => resp.json())
      .then((json) => {
        this.setState({
          cursos: json.personas,
          resultado: json.result,
        });
      });
  }

  limpiar() {
    this.setState((state) => ({
      cursos: [],
    }));
  }

  //   listarCursosDeX(inputValue) {
  //     fetch("http://localhost:1234/estudiantes?apellido=" + inputValue)
  //       .then((resp) => resp.json())
  //       .then((json) => {
  //         this.setState({
  //           cursos: json.personas,
  //           resultado: json.result,
  //         });
  //       });
  //   }

  //   componentDidUpdate(prevProps, prevState) {
  //     if (prevProps.inputValue !== this.props.inputValue)
  //       this.listarCursosDeX(this.props.inputValue);
  //   }

  //   componentDidMount() {
  //     this.listarCursosDeX(this.props.inputValue);
  //   }

  componentDidMount() {
    fetch("http://localhost:1234/localidades")
      .then((r) => r.json())
      .then((json) => {
        this.setState({
          cursos: json.localidades,
        });
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    fetch(
      "http://localhost:1234/estudiantes?apellido=" +
        this.state.form.apellido +
        "&nombre=" +
        this.state.form.nombre +
        "&cursos[0].id=" +
        this.state.form.curso[0]
    )
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
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Cursos</Form.Label>
            <Form.Control name="curso" onChange={this.handleChange} as="select">
              {this.state.cursos.map((l) => (
                <option value={l.id}>{l.curso}</option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              name="nombre"
              onChange={this.handleChange}
              value={this.state.form.nombre}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Apellido</Form.Label>
            <Form.Control
              type="text"
              name="apellido"
              onChange={this.handleChange}
              value={this.state.form.apellido}
            />
          </Form.Group>
          <Button onClick={this.handleSubmit} type="submit">
            Enviar
          </Button>
        </Form>
        // Fin del formulario filtro // Tabla de estudiantes
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Nombre </th>
              <th>Apellido </th>
              <th>Curso </th>
            </tr>
          </thead>
          <tbody>
            {this.state.cursos.map((item, index) => (
              <tr>
                <td>{item.nombre}</td>
                <td>{item.apellido}</td>
                <td>{item.cursos && item.cursos[0].curso}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Button variant="outline-primary" onClick={this.limpiar}>
          Limpiar
        </Button>{" "}
        <Button variant="outline-secondary" onClick={this.listarCursos}>
          Listar Cursos
        </Button>{" "}
      </div>
    );
  }
}
