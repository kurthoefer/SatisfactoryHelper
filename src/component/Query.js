import React, { Component } from "react";
// import ReactModal from 'react-modal';
import _merge from 'lodash.merge';
import inputMaterials from '../../data/dataMap'

import InputParam from './InputParam';
// import MKSpeed from './MKSpeed';
import OutputParam from './OutputParam';

import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 2fr;
  grid-template-areas: 'input mks output';
  height: 40vw;
`

class Query extends Component {
  state = {
    nodes: {
      // each node type is represented initially by 0-0-0 as there are 0 pure, normal, and impure nodes chosen by the user
      // if the user is submitting 2 pure iron nodes and one normal iron node you would see: Desc_OreIron_C: '210'
      Desc_OreIron_C: '000',
      Desc_OreCopper_C: '000',
      Desc_Coal_C: '000',
      Desc_Water_C: '000',
      Desc_Sulfur_C: '000',
      Desc_OreGold_C: '000',
      Desc_RawQuartz_C: '000',
      Desc_Stone_C: '000',
      Desc_OreUranium_C: '000',
      Desc_OreBauxite_C: '000',
      Desc_LiquidOil_C: '000',
      // bauxite: {
      //   pure: 0,
      //   normal: 0,
      //   impure: 0
      // },
      // caterium: {
      //   pure: 0,
      //   normal: 0,
      //   impure: 0
      // },
      // coal: {
      //   pure: 0,
      //   normal: 0,
      //   impure: 0
      // },
      // copper_ore: {
      //   pure: 0,
      //   normal: 0,
      //   impure: 0
      // },
      // crude_oil: {
      //   pure: 0,
      //   normal: 0,
      //   impure: 0
      // },
      // iron_ore: {
      //   pure: 0,
      //   normal: 0,
      //   impure: 0
      // },
      // limestone: {
      //   pure: 0,
      //   normal: 0,
      //   impure: 0
      // },
      // raw_quartz: {
      //   pure: 0,
      //   normal: 0,
      //   impure: 0
      // },
      // sulfur: {
      //   pure: 0,
      //   normal: 0,
      //   impure: 0
      // },
      // uranium: {
      //   pure: 0,
      //   normal: 0,
      //   impure: 0
      // }
    },
    products: [
      'Desc_CircuitBoardHighSpeed_C',
      'Desc_IronPlateReinforced_C',
      'BP_EquipmentDescriptorBeacon_C',
      'Desc_ModularFrame_C',
      'Desc_Cable_C',
      'Desc_CircuitBoard_C',
      'Desc_Coal_C',
      'Desc_IronPlate_C',
      'Desc_SteelIngot_C',
      'Desc_Computer_C',
      'Desc_Cement_C',
      'Desc_CopperIngot_C',
      'Desc_Rotor_C',
      'Desc_CrystalOscillator_C',
      'Desc_Fuel_C',
      'Desc_AluminumScrap_C',
      'Desc_Water_C',
      'Desc_ElectromagneticControlRod_C',
      'Desc_SteelPlateReinforced_C',
      'Desc_CompactedCoal_C',
      'Desc_SpaceElevatorPart_2_C',
      'Desc_Wire_C',
      'Desc_Gunpowder_C',
      'Desc_AluminumPlateReinforced_C',
      'Desc_ModularFrameHeavy_C',
      'Desc_HeavyOilResidue_C',
      'Desc_PolymerResin_C',
      'Desc_HighSpeedConnector_C',
      'Desc_SpaceElevatorPart_3_C',
      'Desc_IronIngot_C',
      'Desc_Motor_C',
      'Desc_NobeliskExplosive_C',
      'Desc_NuclearFuelRod_C',
      'Desc_SpaceElevatorPart_1_C',
      'Desc_Plastic_C',
      'Desc_Fabric_C',
      'Desc_GoldIngot_C',
      'Desc_QuartzCrystal_C',
      'Desc_HighSpeedWire_C',
      'Desc_ModularFrameLightweight_C',
      'Desc_Rubber_C',
      'Desc_IronScrew_C',
      'Desc_Silica_C',
      'Desc_Stator_C',
      'Desc_CopperSheet_C',
      'Desc_IronRod_C',
      'Desc_LiquidTurboFuel_C',
      'Desc_MotorLightweight_C',
      'Desc_UraniumCell_C',
      'Desc_AluminaSolution_C',
      'Desc_AluminumPlate_C',
      'Desc_Battery_C',
      'Desc_Biofuel_C',
      'Desc_GenericBiomass_C',
      'Desc_ComputerSuper_C',
      'Desc_FluidCanister_C',
      'Desc_AluminumIngot_C',
      'Desc_LiquidBiofuel_C',
      'Desc_LiquidFuel_C',
      'Desc_PackagedBiofuel_C',
      'Desc_PackagedOil_C',
      'Desc_PackagedOilResidue_C',
      'Desc_TurboFuel_C',
      'Desc_PackagedWater_C',
      'Desc_PetroleumCoke_C',
      'Desc_CrystalShard_C',
      'Desc_SpaceElevatorPart_4_C',
      'Desc_SpaceElevatorPart_5_C',
      'Desc_SteelPlate_C',
      'Desc_SteelPipe_C',
      'Desc_SulfuricAcid_C',
      'Desc_LiquidOil_C',
      'Desc_UraniumPellet_C'
    ]
  }

  updateNodes = (id, quantity, purity) => {
    // parts(aka node): {
    //   pure: #   ---> how many
    //   normal: #
    //   impure: #

    //   type(name?): Desc_Coal...etch
    // }
    

    // what dis do?
    // set a named resource...
    // needs to recieve the name of the target as writen in data.json
  } 


  render() {
    return (
      <Container>
       <InputParam />
        {/* <MKSpeed /> */}
        {/* <OutputParam /> */}
      </Container>
    );
  }
}


// function Query() {
  
//   return (
//     <Container>
//       <InputParam />
//       {/* <MKSpeed /> */}
//       {/* <OutputParam /> */}
//     </Container>
//   );

// }

export default Query;


// state = {
  //   overclock: false,
  //   water: false,
  //   parts: {
  //     bauxite: 0,
  //     caterium: 0,
  //     coal: 0,
  //     copper_ore: 0,
  //     crude_oil: 0,
  //     iron_ore: 0,
  //     limestone: 0,
  //     raw_quartz: 0,
  //     sulfur: 0,
  //     uranium: 0
  //   },
  //   components: {
  //     circuit_board: 0,
  //     copper_sheet: 0,
  //     silica: 0
  //   },
  //   target: [
  //     circuit_board,
  //     copper_sheet,
  //     silica
  //   ],
  //   modalIsOpen: false,
  //   setModalIsOpen: false
  // }