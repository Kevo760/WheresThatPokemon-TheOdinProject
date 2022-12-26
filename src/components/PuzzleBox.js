import React from 'react'
import ImgContainer from './StyledComp/ImgContainer'
import puzzleImg from '../images/gameimg.png'
import GameImg from './StyledComp/GameImg'
import { useState } from 'react'
import CharacterSelectionModal from './CharacterSelectionModal'
import { db } from '../lib/init-firebase'
import { doc, getDoc, serverTimestamp, updateDoc } from 'firebase/firestore';


function PuzzleBox(props) {
  const {foundCharacterHandler, getPokeData, showAddScore} = props

  const [showSelection, setShowSelection] = useState(false)
  const [selectionPosition, setSelectPosition] = useState({x : 0, y: 0})

  // reverse selection value
  const showSelectionToggle = () => {
    setShowSelection(prevState => !prevState)
  }
  // handles user click location
  const selectionHandler = (e) => {
    showSelectionToggle();
    const positionChange = {
      x: e.nativeEvent.offsetX,
      y: e.nativeEvent.offsetY
    }
    setSelectPosition(positionChange)
  }


  // check location of selected pokemon based on x and y input
  const checkLocation = async(pokemon, xInput, yInput) => {
    showSelectionToggle()
    const timeRef = doc(db, 'Time', 'endTime')
    const pokeRef = doc(db, 'Logs', pokemon)
    const data = (await getDoc(pokeRef)).data()
    // returns true or false if the x and y input value contains in x and y positon data
    const isXInputTrue = data.xPosition.some(value => value === xInput)
    const isYInputTrue = data.yPosition.some(value => value === yInput)

   // If isXInput and isYinput is true update character found via firebase to true else return 
    if(isXInputTrue && isYInputTrue) {
      await updateDoc(pokeRef, {
        found: true
      })
      // await for results from getPokeData
      const result = await getPokeData()
      // If result is true show add score
      if(result) {
        showAddScore()
        await updateDoc(timeRef, {
          time: serverTimestamp()
        })
      }
      // set foundCharacter style to true
      foundCharacterHandler(pokemon)
    } 
  }

  

  return (
    <ImgContainer>
        <GameImg src={puzzleImg} alt='game image' onClick={e => selectionHandler(e)} />
        { showSelection ?
          <CharacterSelectionModal  xInput={selectionPosition.x} yInput={selectionPosition.y} checkLocation={checkLocation} />
          :
          null
        }
    </ImgContainer>
  )
}

export default PuzzleBox