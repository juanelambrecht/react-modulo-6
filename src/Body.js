import React, { Component } from "react";
import { Container } from "react-bootstrap";
import FormEstudiante from "./FormEstudiante";
import Welcome from "./Welcome";
import Cursos from "./Cursos";
import listarEstudiantes from "./listarEstudiantes";

export default class Body extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container fluid className="body">
        {this.props.itemClicked === 0 && <Welcome />}
        {this.props.itemClicked === 1 && <FormEstudiante />}
        {this.props.itemClicked === 2 && (
          <Cursos inputValue={this.props.inputValue} />
        )}
        {this.props.itemClicked === 3 && <listarEstudiantes />}
      </Container>
    );
  }
}
