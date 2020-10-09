import React, { Component } from "react";
import ReactModal from 'react-modal';


class Query extends Component {
  state = {
    overclock: false,
    water: false,
    // parts: {
    //   bauxite: 0,
    //   caterium: 0,
    //   coal: 0,
    //   copper_ore: 0,
    //   crude_oil: 0,
    //   iron_ore: 0,
    //   limestone: 0,
    //   raw_quartz: 0,
    //   sulfur: 0,
    //   uranium: 0
    // },
    // components: {
    //   circuit_board: 0,
    //   copper_sheet: 0,
    //   silica: 0
    // },
    // target: [
    //   circuit_board,
    //   copper_sheet,
    //   silica
    // ],
    modalIsOpen: false,
    setModalIsOpen: false
  }

  render() {
    const { modalIsOpen, setModalIsOpen } = this.state;
    
    return (
      <div className='blank'>
        <button onClick={() => setModalIsOpen(true)}>
          Open
        </button>
        <ReactModal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
          <h2>TITLE</h2>
        </ReactModal>
      </div>
    );
  }
}

export default Query;