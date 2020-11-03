import { inputMaterials } from '../data/'
import Tile from './Tile'

function PickerModal(props) {
  return (
    <>
      {inputMaterials.map(material => {
        return (
          <Tile>
            
          </Tile>
        )
      })}
    </>
  )
}