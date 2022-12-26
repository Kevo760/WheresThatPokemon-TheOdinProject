import React from 'react';
import lucario from '../images/lucario.png';
import scizor from '../images/scizor.png';
import zorua from '../images/zorua.png';
import { CharacterSelectionBox, SelectCharacter, CharacterBoxImg } from './StyledComp/CharacterSelection';

function CharacterSelectionModal(props) {
  const {xInput, yInput, checkLocation} = props

  return (
        <CharacterSelectionBox xInput={xInput + 'px'} yInput={yInput + 'px'}>

          <SelectCharacter onClick={e => checkLocation('lucario', xInput, yInput)} >
            <b>Lucario</b>
            <CharacterBoxImg src={lucario} alt='lucario logo'/>
          </SelectCharacter>

          <SelectCharacter onClick={e => checkLocation('scizor', xInput, yInput)}>
            <b>Scizor</b>
            <CharacterBoxImg src={scizor} alt='scizor logo' />
          </SelectCharacter>

          <SelectCharacter onClick={e => checkLocation('zorua', xInput, yInput)}>
            <b>Zorua</b>
            <CharacterBoxImg src={zorua} alt='zorua logo' />
          </SelectCharacter>

        </CharacterSelectionBox>
  )
}

export default CharacterSelectionModal