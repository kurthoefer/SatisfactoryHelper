import React, { useState } from "react";
import ReactModal from 'react-modal';

import Tile from './Tile'

import styled from 'styled-components';

const InputContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
`


function InputParam() {
  // const [ modalIsOpen, setModalIsOpen] = useState(false)

  return (
    <InputContainer>
      <Tile />
      <Tile />
    </InputContainer>
  )
}

export default InputParam;

