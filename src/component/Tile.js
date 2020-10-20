import React, { useState } from "react";
import ReactModal from 'react-modal';

import styled from 'styled-components';

const purity = (props) => {
  if (props.purity === 'pure') return 'purple';
  if (props.purity === 'normal') return 'yellow';
  return 'grey';
}

const ItemTile = styled.div`
  margin: 5px;
  border-style: solid;
  border-radius: 10px;
  border-width: 2px;
  border-color: ${(props) => (props.purity ? props.purity : 'grey')};
  background-image: url(${(props) => (props.ingredientImg ? props.ingredientImg : '/assets/misc/plus.png')});
  background-position: center;
  background-size: cover;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  grid-template-areas:
    '. . itemName . .'
    '. . itemPurity . .'
    '. . . . .'
    '. . . . .'
    'decQuant . itemQuant . incQuant';
  /* grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  grid-template-areas:
    '. . itemName . .'
    '. . itemPurity . .'
    '. . . . .'
    '. . . . .'
    'decQuant . itemQuant . incQuant'; */
`

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


function Tile(props) {
  const [ modalIsOpen, setModalIsOpen] = useState(false)

  return (
    <ItemTile>
      <ItemName>
        Name
      </ItemName>
      <ItemPurity>
        Puritypurity
      </ItemPurity>
      <ItemQuantity>
        2
      </ItemQuantity>
      <ItemQuantityButtonDec>-</ItemQuantityButtonDec>
      <ItemQuantityButtonInc>+</ItemQuantityButtonInc>
      {/* <ReactModal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
          <h2>TITLE</h2>
      </ReactModal> */}
    </ItemTile>
  )

  if (props.ingredient) {
    return (
      <ItemTile>
        {/* <ReactModal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
            <h2>TITLE</h2>
        </ReactModal> */}
      </ItemTile>
    )
  } else {
    return (
      <ItemTile className={'addTile_Tile'} onClick={() => setModalIsOpen(true)}>
        <ReactModal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
            <h2>TITLE</h2>
        </ReactModal>
      </ItemTile>
    )
  }

}

export default Tile;

