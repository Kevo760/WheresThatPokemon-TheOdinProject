import React from 'react'
import ImgContainer from './StyledComp/ImgContainer'
import puzzleImg from '../images/gameimg.png'
import GameImg from './StyledComp/GameImg'
import { useState } from 'react'
import CharacterSelectionModal from './CharacterSelectionModal'
import { db } from '../lib/init-firebase'
import { doc, getDoc, serverTimestamp, updateDoc, collection, getDocs } from 'firebase/firestore';
import { FoundMessage, WrongMessage } from './MessageModal'


function PuzzleBox(props) {
  const {foundCharacterHandler, showAddScore} = props

  const [showSelection, setShowSelection] = useState(false)
  const [selectionPosition, setSelectPosition] = useState({x : 0, y: 0})
  const [displayFound, setDisplayFound] = useState(false)
  const [displayWrong, setDisplayWrong] = useState(false)

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
    console.log(positionChange)
    setSelectPosition(positionChange)
  }

  /// get pokemon data sync method from the firestore
  const getPokeData = async () => {
    let allData = []
    // get data from firebase
    const docRef = collection(db, 'Logs')
    const data = (await getDocs(docRef))
    // grab multiple data and push it to allData variable
    data.forEach((doc) => {
      allData.push(doc.data())
    })
    
    // returns if all pokemon are found via firestore data
    return allData.every(poke => poke.found === true)
  }


  //// check location of selected pokemon based on x and y input
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
      // shows found character message
      toggleFoundMessage()
      // await for results from getPokeData
      const result = await getPokeData()
      // If result is true show add score
      if(result) {
        await updateDoc(timeRef, {
          time: serverTimestamp()
        });
        showAddScore();
      }
      // set foundCharacter style to true
      foundCharacterHandler(pokemon)
    } else {
      // toggle wrong message
      toggleWrongMessage()
    }
  }

  ///// Toggles true for Found Message then after 1 seconds toggles to false
  const toggleFoundMessage = () => {
    setDisplayFound(true)
    setTimeout(() => {
      setDisplayFound(false)
    }, 1000)
  }
  
  ///// Toggles true for Wrong Message then after 1 seconds toggles to false
  const toggleWrongMessage = () => {
    setDisplayWrong(true)
    setTimeout(() => {
      setDisplayWrong(false)
    }, 1000)
  }
  

  

  return (
    <ImgContainer>
        <GameImg src={puzzleImg} alt='game image' onClick={e => selectionHandler(e)} />
        { showSelection ?
          <CharacterSelectionModal  xInput={selectionPosition.x} yInput={selectionPosition.y} checkLocation={checkLocation} />
          :
          null
        }
        { displayFound ? 
          <FoundMessage />
          :
          null
        }
        { displayWrong ?
          <WrongMessage />
          :
          null
        }
    </ImgContainer>
  )
}

export default PuzzleBox