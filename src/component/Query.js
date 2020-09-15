import React, { Component } from "react";

class Query extends Component {
  state = {
    overclock: false,
    water: false,
    parts: {
      bauxite: 0,
      caterium: 0,
      coal: 0,
      copper_ore: 0,
      crude_oil: 0,
      iron_ore: 0,
      limestone: 0,
      raw_quartz: 0,
      sulfur: 0,
      uranium: 0
    },
    components: {
      circuit_board: 0,
      copper_sheet: 0,
      silica: 0
    },
    target: [
      circuit_board,
      copper_sheet,
      silica
    ]
    
  }

  render() {
    const {  } = this.state;
    
    return (
      <div className=''>
      </div>
    );

  }
}

export default Query;