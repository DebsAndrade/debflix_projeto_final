import React, {Component} from "react";
import Header from "./components/header/Header";
import Container from "./components/container/Container";

// Aqui, nessa parte do código, é criado um componente de classe que constituí a raiz do ReactJS.

class Api extends Component {

  render(){
    return(
      <Container>
        <Header />
      </Container>
    )
  }
}

export default Api;
