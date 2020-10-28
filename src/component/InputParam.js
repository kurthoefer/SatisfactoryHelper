import React, { useState } from "react";
// import ReactModal from 'react-modal';

import Tile from './Tile'

import styled from 'styled-components';

const InputContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
`

function InputParam() {
  const queryContext = useContext(QueryContext)
  // const [ modalIsOpen, setModalIsOpen] = useState(false)

  return (
    <InputContainer>
      {queryContext.resources.map(resource => {
        <Tile 
          key={resource.id}
          name={resource.name}
          quantity={resource.quantity}
          purity={resource.purity}
          dispatchResources={queryContext.dispatchResources}
        />
      })}
      <Tile empty={true} />
    </InputContainer>
  )
}

export default InputParam;