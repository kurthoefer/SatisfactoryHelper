import React, { Component } from "react";

import Query from "./Query.js"
import { QueryProvider } from './context/QueryContext'

import styled from 'styled-components';

const Container = styled.div``

class App extends Component {
  render() {
    return (
      <Container>
        <QueryProvider>
          <Query />
        </QueryProvider>
      </Container>
    );
  }
}

export default App;