import React, { Component } from "react";
import Query from "./Query.js"

import styled from 'styled-components';

const Container = styled.div``

class App extends Component {
  render() {
    return (
      <Container>
        <Query />
      </Container>
    );
  }
}

export default App;