import React from 'react';
import lucario from '../images/lucario.png';
import scizor from '../images/scizor.png';
import zorua from '../images/zorua.png';
import { CharacterSelectionBox, SelectCharacter, CharacterBoxImg } from './StyledComp/CharacterSelection';

function CharacterSelectionModal(props) {
  const {xInput, yInput} = props

  return (
        <CharacterSelectionBox xInput={xInput} yInput={yInput}>

          <SelectCharacter >
            <b>Lucario</b>
            <CharacterBoxImg src={lucario} alt='lucario logo'/>
          </SelectCharacter>

          <SelectCharacter>
            <b>Scizor</b>
            <CharacterBoxImg src={scizor} alt='scizor logo' />
          </SelectCharacter>

          <SelectCharacter>
            <b>Zorua</b>
            <CharacterBoxImg src={zorua} alt='zorua logo' />
          </SelectCharacter>

        </CharacterSelectionBox>
  )
}

export default CharacterSelectionModal