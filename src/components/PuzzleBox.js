import React from 'react'
import ImgContainer from './StyledComp/ImgContainer'
import puzzleImg from '../images/gameimg.png'
import GameImg from './StyledComp/GameImg'
import { useState } from 'react'
import CharacterSelectionModal from './CharacterSelectionModal'


function PuzzleBox() {
  const [showSelection, setShowSelection] = useState(false)
  const [selectionPosition, setSelectPosition] = useState({x : 0, y: 0})

  const showSelectionToggle = () => {
    setShowSelection(prevState => !prevState)
  }

  const selectionHandler = (e) => {
    showSelectionToggle();
    const positionChange = {
      x: e.nativeEvent.offsetX,
      y: e.nativeEvent.offsetY
    }
    setSelectPosition(positionChange)
  }

  return (
    <ImgContainer>
        <GameImg src={puzzleImg} alt='game image' onClick={e => selectionHandler(e)} />
        { showSelection ?
          <CharacterSelectionModal  xInput={selectionPosition.x} yInput={selectionPosition.y} />
          :
          null
        }
    </ImgContainer>
  )
}

export default PuzzleBox