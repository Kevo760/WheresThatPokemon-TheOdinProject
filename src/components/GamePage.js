import React, { useState } from 'react'
import Header from './StyledComp/Header'
import { HeaderBtn } from './StyledComp/Button'
import PuzzleBox from './PuzzleBox'
import AddScoreBox from './AddScoreBox'
import { CharaterLeftImg } from './StyledComp/Character'
import lucario from '../images/lucario.png'
import zorua from '../images/zorua.png'
import scizor from '../images/scizor.png'
import Loading from './Loading'

function GamePage() {
  const charactersInitalState = {
    lucario: false,
    scizor: false,
    zorua: false
  }

  const [foundCharacter, setFoundCharacter] = useState(charactersInitalState)
  const [addScore, setAddScore] = useState(false)
  const [loading, setLoading] = useState(false)

  // change find character true by name
  const foundCharacterHandler = (name) => {
    setFoundCharacter({
      ...foundCharacter, [name]: true
    })
  }
  // resets value for foundCharacters
  const resetFoundCharacters = () => {
    setFoundCharacter(charactersInitalState)
  }
  // shows addscore page
  const showAddScore = () => {
    setAddScore(true)
  }
  // hides the addscore page
  const hideAddScore = () => {
    setAddScore(false)
  }
  // set loading to true
  const showLoading = () => {
    setLoading(true)
  }
  // set loading to false
  const hideLoading = () => {
    setLoading(false)
  }

  // reset whole game
  const resetGamePage = () => {
    resetFoundCharacters()
    hideAddScore()
    hideLoading()
  }


  return (
    <div>
        <Header>
          <div>
            <CharaterLeftImg found={foundCharacter.zorua} src={zorua} alt='zorua'/>
            <CharaterLeftImg found={foundCharacter.lucario} src={lucario} alt='lucario'/>
            <CharaterLeftImg found={foundCharacter.scizor} src={scizor} alt='scizor'/>
          </div>
          <HeaderBtn>Home</HeaderBtn>
        </Header>

        {/* if loading is false and add score is true show AddScoreBox */}
        { !loading && addScore  ?
          <AddScoreBox />
          :
          null
        }
        {/* if loading is true show loading */}
        { loading ?
          <Loading />
          :
          null
        }
        {/* If loading is false and addScore is false show puzzlebox */}
        { !loading && !addScore ?
          <PuzzleBox />
          :
          null
        }
    </div>
  )
}

export default GamePage