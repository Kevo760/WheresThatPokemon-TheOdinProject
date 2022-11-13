import React from 'react'
import ImgContainer from './StyledComp/ImgContainer'
import puzzleImg from '../images/gameimg.png'
import GameImg from './StyledComp/GameImg'


function PuzzleBox() {
  return (
    <ImgContainer>
        <GameImg src={puzzleImg} alt='game image' />
    </ImgContainer>
  )
}

export default PuzzleBox