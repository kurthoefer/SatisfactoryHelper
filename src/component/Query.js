import React, { Component } from "react";
// import ReactModal from 'react-modal';

import InputParam from './InputParam';
// import MKSpeed from './MKSpeed';
import OutputParam from './OutputParam';

import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 2fr;
  grid-template-areas: 'input mks output';
  height: 40vw;
`

class Query extends Component {

  render() {
    return (
      <Container>
       <InputParam />
        {/* <MKSpeed /> */}
        {/* <OutputParam /> */}
      </Container>
    );
  }
}


// function Query() {
  
//   return (
//     <Container>
//       <InputParam />
//       {/* <MKSpeed /> */}
//       {/* <OutputParam /> */}
//     </Container>
//   );

// }

export default Query;


// state = {
  //   overclock: false,
  //   water: false,
  //   parts: {
  //     bauxite: 0,
  //     caterium: 0,
  //     coal: 0,
  //     copper_ore: 0,
  //     crude_oil: 0,
  //     iron_ore: 0,
  //     limestone: 0,
  //     raw_quartz: 0,
  //     sulfur: 0,
  //     uranium: 0
  //   },
  //   components: {
  //     circuit_board: 0,
  //     copper_sheet: 0,
  //     silica: 0
  //   },
  //   target: [
  //     circuit_board,
  //     copper_sheet,
  //     silica
  //   ],
  //   modalIsOpen: false,
  //   setModalIsOpen: false
  // }