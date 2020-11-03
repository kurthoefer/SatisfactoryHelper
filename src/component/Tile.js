import React, { useState } from "react";
import ReactModal from 'react-modal';

import ACTIONS from "./context/ACTIONS";
import { inputMaterials } from '../data/dataMap'

import styled from 'styled-components';

const ItemName = styled.div`
  grid-area: itemName;
  justify-self: center;
`

const ItemPurity = styled.div`
  grid-area: itemPurity;
  justify-self: center;
  font-size: .75em;
`

const ItemQuantity = styled.div`
  grid-area: itemQuant;
  justify-self: center;
`

const ItemQuantityButtonDec = styled.button`
  height: 20px;
  width: 20px;
  border: none;
  border-radius: 50%;
  background-color: #7AA379;
  color: #1A1E24;
  justify-self: center;
  grid-area: decQuant;
`

const ItemQuantityButtonInc = styled.button`
  height: 20px;
  width: 20px;
  border: none;
  border-radius: 50%;
  background-color: #7AA379;
  color: #1A1E24;
  justify-self: center;
  grid-area: incQuant;
`

// const ItemQuantityButtonLeft 

// const ItemQuantityButtonRight 

const purity = (purity) => {
  if (purity === 3) return 'purple';
  if (purity === 2) return 'yellow';
  return 'grey';
}

const slugToImage = (resourceSlug) => {
  for (slug in inputMaterials) {
    if (slug === resourceSlug) return inputMaterials.slug.icon
  }
  console.log('incomplete slugToImage in Tile.js')
}

function Tile(props) {
  console.log('props in Tile: ', props)
  // console.log('props.name (top of Tile function): ', props.name)

  const ItemTile = styled.div`
    margin: 5px;
    border-style: solid;
    border-radius: 10px;
    border-width: 2px;
    border-color: ${() => (props.purity ? purity(props.purity) : 'grey')};
    background-image: url(${() => (props.slug ? `/assets/parts/${slugToImage(props.slug)}.png` : '/assets/misc/plus.png')});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    grid-template-areas:
      '. . itemName . .'
      '. . itemPurity . .'
      '. . . . .'
      '. . . . .'
      'decQuant . itemQuant . incQuant';
  `

  if (!props.empty) {
    // console.log('thethis props:', props)
    return (
      <ItemTile>
        <ItemName>
          {props.name}
        </ItemName>
        <ItemPurity onClick={() => props.dispatchResources({
          type: ACTIONS.TOGGLE_PURITY,
          payload: {
            id: props.id
          }
        })}>
          Purity
        </ItemPurity>
        <ItemQuantity>
          {props.quantity}
        </ItemQuantity>
        <ItemQuantityButtonDec onClick={() => props.dispatchResources({
          type: ACTIONS.DECREMENT_QUANTITY,
          payload: {
            id: props.id
          }
        })}>
          -
        </ItemQuantityButtonDec>
        <ItemQuantityButtonInc onClick={() => props.dispatchResources({
          type: ACTIONS.INCREMENT_QUANTITY,
          payload: {
            id: props.id
          }
        })}>
          +
        </ItemQuantityButtonInc>
      </ItemTile>
    )
  } else if (props.inModal) {
    <ItemTile>
      <ItemName>
        {props.name}
      </ItemName>
    </ItemTile>
  } else {
    const [ modalIsOpen, setModalIsOpen] = useState(false)
    return (
      <ItemTile onClick={() => setModalIsOpen(true)}>
        <ReactModal inModal={true}
          isOpen={modalIsOpen} 
          onRequestClose={() => setModalIsOpen(false)}
          // onAfterOpen={}
          contentLabel='select input'
          parentSelector={() => document.querySelector("#inputs")}
        >
            <h2>TITLE</h2>
        </ReactModal>
      </ItemTile>
    )
  } 
  // else {
  //   // console.log('this')
  //   return (
  //     <ItemTile onClick={() => props.dispatchResources({
  //       type: ACTIONS.ADD_RESOURCE,
  //       payload: {
  //         name: 'Bauxite',
  //         purity: 3,
  //         quantity: 2,
  //       }
  //     })}
  //     />
  //   )
  // }

}

export default Tile;

