import React, { useState } from "react";
import ReactModal from 'react-modal';


function OutputParam() {
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

export default OutputParam;

