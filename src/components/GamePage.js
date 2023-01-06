import React, { useContext, useEffect, useState } from 'react'
import Header from './StyledComp/Header'
import { HeaderBtn } from './StyledComp/Button'
import PuzzleBox from './PuzzleBox'
import AddScoreBox from './AddScoreBox'
import { CharaterLeftImg } from './StyledComp/Character'
import lucario from '../images/lucario.png'
import zorua from '../images/zorua.png'
import scizor from '../images/scizor.png'
import { db } from '../lib/init-firebase'
import { doc, updateDoc, serverTimestamp } from 'firebase/firestore';
import pageContext from './PageContext'

function GamePage() {
  const charactersInitalState = {
    lucario: false,
    scizor: false,
    zorua: false
  }

  const mainPageContext = useContext(pageContext)

  const [foundCharacter, setFoundCharacter] = useState(charactersInitalState)
  const [addScore, setAddScore] = useState(false)
  

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

  // reset whole game
  const resetGamePage = () => {
    resetFoundCharacters()
    hideAddScore()
  }

  // resets gamepage and set show main function
  const backToStartPage = () => {
    resetGamePage();
    mainPageContext.showMain()
  }

  
  // Resets found to false value on firestore
  const resetAllServerFoundCharacters = async() => {
    const lucarioRef = doc(db, 'Logs', 'lucario')
    const zoruaRef = doc(db, 'Logs', 'zorua')
    const scizorRef = doc(db, 'Logs', 'scizor')

    await updateDoc(lucarioRef, {
      found: false
    })
    await updateDoc(zoruaRef, {
      found: false
    })
    await updateDoc(scizorRef, {
      found: false
    })
  }

  useEffect(() => {
    // Updates startTime on server side when page loads
    const startTime = async() => {
      const timeRef = doc(db, 'Time', 'startTime');
        await updateDoc(timeRef, {
            time: serverTimestamp()
        })
    };

    resetAllServerFoundCharacters()
    startTime();
  }, [])


  return (
    <div>
        <Header>
          <div>
            <CharaterLeftImg found={foundCharacter.zorua} src={zorua} alt='zorua'/>
            <CharaterLeftImg found={foundCharacter.lucario} src={lucario} alt='lucario'/>
            <CharaterLeftImg found={foundCharacter.scizor} src={scizor} alt='scizor'/>
          </div>
          <HeaderBtn onClick={backToStartPage}>Home</HeaderBtn>
        </Header>
        {/* If loading is false and addScore is false show puzzlebox */}
        { !addScore ?
          <PuzzleBox 
            {...{foundCharacterHandler, resetFoundCharacters, showAddScore}}
          />
          :
          <AddScoreBox 
          {...{resetGamePage}}
          />
        }

    </div>
  )
}

export default GamePage