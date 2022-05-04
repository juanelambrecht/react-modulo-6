import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.state = {
      searchTxt: "",
    };
  }

  handleSearch() {
    this.props.doSearch(this.state.searchTxt);
  }

  handleClick(e, itemClicked) {
    this.props.handler(itemClicked);
  }

  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#" onClick={(e) => this.handleClick(e, 0)}>
          Curso de React
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: "100px" }}
          navbarScroll
        >
          <Nav.Link href="#" onClick={(e) => this.handleClick(e, 1)}>
            Crear Estudiante
          </Nav.Link>
          <Nav.Link href="#" onClick={(e) => this.handleClick(e, 2)}>
            Lista Estudiantes
          </Nav.Link>
        </Nav>
        <Form className="d-flex">
          <FormControl
            type="text"
            placeholder="Apellido..."
            className="mr-sm-2"
            onChange={(e) =>
              this.setState({
                searchTxt: e.target.value,
              })
            }
          />
          <Button variant="outline-success" onClick={this.handleSearch}>
            Buscar
          </Button>
        </Form>
      </Navbar>
    );
  }
}
