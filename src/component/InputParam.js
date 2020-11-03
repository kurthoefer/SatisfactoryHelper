import React from "react"
import { useQuery } from './context/QueryContext'

import Tile from './Tile'

import styled from 'styled-components'

const InputContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
`

function InputParam() {
  const queryContext = useQuery()
  console.log('var queryContext: ', queryContext)
  return (
    <InputContainer >
      {queryContext.resourcesState.map(resource => {
        return (
          <Tile 
            dispatchResources={queryContext.dispatchResources}
            key={resource.id}
            id={resource.id}
            name={resource.name}
            quantity={resource.quantity}
            purity={resource.purity}
            // dispatchResources={queryContext.dispatchResources}
          />
        )
      })}
      <Tile empty={true} dispatchResources={queryContext.dispatchResources} />
    </InputContainer>
  )
}

export default InputParam;