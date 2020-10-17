import React, { useState } from "react";
import ReactModal from 'react-modal';

import styled from 'styled-components';

const ItemTile = styled.div`
  margin: 5px;
  border-style: solid;
  border-radius: 10px;
  border-width: 2px;
  border-color: ${(props) => (props.purity ? props.purity : 'grey')};
  /* background-image: ${(props) => (props.ingredient ? )} */
`

// const 


function Tile() {
  const [ modalIsOpen, setModalIsOpen] = useState(false)

  return (
    <ItemTile onClick={() => setModalIsOpen(true)}>
      {/* <ItemTile onClick={() => setModalIsOpen(true)}>
        Open
      </ItemTile> */}
      <ReactModal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
          <h2>TITLE</h2>
      </ReactModal>
    </ItemTile>
  )
}

export default Tile;

