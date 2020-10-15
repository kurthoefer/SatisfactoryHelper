import React, { useState } from "react";
import ReactModal from 'react-modal';

import Tile from './Tile'

import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
`


function InputParam() {
  const [ modalIsOpen, setModalIsOpen] = useState(false)

  return (
    <div>
      <button onClick={ () => setModalIsOpen(true) }>Open</button>
      <ReactModal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
          <h2>TITLE</h2>
      </ReactModal>
    </div>
  )
}

export default InputParam;

